
var count = 0;
chrome.browserAction.onClicked.addListener(function (){
       
// api url
const api_url =
	"https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=PHP,USD";
  

// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = "1";
    var data = await response.json();

var notify = new Notification('Price:', {
    body: "₱ " + data["plant-vs-undead-token"]["php"],
    icon: 'cloverEye.png',
    
});
notify.onclick = function(event) {
    event.preventDefault(); // prevent the browser from focusing the Notification's tab
    // window.open('https://www.coingecko.com/en/coins/plant-vs-undead-token', '_blank');
    count += 1;
    if (count == 69) {
        alert("Noice: " + 69);
    }
    else {
    alert("Times you have clicked the notification: " + count);
    }
  }

}

getapi(api_url);


        
      });


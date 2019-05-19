
let x = {    
    "test": "test"
}
let startButton = document.getElementById('start')


startButton.addEventListener("click", function(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.response)
        }
      };
    xhttp.open("POST", "/start", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(x));
});

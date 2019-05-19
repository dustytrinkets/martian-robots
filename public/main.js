let startButton = document.getElementById('start');
let input = document.getElementById('input');
let output = document.getElementById('output');


// let inputSample = `5 3
// 1 1 E
// RFRFRFRF
// 3 2 N
// FRRFLLFFRRFLL
// 0 3 W
// LLFFFLFLFL`;
// let inputSample=
// {
//     "value": "5 3\n1 1 E\nRFRFRFRF\n3 2 N \nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL"
// }

input.value = '5 3\n1 1 E\nRFRFRFRF\n3 2 N \nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL';



startButton.addEventListener("click", function(){
    let inputObj = {
        value: input.value
    }
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = xhttp.responseText;
          output.value = response;
        }
      };
    xhttp.open("POST", "/start", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(inputObj));
});
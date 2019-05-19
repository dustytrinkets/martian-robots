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

let inputSample = {value: '5 3\n1 1 E\nRFRFRFRF\n3 2 N \nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'}

input.value = inputSample.value;


startButton.addEventListener("click", function(){
    // let game = newGame(input.value);
    // console.log(game)
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.response)
          let response = xhttp.responseText;
          output.value = response;
        }
      };
    xhttp.open("POST", "/start", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(inputSample));
});





//  function newGame(input){
//     let gridString = input.substr(0,3);
//     let instructions = input.split('\n');
//     let nRobots= (instructions.length -1)/2;
   
//     let game = {
//         grid: {
//             x: parseInt(gridString[0]),
//             y: parseInt(gridString[2])
//         },
//         robots: []
//     };

//     for (let robotIdx = 1; robotIdx <= nRobots; robotIdx++) {
//         let instructionR = instructions[robotIdx*2];
//         let positionR = instructions[(robotIdx*2)-1];
//         game.robots.push()
//         let robot = new Robot(robotIdx, positionR, instructionR);
//     }
//     return game;
//  }


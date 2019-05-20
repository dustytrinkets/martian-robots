let startButton = document.getElementById('start');
let input = document.getElementById('input');
let output = document.getElementById('output');
let gridDiv = document.getElementById("grid");

input.value = '5 3\n1 1 E\nRFRFRFRF\n3 2 N \nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL';



startButton.addEventListener("click", function(){
    let inputObj = {
        value: input.value
    }
    makeHttpRequest(inputObj)
});

function makeHttpRequest(inputObj){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(xhttp.responseText);
          output.value = response.result;
          buildGrid(response.grid);
          insertRobotsInGrid(response.robots);
        }
      };
    xhttp.open("POST", "/start", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(inputObj));
}

function buildGrid(grid) {
    for (let row = 0; row <= grid.rows; row++) {
      let rowDiv = document.createElement("div");
      rowDiv.className = "row";
      rowDiv.style.width = 80*grid.columns+80 + 'px';
      
      for (let column = 0; column <= grid.columns; column++) {
        let columnDiv = document.createElement("div");
        columnDiv.id = `${column}_${row}`;
        columnDiv.className = "column";
        
        rowDiv.appendChild(columnDiv);
      }
      gridDiv.appendChild(rowDiv);
    }
  }

  function insertRobotsInGrid(robots){
    for (let i = 0; i < robots.length; i++) {
        let grid = document.getElementById(`${robots[i].position.x}_${robots[i].position.y}`)
        if (grid){
            grid.style.backgroundColor = "rgba(0,0,0,0.5)"
            grid.innerHTML= `Robot ${robots[i].index}`;
        }
    }
  }
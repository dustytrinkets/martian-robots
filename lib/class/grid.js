class Grid {
    constructor(columns, rows) {
        this.columns = parseInt(columns);
        this.rows = parseInt(rows);
        this.scents = [];
        this.checkMax(columns, rows)
    }

    checkMax(columns, rows){
        if(columns > 50){
            this.columns = 50
        }
        if(rows > 50){
            this.rows = 50
        }
        return;
    }
  }
  
  module.exports = Grid;
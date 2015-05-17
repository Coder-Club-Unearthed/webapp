function clickableGrid( rows, cols, callback, pid ) {
  var i=0;
  var grid = document.createElement('table');
  grid.className = 'zonegrid';
  for (var r=0;r<rows;++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0;c<cols;++c){
      var cell = tr.appendChild(document.createElement('td'));
      cell.className = "cell"
      cell.id = r.toString().concat("_", c.toString(), pid)
      cell.innerHTML = ++i;
      cell.addEventListener('click',(function(el,r,c,i){
        return function(){ callback(el,r,c,i); }
       })(cell,r,c,i),false);
    }
  }
  return grid;
}

function makeGrid(id) {
    var lastClicked;
    var grid = clickableGrid(13,7,function(el,row,col,i){
        console.log("You clicked on element:",el);
        console.log("You clicked on row:",row);
        console.log("You clicked on col:",col);
        console.log("You clicked on item #:",i);

        el.className='clicked';
        if (lastClicked) lastClicked.className='';
        lastClicked = el;
    },id);
    document.getElementById(id).appendChild(grid);
    return grid;
}


function colorSet(value) {
    var col = "#0f0";
    if (value > 0.8) {
        col = "#0f0";
    } else if (value > 0.6) {
        col = "#0b0";
    } else if (value > 0.4) {
        col = "#262";
    } else if (value > 0.2) {
        col = "#800";
    } else {
        col = "#f00";
    }
    return col
}


function setZoneColor(age) {
    // gridlevel is 'top' or 'mid' or 'bot'
    // age is 'new' or 'sixmonth' or 'oneyear'
    // cellid is r_c
    $("#top td").each(function () {
        var value = zonedata["top"][age][this.id];
        var colorvalue = colorSet(value);
        this.style.backgroundColor = colorvalue;
    });
    $("#mid td").each(function () {
        var value = zonedata["mid"][age][this.id];
        var colorvalue = colorSet(value);
        this.style.backgroundColor = colorvalue;
    });
    $("#bot td").each(function () {
        var value = zonedata["bot"][age][this.id];
        var colorvalue = colorSet(value);
        this.style.backgroundColor = colorvalue;
    });
}


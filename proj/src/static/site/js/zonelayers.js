function clickableGrid( rows, cols, callback, pid ) {
  var i=0;
  var grid = document.createElement('table');
  grid.className = 'zonegrid';
  for (var r=0;r<rows;++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0;c<cols;++c){
      var cell = tr.appendChild(document.createElement('td'));
      cell.className = "cell"
      cell.id = r.toString().concat("_", c.toString())
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


function randage() {
    var data = ["1 month", "2 months", "6 months", "8 months", "12 months"];
    return data[Math.floor(Math.random() * data.length)];
}

function randquantity() {
    var data = ["100 tons", "200 tons", "300 tons", "400 tons"];
    return data[Math.floor(Math.random() * data.length)];
}

function randdumps() {
    return Math.floor(Math.random() * 20 + 5);
}

function randcollects() {
    return Math.floor(Math.random() * 10 + 1);
}

function setZoneColor(age) {
    // gridlevel is 'top' or 'mid' or 'bot'
    // age is 'new' or 'sixmonth' or 'oneyear'
    // cellid is r_c
    console.log("called");
    console.log(zonedata);
    console.log(age);
    $("#top td").each(function () {
        console.log(this.id)
        var value = zonedata["top"][age][this.id];
        var colorvalue = colorSet(value);
        this.style.backgroundColor = colorvalue;
        $(this).hover(function(){
            var pval =  (value*100).toFixed(0).toString();
            $("#zone-quality").text(pval.concat("%"));
            $("#zone-age").text(randage());
            $("#zone-quantity").text(randquantity());
            $("#zone-number-of-dumps").text(randdumps());
            $("#zone-number-of-collections").text(randcollects());
        });
    });
    $("#mid td").each(function () {
        var value = zonedata["mid"][age][this.id];
        var colorvalue = colorSet(value);
        this.style.backgroundColor = colorvalue;
        $(this).hover(function(){
            var pval =  (value*100).toFixed(0).toString();
            $("#zone-quality").text(pval.concat("%"));
            $("#zone-age").text(randage());
            $("#zone-quantity").text(randquantity());
            $("#zone-number-of-dumps").text(randdumps());
            $("#zone-number-of-collections").text(randcollects());
        });
    });
    $("#bot td").each(function () {
        var value = zonedata["bot"][age][this.id];
        var colorvalue = colorSet(value);
        this.style.backgroundColor = colorvalue;
        $(this).hover(function(){
            var pval =  (value*100).toFixed(0).toString();
            $("#zone-quality").text(pval.concat("%"));
            $("#zone-age").text(randage());
            $("#zone-quantity").text(randquantity());
            $("#zone-number-of-dumps").text(randdumps());
            $("#zone-number-of-collections").text(randcollects());
        });
    });
}


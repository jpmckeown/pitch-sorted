/////////////////////////////////////////
// from Classic Games book
var mouseX = 0;
var mouseY = 0;

function getMousePos(evt) {
	var rect = gameCanvas.getBoundingClientRect();
	var root = document.documentElement;
  // account for margins, canvas position on page, scroll amount, etc.
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}
////////////////////////////////////////

// from APC5 Htgd - lacks root.scroll...?
// not used
function setMousePosFromEvent(evt) {
  var rect = drawingCanvas.getBoundingClientRect();
  var fixScaleX = (uiCanvas.width + gameCanvas.width) / gameCanvas.width;
  mouse.x = Math.round(fixScaleX * (evt.clientX - rect.left) / drawScaleX );
  mouse.y = Math.round( (evt.clientY - rect.top) / drawScaleY);
  // mousex = Math.round(fixScaleX * (evt.clientX - rect.left) / drawScaleX );
  // mousey = Math.round( (evt.clientY - rect.top) / drawScaleY);
  // report("setMouseByEvt: " + mousex + "," + mousey, 4);
}

// for file output, not needed if downloader() is OK
// create.addEventListener('click', function () {
//   var link = document.getElementById('downloadlink');
//   link.href = makeTextFile(levelData);
//   link.style.display = 'block';
// }, false);


// downloader() supersedes functions below

// function writeToFile(data) {
//   let fso = CreateObject("Scripting.FileSystemObject");
//   let s   = fso.CreateTextFile("filename.txt", True);
//   s.writeline(data);
//   s.Close();
// }

// var textFile = null,
//   makeTextFile = function(text) {
//     var data = new Blob([text], {type: 'text/plain'});

//     // If replacing a previously generated file we must
//     // manually revoke object URL to avoid memory leaks.
//     if (textFile !== null) {
//       window.URL.revokeObjectURL(textFile);
//     }
//     textFile = window.URL.createObjectURL(data);

//     return textFile;
//   };

// nonwrapping Hat
if (SHOULD_WRAP) {
} else {
  if(nextX < 0 + HAT_MARGIN) {
    nextX = HAT_MARGIN;
  }
  if(nextX > gameCanvas.width - HAT_MARGIN) {
    nextX = gameCanvas.width - HAT_MARGIN;
  }
}

// Levels bottom rows for polarization metaphor
// 1
//  10, 10, 10, 10, 10, 10, 10, 11, 12, 10, 10, 10, 10, 10, 10, 10,
// 2
//  10, 10, 10, 10, 10, 10, 11, 13, 13, 12, 10, 10, 10, 10, 10, 10,
// 3
//  10, 10, 10, 10, 10, 11, 13, 13, 13, 13, 12, 10, 10, 10, 10, 10,
// 4
//  10, 10, 10, 10, 11, 13, 13, 13, 13, 13, 13, 12, 10, 10, 10, 10,
// 5
//  10, 10, 10, 11, 13, 13, 13, 13, 13, 13, 13, 13, 12, 10, 10, 10,
// 6
//  10, 10, 11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 10, 10,
// 7
//  10, 11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 10,
// 8
//  11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12,

// car movement

if(this.gotoX == null) {

  this.speed *= GROUNDSPEED_DECAY_MULT;

  if(this.keyHeld_right) {
    // this.speed += drivePower;
  }

  if(this.keyHeld_left) {
    // this.speed -= reversePower;
    if(TOUCH_TEST) {
      let msg = "keyHeld_left changing speed " + this.speed;
      report(msg, 4);
    }
  }

  nextX += Math.cos(this.ang) * this.speed;
  this.y += Math.sin(this.ang) * this.speed;
}
else { // gotoX has been set, Touch or Demo/Test
} // end of Hat gotoX and automated movement

// last bit of player.move()
    // if(this.x != this.previousX) {
    //   this.x = this.columnCentred(this.x);
    // }
    // tileHandling(this);

// prev used grid to place hat initially
var hatFound = false;
for(var eachRow=0;eachRow<TILE_ROWS;eachRow++) {
  for(var eachCol=0;eachCol<TILE_COLS;eachCol++) {
    var arrayIndex = colRowToIndex(eachCol, eachRow);

    // seek starting position tile
    if(agentGrid[arrayIndex] == HAT_START) {
      this.x = eachCol * TILE_W + TILE_W/2;
      this.y = eachRow * TILE_H + TILE_H/2;
      hatFound = true;
      agentGrid[arrayIndex] = NOT_OCCUPIED;
      return;
    }
  }
} // loop rows until Start found
if(!hatFound) {
  console.log("Start location not found for player", this.id);
}

    // else if (this.direction == 0) {
    //   // don't move
    //   console.log("Hat not commanded to move");
    // }
    if ( !this.button_left && !this.button_right )
    console.log("Hat not commanded to move");
  }
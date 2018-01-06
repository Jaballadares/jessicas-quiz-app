// var context = document.getElementById('canvas').getContext('2d');
var colorPurple = '#cb3594';
var colorGreen = '#659b41';
var colorYellow = '#ffcf33';
var colorBrown = '#986928';
var colorArray = ['#cb3594', '#659b41', '#ffcf33', '#986928', '#000', '#ccc'];

var curColor = colorPurple;
var colorSwatches = document.querySelectorAll('.colorSwatch');
for (var i = 0; i < colorArray.length; i++) {
  colorSwatches[i].style.backgroundColor = colorArray[i];
  var newItem = document.createElement('div');
  newItem.setAttribute('class', 'boom' + i);
  console.log(newItem);
}
var clickColor = [];
var canvasWidth = 600;
var canvasHeight = 400;

var canvasDiv = document.getElementById('canvasDiv');
var canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);

if (typeof G_vmlCanvasManager != 'undefined') {
  canvas = G_vmlCanvasManager.initElement(canvas);
}

context = canvas.getContext('2d');

canvas.addEventListener('mousedown', function(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

canvas.addEventListener('mousemove', function(e) {
  if (paint) {
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

canvas.addEventListener('mouseup', function(e) {
  paint = false;
});

canvas.addEventListener('mouseleave', function(e) {
  paint = false;
});

var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;

function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function redraw() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  // context.strokeStyle = '#DF4B26';
  context.lineJoin = 'round';
  context.lineWidth = 5;

  for (var i = 0; i < clickX.length; i++) {
    context.beginPath();
    if (clickDrag[i] && i) {
      context.moveTo(clickX[i - 1], clickY[i - 1]);
    } else {
      context.moveTo(clickX[i] - 1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.strokeStyle = clickColor[i];
    context.stroke();
  }
}

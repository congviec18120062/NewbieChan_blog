const pacman = document.getElementById('pacman');
const man = document.getElementById('man');

const body = document.querySelector('body');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

const line = document.getElementById('line');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const arr = [0, 0];
const coor = [0, 0, 0, 0, 0, 0, 0, 0];

function handleMouseMove(event) {
  var dot, eventDoc, doc, body, pageX, pageY;

  event = event || window.event; // IE-ism

  // If pageX/Y aren't available and clientX/Y are,
  // calculate pageX/Y - logic taken from jQuery.
  // (This is to support old IE)
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX =
      event.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
    event.pageY =
      event.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);
  }

  let mouse = {
    x: event.pageX - 25,
    y: event.pageY - 25
  };
  pacman.style.top = mouse.y + document.body.scrollTop + 'px';
  pacman.style.left = mouse.x + 'px';
  arr[0] = mouse.y;
  arr[1] = mouse.x;
}

let timer;

window.onmousemove = function init(event) {
  pacman.style.position = 'absolute';
  timer = setTimeout(function() {
    handleMouseMove(event);
  }, 1);
};

var first = 0;

body.addEventListener('scroll', function inti(event) {
  pacman.style.top = arr[0] + document.body.scrollTop + 'px';
  pacman.style.left = arr[1] + 'px';
});

// Generation position for color
function getRandomInt() {
  let min = 0;
  let max = 500;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random;

random = getRandomInt();
color1.style.top = random + 'px';
coor[0] = random + 15;
random = getRandomInt();
color1.style.left = random + 'px';
coor[1] = random + 15;
random = getRandomInt();
color2.style.top = random + 'px';
coor[2] = random + 15;
random = getRandomInt();
color2.style.left = random + 'px';
coor[3] = random + 15;
random = getRandomInt();
color3.style.top = random + 'px';
coor[4] = random + 15;
random = getRandomInt();
color3.style.left = random + 'px';
coor[5] = random + 15;
random = getRandomInt();
color4.style.top = random + 'px';
coor[6] = random + 15;
random = getRandomInt();
color4.style.left = random + 'px';
coor[7] = random + 15;

line1.setAttribute('y1', coor[0] + 'px');
line1.setAttribute('x1', coor[1] + 'px');
line1.setAttribute('y2', coor[2] + 'px');
line1.setAttribute('x2', coor[3] + 'px');

line2.setAttribute('y1', coor[2] + 'px');
line2.setAttribute('x1', coor[3] + 'px');
line2.setAttribute('y2', coor[4] + 'px');
line2.setAttribute('x2', coor[5] + 'px');

line3.setAttribute('y1', coor[4] + 'px');
line3.setAttribute('x1', coor[5] + 'px');
line3.setAttribute('y2', coor[6] + 'px');
line3.setAttribute('x2', coor[7] + 'px');

color1.onmouseover = function() {
  man.style.backgroundColor = '#e83890';
  random = getRandomInt();
  while (random + 'px' == color1.style.top) {
    random = getRandomInt();
  }
  color1.style.top = random + 'px';
  line1.setAttribute('y1', random + 15 + 'px');

  random = getRandomInt();
  while (random + 'px' == color1.style.left) {
    random = getRandomInt();
  }
  color1.style.left = random + 'px';
  line1.setAttribute('x1', random + 15 + 'px');
};

color2.onmouseover = function() {
  man.style.backgroundColor = '#e4572e';
  random = getRandomInt();
  while (random + 'px' == color2.style.top) {
    random = getRandomInt();
  }
  color2.style.top = random + 'px';
  line1.setAttribute('y2', random + 15 + 'px');
  line2.setAttribute('y1', random + 15 + 'px');

  random = getRandomInt();
  while (random + 'px' == color2.style.left) {
    random = getRandomInt();
  }
  color2.style.left = random + 'px';
  line1.setAttribute('x2', random + 15 + 'px');
  line2.setAttribute('x1', random + 15 + 'px');
};

color3.onmouseover = function() {
  man.style.backgroundColor = '#7678ed';
  random = getRandomInt();
  while (random + 'px' == color3.style.top) {
    random = getRandomInt();
  }
  color3.style.top = random + 'px';
  line2.setAttribute('y2', random + 15 + 'px');
  line3.setAttribute('y1', random + 15 + 'px');

  random = getRandomInt();
  while (random + 'px' == color3.style.left) {
    random = getRandomInt();
  }
  color3.style.left = random + 'px';
  line2.setAttribute('x2', random + 15 + 'px');
  line3.setAttribute('x1', random + 15 + 'px');
};

color4.onmouseover = function() {
  man.style.backgroundColor = '#f3b001';
  random = getRandomInt();
  while (random + 'px' == color4.style.top) {
    random = getRandomInt();
  }
  color4.style.top = random + 'px';
  line3.setAttribute('y2', random + 15 + 'px');

  random = getRandomInt();
  while (random + 'px' == color4.style.left) {
    random = getRandomInt();
  }
  color4.style.left = random + 'px';
  line3.setAttribute('x2', random + 15 + 'px');
};

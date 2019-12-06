const pacman = document.getElementById('pacman');
const man = document.getElementById('man');

const body = document.querySelector('body');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

const arr = [0, 0];

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
  return Math.floor(Math.random() * (max - min + 1)) + min + 'px';
}
var random;

random = getRandomInt();
color1.style.top = random;
random = getRandomInt();
color1.style.left = random;
random = getRandomInt();
color2.style.top = random;
random = getRandomInt();
color2.style.left = random;
random = getRandomInt();
color3.style.top = random;
random = getRandomInt();
color3.style.left = random;
random = getRandomInt();
color4.style.top = random;
random = getRandomInt();
color4.style.left = random;

color1.onmouseover = function() {
  man.style.backgroundColor = '#e83890';
  random = getRandomInt();
  while (random == color1.style.top) {
    random = getRandomInt();
  }
  color1.style.top = random;
  random = getRandomInt();
  while (random == color1.style.left) {
    random = getRandomInt();
  }
  color1.style.left = random;
};

color2.onmouseover = function() {
  man.style.backgroundColor = '#e4572e';
  random = getRandomInt();
  while (random == color2.style.top) {
    random = getRandomInt();
  }
  color2.style.top = random;
  random = getRandomInt();
  while (random == color2.style.left) {
    random = getRandomInt();
  }
  color2.style.left = random;
};

color3.onmouseover = function() {
  man.style.backgroundColor = '#7678ed';
  random = getRandomInt();
  while (random == color3.style.top) {
    random = getRandomInt();
  }
  color3.style.top = random;
  random = getRandomInt();
  while (random == color3.style.left) {
    random = getRandomInt();
  }
  color3.style.left = random;
};

color4.onmouseover = function() {
  man.style.backgroundColor = '#f3b001';
  random = getRandomInt();
  while (random == color4.style.top) {
    random = getRandomInt();
  }
  color4.style.top = random;
  random = getRandomInt();
  while (random == color4.style.left) {
    random = getRandomInt();
  }
  color4.style.left = random;
};

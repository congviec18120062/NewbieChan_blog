const pacman = document.getElementById('pacman');

// let mouseX = function(event) {
//   return event.clientX;
//   //return event.screenX;
// };

// let mouseY = function(event) {
//   return event.clientY;
//   //return event.screenY;
// };

// let width = Math.max(
//   document.documentElement.clientWidth,
//   window.innerWidth || 0
// );
// let height = Math.max(
//   document.documentElement.clientHeight,
//   window.innerHeight || 0
// );

// let positionElement = function(event) {
//   let mouse = {
//     x: mouseX(event) - 25,
//     y: mouseY(event) - 25
//   };
//   pacman.style.top = mouse.y + document.body.scrollTop + 'px';
//   pacman.style.left = mouse.x + 'px';
// };

const body = document.querySelector('body');

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
// window.onmousemove = function init(event) {
//   timer = setTimeout(function() {
//     positionElement(event);
//   }, 1);
// };

// window.onscroll = function init(event) {
//   timer = setTimeout(function() {
//     positionElement(event);
//   }, 1);
// };

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

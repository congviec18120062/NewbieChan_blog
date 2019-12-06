const html = document.getElementsByClassName('language-html');
const css = document.getElementsByClassName('language-css');
const js = document.getElementsByClassName('language-html');

if (html.length > 0) {
  for (let i = 0; i < html.length; i++) {
    html[i].classList.add('html');
  }
}

if (css.length > 0) {
  for (let i = 0; i < css.length; i++) {
    css[i].classList.add('css');
  }
}

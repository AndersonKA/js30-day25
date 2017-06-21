const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); //this makes it so when you click on a div in the middle it doesn't bubble up
}

divs.forEach(div => div
  .addEventListener('click', logText, { capture: false, once: true }));


button.addEventListener('click', () => {
  console.log('clicked!');
}, {
  once: true
});

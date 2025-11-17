// main selected
let main = document.querySelector('main');
let btn = document.querySelector('button');

function paper() {
  // div created
  let div = document.createElement("div");

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  div.style.height = '100px';
  div.style.width = '100px';
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // position box
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let rotate = Math.floor(Math.random() * 361);

  div.style.position = 'absolute';
  div.style.top = x + '%';
  div.style.left = y + '%';
  div.style.rotate = rotate + 'deg';

  main.appendChild(div);
}

btn.addEventListener('click', () => {
  paper();
});

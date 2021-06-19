const IMAGE = [
  'https://cdn.pixabay.com/photo/2021/06/01/06/24/old-town-6300696_1280.jpg',
  'https://cdn.pixabay.com/photo/2021/06/11/14/01/sea-6328687_1280.jpg',
  'https://cdn.pixabay.com/photo/2021/06/13/07/33/mountain-pass-6332476_1280.jpg',
];

const body = document.querySelector('body');
const IMG_NUMBER = 3;

// 서버에서 이미지 받아올 때 필요한 코드
// function handleImgLoad(){
//     console.log("Finisehd Loading");
// }

function paintImage(imgNumber) {
  const image = document.createElement('img');
  // image.src = require(`./assets/image/photo${imgNumber}.jpg`);
  image.src = IMAGE[imgNumber-1];
  image.classList.add('bgImage');
  body.appendChild(image);
  // image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

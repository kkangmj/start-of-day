const body = document.querySelector('body');
const IMG_NUMBER = 3;

// 서버에서 이미지 받아올 때 필요한 코드
// function handleImgLoad(){
//     console.log("Finisehd Loading");
// }

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `D://DevProjects/Vanilla JS_Momentum/src/assets/image/photo${imgNumber}.jpg`;
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

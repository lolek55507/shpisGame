window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let canvasWidth = 1000;
let canvasHeight = 600;
let playerHeight = 200;
let playerWidth = 200;
const playerImage = new Image();
playerImage.src = 'assets/10 Aircrafts Game Asset-01.png'; 
let playerPositionX = 300;
let playerPositionY = 300;


    function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(playerImage, playerPositionX, playerPositionY, playerWidth, playerHeight);
  requestAnimationFrame(animate);
    }
  animate();


})



  

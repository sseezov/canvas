const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src='./assets/shadow_dog.png';

function animate (){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.fillRect(50,50,100,100);
    requestAnimationFrame(animate);
    context.drawImage(playerImage,0,0);
};

animate();
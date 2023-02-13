var gameOverSound=document.getElementById("gameOverSound");
var music=document.getElementById("music");

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    music.addEventListener("ended", function(){ music.currentTime = 0; music.play(); }, false);
    music.play();
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetLeft + mario.width;
    const marioJump = +window.getComputedStyle(mario).bottom.replace('px','');
  
    if(pipePosition <= marioPosition && marioJump < 80 && pipePosition > 0){
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = '${marioPosition}px';

      mario.src = './images/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';
      music.pause();
      gameOverSound.play();
      clearInterval(loop);

    }
  } ,10);

document.addEventListener('keydown', jump);


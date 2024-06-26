import { player1Position, player2Position, players } from './player.js';

const playerSize = 50;
const gameWidth = 800;
const gravity = 0.5; // Сила гравитации
const jumpStrength = 10; // Сила прыжка

const keys = {
    a: false,
    d: false,
    w: false,
    ф: false,
    ц: false,
    в: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false
};

document.addEventListener('keydown', (event) => {
    if (event.key in keys) {
        keys[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key in keys) {
        keys[event.key] = false;
    }
});

export function updatePositions() {
    // Обновляем позицию игрока 1
    if (keys.a || keys.ф) {
        players.player1.className = 'player player1-move-left';
        player1Position.left = Math.max(0, player1Position.left - 5);
    }
    if (keys.d || keys.в) {
        players.player1.className = 'player player1-move-right';
        player1Position.left = Math.min(gameWidth - playerSize, player1Position.left + 5);
    }

    if ((keys.w || keys.ц) && !player1Position.isJumping) {
        players.player1.className = 'player player1-move-up';
        player1Position.velocityY = -jumpStrength;
        player1Position.isJumping = true;
    }

    if(!keys.a && !keys.ф && !keys.d && !keys.в && !keys.w && !keys.ц && !player1Position.isJumping){
        players.player1.className = 'player player1-StandUp';
    }

    // Обновляем позицию игрока 2
    if (keys.ArrowLeft) {
        players.player2.className = 'player player1-move-left';
        player2Position.left = Math.max(0, player2Position.left - 5);
    }
    if (keys.ArrowRight) {
        players.player2.className = 'player player1-move-right';
        player2Position.left = Math.min(gameWidth - playerSize, player2Position.left + 5);
    }
    if (keys.ArrowUp && !player2Position.isJumping) {
        players.player2.className = 'player player1-move-up';
        player2Position.velocityY = -jumpStrength;
        player2Position.isJumping = true;
    }
    
    if(!keys.ArrowLeft && !keys.ArrowRight && !keys.ArrowUp && !player2Position.isJumping){
        players.player2.className = 'player player2-StandUp';
    }

    // Применяем гравитацию и обновляем вертикальное положение игрока 1
    player1Position.velocityY += gravity;
    player1Position.top += player1Position.velocityY;

    // Применяем гравитацию и обновляем вертикальное положение игрока 2
    player2Position.velocityY += gravity;
    player2Position.top += player2Position.velocityY;

    // Проверяем, касаются ли игроки земли
    if (player1Position.top >= 500) {
        player1Position.top = 500;
        player1Position.velocityY = 0;
        player1Position.isJumping = false;
    }
    if (player2Position.top >= 500) {
        player2Position.top = 500;
        player2Position.velocityY = 0;
        player2Position.isJumping = false;
    }

    // Устанавливаем стили для обновления позиций игроков
    players.player1.style.left = player1Position.left + 'px';
    players.player1.style.top = player1Position.top + 'px';
    players.player2.style.left = player2Position.left + 'px';
    players.player2.style.top = player2Position.top + 'px';
}

export function gameLoop() {
    updatePositions();
    requestAnimationFrame(gameLoop);
}

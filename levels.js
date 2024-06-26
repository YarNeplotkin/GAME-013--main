import { updatePositions, gameLoop } from './movement.js';
import { player1Position, player2Position } from './player.js';

const menu = document.getElementById('menu');
const gameArea = document.getElementById('gameArea');

export function startGame(level) {
    // Устанавливаем начальные позиции в зависимости от уровня
    switch (level) {
        case 1:
            player1Position.left = 100;
            player1Position.top = 500;
            player1Position.velocityY = 0;
            player1Position.isJumping = false;

            player2Position.left = 600;
            player2Position.top = 500;
            player2Position.velocityY = 0;
            player2Position.isJumping = false;
            gameArea.className = 'level-1';
            break;
        case 2:
            player1Position.left = 200;
            player1Position.top = 500;
            player1Position.velocityY = 0;
            player1Position.isJumping = false;

            player2Position.left = 500;
            player2Position.top = 500;
            player2Position.velocityY = 0;
            player2Position.isJumping = false;
            gameArea.className = 'level-2';
            break;
        case 3:
            player1Position.left = 300;
            player1Position.top = 500;
            player1Position.velocityY = 0;
            player1Position.isJumping = false;

            player2Position.left = 400;
            player2Position.top = 500;
            player2Position.velocityY = 0;
            player2Position.isJumping = false;
            gameArea.className = 'level-3';
            break;
    }

    // Скрываем меню и показываем игровую область
    menu.style.display = 'none';
    gameArea.style.display = 'block';

    // Запускаем игровой цикл
    gameLoop();
}

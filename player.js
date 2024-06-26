// Получаем ссылки на элементы игроков
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

// Экспортируем начальные координаты для игроков
export let player1Position = { left: 100, top: 500, velocityY: 0, isJumping: false };
export let player2Position = { left: 600, top: 500, velocityY: 0, isJumping: false };

// Экспортируем ссылки на элементы игроков для их обновления в движении
export const players = { player1, player2 };

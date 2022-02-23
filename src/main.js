'use strict';

/*
 * (c)
 */

import Game from './Game/Game';
import {GAME_WIDTH, GAME_HEIGHT} from './Game/Constants';

let gameScreen = document.getElementById('gameScreen');
let ctx = gameScreen.getContext('2d');

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
    let delta = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let bgimg = document.getElementById('imgBgLevel');
    ctx.drawImage(bgimg, 0, 0, gameScreen.width, gameScreen.height);

    game.update(delta);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

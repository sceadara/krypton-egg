'use strict';

/*
 * (c)
 */

import Ball from './Objects/Ball';
import InputHandler from './InputHandler';
import Paddle from './Objects/Paddle';
import {buildLevel, level_01, level_02} from './Levels/Levels';
import {GAMESTATE} from './Constants';

/**
 * The game itself.
 *
 * @constructor
 */
class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);


        this.gameObjects = [];
        this.bricks = [];
        this.lives = 4;
        this.score = 0;

        this.levels = [level_01, level_02];
        this.currentLevel = 0;

        new InputHandler(this.paddle, this);
    }

    start() {
        if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) {
            return;
        }

        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();

        this.gameObjects = [
            this.ball,
            this.paddle,
        ];

        this.gamestate = GAMESTATE.RUNNING;
    }

    togglePause() {
        if(this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        }
        else {
            this.gamestate = GAMESTATE.PAUSED;
        }

    }

    update(delta) {
        if (this.lives === 0) {
            this.gamestate = GAMESTATE.GAMEOVER;
        }

        // What way is the better? this or
        if (this.gamestate === GAMESTATE.PAUSED
            || this.gamestate === GAMESTATE.MENU
            || this.gamestate === GAMESTATE.GAMEOVER) {
            return;
        }

        if (this.bricks.length === 0) {
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.currentLevel++;
            this.start();
        }

        // that?
        if (this.gamestate === GAMESTATE.RUNNING) {
            [...this.gameObjects, ...this.bricks].forEach(obj => obj.update(delta));

            this.bricks = this.bricks.filter(brick => !brick.markedToDestroyed);
        }
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach(obj => obj.draw(ctx));

        // Background
        if(this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(57, 27, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgba(0, 0, 0, .5)';
            ctx.fill();
        }
        if(this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(57, 27, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fill();
        }

        // Text
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, .5)';
        ctx.font = '30px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.textAlign = 'center';

        if(this.gamestate === GAMESTATE.PAUSED) {
            ctx.fillText('PAUSED', 57 + this.gameWidth / 2, 27 + this.gameHeight / 2);
        }

        if(this.gamestate === GAMESTATE.MENU) {
            ctx.fillText('Press SPACEBAR to start', 57 + this.gameWidth / 2, 27 + this.gameHeight / 2);
        }

        if(this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.fillText('GAME OVER', 57 + this.gameWidth / 2, 27 + this.gameHeight / 2);
        }

        // "HUD"
        ctx.textAlign = 'left';
        ctx.fillText('SCORE 0000' + this.score, 10, 23);
        ctx.fillText('LIVE: ' + this.lives, this.gameWidth / 2, 23);
        ctx.fillText('HI-SCORE 10000'/* + this.hiscore*/, this.gameWidth - 140, 23);
    }
}

export default Game;
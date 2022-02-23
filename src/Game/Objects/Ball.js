'use strict';

/*
 * (c)
 */

import {collisionDetection} from '../CollisionDetection';

/**
 * A ball object.
 *
 * @constructor
 */
class Ball {
    constructor(game) {
        this.image = document.getElementById('imgBall');

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.size = 16;

        this.reset();
    }

    reset() {
        this.speed = {x: 6, y: 2};
        this.position = {x: this.game.paddle.position.x + this.game.paddle.width / 2, y: this.game.paddle.position.y + this.size };
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;


        // Collision wall left or right
        if(this.position.x + this.size > this.gameWidth + 57 || this.position.x < 57) {
            this.speed.x *= -1;
        }

        // Collision wall top
        if(this.position.y < 27) {
            this.speed.y *= -1;
        }

        // Collision wall bottom
        if (this.position.y + this.size - 10 > this.gameHeight) {
            this.reset();
            this.game.lives--;
        }

        if(collisionDetection(this, this.game.paddle)) {
            if (this.position.x < this.game.paddle.position.x + this.game.paddle.width / 4) {
                this.speed.x--;
            }
            if (this.position.x > this.game.paddle.position.x + this.game.paddle.width - this.game.paddle.width / 4) {
                this.speed.x++;
            }
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
}

export default Ball;
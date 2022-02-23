'use strict';

/*
 * (c)
 */

import {detectCollision} from '../CollisionDetection';

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

        this.size = 24;

        this.reset();
    }

    reset() {
        this.speed = {x: 5, y: 2};
        this.position = {x: 60, y: 200};
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // Collision wall left or right
        if(this.position.x + this.size > this.gameWidth + 57 || this.position.x < 57) {
            this.speed.x = -this.speed.x;
        }

        // Collision wall top
        if(this.position.y < 27) {
            this.speed.y = -this.speed.y;
        }

        // Collision wall bottom
        if (this.position.y + this.size - 10 > this.gameHeight) {
            this.reset();
            this.game.lives--;
        }

        if(detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
}

export default Ball;
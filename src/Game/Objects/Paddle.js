'use strict';

/*
 * (c)
 */

/**
 * A paddle object.
 *
 * @constructor
 */
class Paddle {
    constructor(game) {
        this.image = document.getElementById('imgPaddle');

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = 100;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            x: 57 + game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10,
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    update() {
        this.position.x += this.speed;

        if (this.position.x < 57) {
            this.position.x = 57;
        }

        if (this.position.x + this.width > this.gameWidth + 57) {
            this.position.x = this.gameWidth - this.width + 57;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}
export default Paddle;
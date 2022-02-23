'use strict';

/*
 * (c)
 */

import {collisionDetection} from '../CollisionDetection';

/**
 * A brick object.
 *
 * @constructor
 */
class Brick {
    constructor(game, position, solid) {
        this.image = document.getElementById('imgBrick');
        this.imageSolid = document.getElementById('imgBrickSolid');

        this.game = game;

        this.position = position;
        this.width = 36;
        this.height = 22;
        this.isSolid = solid;

        this.markedToDestroyed = false;
    }

    update() {
        if(collisionDetection(this.game.ball, this)) {
            // if ball keep moving in current X direction, will it collide with the brick?
            if (this.game.ball.position.x + this.game.ball.size + this.game.ball.speed.x > this.position.x &&
                this.game.ball.position.x + this.game.ball.speed.x < this.position.x + this.width &&
                this.game.ball.position.y + this.game.ball.size > this.position.y &&
                this.game.ball.position.y < this.position.y + this.height) {
                this.game.ball.speed.x *= -1;
            }

            // if ball keep moving in current Y direction, will it collide with the brick?
            if (this.game.ball.position.x + this.game.ball.size > this.position.x &&
                this.game.ball.position.x < this.position.x + this.width &&
                this.game.ball.position.y + this.game.ball.size + this.game.ball.speed.y > this.position.y &&
                this.game.ball.position.y + this.game.ball.speed.y < this.position.y + this.height) {
                this.game.ball.speed.y *= -1;
            }

            this.game.ball.position.x += this.game.ball.speed.x;
            this.game.ball.position.y += this.game.ball.speed.y;

            if(!this.isSolid) {
                this.markedToDestroyed = true;
                this.game.score += 3;
            }
        }
    }

    draw(ctx) {
        let image = this.image;
        if (this.isSolid) {
            image = this.imageSolid;
        }
        ctx.drawImage(image, this.position.x, this.position.y, this.width, this.height);
    }

}

export default Brick;
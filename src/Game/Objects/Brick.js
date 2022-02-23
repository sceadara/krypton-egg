'use strict';

/*
 * (c)
 */

import {detectCollision} from '../CollisionDetection';

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
        if(detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = - this.game.ball.speed.y;

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
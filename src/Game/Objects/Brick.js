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
    constructor(game, position) {
        this.image = document.getElementById('imgBrick');

        this.game = game;

        this.position = position;
        this.width = 69;
        this.height = 30;

        this.markedToDestroyed = false;
    }

    update() {
        if(detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = - this.game.ball.speed.y;

            this.markedToDestroyed = true;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}

export default Brick;
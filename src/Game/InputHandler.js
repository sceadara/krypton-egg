'use strict';

/*
 * (c)
 */

/**
 * An input handler.
 *
 * @constructor
 */
class InputHandler {
    constructor(paddle, game) {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowLeft':
                case 'KeyA':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    paddle.moveRight();
                    break;
                case 'ArrowUp':
                case 'KeyW':
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    break;
                case 'Space':
                    game.start();
                    break;
                case 'Enter':
                    break;
                case 'Escape':
                    game.togglePause();
                    break;
            }
        });
        document.addEventListener('keyup', (event) => {
            switch (event.code) {
                case 'ArrowLeft':
                case 'KeyA':
                    if (paddle.speed < 0) {
                        paddle.stop();
                    }
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    if (paddle.speed > 0) {
                        paddle.stop();
                    }
                    break;
                case 'ArrowUp':
                case 'KeyW':
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    break;
                case 'Space':
                    break;
                case 'Enter':
                    break;
                case 'Escape':
                    break;
            }
        });
    }
}

export default InputHandler;
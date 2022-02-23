'use strict';

/*
 * (c)
 */

/**
 * Detects collision with ball and an gameObject.
 *
 * @param ball
 * @param gameObject
 *
 * @returns {boolean}
 */
export function detectCollision(ball, gameObject) {
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.size;

    let topOfObject = gameObject.position.y;
    let rightOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftOfObject = gameObject.position.x;

    return bottomOfBall >= topOfObject
        && topOfBall <= bottomOfObject
        && ball.position.x >= leftOfObject
        && ball.position.x + ball.size <= rightOfObject;
}
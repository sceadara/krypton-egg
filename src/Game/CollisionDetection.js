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
const collisionDetection = (ball, gameObject) => {
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.size;

    let topOfObject = gameObject.position.y;
    let rightOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftOfObject = gameObject.position.x;

    return bottomOfBall >= topOfObject
        && topOfBall <= bottomOfObject
        && ball.position.x + ball.size >= leftOfObject
        && ball.position.x <= rightOfObject;
};

export {collisionDetection};
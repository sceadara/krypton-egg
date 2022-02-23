'use strict';

/*
 * (c)
 */

import Brick from '../Objects/Brick';

/**
 * Generate the level.
 *
 * @param game
 * @param level
 *
 * @returns {*[]}
 */
export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
       row.forEach((brick, brickIndex) => {
          if(brick === 1) {
              let position = {
                  x: 69 * brickIndex + 57,
                  y: 75 + 30 * rowIndex,
              };

              bricks.push(new Brick(game, position));
          }
       });
    });

    return bricks;
}

/**
 * Level 01.
 *
 * @type {number[][]}
 */
export const level_01 = [
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

/**
 * Level 02.
 *
 * @type {number[][]}
 */
export const level_02 = [
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
];
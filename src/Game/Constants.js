'use strict';

/*
 * (c)
 */

/**
 * The game width.
 *
 * @type {number}
 *
 * @constant
 * @default
 */
export const GAME_WIDTH = 686;

/**
 * The game height.
 *
 * @type {number}
 *
 * @constant
 * @default
 */
export const GAME_HEIGHT = 577;

/**
 * The game states.
 *
 * @type {{PAUSED: number, RUNNING: number, GAMEOVER: number, NEWLEVEL: number, MENU: number}}
 *
 * @constant
 * @default
 */
export const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};
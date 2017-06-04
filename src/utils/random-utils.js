/**
 * RandomUtils
 */

export class RandomUtils {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
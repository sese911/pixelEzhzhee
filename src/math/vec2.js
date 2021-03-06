
export default class Vec2 {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    mulByNum(number) {
        this.x *= number;
        this.y *= number;
        return this;
    }
    static mulByNum(vec, number) {
        return new Vec2(vec.x * number, vec.y * number);   
    }

    trunc() {
        this.x = ~~this.x;
        this.y = ~~this.y;
        return this;
    }
}
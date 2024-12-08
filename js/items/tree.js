class Tree {
    constructor(center, size, heightCoef = 0.3) {
        this.center = center;
        this.size = size;
        this.heightCoef = heightCoef;
    }

    draw(ctx, viewPoint) {
        this.center.draw(ctx, {size: this.size, color: "green"})
    }
}
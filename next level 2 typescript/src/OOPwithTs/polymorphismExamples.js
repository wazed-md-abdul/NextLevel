class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const getArea = (shape) => {
    return shape.getArea();
};
const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(getArea(circle));
console.log(getArea(rectangle));
export {};

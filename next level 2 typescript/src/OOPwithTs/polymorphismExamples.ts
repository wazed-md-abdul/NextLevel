class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
   private radius: number
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
const getArea = (shape: Shape): number => {
  return shape.getArea();
};
const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(getArea(circle));
console.log(getArea(rectangle));

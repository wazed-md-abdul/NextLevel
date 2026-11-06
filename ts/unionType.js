function calculateArea(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    if ("height" in shape && "width" in shape) {
        return shape.height * shape.width;
    }
    if ("length" in shape) {
        return shape.length ** 2;
    }
}
export {};

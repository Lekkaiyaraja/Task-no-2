class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const circle = new Circle(1.0);
console.log("Radius:", circle.getRadius());
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());

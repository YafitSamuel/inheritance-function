class Car {
  year;
  company;
  star;
  static upCounter = 0;
  constructor(yearFromOut, companyFromOut, starFromOut) {
    this.year = yearFromOut;
    this.company = companyFromOut;
    this.starFromOut = starFromOut;
    Car.upCounter++;
  }
  static newCar(ob1, ob2) {
    return ob1.year > ob2.year ? ob1 : ob2;
  }
  static bigStar(ob1, ob2) {
    return ob1.star < ob2.star ? ob1 : ob2;
  }
}
console.log(Car.upCounter);
let firstCar = new Car(1996, "toyota", 10);
let secondCar = new Car(2001, "volvo", 90);

console.log(Car.newCar(firstCar, secondCar));
console.log(Car.bigStar(firstCar, secondCar));
console.log(Car.upCounter);

// inheritance;

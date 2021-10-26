// Create a vehicle department with company fields and year of manufacture.
// Create a static function that accepts 2 objects and returns the newest vehicle.
// Add capability to a class that counts how many cars have been created, check out the blog counter.
// Add a field of several stars, the field is a regular number.
// Create a static function that accepts 2 objects and returns the company with the larger number of stars.

// Create a class of cat with fields of name, age and color.
// Create classes of lion, tiger and cougar that inherit from cat class.
// Add in a lion a field of suitable weight and builder.
// Add a voice playback function in the cat class, the function returns "My name is
// {name}, meow" in English.
// Add in the cat class a function that returns all the fields in complex text.
// In the lion class, add a function that prints all the data of the lion.

// class Cat {
//   name;
//   age;
//   color;
//   constructor(nameFromOut, ageFromOut, colorFromOut) {
//     this.name = nameFromOut;
//     this.age = ageFromOut;
//     this.colorFromOut = colorFromOut;
//   }
//   sound() {
//     return `my name ${this.name} miyaoo`;
//   }

//   stringClass() {
//     return `${this.name} ${this.age} ${this.color}`;
//   }
// }

// class Lion extends Cat {
//   weight;
//   constructor(nameFromOut, ageFromOut, colorFromOut, weightFromOut) {
//     super(nameFromOut, ageFromOut, colorFromOut);
//     this.weight = weightFromOut;
//   }

//   allData() {
//     return `${super.stringClass()} ${this.weight}`;
//   }
// }

// let lion = new Lion("bob", 21, "brown", 100);
// console.log(lion);
// console.log(lion.Super());

// class Pome extends Cat {
//   constructor(nameFromOut, ageFromOut, colorFromOut) {
//     Super(nameFromOut, ageFromOut, colorFromOut);
//   }
// }

// class Leopard extends Cat {
//   constructor(nameFromOut, ageFromOut, colorFromOut) {
//     Super(nameFromOut, ageFromOut, colorFromOut);
//   }
// }

// ================================1=======================================

// 1. Create a class with 3 fields and one static function, 2 text fields and one number
//  field, the function is a function
// random is adjusted according to the data that the class receives in
// the constructor. Dodge: If the number is 1000 then the number to be repeated will be
//  between 0 and 999.

// class User {
//   fname;
//   lname;
//   age;
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }
//   static printNumRandom(num) {
//     return Math.floor(Math.random() * num);
//   }
// }

// let User1 = new User("yafit", "samuel", 24);
// console.log(User.printNumRandom(User1.age));
// console.log(User1);

// ================================2=======================================

// 2. Write a program that receives from the user name, password, email and username data.
//  The program creates a user instance.
// // It then compares two objects,
// // To determine whether the first contains property
// values ​​equivalent to the second. We will create one
// of the objects manually in the code (hardcoded).

// // class User {
// //   fname;
// //   password;
// //   email;
// //   constructor(fname, password, email) {
// //     this.fname = fname;
// //     this.password = password;
// //     this.email = email;
// //   }
// // }

// // let User1 = new User("yafit", "samuel", "yafit642@gmail.com");

// // btn.onclick=()=>{
// //     let User2= new User(fname.value,password.value,email.value)
// //     console.log(User2);
// // }
// // console.log(User1);

// ================================3=======================================

// Create a locality class with fields of resident tax and name. 3
//  Build a function that returns the details in one text.
//  Then create a department of state, city and village, the departments inherit
//  from the locality department.
//  Add to each class a function that calls the function from the parent class and returns the
//  text with the locality type.
//  Create a static function in a locality class that receives a number
//  of objects and returns the object with the largest number of residents.
//  Create a form that receives data from the user and according to the form creates the appropriate
//   object and adds it to the table below the form.

// class City {
//   name;
//   numPeople;
//   constructor(name, numPeople) {
//     this.name = name;
//     this.numPeople = numPeople;
//   }
//   oneText() {
//     return this.name + this.numPeople.toString();
//   }
//   static NumOfpeople(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].numPeople > max) {
//         max = array[i].numPeople;
//       }
//     }
//     return max;
//   }
// }

// btn.onclick = () => {
//   div1.innerHTML += `<table>
//   <tr><td>Wheels;${numWheels.value}</td></tr>
//   <tr><td>color:${color.value}</td></tr>
//   <tr><td>Engine:${Engine.value}</td></tr>
//   </table>`;
// };

// let city1 = new City("rehovot", 10000);

// let city2 = new City("rehovot", 8000);

// let city3 = new City("rehovot", 5777);

// console.log(city1.oneText());
// console.log(City.NumOfpeople([city1, city2, city3]));

// class Cantry extends City {
//   type;
//   constructor(name, numPeople, type) {
//     super(name, numPeople);
//     this.type = type;
//   }
//   printStringAll() {
//     return super.oneText() + this.type.toString();
//   }
// }

// let Cantry1 = new Cantry("rehovot", 10000, "cantry");
// console.log(Cantry1.printStringAll());

// class City2 extends City {
//   type;
//   constructor(name, numPeople) {
//     Super(name, numPeople);
//     this.type = type;
//   }
// }

// class Vilege extends City {
//   type;
//   constructor(name, numPepole) {
//     Super(name, numPepole);
//     this.type = type;
//   }
// }

// ========================================================================

// concluding exercise

// class Car {
//   numWheels;
//   color;
//   Engine;
//   constructor(numWheels, color, Engine) {
//     this.Engine = Engine;
//     this.color = color;
//     this.numWheels = numWheels;
//   }
//   oneText() {
//     return this.Engine + this.color + this.numWheels.toString();
//   }

//   static bigEngine(numOfObject) {}
//   static bigEngine(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].Engine > max) {
//         max = array[i].Engine;
//       }
//     }
//     return max;
//   }
// }

// button.onclick = () => {
//   div.innerHTML += `<table>
//   <tr><td>Wheels;${numWheels.value}</td></tr>
//   <tr><td>color:${color.value}</td></tr>
//   <tr><td>Engine:${Engine.value}</td></tr>
//   </table>`;
// };

// let car = new Car(4, "red", 900);
// console.log(car.oneText());

// class Toyota extends Car {
//   constructor(numWheels, color, Engine) {
//     super(numWheels, color, Engine);
//   }
//   printStringAll() {
//     return super.oneText();
//   }
// }

// let redToyota = new Toyota(4, "blue", 1200);
// console.log(redToyota.printStringAll());

// class Volvo extends Car {
//   constructor(numWheels, color, Engine) {
//     super(numWheels, color, Engine);
//   }
//   printStringAll() {
//     return super.oneText();
//   }
// }

// let volvo1 = new Volvo(4, "green", 1000);
// console.log(volvo1.printStringAll());

// class Jeep extends Car {
//   constructor(numWheels, color, Engine) {
//     super(numWheels, color, Engine);
//   }
//   printStringAll() {
//     return super.oneText();
//   }
//   get printInUpperCase() {
//     return printStringAll().toUpperCase();
//   }
// }

// let oneJeep = new Jeep(4, "black", 2000);
// console.log(oneJeep.printStringAll().toUpperCase());

// ======================================================================================================

// in class important

class Car {
  NumberOfWheels;
  samak;
  color;
  constructor(NumberOfWheels, samak, color) {
    this.NumberOfWheels = NumberOfWheels;
    this.samak = samak;
    this.color = color;
  }
  getDetails() {
    return `Number Of Wheels : ${this.NumberOfWheels} ,
    engine size : ${this.samak} ,
    color of the car : ${this.color}`;
  }
  static getBiggerSamak(carsArray) {
    let biggestSamak = carsArray[0];
    for (const carItem of carsArray) {
      if (carItem.samak > biggestSamak.samak) biggestSamak = carItem;

      // carsArray.forEach((carItem) =>{
      //   if (carItem.samak > biggestSamak.samak) biggestSamak = carItem;
      // });
    }
    return biggestSamak;
  }
}
class Truck extends Car {
  trackName;
  constructor(_NumberOfWheels, _samak, _color, _trackName) {
    super(_NumberOfWheels, _samak, _color);
    this.trackName = _trackName;
  }
  getDetails() {
    return `${super.getDetails()} , ${this.trackName}`;
  }
}

class Honda extends Car {
  hondaName;
  constructor(_NumberOfWheels, _samak, _color, hondaName) {
    super(_NumberOfWheels, _samak, _color);
    this.hondaName = hondaName;
  }
  getDetails() {
    return `${super.getDetails()} , ${this.hondaName}`;
  }
}

class Bus extends Car {
  busName;
  constructor(_NumberOfWheels, _samak, _color, _busName) {
    super(_NumberOfWheels, _samak, _color);
    this.busName = _bussName;
  }
  getDetails() {
    return `${super.getDetails()} , ${this.busName}`;
  }
  getBusNameUpperCase() {
    return this.busName.toUpperCase();
  }
  get nameUpperCase() {
    return this.getBusNameUpperCase();
  }
}

saveCar.onclick = () => {
  switch (carTypeId.value.toLowerCase()) {
    case "bus":
      console.log(
        new Bus(numOfWeelsId.value, colorId.value, samakId.value, "bus")
      );
      return new Bus(numOfWeelsId.value, colorId.value, samakId.value, "bus");

    case "truck":
      console.log(
        new Truck(numOfWeelsId.value, colorId.value, samakId.value, "truck")
      );
      return new Truck(
        numOfWeelsId.value,
        colorId.value,
        samakId.value,
        "truck"
      );
    case "honda":
      console.log(
        new Honda(numOfWeelsId.value, colorId.value, samakId.value, "honda")
      );
      return new Honda(
        numOfWeelsId.value,
        colorId.value,
        samakId.value,
        "honda"
      );
    default:
      alert("no such car");
  }
};

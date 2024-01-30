// class Point {}

// class Point {
//   x: number;
//   y: number;
// }
 
// const pt = new Point();
// pt.x = 0;
// pt.y = 0;

// const pt = new Point();
// pt.x = "0";

// class User2 {
//   readonly name: string = 'Artem'
//   protected surname: string         // visible in the class and chields

//   constructor(surname:string, private id: number) {
//     this.surname = surname
//     this.id = id
//   }

//   public greet() {
//     console.log("hi!");
//   }
//   getId() { 
//     return this.id
//   }
// }

// let myUser = new User2('test', 1)

// console.log(myUser.name)

// myUser.surname

//abstractions 

// abstract class Base {
//   abstract getName(): string;
 
//   printName() {
//     console.log("Hello, " + this.getName());
//   }
// }
 
// Cannot create an instance of an abstract class.
// const b = new Base();

// class Derived extends Base {
//   getName() {
//     return "world";
//   }
// }
 
// const d = new Derived();
// d.printName();
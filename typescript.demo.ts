let helloWorld = "Hello World";

// helloWorld = 100

let user = {
  name: "Hayes",
  id: 0,
};

// // string, number, boolean, any
let a: number = 100;
// a = 'test'
// console.log(a)
const b: string = 'test'
let isTest: boolean = true

// let test: any
// isTest = 'test'
// console.log(isTest)
const c:string = a + b
const g = 1 + + '5'
console.log(c)


function test(a: string, b: boolean):string {
  return a + b
}

test('5', true)


const skills = ["Dev", "Tester", "PM"] 
// skills.push(true)
const skills2: (string | number)[] = [43242, "Dev",5435, "Tester", "PM", 234] 

let name2: string | number

function test5 (param1: string | number): void {
  
  name2 = param1
}

console.log(test5("test"))


// tuples
const newSkills: [number, string, boolean, boolean] = [100, 'test', true, true]


// enum 
enum statusCode {
  SUCCESS = 1,
  IN_PROGRESS = 2,
  FAILED = 3
}

let myCode: statusCode = statusCode.SUCCESS

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// const myDirection = {
//   value: Direction
// }


// union 

// const x: number | string = 42

// function test1(a: number | boolean) {
//   return true
// }

// // literal types and type alias
// // TypeScript allows types to be defined separately from the variables that use them.
// // Aliases and Interfaces allows types to be easily shared between different variables/objects.

let myVal: 'test1' | 'test2'|"test3"

myVal = 'test1'

function test2(code: '200' | '300' | 400) {
  return code
}

type httpMethod = 'post' | 'get' | 'put'

function myRequest (requestType: httpMethod):void {
  console.log(requestType)
}

myRequest('post')


// intersection

type User = {
  id: number,
  name: string
}

type Student = {
  class: string
}

type UniversityStudent = User & Student

let user100: User & Student = {
  id: 100,
  name: 'Artem',
  class: 'test'
}

// const myUser: UniversityStudent = {
//   id: 100,
//   name: 'Artem',
//   class: 'test'
// }

// const myUser: UniversityStudent = {
//   id: 1,
//   name: 'Artem',
//   class: 'Hillel'
// }


// interfaces 
interface User1 {
  id: number
  name: string
  log: (id: string) => string
}

interface Role {
  skill: string
}

interface UserWithRole extends User1, Role {
  sayHi: (name: string) => void
}

let SuperUser: UserWithRole = {
  id: 100,
  name: 'test',
  log: (id) => {
    return id
  },
  sayHi: (name: string) => {
    console.log('Hello ' + name)
  },
  skill: 'programming'
}

// // type - з примітивами interfaces - з обʼєктами


// // optional

interface Test {
  id: number
  pass?: boolean
}

let myTest: Test = {
  id: 100
}
function multiply (a: number, b?: number):number {
  if(b) {
    return a * b
  } else {
    return a
  }
}

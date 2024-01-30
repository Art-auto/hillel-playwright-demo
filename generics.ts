// built in 

const num: Array<number> = [1,2,45,6]

async function test6546(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    resolve('test')
  })
}

// custom 

function dynamicType<T>(data: T): T {
  console.log(data)
  return data
}

let x: string


// x = dynamicType(1000)

//classes 

class Resp<D, E>{
  data: D
  error: E

  constructor(data: D, error: E) {
    this.data = data
    this.error = error
  }
}

const resp = new Resp<number, string>(200, 'no error')

const resp2 = new Resp<boolean, number>(true, 200)

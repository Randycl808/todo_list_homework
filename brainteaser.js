let people = [
  { id: 1, name: "toby", age: 18 },
  { id: 2, name: "jon", age: 22 },
];



// write a function that takes a array of objects [{id,number, name:string, age:number}]
// and returns an new array of strings ['name is age', 'name is age']
// (use the actual name and age from object)

// [{id:number, name:string, age:number}]
const about = (peeps) => {
  return peeps.map((param) => {
    if (param.age >= 21) {
      return `${param.name} is over 21`;
    } 
    return `${param.name} is not over 21`;
  });
};

// let peepStrings = about(people);
// console.log("peepStrings:", peepStrings);

// write a function that takes an array of objects [{name:string, age:number}]
// and takes a single object and returns a new array of with the object added
const addPeep = (peeps, peep) => {
    return [...peeps, peep]
};

const newPeople = addPeep(people,{id:3, name:'new', age:32})
console.log('newPeople:', newPeople) //


// write a function that takes an array of objects [{id:number, name:string, age:number}]
// and an id and adds one to the age of that persons and returns a new array
const updatePeeps = (peeps, id) => {
  let updatePeepsYo = peeps.map((p)=>{
      if(p.id === id){
          return {...p, age: p.age +1}
      }
      return p
  })

  return updatePeepsYo
};
const isToby19 = updatePeeps(people,1)
console.log('isToby19', isToby19)

// write a function that takes an array of objects [{name:string, age:number}]
// and an id and remove that person from array
const deletePeep = (things, id) => {
   return things.filter(thing=>{
        return thing.id !== id
    })
    
};

const f1 = deletePeep(people)
const f2 = deletePeep([{id:1},{id:2},{id:3}], 2)
const f3 = deletePeep([{ids:1},{ids:2},{ids:3}], 2)
console.log('f1',f1)
console.log('f2',f2)
console.log('f3',f3)
// const foo =(x,y,z)=>{
//     console.log(x)
//     y.push(z)
//     return {x:x, y:y}
// }

// // let x = foo('a', 1) //breaks
// let y = foo('a',[1],'taco') //works
// console.log('y:', y)

// console.log(x) // what is x going to be? 1


// map => returns a new array (always same length)
// filter => returns a new array (same length or less)
// reduce => returns any type, you decide

let arr = [1,2,3,4,5,6]

function keep(thing){
    return thing > 3
}

let x = arr.map(keep)
console.log(x)
console.log(arr)
// 

const origBookList =[
  {id:1, title:'HTML & CSS', read: false},
  {id:2, title:'JavaScript & Jquery', read: true}

]

//add a new entry to our booklist w/o changing original array


const newBook = {id:3, title:'Ruby', read:false}


const newBooks = [newBook, ...origBookList]

// console.log('OG books', origBookList)
// console.log('New books together',newBooks) //both together

//Update 
//mutates original
// origBookList[1].read = !origBookList[1].read
let updatedBooks = origBookList.map((title)=>{
  if(title.id === 2){
    return {...title, read: !title.read}
  }
  return title
})
console.log('OG',origBookList)
console.log('Changed',updatedBooks)




//FUNCTION--------------------------------

// const updateIfID2 = (turkey)=>{
//   console.log(turkey)
//   console.log('turkey.title', turkey.title)
//   if (turkey.id ===2){
//     return {...turkey, title: !turkey.title}
//   }
//   return turkey
// }

// let x = updateIfID2 ({id3, title:false, x:234})
// let y = updateIfID2 ({id3, title:false, x:234})
// console.log(x)
// console.log(y)


// const filteredBooks = origBookList.filter(updateIfID2)
// console.log(filteredBooks)

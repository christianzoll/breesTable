yearColumns = document.querySelectorAll(".Table.Table--align-right.Table--fixed.Table--fixed-left");

// yearColumns[0].children[2].children[5].children[1].children[0].children[1].innerText


// function criteriaFn(obj) {
//   if(obj.innerText == "NO") {
//     return obj "Here it is!";
//   } 
// }

function find(array, criteriaFn) {
  let current = array
  let next = []
  
  while (current || current === 0) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

find(Array.from(yearColumns), obj => obj.innerText == "NO");
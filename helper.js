// SIBLING TABLES' CONTAINER
const entireTable = document.querySelector('.flex');

//SELECT SIBLING TABLES
const yearColumns = document.querySelector('.Table.Table--align-right.Table--fixed.Table--fixed-left');
const dataTable = document.querySelector('.Table__ScrollerWrapper.relative.overflow-hidden');

// HELPER FUNCTION TO CONVERT HTMLCOLLECTION to fully operational Array
const makeAnArray = function(htmlCollection) {
    return Array.from(htmlCollection);
    console.log(makeAnArray(htmlCollection));
};

let crawl = (arr) => arr.forEach((index) => { // initiate 

  let findAnArray = Array.from(index).contains("NO");

  if (findAnArray) {
    return arr.indexOf(findAnArray.closest('.Table__TR.Table__TR--sm.Table__even')); // return first row NO
  } else {
    crawl(index);
  }

} 

crawl(makeAnArray); // call 


// let findNo = return makeAnArray.includes(lastChild.innerHTML = "NO")

// let turnIndexIntoArray = run makeAnArray over each array index

// let run includes() over nesting arrays

// if(findNo == true ) {
    // return makeAnArray.indexOf(no.parent.parent.parent.parent || no.closest('.Table__TR.Table__TR--sm.Table__even');)
// }

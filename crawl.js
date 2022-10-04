
// INSERTION POINT
yearColumns = document.querySelector(".Table.Table--align-right.Table--fixed.Table--fixed-left");

Array.from(yearColumns.rows).map(x => Array.from(x.cells).map(y => Array.from(y.children).map(z => Array.from(z.children).map(a => a.textContent).includes("NO"))));

function callArray(obj) {
    return Array.from(obj);
}

function readTextContent(el){
    return el.textContent;
}

// find()
// search()
// includes()
// has()
// match()
// indexOf()
// findIndex()

/*
for (nest of Array.from(yearColumns)) {
  let textContent = nest.map(x => x.textContent);
  if(textContent.includes("NO")) {
   return // indexOf() .closest('tr')
  } else {
    // textContent.recursion()
  }
}
*/
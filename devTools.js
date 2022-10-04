
// INSERTION POINT
yearColumns = document.querySelectorAll(".Table.Table--align-right.Table--fixed.Table--fixed-left");

// HTML COLLECTION BRACES
// yearColumns[0].children[2].children[5].children[1].children[0].children[1].innerText // traverse with HTMLCollection properties and/or Array.from()

// NODE LIST BRACKETS
// yearColumns[0].childNodes[2].childNodes[5].childNodes[1].childNodes[0].childNodes[1].innerText // traverese w/ NodeList properties

// HTML TABLE ELEMENT
// Array.from(yearColumns)

// // function readInnerText(index) {
//     return index.innerText;
// }


function inspectArray(arr = Array.from(yearColumns)) {
  for(let i = 0; i < arr.length; i++) {
    return i.children;
  }
}

// inspectArray(Array.from(yearColumns))
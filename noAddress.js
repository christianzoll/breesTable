
// INSERTION POINT
yearColumns = document.querySelectorAll(".Table.Table--align-right.Table--fixed.Table--fixed-left");

// HTML COLLECTION BRACES
yearColumns[0].children[2].children[5].children[1].children[0].children[1].innerText // traverse with HTMLCollection properties and/or Array.from()

// NODE LIST BRACKETS
yearColumns[0].childNodes[2].childNodes[5].childNodes[1].childNodes[0].childNodes[1].innerText // traverese w/ NodeList properties

// HTML TABLE ELEMENT
yearColumns[0].rows[6].cells[1].children[0].children[1].innerText

// CSS SELECTOR
div.ResponsiveTable:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > a:nth-child(2)

// yearColumns is a NodeList "object"
// yearColumns[0] is a <table> "object"
// yearColumns[0].rows[6] is a <tr> "object"
// yearColumns[0].rows[6].cells[1] is a <td> "object"
// yearColumns[0].rows[6].cells[1].children[0] is a <div> "object"
// yearColumns[0].rows[6].cells[1].children[0].children[1] is a <a> "object"

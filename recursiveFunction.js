// INSERTION POINT
yearColumns = document.querySelector(".Table.Table--align-right.Table--fixed.Table--fixed-left");

function readValuesIn(prop) {
    prprt = prop.innerText;
    for (prop in yearColumns) {   // runs through nesting properties
      if (prprt.includes("NO")) { // searches for "NO"
       prop.indexOf(prop.closest(tr)) // returns row number of NO's first instance
       } else { 
         readValuesIn(Array.from(prop[i])) // convert HTMLCollection to array and perform recursion
        }
     }    
    }

    function readValuesOf(prop) {
        prprt = prop.innerText; // desired value
        for (prop of yearColumns) {   // runs through nesting properties
          if (prprt.includes("NO")) { // searches for "NO"
           prop.indexOf(prop.closest(tr)) // returns row number of NO's first instance
           } else { 
             readValuesOf(Array.from(prop[i])) // convert HTMLCollection to array and perform recursion
            }
         }  
        }
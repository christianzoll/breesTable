// DEEP SEEDED DESCENDENT INDICATES OBJECT PATH
fleurDeLis = document.querySelector('img[Title=NO]'); // DESCENDENT

// OVERSHOOT TARGET ASCENDENT TO REPELL FROM HIGHER ASCENDENT
column = Array.from(fleurDeLis.closest('table').rows); // ANCESTOR AVENUE

// REPELL FROM HIGHER ASCENDENT FOR TARGET ASCENDENT'S VALUE
saintsRow = column.indexOf(fleurDeLis.closest('tr')); // ASCENDENT 

dataRow = saintsRow; // COLGROUP ASSOCIATION 

// SELECT ASSOCIATED DATA IN SIBLING COLGROUP
gpTh = document.querySelector('th[Title="Games Played"]'); // DESCENDENT

gpThead = gpTh.closest('thead'); // ANCESTOR

gpTheadChildren = Array.from(gpThead.firstChild.children); // ANCESTOR AVENUE

gpIndex = gpTheadChildren.indexOf(gpTh); // ASCENDENT 

// SELECT DATA RANGE IN COLGROUP'S SIBLING TBODY
  
relativeTbody = Array.from(gpThead.nextSibling.children); // PROVIDES ARRAY OF TR ELEMENTS

// ENTER EACH TR AND SELECT DESIRED TD
relativeTbodyColumn = relativeTbody.map((row) => +row.firstChild.innerText) // firstChild WILL BE REPLACED VARIABLE THAT'S SET TO THE INDEX OF THE DESIRED COLUMN

// MAKE AN ARRAY OF THE DESIRED TR TD'S
saintsRows = relativeTbodyColumn.slice(saintsRow-1, -1)

// ADD 'EM ALL UP
saintsTotals = saintsRows.reduce((previous, current) => previous + current);





/* DIDN'T WORK

// FIND() & FINDINDEX() don't work
fleurDeLis = document.querySelector('img[Title=NO]');

column = Array.from(fleurDeLis.closest('tbody').rows);

saintsRow = column.find(fleurDeLis => fleurDeLis.closest('tr'));

*/
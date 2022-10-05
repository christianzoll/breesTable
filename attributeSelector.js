// DEEP SEEDED DESCENDENT INDICATES OBJECT PATH
fleurDeLis = document.querySelector('img[Title=NO]');

// OVERSHOOT TARGET ASCENDENT TO REPELL FROM HIGHER ASCENDENT
column = Array.from(fleurDeLis.closest('table').rows);

// REPELL FROM HIGHER ASCENDENT FOR TARGET ASCENDENT'S VALUE
saintsRow = column.indexOf(fleurDeLis.closest('tr'));

dataRow = saintsRow;

gpTh = document.querySelector('th[Title="Games Played"]');

gpThead = gpTh.closest('thead');

gpTheadChildren = Array.from(gpThead.firstChild.children);

gpIndex = gpTheadChildren.indexOf(gpTh);
  

relativeTbody = Array.from(gpThead.nextSibling.children);

relativeTbodyColumn = relativeTbody.map((row) => +row.firstChild.innerText)


saintsRows = relativeTbodyColumn.slice(saintsRow-1, -1)


saintsTotals = saintsRows.reduce((previous, current) => previous + current);

/*
// FIND() & FINDINDEX() don't work
fleurDeLis = document.querySelector('img[Title=NO]');

column = Array.from(fleurDeLis.closest('tbody').rows);

saintsRow = column.find(fleurDeLis => fleurDeLis.closest('tr'));

*/
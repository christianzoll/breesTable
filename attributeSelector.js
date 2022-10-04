

// DEEP SEEDED DESCENDENT INDICATES OBJECT PATH
fleurDeLis = document.querySelector('img[Title=NO]');

// OVERSHOOT TARGET ASCENDENT TO REPELL FROM HIGHER ASCENDENT
column = Array.from(fleurDeLis.closest('table').rows);

// REPELL FROM HIGHER ASCENDENT FOR TARGET ASCENDENT'S VALUE
saintsRow = column.indexOf(fleurDeLis.closest('tr'));


dataRow = saintsRow;

/*
// FIND() & FINDINDEX() don't work
fleurDeLis = document.querySelector('img[Title=NO]');

column = Array.from(fleurDeLis.closest('tbody').rows);

saintsRow = column.find(fleurDeLis => fleurDeLis.closest('tr'));

*/
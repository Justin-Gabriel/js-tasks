/*
6.35.toFixed(1) == 6.3;
1.35.toFixed(1) == 1.4;
 
How it can be fixed ?
*/

//The difference in round up is due to the precision loss

alert(Math.round(6.35*10)/10);
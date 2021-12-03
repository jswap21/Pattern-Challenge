

function setup(){
  /*  Challenge 1
         *****
         *****
         *****
         *****
         *****

*/
  var n = 5; // row or column count
// defining an empty string
var string = "";

for(var i = 0; i < n; i++) { // external loop
  for(var j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);


/* Challenge 2

*
**
***
****
*****

*/

/* Challenge 3

*****
****
***
**
*

*/

/* Challenge 4
    *
   ***
  *****
 *******
*********

*/

/* Challege 5

*********
 *******
  *****
   ***
    *

*/


/* Challenge 6
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

var n = 5; // height of pattern
var string = "";
// External loop
for (var i = 1; i <= n; i++) {
  // Internal loop
  for (var j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

/* Challenge 7

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/


/*Challenge 8

12345
1234
123
12
1

*/


/*Challenge 9

    1
   123
  12345
 1234567
123456789

*/


/*Challenge 10

123456789
 1234567
  12345
   123
    1

*/

}





function draw(){
   background(0)
    drawSprites();
}


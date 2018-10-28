
//run in the command line with Node
//for (var i = 1; i <= 100; i++) {
  //  if ( (i% 3 == 0) && (i % 5 == 0) ) {
    //    console.log("FizzBuzz");
    //}
    //else if (i % 3 == 0) {
    //    console.log("Fizz");
    //}
    //else if (i % 5 == 0) {
    //    console.log("Buzz");
    //}
    //else {
    //    console.log(i);
    //}
//}

//what if they want the out put to be in multiples of 7 instead of 5? run in command line with Node

for (var i = 1; i<= 100; i++) {
    var output = "";
    if( i% 3 == 0) { output += "Fizz"; }
    if( i% 5 == 0) { output += "Buzz"; }


    
    if(output == "") { output = i; }
   
    console.log(output);

}
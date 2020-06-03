let ledPin = [12, 8, 6, 7, 5, 2];
let ledColor = ["Red", "Yellow", "blue", "green", "White", "Black"];

console.log("ledPin array = " + ledPin); //output ledPin array value;
console.log("ledColor array = " + ledColor); // output ledColor value; 
console.log("3rd value of ledPin array is: " +ledPin[2]); //output array value by index number;
console.log("Array length is: " + ledPin.length); //output length of array;
console.log("Find index number of value 5: " + ledPin.indexOf(5)); 

// update array value;
ledPin[0] = 21;
console.log("Updated array is: " + ledPin); 

// add/ remove  element in array;
ledPin.push(11);
console.log("11 added to the end of ledPin array " +ledPin); 

ledPin.unshift(9);
console.log("9 added to the first of ledPin array " +ledPin); 

ledPin.pop();
console.log("11 removed from the end of ledPin array " +ledPin); 

ledPin.shift(9);
console.log("9 removed from the first of ledPin array " +ledPin); 
let num = 10;

while (num > 0) {
  
   if(num%2===0) { 
       console.log(num);}
  
  num--;
}

let parkIsOpen = true; 
if (parkIsOpen = true){
    console.log("Welcome to the Badlands National Park! Try to enjoy your stay.")
} else{
    console.log("Sorry, the Badlands are particularly bad today. We're closed!")
}




let numSheep = 4;
let monthsToPrint = 12;
let reduction;

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
if(numSheep>10000){
    numSheep = numSheep/2
    console.log("Removing " +numSheep + " sheep")
}
if (monthNumber % 4 === 0){
reduction = .75*numSheep
console.log("Removing " +reduction + " sheep")
} else if (numSheep>10000){
    reduction = .5*numSheep
    console.log("Removing " +reduction + " sheep")
    numSheep = numSheep-reduction
}
  

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
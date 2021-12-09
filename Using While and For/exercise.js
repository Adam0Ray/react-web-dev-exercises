let trainNumber = 1
while (trainNumber <= 8){
console.log("Train#" + trainNumber + " is running.")
trainNumber++
}


let num =10
while(num > 0){
    console.log(num)
    num--
}

let numSheep = 4;
let monthNumber = 1;
let monthsToPrint = 12;
// while(monthNumber<=monthsToPrint){
    
//     numSheep=numSheep*4
//     console.log("There will be " + numSheep +" sheep")
//     monthNumber++

// }

for (num = 10; num>0;num--){
    console.log(num)
}

for(monthNumber = 1; monthNumber<=monthsToPrint;monthNumber++){
    numSheep = numSheep * 4
    console.log("There will be " + numSheep +" sheep")
}

let runningGen = 1;
let totalGen = 19;
while(runningGen <5){

console.log("Generator #" +runningGen+ " is on.")
    runningGen++
}

for(stoppedGen = runningGen; stoppedGen <=totalGen; stoppedGen++){
    console.log("Generator #" +stoppedGen+ " is off.")
    runningGen++
}
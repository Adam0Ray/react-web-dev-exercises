function sumOfCubes (a,b) {
    let aCubed = a*a*a
    let bCubed = b*b*b
    let sum = aCubed + bCubed

    return console.log(sum)
    //return console.log(a*a*a + b*b*b)
}
sumOfCubes(4, 9)

function multiplyTrio (a,b,c){
    return console.log(a*b*c)
}
multiplyTrio(2,4,5)

function maxOfTwo (a,b){
    if(a>b){
        return a
    } else{
        return b
    }
}
console.log(maxOfTwo(5,9))

function mystery(x, y) {
    let a = 4 * x * y;
    let b = 3 * y + 5;
    let c = a + b;
    return c;
  }

  function mysteryRefactoring(x, y) {
    return (4 * x * y)+(3 * y + 5)
  }
console.log(mysteryRefactoring(2,5))

function feedPerRanger(pop,num){
    let feedPerRanger = (pop*2)/num
    alert("Each ranger should load"+ num + "lbs of feed today.")
}

function changePowerTotal (powerTotal, genId,status,powerAmt){
    if (status = "on"){
        alert ("Generator #"+ genId +"is now on, adding " +powerAmt+ "MW, for a total of " +powerTotal+ "MW!")
    } else if  (status = "off") {
     alert("Generator #" +genId+ "is now off, removing "+powerAmt+ "MW, for a total of " +powerTotal+ "MW!")   
    }
    return powerTotal
}
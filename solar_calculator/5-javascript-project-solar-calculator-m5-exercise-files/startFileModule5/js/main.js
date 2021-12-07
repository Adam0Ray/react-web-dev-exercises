// JavaScript Document

// var foundYou = document.getElementById('overview')
// console.log(foundYou.innerHTML);
// foundYou.innerHTML = ">>I changed You";

// var foundYou = document.getElementsByTagName('p');
// console.log(foundYou);
// console.log(foundYou[1].innerText);
// foundYou[1].innerText = "I Changed You"

// var foundYou = document.getElementsByName('description')
// console.log(foundYou[0].innerHTML);
// foundYou[0].innerHTML = "I Found You";

// var foundYou = document.querySelectorAll('li');
// console.log(foundYou[0].innerText);


var foundYou = document.querySelectorAll('ul#fn_list li');  //ul #id and then  li child list
console.log(foundYou[0].innerText);
console.log(foundYou.length)
foundYou[0].innerHTML = "I Found You";


// // ELEMENT BY ID (single object)
// var foundYou = document.getElementById('overview');
// console.log(foundYou);
// console.log(foundYou.innerText);
// foundYou.innerText = ">>I Changed You<<";

// //ELEMENETS BY TAG NAME (collection)
// var foundYou = document.getElementsByTagName('h1');
// console.log(foundYou);
// console.log(foundYou[2].innerText);
// foundYou[2].innerText = ">>I Changed You<<";


// //ELEMENTS BY NAME (collection)
// var foundYou = document.getElementsByName('description');
// console.log(foundYou);
// console.log(foundYou[0].innerText);
// foundYou[0].innerHTML = ">>I Changed You<<";


// //ELEMENTS BY CLASS NAME (collection)
// var foundYou = document.getElementsByClassName('smallCenter');
// console.log(foundYou);
// console.log(foundYou[0].innerText);
// foundYou[0].innerHTML = ">>I Changed You<<";


// //QUERY SELECTOR ALL (collection)
// var foundYou = document.querySelectorAll('li');
// console.log(foundYou);
// console.log(foundYou[5].innerText);
// foundYou[5].innerHTML = ">>I Changed You<<";

// var foundYou = document.querySelectorAll('ul#lp_list li');
// console.log(foundYou);
// console.log(foundYou[2].innerText);
// foundYou[2].innerHTML = ">>I Changed You<<";


// //++++++++++++++++++ COMBINATIONS +++++++++++++++++++++

// var foundYou = document.getElementById('sw_list');
// console.log(foundYou);
// var childArray = foundYou.getElementsByTagName('LI');
// console.log(childArray);
// childArray[0].innerText = '>>These Items';
// childArray[1].innerText = '>> Has Just';
// childArray[2].innerText = '>> Been Changed';



// var newOptions = ['Orange', 'Red', 'Blue'];
// // Setting the values from a form element
// var foundYou = document.getElementById('myForm');
// console.log(foundYou);
// var selectArray = foundYou.getElementsByTagName('option');
// console.log(selectArray);
// for (i=0; i<selectArray.length;i++) {
// 	selectArray[i].innerText= newOptions[i];
// } // end loop
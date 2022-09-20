let favNumber = 24;
let input = window.prompt('enter a number');

if (favNumber < input){
  console.log('to high');
} else if (favNumber == input){
  console.log('Correct');
} else if (favNumber > input){
  console.log('to low');
} 

let birthMonth = window.prompt('What is your birth month?');

switch (birthMonth){
  case 'March':
  case 'April':
  case 'May':
    console.log('Spring');
    break;
  case 'June':
  case 'July':
  case 'August':
    console.log('Summer');
    break;
  case 'September':
  case 'October':
  case 'November':
    console.log('Fall');
    break;
  case 'December':
  case 'January':
  case 'February':
    console.log('Winter');
    break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  case '00':
    type = "Other";
    break;
}

switch(colorId) {
  case "BL":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  case 'W':
    color = "White";
    break;
}
 
switch(sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  case 'ALL':
    size = "One Size Fits All";
    break;
}


console.log(`Product: ${size} ${color} ${type}`);

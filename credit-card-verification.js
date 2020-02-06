// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const invalidCards = [];
// Add your functions below:

function validateCred(arr) {
  let tempArr = arr;
  //console.log(tempArr);
 //sum is the sum of everything used in the Luhn algorythm
  let sum = 0;
 //tempChecker is used to check if the digit is odd or even, counting from the end.  
  let tempChecker = 1;
 //the for cycle manipulates with digits and adds them to the sum
  for (let i = tempArr.length - 1; i >= 0; i--)
    {
    let a = tempArr[i]
     // console.log('Sum', sum);
     // console.log('the digit is', tempArr[i]);
     //check if the digit is even, if yes -- multiply it by 2 
     if (tempChecker === 0) {
      a *= 2;
      tempChecker = 1;
      //if the digit's too big, we subtract 9
        if(a > 9) {
          a -= 9;      
        }
       //  console.log('Even digit. Will add ', tempArr[i]);
     }  
      else {
       tempChecker = 0;}
     //  console.log('tempchecker', tempChecker);
     
  //we add our result of the current iteration to the sum
      sum += a;
    }
 // console.log(`final sum is ${sum}, the remainder is ${sum % 10}`);
  if (sum % 10 === 0) {
    
    return true;
  }
  else {
    return false;
  }
}

/*console.log(validateCred(valid3));
//that's a debug here*/

//this function should iterate through cards;
function findInvalidCards(allCards, badCards) {
  for (let j = 0; j <= allCards.length - 1; j++) {
    //console.log(j);
    if (validateCred(allCards[j]) === true) {
     // console.log(`Card ${allCards[j]} is OK`);
    }
    else
      {
      // console.log(`Card ${allCards[j]} is NOT OK, noting...`);
        badCards.push(allCards[j]);
      }
  }
}

//function that combines an array of invalid card issuers
function idInvalidCardCompanies(arr) {
  let returnArray = [];
  const tickArray = [0, 0, 0, 0]
  for (let k = 0; k < arr.length - 1; k++) 
  {
    //console.log(arr[k]);
    if ((arr[k][0] === 3) && (tickArray[0] === 0))
    {
      returnArray.push('Amex');
      tickArray[0]++;
    }
    
    else if ((arr[k][0] === 4) && (tickArray[1] === 0))
    {
      returnArray.push('Visa');
      tickArray[1]++;
    }
    
    else if ((arr[k][0] === 5) && (tickArray[2] === 0))
    {
      returnArray.push('Mastercard');
      tickArray[2]++;
    }
    
    else if ((arr[k][0] === 6) && (tickArray[3] === 0))
    {
      returnArray.push('Discover');
      tickArray[3]++;
    }
    
    else if ((arr[k][0] =! 3) && (arr[k][0] =! 4) && (arr[k][0] =! 5) && (arr[k][0] =! 6))
             {
      console.log('Company not found');
    }
  }
  return returnArray;
}

//this is a debgug function
function debugInvalidCards(arr) {
  for (let m=0; m < arr.length - 1; m++)   {
    console.log(arr[m].toString());
  }
}

findInvalidCards(batch, invalidCards);
//debugInvalidCards(invalidCards);
console.log(idInvalidCardCompanies(invalidCards));




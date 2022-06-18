function hasTargetSum(array, target) {
  // Write your algorithm here
  for ( let i = 0; i < array.length; i += 1 )
  {
    if ( array.indexOf( target - array[ i ] ) !== -1 && array.indexOf( target - array[ i ] ) !== i )
    {
      return true
    }  
  }
    {
      return false
    }
}

/* 
  Write the Big O time complexity of your function here

  0(n)

*/

/* 
  Add your pseudocode here

  iterate the length of the array
    if value of the difference of target and current value of the iterated position in array exists in the array and the position of that value is not the current iterating position
      return true
  else reture false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log( "" );
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([12, 9, 4, 21], 13));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8, 2, 5, 13], 44));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 12, 9, 7, 21], 17));


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

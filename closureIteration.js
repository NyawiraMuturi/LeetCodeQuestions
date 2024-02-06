//In this implementation, we use a closure to keep track of the current index in the values array. 
//Each time the returned function is called, it returns the current value and increments the index,
// wrapping around to the beginning of the array when it reaches the end with the help of the modulo operator.

export default function cycle(...values) {
    let index = 0;
  
    return () => {
      const currentValue = values[index];
      index = (index + 1) % values.length;
      return currentValue;
    };
  }
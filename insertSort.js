//comparing sorted vs unsorted 
function insertSort(arr){
    for(let i=1; i<arr.length; i++) {
        let currentCard = arr[i];
        let j = i-1

        while(j>=0 && arr[j]> currentCard){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentCard;
    }
    return arr;
}

let cards = [31, 41, 59, 26, 41, 58]
insertSort(cards)
console.log(cards)

function newSort(arr){
    for(let i=1; i<arr.length; i++) {
        let currentCard = arr[i];
        let j = i-1

        while(j>=0 && arr[j] < currentCard){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentCard;
    }
    return arr;
}

let otherCards = [31, 41, 59, 26, 41, 58]
newSort(otherCards)
console.log(otherCards)

function linearSearch(arr, v){
    for(i=0; i<arr.length; i++){
        if(arr[i] === v){
            return i
        }
    }
    return -1;
}
let A = [3, 6, 1, 8, 2, 9, 5];
let v = 3;


let result = linearSearch(A, v);
if (result !== -1) {
  console.log(`Value ${v} found at index ${result}`);
} else {
  console.log(`Value ${v} not found in the array.`);
}

//2 arrays A and B, add their values, store their values in C 

function summation(arr1, arr2){
    for(i=0; i<arr1.length; i++){
        return arr1[i];
    }
    for(j=0; j<arr2.length;j++){
        return arr2[j]
    }
}

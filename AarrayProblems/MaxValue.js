//Create an array of numbers and find the maximum value.
const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout, 
})

let array = [];

function getArrayElements(){
    rl.question("Enter an element(or type 'done' to finish):",(input)=>{
        if(input.toLowerCase()==="done"){
            console.log("your array:",array);

            let maxVal = Number(array[0])
for(let i=1;i<array.length;i++){
       
    if(Number(array[i])>maxVal){

        maxVal=array[i]
    }
}
console.log('maxvalue of array is:',maxVal)
        }
        else {
            array.push(input);
            getArrayElements()
        }
    })
}
console.log("start entering your array elements");
getArrayElements()

// this solution may cause an out of bound error , bcs when i reaches the last element, i+1 is undefined, it will cause an undefined error

//so the best practice is to assign the first element of the array to the MaxVal variable.

//
//  let maxVal = array[0]
//for(let i=1;i<array.length;i++){
       
  //  if(Number(array[i])>maxVal){

    //    maxVal=array[i]
    //}
//}

//Another solution 
let numbers = [10,25,4,16,50,3];
let maximumVal = Math.max(...numbers);
console.log('the maximum value in the array is:',maximumVal)


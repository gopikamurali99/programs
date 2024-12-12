//calculate the sum of all elements in an array

const readline = require('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output:process.stdout,  
})
let arr=[]
function getArray(){
    rl.question('enter array elements or type done:',(input)=>{
        if(input.toLowerCase()==="done"){
            console.log("your array:",arr);

            let sum = 0;
            for(let i=0;i<arr.length;i++){
                sum = sum + arr[i]
            }

           console.log("sum is",sum)
            
        }

        else {
            arr.push(Number(input));
            getArray()
        }
      
    })
}

console.log("start entering your array elements");
getArray()

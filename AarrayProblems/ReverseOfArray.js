const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let arr = []
function getArrayElements(){
    rl.question('enter the array elements or type done to stop:',(input)=>{

        if(input.toLowerCase() === 'done'){
            console.log('your array is:',arr)
       let reversed_Array = []
       for(let i=arr.length-1;i>=0;i--){
   
        reversed_Array.push(arr[i])

       }

       console.log("reversed array:",reversed_Array)
         

        }

        else{
            arr.push(input);
            getArrayElements()
        }
    })
}

console.log('enter array elements:')

getArrayElements()
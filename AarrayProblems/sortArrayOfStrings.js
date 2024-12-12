//sort an array of strings alphabetically.

//BUBBLE SORT METHOD

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let array=[]

function getArrayElements(){
    rl.question('enter the array elements or type done to stop:',(input)=>{
        if(input.toLowerCase()==='done'){
            console.log('the array you entered is:',array);
          let n=array.length
         for(let i=0;i<n-1;i++){
            for (let j=0;j<n-i-1;j++){

                if(array[j].toLowerCase()>array[j+1].toLowerCase()){
                    let temp=array[j+1]
                    array[j+1]=array[j]
                    array[j]=temp
                }
            }
         }
         console.log('sorted array:',array)
  


        }
        else{
            array.push(input)
            getArrayElements()
        }
    })
}

getArrayElements()

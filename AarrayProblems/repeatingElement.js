//write a function to remove duplicates from an array

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let array = []

function getArrayElements(){
    rl.question('Enter the array elements or type "done" to finish:',(input)=>{
        
        if(input.toLowerCase()==="done"){

            console.log('your array is:',array)
          
            let newArray = []
            

            for(let i=0;i<array.length;i++){
                let flag=0;
                for(let j=1;j<array.length-1;j++){

                    if(Number(array[i]!==Number(array[j]))){

                        if(newArray.includes(array[i])){

                            flag=1;
                            break
                        }
                      
                        
                    }
                  
                      
                }
                if(flag===0){

                    newArray.push(array[i]);
                  }
                   
            }
            
      console.log('the array wothout duplicate:',newArray)
        }
        else {
            array.push(input);
            getArrayElements()
        }
        
    })
}
console.log("start entering your array elements");

getArrayElements()


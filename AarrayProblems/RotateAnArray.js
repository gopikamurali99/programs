function rotateArray(arr,step){

    let newarr = []
    let n = arr.length;
    for(let i=step;i<n;i++){

        newarr.push(arr[i])
      
    

    }
    for(let i=0;i<step;i++){
        newarr.push(arr[i])
    }
    
 return newarr;
}
let array = [1,2,3,4,5]
let step = 2
console.log(rotateArray(array,step))


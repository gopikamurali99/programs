function countOfElement(arr,element){
      let count = 0
      for(let i=0;i<arr.length;i++){
        if(arr[i]===element){

            count++
        }
      }
    return count;

}

let array=[1,2,3,4,9,1,9,1,1]
let number = 1

console.log(countOfElement(array,number))
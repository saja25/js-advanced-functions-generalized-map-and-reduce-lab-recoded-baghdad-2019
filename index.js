// Add your functions here
function map(arr,fun){
  let myArr=[] ;
  for(let i=0;i<arr.length;i++){
    myArr.push(fun(arr[i]));
  }
  return myArr ;
}
function reduce(fun,arr,start=0){
  let sum
  return sum ;
}
// Add your functions here
function map(arr,fun){
  let myArr=[] ;
  for(let i=0;i<arr.length;i++){
    myArr.push(fun(arr[i]));
  }
  return myArr ;
}
function reduce(arrfun,,start){
  let sum=(!!start)?start:arr[0] ;
  let i=(!!start)?0:1 ;
  for(;i<arr.length;i++){
    sum=fun(arr[i],sum);
  }
  return sum ;
}
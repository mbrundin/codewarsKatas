function getSum(a, b)
{
  let result = 0;
  if(a===b){
    return a
    
  } else if(a>b){
    for(let i=b;i<=a;i++){
       result+=i
    }
    return result
    
  }else if(a<b){
    for(let i=a;i<=b;i++){
      result+=i
    }
    return result
  }
}
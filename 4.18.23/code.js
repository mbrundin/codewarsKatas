function findNb(m) {
    if(m<1){
      return (-1);
    } else {
      let result = 1;
      while(m>1){
        m -= Math.pow(result,3)
        result++
      }
      if (m!=0){
        return -1
      } else {
        return result-1
      }
    }
  }
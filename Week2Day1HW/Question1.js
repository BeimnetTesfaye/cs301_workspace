function computeHCF(num1, num2) {
    while(num2!=0) {    
      let a = num2;
      num2 = num1 % num2;
      num1 = a;
    }
    return num1;
  }
  console.log(computeHCF(10, 5));

  //Using function Expression
  let computeGCD = function(x, y){
    while(x) {    
        let c = a;
        a = x % y;
        y = c;
      }
      return y;
    }
    console.log(computeHCF(25, 50));
  
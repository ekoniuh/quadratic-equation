module.exports = function solveEquation(equation) {
  let del1 = equation.indexOf (" * x^2 ");
  let a = +equation.substring(0,del1);
  
  console.log (a);

  let del2 = del1 + " * x^2 ".length;
  let del3 =  equation.indexOf (" * x ");
  let b = +equation.substring(del2,del3).split('').filter(letter => letter != ' ').join('');
  
  console.log (b);

  let c = +equation.substring(del3 + 5, equation.length).split('').filter(letter => letter != ' ').join('');
 
  console.log (c);

  let d = b*b - 4*a*c;
  let x1 = Math.round(( - b - Math.sqrt (d) ) / (2*a));
  let x2 = Math.round(( - b + Math.sqrt (d) ) / (2*a));
  return [x1, x2].sort((a, b) => x1 - x2);
}


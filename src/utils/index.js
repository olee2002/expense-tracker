//Money formatter function
export function moneyFormatter(num) {
   let p = num?.toFixed(2).split('.');
   if(p){
      return (
        '$ ' +
        p[0]
          .split('')
          .reverse()
          .reduce(function (acc, num, i, orig) {
            return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
          }, '') +
        '.' +
        p[1]
      );
   }
 }
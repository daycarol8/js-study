// Create a range function
// range(5) => [1,2,3,4,5]
// range(6, 11) => [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) => [10, 12, 14, 16, 18]
// range(6, 2) => [6, 5, 4, 3, 2]
// range(8, -3, 4) => [8, 4, 0]

const rangeFunction = (a, b = null, c = 1) => {
    let array = [];
    if(b == null){
        for(let i = 1; i <= a; i++){
            array.pop(i);
        }
    } else if(a < b){
        for(let i = a; i <= b; i++){
            array.pop(i);
        }
    } else if(a > b){
        
    }
}

const rangee = (a, b = null, c = 1) => {
   const difference = a > b ? true : false;
   //if(b == null)
}

// Create a range function
function range(a, b ,s = 1) {
    const n1 = b === undefined ? 1: a;
    const n2 = b === undefined ? a : b;
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s);

    const nums = [];
    for(let i = n1; n1 <= n2 ? i<= n2 : i >= n2; i += step){
        nums.push(i);
    }
    return nums;
}
// range(5) => [1,2,3,4,5]
console.log(range(5));
// range(6, 11) => [6, 7, 8, 9, 10, 11]
console.log(range(6, 11));
// range(10, 19, 2) => [10, 12, 14, 16, 18]
console.log(range(10, 19, 2));
// range(6, 2) => [6, 5, 4, 3, 2]
console.log(range(6, 2));
// range(8, -3, 4) => [8, 4, 0]
console.log(range(8, -3, 4));
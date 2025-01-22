function add(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`)
};

let result = add(2, 2, "*")

console.log(result)
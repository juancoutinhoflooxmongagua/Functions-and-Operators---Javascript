let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
};

let result = calc(2, 2, "*");

console.log(result);

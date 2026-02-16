let array_nums = [1, 2, 3, 4, 5];

let square = (num) => {
    return num * num;
};
let squared_num = array_nums.map(square);

let squared_num_correct = array_nums.map((num) => num * num);
console. log(squared_num);

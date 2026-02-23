let array_nums = [1, 2, 3, 4, 5];

// let square = (num) => {
//     return num * num;
// };
// let squared_num = array_nums.map(square);
let squared_num_correct = array_nums.map((num) => num * num);
// console. log(squared_num);

//Filter
let age = [1, 5, 34, 78, 87, 29, 20];

let filtered_Age = age.filter((age) =>{ 
    if (age >= 18){
    return age;
}
});
// console.log(filtered_Age);

//Reduce
let arraySpend_Februray = [
  { item: "Grocery", price: 25 },
  { item: "Clothing", price: 100 },
  { item: "Mobile", price: 250 },
  { item: "Trip", price: 500 },
];
let sum = arraySpend_Februray.reduce((prev, curr) => {
    console.log(prev, "+", curr);
    return prev + curr.price;
}, 0);
console.log(sum);

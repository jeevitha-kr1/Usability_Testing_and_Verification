export const orderFood = (foodItem, cb)=>{
console.log("Ordered" + foodItem);
setTimeout(()=>{
    console.log(foodItem +" is ready");
    cb();
}, 2000);
};
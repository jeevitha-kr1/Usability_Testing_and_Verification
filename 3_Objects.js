let car = {
    car_name:"Mr. Beans Car",
    model:"Flat",
    weight:1000,
    start:()=>{
        console.log("Car Started");
    },
    car_details:{
        insurance_Validity:" until 2029",
        isFined: false,
    },
};
console.log(car.car_name);
console.log(car.car_details.isFined);
console.log(car.start);
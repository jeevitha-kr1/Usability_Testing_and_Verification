let people = ["Ron", "John", "Dave"];

let isKayoComing = false;

//Creation of a promise
const kayo = new Promise((resolve, reject)=>{
    //2 seconds for this promise to completed
    setTimeout(()=>{
        if(isKayoComing){
            resolve("Kayo Arrived");
        }else{
            reject("Kayo is sick and cannot bake a cake");}

    },3000);
});


//ES5 way of consuming a promise
// const party = async ()=>{
//     //Consume a promise
//     kayo
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     console.log(".....Party is started....");
//     people.forEach((p) => console.log(p + " arrived."));
// }
// party();


//ES6 way of consuming of a promise
const party_ES6 = async ()=>{
    //Consume a promise
    try{
        let res = await kayo;
        console.log(res);
    }catch(error){
        console.log(error);
    }
    console.log(".....Party is started....");
    people.forEach((p) => console.log(p + " arrived."));
}
party_ES6();
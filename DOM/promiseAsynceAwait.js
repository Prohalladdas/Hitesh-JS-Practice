const pehla =() =>{
    return "One"
}

// const dritia = () =>{
//     setTimeout (() =>{
//         return  "Two"
//     },3000);
// };
const dritia = () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout (() =>{
            resolve ("Two")
        },3000);
    })
};

const tritia = () =>{
    return "Three"
}
const callMe =  async()=>{
    let valOne = pehla();
    console.log(valOne);

    let valTwo = await dritia();
    console.log(valTwo);

    let valThree = tritia();
    console.log(valThree);
}
callMe()
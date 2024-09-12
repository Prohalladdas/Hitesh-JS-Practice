const names =["Google","Youtube","Facebook","Instagram","Whatsapp"];

// for (const p of names){
//     console.log(p);
// }

const symbols ={
    yt:"Youtube",
    fb:"Facebook",
    ig:"Instagram",
    loc:"LocalOnlineCode.com",
};

for (const p in symbols){
    console.log(`Key is : ${p} and value is : ${symbols[p]}`);
}
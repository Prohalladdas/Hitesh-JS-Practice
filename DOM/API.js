// fetch ("https://api.chucknorris.io/jokes/random")
// .then((response)=>{
//     console.log("RESPONSE IS : ",response.json)
// })
// .catch()

fetch ("https://api.chucknorris.io/jokes/random")
.then((hola)=>{
  return hola.json();
})
.then((data)=>{
    // console.log('DATA IS :',data);

    var jock = data.comedy;
    console.log("JOKE IS :",jock);
})
.catch()
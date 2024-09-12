var user ={
    name:"",
    getUserName:function(){
        console.log(`User Name is : ${this.name}`);
    },
};

var polu =Object.create(user);
console.log(polu);

polu.name="Prohallad Das";
polu.getUserName();

var itachi =Object.create(user,{
    name:{value:"Itachi Uchiha"},
    courseCount:{value:3},
});
itachi.getUserName();
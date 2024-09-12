var user = {
    FirstName : "Prohalad",
    LastName : "Das",
    Role : "Web Developer",
    MobileName : "IQOO Z3 5G",
    Age :19,
    LoginCount : 4 ,
    InstagramSignedIn : true ,
}
// console.log(user.MobileName);
// console.log(user ["MobileName"]);

// console.log(user.LoginCount);
user.LoginCount = 14;
console.log(user.LoginCount);
console.table(user);
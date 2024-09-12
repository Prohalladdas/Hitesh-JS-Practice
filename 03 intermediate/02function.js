//USER role in JAVASCRIPT
//function getUserRole (name,role){ [Etao lekha jai]

var getUserRole = function(name,role){
    switch (role) {
        case "admin":
            return`${name} is admin with all access`;
            break;
        case "subadmin":
            return`${name} is sub-admin with access to create & delete course`;
            break;
        case "testprep":
            return`${name} is a testprep with access to create & delete testprep`;
            break;
        case "user":
            return`${name} is a user to consume content`;
            break;
    
        default:
            return`${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Prohallad","admin"));

var getRole = getUserRole("Polu","user");
console.log(getRole);
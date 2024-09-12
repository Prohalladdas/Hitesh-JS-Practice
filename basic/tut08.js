var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;

    case "subadmin":
        console.log("Gets access to create/delete course");
        break;

    case "testprep":
        console.log("Get access to create/delete test ")
        break;

    case "user":
        console.log("Get access to consume content")
        break;

    default:
        console.log("Trail user")
        break;
}
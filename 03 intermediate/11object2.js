var user = {
    FirstName : "Prohallad",
    LastName : "Das",
    Role : "Web Developer",
    MobileName : "IQOO Z3 5G",
    Age :19,
    LoginCount : 4 ,
    InstagramSignedIn : true ,

    counseList: [],
    buyCourse:function(courseName){
        this.counseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.FirstName} is enrolled is total of ${this.counseList.length} courses`;
    },
};

// var counseList = true;
// console.log(user.FirstName);
console.log(user.getCourseCount());

user.buyCourse("React JS course");
user.buyCourse("Javascript course");
user.buyCourse("Angular course");
user.buyCourse("FullStrack Web Development course");
console.log(user.getCourseCount());


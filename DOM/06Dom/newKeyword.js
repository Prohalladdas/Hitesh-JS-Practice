var varname = function(FirstName,LastName,CourseCount){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.CourseCount = CourseCount;
    this.GetCourseCount = function(){
        console.log(`Course count is: ${this.CourseCount}`);
    };
};

varname.prototype.getFirstname = function(){ //Second day proto 
    console.log(`Your First Name is : ${this.FirstName}`);
};

var Prohallad = new varname("Prohallad","Das",3);
// console.log(Prohallad);
Prohallad.GetCourseCount(); //Second day proto 
Prohallad.getFirstname(); //Second day proto 


var Ajit = new varname("Ajit","Singh",5);
// console.log(Ajit);
Ajit.GetCourseCount(); //Second day proto 
Ajit.getFirstname(); //Second day proto 
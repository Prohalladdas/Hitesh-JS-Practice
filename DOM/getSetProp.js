class User {
    constructor(name,email){
        this.Name = name;
        this.Email = email;
    }

    #CourseList = [];
    getInfo(){
        return {Name:this.Name,Email:this.Email};
    }
    enrolledCourse(name){
        this.#CourseList.push(name);
    }
    getCourseList(){
        return this.#CourseList;
    }
}

module.exports = User;

const rock = new User("Rock Li","rockli@gmail.com");
console.log(rock.getInfo());
rock.enrolledCourse("JavaScript Course")
console.log(rock.getCourseList());
console.log(rock.CourseList);
//EXERCISE 1:

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    // exercise 2
    this.studentAcademy = function(){
        return this.academyName
    }
};

function Student(firstName, lastName, age, academyName, studentId){
    Person.call(this, firstName, lastName, age)
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function(){
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
    }
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student

Person.prototype.studentAcademy = function(student){
   return student.academyName
}

//First student Object 
let studentOne = new Student("Slave", "Pejkov", 18, "SEDC", "343434");

studentOne.getFullName();
studentOne.study();

//Second Student Object
let studentTwo = new Student("Harry", "Potter", 20, "Hogwarts", "34131");

studentTwo.getFullName();
studentTwo.study();

//EXERCISE 2:

studentOne.studentAcademy()

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){
    Student.call(this, firstName, lastName, age, academyName = `Design Academy`, studentId)
    this.isStudentOfTheMonth = isStudentOfTheMonth

    this.attendAdobeExam = function(){
        console.log(`The student ${firstName} is doing an adobe exam`)
    }
}

DesignStudent.prototype = Object.create(Student.prototype);
DesignStudent.prototype.constructor = DesignStudent;

function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject, hasGroupProject){
    Student.call(this, firstName, lastName, age, academyName = `Code Academy`, studentId)
    
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject

    this.doProject = function(type){
        if(type === 'individual'){
            console.log(`${this.firstName} is working on the individual project`)
            this.hasIndividualProject = true;
        } else if(type === "group"){
            console.log(`${this.firstName} is working on the group project`)
            this.hasGroupProject = true
        }
    }
}
CodeStudent.prototype = Object.create(Student.prototype)
CodeStudent.prototype.constructor = CodeStudent


function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Person.call(this, firstName, lastName, age, academyName = `Network Academy`, studentId)
    this.academyPart = academyPart

    this.attendCiscoExam = function(){
        console.log(`The student ${firstName} is doing a cisco exam`)
    }
};

NetworkStudent.prototype = Object.create(Student.prototype)
NetworkStudent.prototype.constructor = NetworkStudent

let designStudent = new DesignStudent("John", "Doe", 30, "3626", true)
let codeStudent = new CodeStudent("Bob", "Bobski", 28, "483883", false, false)
let networkStudent = new NetworkStudent("Slim", "Jim", 27, "34343", 2)

designStudent.attendAdobeExam()
codeStudent.doProject()
networkStudent.attendCiscoExam()

console.log(`${designStudent.getFullName()} is in ${designStudent.studentAcademy()}`)
console.log(`${codeStudent.getFullName()} is in ${codeStudent.studentAcademy()}`)
console.log(`${networkStudent.getFullName()} is in ${networkStudent.studentAcademy()}`)


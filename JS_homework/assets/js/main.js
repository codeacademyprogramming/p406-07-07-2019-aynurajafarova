function Student(name, surname, age, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phoneNumber = phoneNumber;
};


const Students = [
    new Student('Jane', 'Clark', '10', '123456789'),
    new Student('Daniel', 'Gibbson', '11', '213456789'),
    new Student('Mark', 'Aiden', '12', '321456789'),
    new Student('Sophia', 'Jackson', '13', '432156789'),
    new Student('Olivia', 'Lucas', '14', '543216789')
];


function Teacher(name, surname, age, education = [], experiences = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.education = education;
    this.experiences = experiences;
}

const teacher = new Teacher('John', 'Doe', 25, 'blabla', '10 years');
console.log('%c Teacher:', 'background: green; color: white;  font-weight: bold;', teacher.name +' '+ teacher.surname);

function Class(name, room, totalDuration, Teacher, Students) {
    this.name = name;
    this.room = room;
    this.totalDuration = totalDuration;
    this.Teacher = Teacher;
    this.Students = Students;
    this.getStudentPhoneNumber = function (studentName) {
        for (let student in Students) {
            if (studentName === Students[student].name) {
                return `${Students[student].name}'s phone number: ${Students[student].phoneNumber}`;
            }
        }
        return 'STUDENT NOT FOUND';
    }
    this.getStudentList = function () {
        console.log('%c All students in the classroom:', 'background: yellow; font-weight: bold;');
        for (let student in Students) {
            console.log(this.Students[student].name + ' ' + this.Students[student].surname);
        }
    }
}

const P406 = new Class('P406', 'Titan', '5 hours', Teacher, Students);
console.log(P406.getStudentList());

console.log(P406.getStudentPhoneNumber('Olivia'));



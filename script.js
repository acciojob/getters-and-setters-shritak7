//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get yourname(){
		return this.name;
	}

	set yourage(newage){
		this.age=newage;
	}
}

class Student extends Person {
	studey(){
		console.log(`$(this.name) is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`$(this.name) is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

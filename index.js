#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const start = async () => {
    console.log("WELCOME");
    while (true) {
        const answer = await inquirer.prompt([
            {
                name: "name",
                type: "list",
                message: "TO WHOM YOU WANNA TALK?",
                choices: ["teacher", "student", "exit"]
            }
        ]);
        if (answer.name === "exit") {
            console.log("Exiting application...");
            break; // Break out of the loop
        }
        if (answer.name === "teacher") {
            const answerTeacher = await inquirer.prompt([
                {
                    name: "teacher",
                    type: "input",
                    message: "to which teacher do you wanna talk?",
                }
            ]);
            console.log(`i am talking to teacher: ${answerTeacher.teacher}`);
        }
        if (answer.name === "student") {
            const answerStudent = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "to which student do you wanna talk?",
                }
            ]);
            const student = persons.students.find(val => val.name === answerStudent.student);
            if (!student) {
                const newStudent = new Student(answerStudent.student);
                persons.addStudent(newStudent);
                console.log(`i am talking to new student: ${newStudent.name}`);
            }
            else {
                console.log(`i am talking to exusting student: ${student.name}`);
            }
        }
    }
};
start();

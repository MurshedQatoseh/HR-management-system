// function idNumber(add) {
//     let startingId = 1000;
//     return startingId + add;
// }

// function getRndInteger(min, max) {
//     let initialSalary = Math.floor(Math.random() * (max - min) ) + min;
//     return initialSalary;
// }

//   function netSalary(initialSalary) {
//     let finalSalary = initialSalary * 0.925;
//     return finalSalary;  
// }

//   const employee1 = {
//     employeeId: function() {return idNumber(0)},
//     fullName: "Ghazi Samer",
//     department: "Administration",
//     level: "Senior",
//     imageUrl: "www.google.com",
//     salary: function() {return getRndInteger(1500, 2000)}
//   }


//   function printInConsole(object){
//     console.log("Employee ID: " + (object.employeeId()));
//     console.log("Employee Name: " + (object.fullName));
//     console.log("Employee Salary: " + (object.salary()));
//   }

//   printInConsole(employee1);


//   const employee2 = {
//     employeeId: function() {return idNumber(1)},
//     fullName: "Lana Ali",
//     department: "Finance",
//     level: "Senior",
//     imageUrl: "www.google.com",
//     salary: function() {return getRndInteger(1500, 2000)}
//   }


//   function printInConsole(object){
//     console.log("Employee ID: " + (object.employeeId()));
//     console.log("Employee Name: " + (object.fullName));
//     console.log("Employee Salary: " + (object.salary()));
//   }

  
// printInConsole(employee2);


// const employee3 = {
//   employeeId: function() {return idNumber(2)},
//   fullName: "Tamara Ayoub	",
//   department: "Marketing	",
//   level: "Senior",
//   imageUrl: "www.google.com",
//   salary: function() {return getRndInteger(1500, 2000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee3);



// const employee4 = {
//   employeeId: function() {return idNumber(3)},
//   fullName: "Safi Walid		",
//   department: "Administration	",
//   level: "Mid-Senior",

//   imageUrl: "www.google.com",
//   salary: function() {return getRndInteger(1000, 1500)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee4);


// const employee5 = {
//   employeeId: function() {return idNumber(4)},
//   fullName: "Omar Zaid	",
//   department: "Development",
//   level: "Senior",

//   imageUrl: "www.google.com",
//   salary: function() {return getRndInteger(1500, 2000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee5);

// const employee6 = {
//   employeeId: function() {return idNumber(5)},
//   fullName: "Rana Saleh		",
//   department: "Development	",
//   level: "Junior  ",

//   imageUrl: "www.google.com",
//   salary: function() {return getRndInteger(500,1000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee6);



// const employee7 = {
//   employeeId: function() {return idNumber(6)},
//   fullName: "	Hadi Ahmad	",
//   department: "Finance	",
//   level: "Mid-Senior  ",

//   imageUrl: "www.google.com",
//   salary: function() {return getRndInteger(1000,15000)}
// }


// function printInConsole(object){
//   console.log("Employee ID: " + (object.employeeId()));
//   console.log("Employee Name: " + (object.fullName));
//   console.log("Employee Salary: " + (object.salary()));
// }


// printInConsole(employee5);

"use strict"

const allEmployees=[];

function Employeeinfo(employeeID,fullname,department,level,imageURL){

    this.employeeID=employeeID;
    this.fullname=fullname;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;



    allEmployees.push(this);

}


Employeeinfo.prototype.salary=function(){

(this.level.toLowerCase()==="senior")?this.salary = getRndInteger(1500,2000):
(this.level==="mid senior")?this.salary = getRndInteger(1000,1500):
this.salary = getRndInteger(500,1000)

allEmployees.push(this.salary);

}




    Employeeinfo.prototype.netsalary=function(){

        this.netsalary=Math.floor(this.salary - (this.salary * 0.075));
        allEmployees.push(this.netsalary);

    }


    Employeeinfo.prototype.printinfo= function(){
        document.write(`<p>  fullname: ${this.fullname}: first salary:   ${this.salary} : net salary = ${this.netsalary} </p>`)

}


const GhaziSamer = new Employeeinfo(1000,"GhaziSamer","Administration","senior","img","");
const     LanaAli = new Employeeinfo(1001,"LanaAli","Finance","senior","img","");
const  TamaraAyoub= new Employeeinfo(1002,"TamaraAyoub","Marketing","senior","img","");
const  SafiWalid= new Employeeinfo(1003,"SafiWalid","Administration","mid senior","img","");
const OmarZaid = new Employeeinfo(1004,"OmarZaid","Development","senior","img","");
const RanaSaleh = new Employeeinfo(1005,"RanaSaleh","Development","Junior","img","");
const  HadiAhmad= new Employeeinfo(1006,"HadiAhmad","Finance","mid senior","img","");

 

for( let i=0; i <  allEmployees.length; i++){
    if(typeof allEmployees[i]!=="number"){
        console.log(i,allEmployees[i]);


    allEmployees[i].salary();
    allEmployees[i].netsalary();
    allEmployees[i].printinfo();
}
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



 
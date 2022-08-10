// // function idNumber(add) {
// //     let startingId = 1000;
// //     return startingId + add;
// // }

// // function getRndInteger(min, max) {
// //     let initialSalary = Math.floor(Math.random() * (max - min) ) + min;
// //     return initialSalary;
// // }

// //   function netSalary(initialSalary) {
// //     let finalSalary = initialSalary * 0.925;
// //     return finalSalary;  
// // }

// //   const employee1 = {
// //     employeeId: function() {return idNumber(0)},
// //     fullName: "Ghazi Samer",
// //     department: "Administration",
// //     level: "Senior",
// //     imageUrl: "www.google.com",
// //     salary: function() {return getRndInteger(1500, 2000)}
// //   }


// //   function printInConsole(object){
// //     console.log("Employee ID: " + (object.employeeId()));
// //     console.log("Employee Name: " + (object.fullName));
// //     console.log("Employee Salary: " + (object.salary()));
// //   }

// //   printInConsole(employee1);


// //   const employee2 = {
// //     employeeId: function() {return idNumber(1)},
// //     fullName: "Lana Ali",
// //     department: "Finance",
// //     level: "Senior",
// //     imageUrl: "www.google.com",
// //     salary: function() {return getRndInteger(1500, 2000)}
// //   }


// //   function printInConsole(object){
// //     console.log("Employee ID: " + (object.employeeId()));
// //     console.log("Employee Name: " + (object.fullName));
// //     console.log("Employee Salary: " + (object.salary()));
// //   }

  
// // printInConsole(employee2);


// // const employee3 = {
// //   employeeId: function() {return idNumber(2)},
// //   fullName: "Tamara Ayoub	",
// //   department: "Marketing	",
// //   level: "Senior",
// //   imageUrl: "www.google.com",
// //   salary: function() {return getRndInteger(1500, 2000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee3);



// // const employee4 = {
// //   employeeId: function() {return idNumber(3)},
// //   fullName: "Safi Walid		",
// //   department: "Administration	",
// //   level: "Mid-Senior",

// //   imageUrl: "www.google.com",
// //   salary: function() {return getRndInteger(1000, 1500)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee4);


// // const employee5 = {
// //   employeeId: function() {return idNumber(4)},
// //   fullName: "Omar Zaid	",
// //   department: "Development",
// //   level: "Senior",

// //   imageUrl: "www.google.com",
// //   salary: function() {return getRndInteger(1500, 2000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee5);

// // const employee6 = {
// //   employeeId: function() {return idNumber(5)},
// //   fullName: "Rana Saleh		",
// //   department: "Development	",
// //   level: "Junior  ",

// //   imageUrl: "www.google.com",
// //   salary: function() {return getRndInteger(500,1000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee6);



// // const employee7 = {
// //   employeeId: function() {return idNumber(6)},
// //   fullName: "	Hadi Ahmad	",
// //   department: "Finance	",
// //   level: "Mid-Senior  ",

// //   imageUrl: "www.google.com",
// //   salary: function() {return getRndInteger(1000,15000)}
// // }


// // function printInConsole(object){
// //   console.log("Employee ID: " + (object.employeeId()));
// //   console.log("Employee Name: " + (object.fullName));
// //   console.log("Employee Salary: " + (object.salary()));
// // }


// // printInConsole(employee5);

// "use strict"

// const allEmployees=[];

// function Employeeinfo(employeeID,fullname,department,level,imageURL){

//     this.employeeID=employeeID;
//     this.fullname=fullname;
//     this.department=department;
//     this.level=level;
//     this.imageURL=imageURL;



//     allEmployees.push(this);

// }


// Employeeinfo.prototype.salary=function(){

// (this.level.toLowerCase()==="senior")?this.salary = getRndInteger(1500,2000):
// (this.level==="mid senior")?this.salary = getRndInteger(1000,1500):
// this.salary = getRndInteger(500,1000)

// allEmployees.push(this.salary);

// }




//     Employeeinfo.prototype.netsalary=function(){

//         this.netsalary=Math.floor(this.salary - (this.salary * 0.075));
//         allEmployees.push(this.netsalary);

//     }


//     Employeeinfo.prototype.printinfo= function(){
//         document.write(`<p>  fullname: ${this.fullname}: first salary:   ${this.salary} : net salary = ${this.netsalary} </p>`)

// }


// const GhaziSamer = new Employeeinfo(1000,"GhaziSamer","Administration","senior","img","");
// const     LanaAli = new Employeeinfo(1001,"LanaAli","Finance","senior","img","");
// const  TamaraAyoub= new Employeeinfo(1002,"TamaraAyoub","Marketing","senior","img","");
// const  SafiWalid= new Employeeinfo(1003,"SafiWalid","Administration","mid senior","img","");
// const OmarZaid = new Employeeinfo(1004,"OmarZaid","Development","senior","img","");
// const RanaSaleh = new Employeeinfo(1005,"RanaSaleh","Development","Junior","img","");
// const  HadiAhmad= new Employeeinfo(1006,"HadiAhmad","Finance","mid senior","img","");

 

// for( let i=0; i <  allEmployees.length; i++){
//     if(typeof allEmployees[i]!=="number"){
//         console.log(i,allEmployees[i]);


//     allEmployees[i].salary();
//     allEmployees[i].netsalary();
//     allEmployees[i].printinfo();
// }
// }
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }



'use strict';



function generateRandomId() {
    let randomId = Math.floor((Math.random() * 10000) - 1);
    if (randomId < 1000 && randomId >= 100){
        randomId *= 10;
        return randomId;
    } else if (randomId < 100 && randomId >= 10){
        randomId *= 100;
        return randomId;
    } else if (randomId < 10 && randomId >= 1){
        randomId *= 1000;
        return randomId;
    } else if (randomId >= 10000){
        return randomId;
    }
    return randomId;
}



let ID = 999;
function idNumber(){
    ID++;
    return ID;
}


function genRandSal(employeeLevel) {
    let min = 0;
    let max = 0;
    if (employeeLevel == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    }
    return randomSalary;
}


function taxSal(level) {
    let salary = genRandSal(level);
    let netSalary = Math.floor(salary*0.925);
    return netSalary;
}





const allEmployees = [];
function Employee(fullName, department, level, imageUrl){
    this.employeeId = function(){return idNumber()}
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = function(){return taxSal(this.level)};
    allEmployees.push(this);
    
}

// Prototype to write in HTML 

Employee.prototype.writeToHTML = function() {
    let docElement = document.getElementById("employeeCARDmain");

    let firstCont = document.createElement("div");
    firstCont.setAttribute("class", "inner-employees-cards-section");

    let secondCont = document.createElement("div");
    secondCont.setAttribute("class", "test");
    firstCont.appendChild(secondCont);

    let createImg = document.createElement("img");
    createImg.src = `${this.imageUrl}`;
    createImg.alt = `employee pfp`;
    secondCont.appendChild(createImg);

    let employeeNameP = document.createElement("p");
    employeeNameP.setAttribute("class", "employee-name");
    employeeNameP.textContent = `${this.fullName}`;
    firstCont.appendChild(employeeNameP);

    let employeeIdP = document.createElement("p");
    employeeIdP.setAttribute("class", "employee-id");
    employeeIdP.textContent = `ID: ${this.employeeId()}`;
    firstCont.appendChild(employeeIdP);

    let thirdCont = document.createElement("div");
    thirdCont.setAttribute("class", "to-hide");
    firstCont.appendChild(thirdCont);

    let employeeDepartmentP = document.createElement("p");
    employeeDepartmentP.setAttribute("class", "to-be-hidden");
    employeeDepartmentP.textContent = `Department / ${this.department}`;
    thirdCont.appendChild(employeeDepartmentP);

    let employeeLevelP = document.createElement("p");
    employeeLevelP.setAttribute("class", "to-be-hidden");
    employeeLevelP.textContent = `${this.level}`;
    thirdCont.appendChild(employeeLevelP);

    let employeeSalaryP = document.createElement("p");
    employeeSalaryP.setAttribute("class", "to-be-hidden");
    employeeSalaryP.textContent = `Salary / ${this.salary()} JD`;
    thirdCont.appendChild(employeeSalaryP);
    
    let employeeDeprtmentsAdministration = document.getElementById("administration");
    let employeeDeprtmentsDevelopment = document.getElementById("development");
    let employeeDeprtmentsFinance = document.getElementById("finance");
    let employeeDeprtmentsMarketing = document.getElementById("marketing");
    
     if (this.department == "Administration"){
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsAdministration.appendChild(finalDestination);
     } else if (this.department == "Development") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsDevelopment.appendChild(finalDestination);
     } else if (this.department == "Finance") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsFinance.appendChild(finalDestination);
     } else if (this.department == "Marketing") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsMarketing.appendChild(finalDestination);
     }

}

// Employees Objects

const ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");
const lanaAli = new Employee("Lana Ali", "Finance", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true");
const tamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
const safiWalid = new Employee("Safi Walid	", "Administration", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true");
const omarZaid = new Employee("Omar Zaid", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true");
const ranaSaleh = new Employee("Rana Saleh", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true");
const hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");

 



for (let i = 0; i < allEmployees.length; i++){
    console.log(`Employee name: ${allEmployees[i].fullName} `);
    console.log(`Department: ${allEmployees[i].department} `);
    console.log(`Employee salary: ${allEmployees[i].salary()} `);
    console.log(`Employee level: ${allEmployees[i].level} `);
    console.log("//////////////////////////");
 }


for (let j = 0; j < allEmployees.length; j++){
    allEmployees[j].writeToHTML();
}


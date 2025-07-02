var employee=[{
    name:"Priya",
    age:35,
    department:"Canteen",
    role:"Cook",
    salary:15000
},{
    name:"Reka",
    age:42,
    department:"Canteen",
    role:"Server",
    salary:10000
},{
    name:"Sumi",
    age:39,
    department:"Teaching",
    role:"Teacher",
    salary:25000
},{
    name:"Nila",
    age:40,
    department:"Office",
    role:"Accountant",
    salary:20000
}];
var tablebody =document.querySelector("#empList tbody")
Addrow(employee);
function Addrow(employee){
    tablebody.innerHTML="";
     employee.forEach(i=>{
        var tableRow=document.createElement('tr')
        tableRow.innerHTML=`
        <td>${i.name}</td>
        <td>${i.age}</td>
        <td>${i.department}</td>
        <td>${i.role}</td>
        <td>${i.salary}</td>`;
        tablebody.appendChild(tableRow)
       
     })  

}

function convert(){
    for(let i=0;i<employee.length;i=i+1){
        employee[i].name=employee[i].name.toUpperCase();
    }
    Addrow(employee)
}

function calculate(){
    var total= employee.reduce((sum,n)=>sum=n.salary+sum,0)
    var average=total/employee.length;
     var salary=document.getElementById("printSalary");
     salary.textContent=`Average Salaray : ${average}`;
}

function changed(){
var selected=document.getElementById("selectDepartment").value
if(selected==""){
    Addrow(employee)
}
else{
    var deptSelected=employee.filter((emp)=>emp.department==selected)
    Addrow(deptSelected)
}
}

function pressed(){
    var keyEntered=document.getElementById("search").value
    var result=document.getElementById("searchResult")
    var nameEntered=employee.find((emp)=>emp.name.toLowerCase()==keyEntered)

    if(!nameEntered){
        result.textContent=`Search Results : Name not Found`;
    }
    else {
        result.textContent=`Search Result : Name : ${nameEntered.name}   , Age : ${nameEntered.age} ,  
        Department : ${nameEntered.department} , Role : ${nameEntered.role} ,    Salary : ${nameEntered.salary}`;

    }
    
}

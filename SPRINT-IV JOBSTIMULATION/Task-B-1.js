// Employee Data Array
let employees = [
  { name: "Alice", age: 30, department: "HR", role: "Manager", salary: 50000 },
  { name: "Bob", age: 25, department: "Engineering", role: "Developer", salary: 60000 },
  { name: "Charlie", age: 35, department: "Sales", role: "Executive", salary: 55000 },
  { name: "Diana", age: 28, department: "Engineering", role: "Designer", salary: 58000 }
];

const tableBody = document.querySelector("#employeeTable tbody");
const avgSalaryOutput = document.getElementById("averageSalary");
const searchResult = document.getElementById("searchResult");
const totalEmployees = document.getElementById("totalEmployees");

// Function: Render Table
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(emp => {  // Using forEach to populate table
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.department}</td>
      <td>${emp.role}</td>
      <td>${emp.salary}</td>
    `;
    tableBody.appendChild(row);
  });
  totalEmployees.textContent =`Total Employees: ${data.length}`;
}

// Function: Convert names to uppercase using map()
document.getElementById("uppercaseBtn").addEventListener("click", () => {
  employees = employees.map(emp => {
    return { ...emp, name: emp.name.toUpperCase() }; // map used to transform data
  });
  renderTable(employees);
});

// Function: Filter by department using filter()
document.getElementById("departmentFilter").addEventListener("change", (e) => {
  const dept = e.target.value;
  const filtered = dept ? employees.filter(emp => emp.department === dept) : employees;
  renderTable(filtered); // filter returns only matching departments
});

// Function: Calculate average salary using reduce()
document.getElementById("averageSalaryBtn").addEventListener("click", () => {
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0); // reduce used to accumulate salary
  const avg = (total / employees.length).toFixed(2);
  avgSalaryOutput.textContent =`Average Salary: ₹${avg}`;
});

// Function: Search employee using find()
document.getElementById("searchInput").addEventListener("input", (e) => {
  const name = e.target.value.trim().toLowerCase();
  if (!name) {
    searchResult.textContent = "Search Result: --";
    return;
  }
  const found = employees.find(emp => emp.name.toLowerCase().includes(name)); // find returns first match
  searchResult.textContent = found 
    ?` Search Result: ${found.name}, ${found.age}, ${found.department}, ${found.role}, ₹${found.salary}`
    : "Search Result: No match found";
});

// Function: Toggle Theme
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

renderTable(employees); // Initial table render
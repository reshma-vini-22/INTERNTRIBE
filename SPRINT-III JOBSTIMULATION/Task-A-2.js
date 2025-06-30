//This user table fetches the information from the fake API and creates a table based on the information dynamically.
//It allows the user to edit the information and save it.
//It allows the user to delete a row in the table.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => newTable(users))
  .catch(error => console.error('Error fetching users:', error));

  function newTable(users){
    const container=document.getElementById("containertable")
    const newTable1=document.createElement('table')
    const tableHead=document.createElement('thead')
    const headRow=document.createElement('tr')
    var headRowarr=['Name', 'Email', 'Username', 'Phone', 'Actions'];
     
    for(i=0;i<headRowarr.length;i=i+1){
        const headData=document.createElement('th')
        headData.textContent=headRowarr[i]
        headRow.appendChild(headData)
    }
    tableHead.appendChild(headRow)
    newTable1.appendChild(tableHead)
    
    const tbody = document.createElement('tbody');
  users.forEach(user => {
    const row = document.createElement('tr');

    ['name', 'email', 'username', 'phone'].forEach(key => {
      const td = document.createElement('td');
      td.textContent = user[key];
      td.setAttribute('data-key', key);
      row.appendChild(td);
    });

    const actionTd = document.createElement('td');
     
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => toggleEdit(row, editBtn));
    actionTd.appendChild(editBtn);

  
  const delBtn=document.createElement('button');
  delBtn.textContent='Delete';
  delBtn.addEventListener("click",()=>
    row.remove());
  actionTd.appendChild(delBtn);
  row.appendChild(actionTd)
  tbody.appendChild(row);
});
 


newTable1.appendChild(tbody);
container.appendChild(newTable1)}
function toggleEdit(row,button){
const isEditing = button.textContent === 'Save';
  const cells = row.querySelectorAll('td[data-key]');

  cells.forEach(cell => {
    if (isEditing) {
      const input = cell.querySelector('input');
      if (input) cell.textContent = input.value;
    } else {
      const input = document.createElement('input');
      input.value = cell.textContent;
      cell.textContent = '';
      cell.appendChild(input);
    }
  });
   button.textContent = isEditing ? 'Edit' : 'Save';
  button.className = isEditing ? 'edit-btn' : 'save-btn';
}


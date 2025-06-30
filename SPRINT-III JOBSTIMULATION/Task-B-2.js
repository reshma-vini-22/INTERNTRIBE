// Fetch user data and populate the table with Edit/Delete functionality
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => createTable(users))
  .catch(error => console.error('Error fetching users:', error));

function createTable(users) {
  const container = document.getElementById('table-container');
  const table = document.createElement('table');

  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['Name', 'Email', 'Username', 'Phone', 'Actions'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
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

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => toggleEdit(row, editBtn));
    actionTd.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => row.remove());
    actionTd.appendChild(deleteBtn);

    row.appendChild(actionTd);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

// Toggle between Edit and Save
function toggleEdit(row, button) {
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

/*
  Explanation:
  - fetch() gets user data from a fake API (jsonplaceholder).
  - For each user, a table row is created with Name, Email, Username, and Phone.
  - Edit button toggles between editing and saving using input fields.
  - Delete button removes the row from the DOM.
*/

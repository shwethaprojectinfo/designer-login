fetch('http://localhost:8080/getDesignerData','/getDesignerData')
  .then(response => response.json())
  .then(data => {
    // Generate the table dynamically using the signup data
    const table = document.createElement('table');

    // Create the table header
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Email', 'Password', 'Confirmpassword','Mobile Number', 'Addressline1','Addressline1','Landmark','City','Country','Pincode'];
    headers.forEach(headerText => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create table rows with signup details
    data.forEach(designersignup => {

      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = usersigup.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement('td');
      emailCell.textContent = usersigup.email;
      row.appendChild(emailCell);

      const passwordCell = document.createElement('td');
      emailCell.textContent = usersigup.password;
      row.appendChild(passwordCell);

      const mobilenumberCell = document.createElement('td');
      mobileCell.textContent = usersigup.mobilenumber;
      row.appendChild(mobilenumberCell);

      const addressline1Cell = document.createElement('td');
      addressCell.textContent = usersigup.addressline1;
      row.appendChild(addressline1Cell);

      const addressline2Cell = document.createElement('td');
      addressCell.textContent = usersigup.addressline2;
      row.appendChild(addressline2Cell);

      const landmarkCell = document.createElement('td');
      addressCell.textContent = usersigup.landmark;
      row.appendChild(landmarkCell);

      const cityCell = document.createElement('td');
      addressCell.textContent = usersigup.city;
      row.appendChild(cityCell);

    //   const stateCell = document.createElement('td');
    //   addressCell.textContent = designersigup.state;
    //   row.appendChild(stateCell);

      const countryCell = document.createElement('td');
      addressCell.textContent = usersigup.country;
      row.appendChild(countryCell);

      const pincodeCell = document.createElement('td');
      addressCell.textContent = usersigup.pincode;
      row.appendChild(pincodeCell);



      table.appendChild(row);
    });

    // Add the table to the DOM
    document.getElementById('signup-form').appendChild(table);
  })
  .catch(error => {
    console.error('Error fetching signup data:', error);
  });
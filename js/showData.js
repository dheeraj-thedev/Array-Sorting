'use strict'
        var displayTableData = document.getElementById('displayData'); 
        displayTableData.addEventListener('click',function(event)
        {
            event.preventDefault();
            document.getElementById('displayTableData').innerHTML='';
                       
            if (users.length==0)
            {
                displayTableData.innerHTML="<form class='formLayout text-center m-5 p-5'><h2>No User Data To Display</h2></form>";
            }
            else
            {
                var createForm= document.createElement('form');
                var createTable = document.createElement('table');
                var createTableRow = document.createElement('tr');
                var createTableData = document.createElement('td');
                var createTableTitle = document.createElement('h2');
                var createTableBody = document.createElement('tbody');
                var createTableRow1 = document.createElement('tr');

                displayTableData.append(createForm);
                createForm.className='formLayout text-center m-5';
                createForm.innerText='';
                createForm.append(createTable);
                createTable.className='tableLayout m-auto';
                createTable.innerHTML="<thead><tr><td colspan='6' class='text-center'><h2 class='p-3 display-4'>User Profiles</h2></td></tr></thead>";
                createTable.append(createTableBody);
                createTableBody.innerHTML="<tr><td>S/N</td><td>First Name</td><td>Last Name</td><td>Address</td><td>Contact</td><td>Email</td><tr>";
                
                for(let cnt=0; cnt<users.length;cnt++)
                {
                    var counter = cnt+1;
                    var tableFirstName = document.createElement('td');
                    var tableLastName = document.createElement('td');
                    var tableAddress = document.createElement('td');
                    var tableContact = document.createElement('td');
                    var tableEmail = document.createElement('td');
                    var tableRow = document.createElement('tr');
                    var tableCounter = document.createElement('td');
                    var clnRow = tableRow.cloneNode(true);

                    // Append values for the various variable
                    tableCounter.append(counter);
                    tableFirstName.append(users[cnt].fName);
                    tableLastName.append(users[cnt].lName);
                    tableAddress.append(users[cnt].address);
                    tableContact.append(users[cnt].contact);
                    tableEmail.append(users[cnt].email);

                    // Table Creation
                    createTableBody.appendChild(tableRow);
                    tableRow.appendChild(tableCounter);
                    tableRow.appendChild(tableFirstName);
                    tableRow.appendChild(tableLastName);
                    tableRow.appendChild(tableAddress);
                    tableAddress.classList='text-start';
                    tableRow.appendChild(tableContact);
                    tableRow.appendChild(tableEmail);
                }
            }       
        })
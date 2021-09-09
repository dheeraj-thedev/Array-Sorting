// var docSubmit = document.getElementById('submit')
'use strict'
        // declaring the variables
        var submitForm = document.getElementById('submitForm');
        var users=[];
        var fName = document.getElementById('fName')
        var lName = document.getElementById('lName')
        var address = document.getElementById('address')
        var contact = document.getElementById('contact')
        var email = document.getElementById('email')
 
        submitForm.addEventListener('click',function(event)
        {
            // Checks empty field
            
            if(fName.value=='')
            {fName.placeholder='Enter First Name'}
            else if(lName.value=='')
            {lName.placeholder='Enter Last Name'}
            else if(address.value=='')
            {address.placeholder='Enter Address'}
            else if(contact.value=='')
            {contact.placeholder='Enter Contact'}
            else if(email.value=='')
            {email.placeholder='Enter Email'}
            else
            {
                var userProfile =
                {
                    'fName' : fName.value,
                    'lName' : lName.value,
                    'address' : address.value,
                    'contact': contact.value,
                    'email': email.value
                }
                users.push(userProfile);
                alert('Data Captured');

                document.getElementById("userDataForm").reset();
                event.preventDefault()
            }
        })
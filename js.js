//for login page
function validate()
        {
            var user = document.getElementById('userName').value.trim();
            var pword = document.getElementById('password').value.trim();

            if  (user == "" || pword == "")
            {
                alert("Please enter a valid username and/or password.");
                return false;
            }
            else if (pword.length <= 5)
            {
                alert("Invalid Password! Password must contain 6 or more characters.");
                return false;
            }
            else
            {
                alert(`Welcome, ${user}`);
                window.location.href = 'PatientForm.html';
            }

            var choice = document.getElementsByName("pick");
        }

//for patient info page

function checkedMedHistory()
{
    var medHistory = document.getElementsByTagName('input');

    for (var i = 0; i < medHistory.length; i++)
    {
        if (medHistory[i].type == 'checkbox')
        {
            return true;
        }
    }

    return false;
}

function enableText()
{
    var medicyes = document.getElementById("yesmed");
    var medtext = document.getElementById("medicationtext");
    medtext.disabled = medicyes.checked ? false : true;
    medtext.value="";
    if(!medtext.disabled)
    {
        medtext.focus();
    }
}

function submitInfo()
{
    var fname = document.getElementById('fname').value.trim();
    var mname = document.getElementById('mname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var number = /^\d{10}$/;
    var address = document.getElementById('address').value;
    var bday = document.getElementById('bday').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var checkedHist = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var symptom = document.getElementById("symptom").value;
    var medicans = document.querySelector('input[name="medication"]:checked').value;

    

    if (fname == "" || mname == "" || lname == "")
    {
        alert("First Name, Middle Name and Last Name should be provided.");
        return false;
    }
    else if (gender == null)
    {
        alert("Gender should be provided.");
        return false;
    }
    else if (bday == "")
    {
        alert("Birthday should be provided.");
        return false;
    }
    else if (contact == "")
    {
        alert("Contact Number should be provided.");
        return false;
    }
    else if ((contact.value.match(number)))
    {
        alert("Please provide the correct phone number.");
        return false;
    }
    else if (address == "")
    {
        alert("Address should be provided.");
        return false;
    }
    else if (checkedHist <= 0)
    {
        alert("Medical History should be provided.");
        return false;
    }
    else if (symptom <= 0)
    {
        alert("You must provide your current symptom/s.");
        return false;
    }
    else if (medicans == "")
    {
        alert("Please answer the medications question.");
        return false;
    }
    else
    {
        alert(`Success! Patient Information submitted for Patient ${fname} ${mname} ${lname}`);
        location.reload();
    }
}

function refresh()
{
    location.reload();
}
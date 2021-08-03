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

function submitInfo()
{
    var fname = document.getElementById('fname').value.trim();
    var mname = document.getElementById('mname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var address = document.getElementById('address').value;
    var bday = document.getElementById('bday').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    

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
    else if (address == "")
    {
        alert("Address should be provided.");
        return false;
    }
    else if (!checkedMedHistory())
    {
        alert("Medical History should be provided.");
        return false;
    }
    else
    {
        alert(`Patient Information submitted for Patient ${fname} ${mname} ${lname}`);
        location.reload();
    }
}

function refresh()
{
    location.reload();
}
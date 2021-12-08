



function Validate(email) 
  let EmailID = email.value;
  let user={email}
  console.log(user);
{
 if (/^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!");
    return (false)
}

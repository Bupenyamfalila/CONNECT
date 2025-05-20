
document.getElementById("bookingForm").addEventListener("submit",function(e)
{
    e.preventDefault()
    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let errorMsg =
    document.getElementById("error-msg").value.trim();

    if(name===""||email===""||phone==="") {
        errorMsg.textContent="Please fill in all fields.";
        return;
      
    }
    if (!email.include("@")||!email.include(".")){
        errorMsg.textContent="Enter a vaild email.";
        return;
    }
    if(isNaN(phone)||phone.length<9) {
        errorMsg.textContent="Enter a vaild phone number.";
        return;
    }
    errorMsg.textContent="";
    alert("Booking successful!");
});


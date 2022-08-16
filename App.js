function validate() 
{
    var user_name=document.getElementById("user_name").value;
    var password=document.getElementById("password").value;

    if(user_name=="beluj2021" && password =="Final2021")
    {
        return true;
    }
    else
    {
        alert("Login Unsuccessful. Try Again!");
        return false;
    }
    
}

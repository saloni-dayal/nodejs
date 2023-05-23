const send=document.getElementById("send")
send.addEventListener("click",()=>{
    console.log("button clicked")
    name=document.getElementById("name").value
    service_name=document.getElementById("service_name").value
    email=document.getElementById("email").value
    Date_of_Service=document.getElementById("service").value
    Number_of_days=document.getElementById("days").value
    console.log(name)
    console.log(service_name)
    console.log(email)
    const new_data={name:name,service_name:service_name,email:email,Date_of_Service:Date_of_Service,Number_of_days:Number_of_days}
         if (localStorage.getItem("services")==null){
            localStorage.setItem("services",'[]');
         }
          var old_data=JSON.parse(localStorage.getItem("services"))
          old_data.push(new_data)
          localStorage.setItem("services",JSON.stringify(old_data));
          console.log(new_data)
          window.open("services.html")

})
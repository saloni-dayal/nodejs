// $(document).ready(function(){
//     $("#userclick").click(function(){
//       $.get("https://reqres.in/api/users?page=2", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//       });
//     });
//   });

var tab=document.getElementById("usertab");
var num=document.getElementById("num")
function run() {
    const xhr = new XMLHttpRequest();
    var url = 'https://reqres.in/api/users?page=2';
    xhr.open("GET", url);
     xhr.send();
    var data="empty";
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        user_data=data.data;
        console.log(user_data);
        num.innerHTML=user_data.length;
        for(i=0;i<user_data.length;i++)
        {
           tab.innerHTML+=adduser(user_data[i].id,user_data[i].email,user_data[i].first_name,user_data[i].last_name);
        }
    }


}
run();

// $.get("https://reqres.in/api/users?page=2",function(data,status,xhr){
//     data = JSON.parse(xhr.responseText);
//     user_data = data.data;
//     console.log(user_data)
// })

// $.post("https://reqres.in/api/users",function(xhr,status,responseText){

// })







//for( persons in data){
  //  console.log(persons)
    //document.getElementById("usertab").innerHTML="<tr><td>"+obj.name+"</td><td>"+obj.mail+"</td><td>"+obj.username+"</td><td>"+obj.address+"</td><td class='text-end'><a href='' class='btn btn-outline-info '><i class='fas fa-pen'></i></a></td></tr>"
//}

function adduser(id,email,firstname,lastname){
    return `<tr>

    <th>${id}</th>

    <th>${email}</th>
    <th>${firstname}</th>
    <th>${lastname}</th>
    </tr>`;
}

function postUser(){
    const xhr1=new XMLHttpRequest();
    var url = 'https://reqres.in/api/users';
    xhr1.open("POST", url);
    var data1={
        id:"13",
        email:"reddylikitha201@gmail.com",
        firstname:"likitha",
        lastname:"p"
    }
    data1=JSON.stringify(data1)
    xhr1.setRequestHeader("content-type","application/json")

    xhr1.send(data1)
    console.log("success")
    xhr1.onload = function () {
        user_data=JSON.parse(xhr1.responseText);
        alert("Successful"+user_data.lastname)
        console.log(user_data.email)
  
            id=user_data.id;
            email=user_data.email;
            firstname=user_data.firstname;
            lastname=user_data.lastname;

           tab.innerHTML+=`<tr>

           <th>${id}</th>
       
           <th>${email}</th>
           <th>${firstname}</th>
           <th>${lastname}</th>
           </tr>`;
        
    }
}


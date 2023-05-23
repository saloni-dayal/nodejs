$(document).ready(function()
{
    query_data=JSON.parse(localStorage["queries"])
    var que=document.getElementById("usertab1")
    var num1=document.getElementById("num1")
    $("#submit").click(function()
    {
      $.get("http://127.0.0.1:5501/contact.html", function(data, status)
      {
            console.log("data loaded")
            data = JSON.parse(data)

            for(i of query_data)
{
    name=query_data[i].name
    email=query_data[i].email
    subject=query_data[i].subject
    message=query_data[i].message

    que.innerHTML+=`<tr>

           <th>${name}</th>
       
           <th>${email}</th>
           <th>${subject}</th>
           <th>${message}</th>
           </tr>`;
}

      });
    });

    // $.ajax({type: "post",url: "http://localhost:3000/signin",      contentType: "application/json",      data: JSON.stringify(data),      xhrFields: {        withCredentials: false,      },      headers: {},      success: function (data) {        console.log("Success");        console.log(data);      },      error: function () {        console.log(          "We are sorry but our servers are having an issue right now"        );      },    });

  });
query_data=JSON.parse(localStorage["services"])
var que=document.getElementById("usertab2")
for(i=0;i<query_data.length;i++)
{
    name=query_data[i].name
    service_name=query_data[i].service_name
    email=query_data[i].email
    Date_of_Service=query_data[i].Date_of_Service
    Number_of_days=query_data[i].Number_of_days

    que.innerHTML+=`<tr>

           <th>${name}</th>
           <th>${service_name}</th>
       
           <th>${email}</th>
           <th>${Date_of_Service}</th>
           <th>${Number_of_days}</th>
           </tr>`;
}
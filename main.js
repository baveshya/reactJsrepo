$(document).ready(function () {
var json;
    $.getJSON("https://jsonplaceholder.typicode.com/albums ",function (ajson)
     {	
     	json=ajson;
     	console.log(json);
        console.log(json.length);
       $.getJSON("https://jsonplaceholder.typicode.com/photos ",function (bjson)
     {  
      json1=bjson;
      console.log(json1);
       console.log(json1.length);
       $.getJSON("https://jsonplaceholder.typicode.com/photos ",function (bjson)
     {  
      json1=bjson;
      console.log(json1);
       console.log(json1.length); 
        var tr;
         
        for (var i = 0; i < json.length; i++) 
        {
            tr = $('<tr/>');
           
            tr.append("<td>" + json[i].id + "</td>");
            tr.append("<td>" + json[i].title+ "</td>");
            tr.append("<td>" + json[i].userId+ "</td>");
         
            

            tr.append("<td>" + json1[i].url+ "</td>");
            
            
            
            /*tr.append("<td>" + json[i].licensed+ "</td>");*/
			/*tr.append("<td>" + json[i].name+ "</td>");
			 tr.append("<td>" + json[i].invited+ "</td>");
            tr.append("<td>" + json[i].locked+ "</td>");
			tr.append("<td>" + json[i].email+ "</td>");*/
            $('table').append(tr);

        }
        
    });
});
});
function fnExcelReport()
         {
               var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
               var textRange; var j=0;
               tab = document.getElementById('table'); // id of table
  
               for(j = 0 ; j < tab.rows.length ; j++) 
               {     
                     tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
                     //tab_text=tab_text+"</tr>";
               }
  
               tab_text=tab_text+"</table>";
   
  
               var ua = window.navigator.userAgent;
               var msie = ua.indexOf("MSIE "); 
  
               
              if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
               {
                  txtArea1.document.open("txt/html","replace");
                  txtArea1.document.write(tab_text);
                  txtArea1.document.close();
                  txtArea1.focus(); 
                  sa=txtArea1.document.execCommand("SaveAs",true,"Global View Task.xls");
               }  
                  sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
                 return (sa);
         }



/*
$(document).ready(function () {
var json;
    $.getJSON("http://maamw32119:9002/getFormdata  ",function (ajson)
     {	
     	json=ajson;
     	console.log(json);
     	var json1;
    $.getJSON("https://jsonplaceholder.typicode.com/posts ",function (bjson)
     {	
     	json1=bjson;
     	console.log(json1);
        var tr;
         tr = $('<tr/>');
        tr.append("<td>" + "Last Login"+ "</td)");
         tr.append("<td>" + "Archived Status"+ "</td)");
          tr.append("<td>" + "Role"+ "</td)");
           tr.append("<td>" + "License Status"+ "</td)");
            tr.append("<td>" + "User Name"+ "</td)");
             tr.append("<td>" + "Invitation Status"+ "</td)");
             tr.append("<td>" + "Locked Status"+ "</td)");
             tr.append("<td>" + "Email"+ "</td)");
              $('table').append(tr);
              for(var i=0;i< json.length; i++)
              {
              	tr = $('<tr/>');
            tr.append("<td>" + json[i].date + "</td>");
            tr.append("<td>" + json[i].archived+ "</td>");
            tr.append("<td>" + json[i].role+ "</td>");
            tr.append("<td>" + json[i].licensed+ "</td>");
			tr.append("<td>" + json[i].name+ "</td>");
			 tr.append("<td>" + json[i].invited+ "</td>");
            tr.append("<td>" + json[i].locked+ "</td>");
			tr.append("<td>" + json[i].email+ "</td>");
			if ((json[i].id) == (json1[i].id))
			{
			tr.append("<td>" + json1[i].title+ "</td>");
			}	
            $('table').append(tr);
            console.log(table);
              }
        
    });

});

});
*/

	

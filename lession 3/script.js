//variable
//object
//array
//json
//event binding

var var1,var2;// global variable declartion
var name ="Akash";
var arr =[];

function myData(arg1,arg2){
  // varible value assigned
var1 = arg1;
var2 =  arg2;
//document.write(var1);
}

function myFunction(){
  return var2;
}



function localVariableExample(){
  var name ="Jone peterson";// local
  console.log(name);
}

window.onload=function(){
  myData(12,"I love javscript");
  localVariableExample();
  ObjectExample();
  console.log(name);
//alert(myFunction());

}

function ObjectExample(){

  var obj1 ={idno:54156,name:"Abir", department:"cse",semester:"8th"};
  var obj2 ={idno:55464,name:"Sabbir", department:"bba",semester:"8th"};
  var obj3 ={idno:54888,name:"Tomas", department:"et",semester:"8th"};
  var obj4 ={idno:34534,name:"Smith", department:"eee",semester:"8th"};
  arr.push(obj1);
  arr.push(obj2);
  arr.push(obj3);
  arr.push(obj4);
  showData();
  }

  function showData(){

      var html ="";
      for (var i = 0; i < arr.length; i++) {
        html+="<tr>";
            html += "<td>"+arr[i].idno+"</td>";
            html += "<td>"+arr[i].name+"</td>";
            html += "<td>"+arr[i].department+"</td>";
            html += "<td>"+arr[i].semester+"</td>";
            html +="<td><button onclick='deleteRc()'>X</button></td>";
        html+="</tr>";
          document.getElementById('datatable').innerHTML = html;
  }
}

function addMoreData(){
  var name= document.getElementById('name').value;
  var dpt = document.getElementById('dpt').value;
  var sem =  document.getElementById('sem').value;
  var id = document.getElementById('idno').value;
  arr.push({idno:id,name:name,department:dpt,semester:sem});
  showData();
}

function deleteRc(rid){
  alert(rid);
  //arr.slice(rid,1);
  //showData();
}

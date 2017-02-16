// use of localstorage
// how to invoke other prototype

var Students=function(){

	//console.log(Person);
	this.saveDataInLocalstorage=function(){
		var mydata =[{
			studentName:'Sabbir',
			sid:101222,
			semester:'7th'
		},{
			studentName:'AA',
			sid:345345,
			semester:'7th'
		},{
			studentName:'VBB',
			sid:345,
			semester:'7th'
		}]
		window.localStorage.setItem('info',JSON.stringify(mydata));
		window.localStorage.setItem('mydata', 'Sabbir is a bad boy!');
		window.localStorage.setItem('mydata', 'sharif is a bad boy!');
	}
	this.getDataFromLocalStorage=function(){
		var data = JSON.parse(window.localStorage.getItem('info'));
		console.log(data[1].studentName);
//1		document.getElementById('myform').innerHTML +='<h1>'+data+'</h1>';

	}

	this.invoke=function(){
		//Person.call(this, 'smith',45,'male');
		console.log(objkey.myName())
	}
}
var x=new Students();
x.saveDataInLocalstorage();
x.getDataFromLocalStorage();


// object,json,predeined object, predefined functions, introduction with oop js.
//anonymous function
// browser storing

var Person= function(name, id, sex)
{

	// js constructor
	this.name = name;
	this.id = id;
	this.sex = sex;
	// alert(this.name);

	this.myName=function(){

		return this.name;
	}
	this.myfun=function(){
		console.log(this.sex);
	}

	this.dataObject=function(){
		var mydata ={
			name:this.myName(),
			id:this.id,
			sex:this.sex,

		};	

		console.log(mydata);	1
	}
}

var objkey = new Person('jone',6541654,'Male');
// console.log(objkey.myName());
objkey.dataObject();



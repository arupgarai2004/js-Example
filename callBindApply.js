let name ={
	firstname:"Arup",
	lastName:"Garai",
	printFullName:function(state,city){
		console.log( this.firstname +" "+ this.lastName +" "+state +" "+city);
	}
}
name.printFullName("Karnataka","Bangalore");
let name2={
	firstname:"Sachin",
	lastName:"Tendulkar",
}
name.printFullName.call(name2,"MH","Mumbai");// print fullname borrowed from name object .

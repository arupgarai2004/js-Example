let name ={
	firstname:"Arup",
	lastName:"Garai",
	printFullName:function(state,city){
		console.log( this.firstname +" "+ this.lastName +" "+state +" "+city);
	}
}

let name2={
	firstname:"Sachin",
	lastName:"Tendulkar",
}

name.printFullName.call(name2,'WB','Kolkata'); //Call argment as parameter 
name.printFullName.apply(name2,['DL','Delhi']); // apply argument as array 
let bindData=name.printFullName.bind(name2,'MH','Mumbai'); // functtion need to invoke separatly 
bindData();



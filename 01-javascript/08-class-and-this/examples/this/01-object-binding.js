// This is the example we went over in class
function foo() {
	console.log( this.a ); //This will refer to the scope of the object, so a will equal 2
}

var obj = {
	a: 2,
	foo: foo // Because we attach the function foo to a property, we alter the call-site to be from the object
};

obj.foo(); // output will be: 2




// The below code will drive this point home
function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo // function foo is tied to obj2 property. so we are causing the call-site to take place at obj 2
};

var obj1 = {
	a: 2,
	obj2: obj2 // obj1 will hold obj2 within a property. 
};

obj1.obj2.foo(); // although obj1 triggers the call for foo, the call-site is bound to obj2 so output will be: 42
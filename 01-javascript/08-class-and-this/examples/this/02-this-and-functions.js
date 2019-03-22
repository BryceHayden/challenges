function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

// We are using .call to bind "this" within the function to point to the obj variable
foo.call( obj ); // this.a will output the value found on obj which will be: 2


//The following show how to create a hard binding -- This is what lead to the creation of the built in method of .bind
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var obj2 = {
  a: 25
}
var bar = function() {
	foo.call( obj ); // Whenever this function is called it will set "this" for foo to be the variable obj
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden if it didn't hard bind, then the following line would alter this to be 
// bound to the obj2
bar.call( obj2 ); // 2


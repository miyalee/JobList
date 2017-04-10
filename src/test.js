var a = {
	name: 'bingo',
	call: function(){
		console.log(this.name);
	}
}

var  b = {
	name: "jake",
	call: a.call
}

//b.call();
var call = b.call;
call();
console.log(window.nme);
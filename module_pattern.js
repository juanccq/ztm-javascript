// IIFE Inmediatly Invoke Function Expression
// JQuery Style
// Inner variables are only available if the module return them
var fightModule = (function(){
	var harry = 'potter';
	var voldemort = 'he who must not be named'

	function fight( char1, char2 ) {
		var attack1 = Math.floor(Math.random() * char1.length)
		var attack2 = Math.floor(Math.random() * char2.length)

		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
	}

	return {
		fight: fight
	}
})()
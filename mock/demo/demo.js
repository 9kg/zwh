const Mock = require('mockjs');
module.exports = ({arg1, arg2}) => {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve({a:1112});
		}, 2000);
	});
}
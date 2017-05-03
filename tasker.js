const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('index.pug');
function build() {
	console.log('Buildou essa merda.');
	return compiledFunction();
}

fs.writeFile('index.html', build(), function(err){
	console.log(err);
});
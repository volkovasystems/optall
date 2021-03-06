"use strict"; /*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "optall",
              			"path": "optall/optall.js",
              			"file": "optall.js",
              			"module": "optall",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/optall.git",
              			"test": "optall-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract all designated elements with modifier.
              
              		Modifier can be a boolean flag or a function.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"pyck": "pyck",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var doubt = require("doubt");
var pyck = require("pyck");
var zelf = require("zelf");

var optall = function optall(list, condition, modifier) {
	/*;
                                                         	@meta-configuration:
                                                         		{
                                                         			"list:required": [
                                                         				"Arguments",
                                                         				"[*]"
                                                         			],
                                                         			"condition:required": [
                                                         				"string",
                                                         				"function",
                                                         				BOOLEAN,
                                                         				FUNCTION,
                                                         				NUMBER,
                                                         				OBJECT,
                                                         				STRING,
                                                         				UNDEFINED,
                                                         				SYMBOL,
                                                         				"[string, function]"
                                                         			],
                                                         			"modifier": [
                                                         				"function",
                                                         				"boolean"
                                                         			]
                                                         		}
                                                         	@end-meta-configuration
                                                         */

	if (!doubt(list, AS_ARRAY)) {
		throw new Error("invalid list");
	}

	var self = zelf(this);

	var result = [];

	if (typeof modifier == "boolean") {
		result = pyck.bind(self)(list, condition, modifier);

	} else {
		result = pyck.bind(self)(list, condition);
	}

	if (typeof modifier == "function") {
		return result.map(modifier);

	} else {
		return result;
	}
};

module.exports = optall;

//# sourceMappingURL=optall.support.js.map
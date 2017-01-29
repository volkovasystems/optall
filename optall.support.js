"use strict";

/*;
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
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
			"falze": "falze",
			"harden": "harden",
			"protype": "protype",
			"pyck": "pyck",
			"zelf": "zelf"
		}
	@end-include
*/

var doubt = require("doubt");
var falze = require("falze");
var harden = require("harden");
var protype = require("protype");
var pyck = require("pyck");
var zelf = require("zelf");

harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("NUMBER", "number");
harden("OBJECT", "object");
harden("STRING", "string");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

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

	if (falze(condition)) {
		throw new Error("invalid condition");
	}

	var self = zelf(this);

	var result = [];

	if (protype(modifier, BOOLEAN)) {
		result = pyck.bind(self)(list, condition, modifier);
	} else {
		result = pyck.bind(self)(list, condition);
	}

	if (protype(modifier, FUNCTION)) {
		return result.map(modifier);
	} else {
		return result;
	}
};

module.exports = optall;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGFsbC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6ZSIsImhhcmRlbiIsInByb3R5cGUiLCJweWNrIiwiemVsZiIsIm9wdGFsbCIsImxpc3QiLCJjb25kaXRpb24iLCJtb2RpZmllciIsIkFTX0FSUkFZIiwiRXJyb3IiLCJzZWxmIiwicmVzdWx0IiwiQk9PTEVBTiIsImJpbmQiLCJGVU5DVElPTiIsIm1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiOztBQUVBRSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsV0FBUixFQUFxQixXQUFyQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7O0FBRUEsSUFBTUksU0FBUyxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QkMsU0FBdkIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSSxDQUFDVixNQUFPUSxJQUFQLEVBQWFHLFFBQWIsQ0FBTCxFQUE4QjtBQUM3QixRQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJVixNQUFPTyxTQUFQLENBQUosRUFBd0I7QUFDdkIsUUFBTSxJQUFJRyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9QLEtBQU0sSUFBTixDQUFYOztBQUVBLEtBQUlRLFNBQVMsRUFBYjs7QUFFQSxLQUFJVixRQUFTTSxRQUFULEVBQW1CSyxPQUFuQixDQUFKLEVBQWtDO0FBQ2pDRCxXQUFTVCxLQUFLVyxJQUFMLENBQVdILElBQVgsRUFBbUJMLElBQW5CLEVBQXlCQyxTQUF6QixFQUFvQ0MsUUFBcEMsQ0FBVDtBQUVBLEVBSEQsTUFHSztBQUNKSSxXQUFTVCxLQUFLVyxJQUFMLENBQVdILElBQVgsRUFBbUJMLElBQW5CLEVBQXlCQyxTQUF6QixDQUFUO0FBQ0E7O0FBRUQsS0FBSUwsUUFBU00sUUFBVCxFQUFtQk8sUUFBbkIsQ0FBSixFQUFtQztBQUNsQyxTQUFPSCxPQUFPSSxHQUFQLENBQVlSLFFBQVosQ0FBUDtBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9JLE1BQVA7QUFDQTtBQUNELENBckREOztBQXVEQUssT0FBT0MsT0FBUCxHQUFpQmIsTUFBakIiLCJmaWxlIjoib3B0YWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvcHRhbGxcIixcblx0XHRcdFwicGF0aFwiOiBcIm9wdGFsbC9vcHRhbGwuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9wdGFsbC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvcHRhbGxcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb3B0YWxsLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib3B0YWxsLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXh0cmFjdCBhbGwgZGVzaWduYXRlZCBlbGVtZW50cyB3aXRoIG1vZGlmaWVyLlxuXG5cdFx0TW9kaWZpZXIgY2FuIGJlIGEgYm9vbGVhbiBmbGFnIG9yIGEgZnVuY3Rpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPT0xFQU5cIiwgXCJib29sZWFuXCIgKTtcbmhhcmRlbiggXCJGVU5DVElPTlwiLCBcImZ1bmN0aW9uXCIgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgXCJudW1iZXJcIiApO1xuaGFyZGVuKCBcIk9CSkVDVFwiLCBcIm9iamVjdFwiICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFwic3RyaW5nXCIgKTtcbmhhcmRlbiggXCJVTkRFRklORURcIiwgXCJ1bmRlZmluZWRcIiApO1xuaGFyZGVuKCBcIlNZTUJPTFwiLCBcInN5bWJvbFwiICk7XG5cbmNvbnN0IG9wdGFsbCA9IGZ1bmN0aW9uIG9wdGFsbCggbGlzdCwgY29uZGl0aW9uLCBtb2RpZmllciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiW3N0cmluZywgZnVuY3Rpb25dXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJtb2RpZmllclwiOiBbXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYm9vbGVhblwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGxpc3QsIEFTX0FSUkFZICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaXN0XCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6ZSggY29uZGl0aW9uICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IHJlc3VsdCA9IFsgXTtcblxuXHRpZiggcHJvdHlwZSggbW9kaWZpZXIsIEJPT0xFQU4gKSApe1xuXHRcdHJlc3VsdCA9IHB5Y2suYmluZCggc2VsZiApKCBsaXN0LCBjb25kaXRpb24sIG1vZGlmaWVyICk7XG5cblx0fWVsc2V7XG5cdFx0cmVzdWx0ID0gcHljay5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiApO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIG1vZGlmaWVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHJlc3VsdC5tYXAoIG1vZGlmaWVyICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRhbGw7XG4iXX0=

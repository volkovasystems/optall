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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGFsbC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJmYWx6ZSIsImhhcmRlbiIsInByb3R5cGUiLCJweWNrIiwiemVsZiIsIm9wdGFsbCIsImxpc3QiLCJjb25kaXRpb24iLCJtb2RpZmllciIsIkFTX0FSUkFZIiwiRXJyb3IiLCJzZWxmIiwicmVzdWx0IiwiQk9PTEVBTiIsImJpbmQiLCJGVU5DVElPTiIsIm1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7O0FBRUFFLE9BQVEsU0FBUixFQUFtQixTQUFuQjtBQUNBQSxPQUFRLFVBQVIsRUFBb0IsVUFBcEI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxXQUFSLEVBQXFCLFdBQXJCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjs7QUFFQSxJQUFNSSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxTQUF2QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxLQUFJLENBQUNWLE1BQU9RLElBQVAsRUFBYUcsUUFBYixDQUFMLEVBQThCO0FBQzdCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlWLE1BQU9PLFNBQVAsQ0FBSixFQUF3QjtBQUN2QixRQUFNLElBQUlHLEtBQUosQ0FBVyxtQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1AsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSVEsU0FBUyxFQUFiOztBQUVBLEtBQUlWLFFBQVNNLFFBQVQsRUFBbUJLLE9BQW5CLENBQUosRUFBa0M7QUFDakNELFdBQVNULEtBQUtXLElBQUwsQ0FBV0gsSUFBWCxFQUFtQkwsSUFBbkIsRUFBeUJDLFNBQXpCLEVBQW9DQyxRQUFwQyxDQUFUO0FBRUEsRUFIRCxNQUdLO0FBQ0pJLFdBQVNULEtBQUtXLElBQUwsQ0FBV0gsSUFBWCxFQUFtQkwsSUFBbkIsRUFBeUJDLFNBQXpCLENBQVQ7QUFDQTs7QUFFRCxLQUFJTCxRQUFTTSxRQUFULEVBQW1CTyxRQUFuQixDQUFKLEVBQW1DO0FBQ2xDLFNBQU9ILE9BQU9JLEdBQVAsQ0FBWVIsUUFBWixDQUFQO0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0ksTUFBUDtBQUNBO0FBQ0QsQ0FyREQ7O0FBdURBSyxPQUFPQyxPQUFQLEdBQWlCYixNQUFqQiIsImZpbGUiOiJvcHRhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib3B0YWxsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJvcHRhbGwvb3B0YWxsLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvcHRhbGwuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib3B0YWxsXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb3B0YWxsLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib3B0YWxsLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXh0cmFjdCBhbGwgZGVzaWduYXRlZCBlbGVtZW50cyB3aXRoIG1vZGlmaWVyLlxuXG5cdFx0TW9kaWZpZXIgY2FuIGJlIGEgYm9vbGVhbiBmbGFnIG9yIGEgZnVuY3Rpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPT0xFQU5cIiwgXCJib29sZWFuXCIgKTtcbmhhcmRlbiggXCJGVU5DVElPTlwiLCBcImZ1bmN0aW9uXCIgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgXCJudW1iZXJcIiApO1xuaGFyZGVuKCBcIk9CSkVDVFwiLCBcIm9iamVjdFwiICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFwic3RyaW5nXCIgKTtcbmhhcmRlbiggXCJVTkRFRklORURcIiwgXCJ1bmRlZmluZWRcIiApO1xuaGFyZGVuKCBcIlNZTUJPTFwiLCBcInN5bWJvbFwiICk7XG5cbmNvbnN0IG9wdGFsbCA9IGZ1bmN0aW9uIG9wdGFsbCggbGlzdCwgY29uZGl0aW9uLCBtb2RpZmllciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiW3N0cmluZywgZnVuY3Rpb25dXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJtb2RpZmllclwiOiBbXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYm9vbGVhblwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGxpc3QsIEFTX0FSUkFZICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaXN0XCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6ZSggY29uZGl0aW9uICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IHJlc3VsdCA9IFsgXTtcblxuXHRpZiggcHJvdHlwZSggbW9kaWZpZXIsIEJPT0xFQU4gKSApe1xuXHRcdHJlc3VsdCA9IHB5Y2suYmluZCggc2VsZiApKCBsaXN0LCBjb25kaXRpb24sIG1vZGlmaWVyICk7XG5cblx0fWVsc2V7XG5cdFx0cmVzdWx0ID0gcHljay5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiApO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIG1vZGlmaWVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHJlc3VsdC5tYXAoIG1vZGlmaWVyICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRhbGw7XG4iXX0=

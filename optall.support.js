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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGFsbC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsInB5Y2siLCJ6ZWxmIiwib3B0YWxsIiwibGlzdCIsImNvbmRpdGlvbiIsIm1vZGlmaWVyIiwiQVNfQVJSQVkiLCJFcnJvciIsInNlbGYiLCJyZXN1bHQiLCJiaW5kIiwibWFwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUcsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QkMsU0FBdkIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSSxDQUFDUCxNQUFPSyxJQUFQLEVBQWFHLFFBQWIsQ0FBTCxFQUE4QjtBQUM3QixRQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPUCxLQUFNLElBQU4sQ0FBWDs7QUFFQSxLQUFJUSxTQUFTLEVBQWI7O0FBRUEsS0FBSSxPQUFPSixRQUFQLElBQW1CLFNBQXZCLEVBQWtDO0FBQ2pDSSxXQUFTVCxLQUFLVSxJQUFMLENBQVdGLElBQVgsRUFBbUJMLElBQW5CLEVBQXlCQyxTQUF6QixFQUFvQ0MsUUFBcEMsQ0FBVDs7QUFFQSxFQUhELE1BR0s7QUFDSkksV0FBU1QsS0FBS1UsSUFBTCxDQUFXRixJQUFYLEVBQW1CTCxJQUFuQixFQUF5QkMsU0FBekIsQ0FBVDtBQUNBOztBQUVELEtBQUksT0FBT0MsUUFBUCxJQUFtQixVQUF2QixFQUFtQztBQUNsQyxTQUFPSSxPQUFPRSxHQUFQLENBQVlOLFFBQVosQ0FBUDs7QUFFQSxFQUhELE1BR0s7QUFDSixTQUFPSSxNQUFQO0FBQ0E7QUFDRCxDQWpERDs7QUFtREFHLE9BQU9DLE9BQVAsR0FBaUJYLE1BQWpCIiwiZmlsZSI6Im9wdGFsbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJvcHRhbGxcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwib3B0YWxsL29wdGFsbC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJvcHRhbGwuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJvcHRhbGxcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb3B0YWxsLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJvcHRhbGwtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRFeHRyYWN0IGFsbCBkZXNpZ25hdGVkIGVsZW1lbnRzIHdpdGggbW9kaWZpZXIuXHJcblxyXG5cdFx0TW9kaWZpZXIgY2FuIGJlIGEgYm9vbGVhbiBmbGFnIG9yIGEgZnVuY3Rpb24uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXHJcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcclxuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XHJcblxyXG5jb25zdCBvcHRhbGwgPSBmdW5jdGlvbiBvcHRhbGwoIGxpc3QsIGNvbmRpdGlvbiwgbW9kaWZpZXIgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcclxuXHRcdFx0XHRcdFwiWypdXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRCT09MRUFOLFxyXG5cdFx0XHRcdFx0RlVOQ1RJT04sXHJcblx0XHRcdFx0XHROVU1CRVIsXHJcblx0XHRcdFx0XHRPQkpFQ1QsXHJcblx0XHRcdFx0XHRTVFJJTkcsXHJcblx0XHRcdFx0XHRVTkRFRklORUQsXHJcblx0XHRcdFx0XHRTWU1CT0wsXHJcblx0XHRcdFx0XHRcIltzdHJpbmcsIGZ1bmN0aW9uXVwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcIm1vZGlmaWVyXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwiYm9vbGVhblwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhZG91YnQoIGxpc3QsIEFTX0FSUkFZICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpc3RcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XHJcblxyXG5cdGxldCByZXN1bHQgPSBbIF07XHJcblxyXG5cdGlmKCB0eXBlb2YgbW9kaWZpZXIgPT0gXCJib29sZWFuXCIgKXtcclxuXHRcdHJlc3VsdCA9IHB5Y2suYmluZCggc2VsZiApKCBsaXN0LCBjb25kaXRpb24sIG1vZGlmaWVyICk7XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmVzdWx0ID0gcHljay5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiApO1xyXG5cdH1cclxuXHJcblx0aWYoIHR5cGVvZiBtb2RpZmllciA9PSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdHJldHVybiByZXN1bHQubWFwKCBtb2RpZmllciApO1xyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvcHRhbGw7XHJcbiJdfQ==
//# sourceMappingURL=optall.support.js.map

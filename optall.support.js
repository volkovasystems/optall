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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGFsbC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsInB5Y2siLCJ6ZWxmIiwib3B0YWxsIiwibGlzdCIsImNvbmRpdGlvbiIsIm1vZGlmaWVyIiwiQVNfQVJSQVkiLCJFcnJvciIsInNlbGYiLCJyZXN1bHQiLCJiaW5kIiwibWFwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUcsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QkMsU0FBdkIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsS0FBSSxDQUFDUCxNQUFPSyxJQUFQLEVBQWFHLFFBQWIsQ0FBTCxFQUE4QjtBQUM3QixRQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPUCxLQUFNLElBQU4sQ0FBWDs7QUFFQSxLQUFJUSxTQUFTLEVBQWI7O0FBRUEsS0FBSSxPQUFPSixRQUFQLElBQW1CLFNBQXZCLEVBQWtDO0FBQ2pDSSxXQUFTVCxLQUFLVSxJQUFMLENBQVdGLElBQVgsRUFBbUJMLElBQW5CLEVBQXlCQyxTQUF6QixFQUFvQ0MsUUFBcEMsQ0FBVDs7QUFFQSxFQUhELE1BR0s7QUFDSkksV0FBU1QsS0FBS1UsSUFBTCxDQUFXRixJQUFYLEVBQW1CTCxJQUFuQixFQUF5QkMsU0FBekIsQ0FBVDtBQUNBOztBQUVELEtBQUksT0FBT0MsUUFBUCxJQUFtQixVQUF2QixFQUFtQztBQUNsQyxTQUFPSSxPQUFPRSxHQUFQLENBQVlOLFFBQVosQ0FBUDs7QUFFQSxFQUhELE1BR0s7QUFDSixTQUFPSSxNQUFQO0FBQ0E7QUFDRCxDQWpERDs7QUFtREFHLE9BQU9DLE9BQVAsR0FBaUJYLE1BQWpCIiwiZmlsZSI6Im9wdGFsbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm9wdGFsbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwib3B0YWxsL29wdGFsbC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwib3B0YWxsLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9wdGFsbFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb3B0YWxsLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib3B0YWxsLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXh0cmFjdCBhbGwgZGVzaWduYXRlZCBlbGVtZW50cyB3aXRoIG1vZGlmaWVyLlxuXG5cdFx0TW9kaWZpZXIgY2FuIGJlIGEgYm9vbGVhbiBmbGFnIG9yIGEgZnVuY3Rpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3Qgb3B0YWxsID0gZnVuY3Rpb24gb3B0YWxsKCBsaXN0LCBjb25kaXRpb24sIG1vZGlmaWVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRPQkpFQ1QsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTWU1CT0wsXG5cdFx0XHRcdFx0XCJbc3RyaW5nLCBmdW5jdGlvbl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIm1vZGlmaWVyXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJib29sZWFuXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFkb3VidCggbGlzdCwgQVNfQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpc3RcIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IHJlc3VsdCA9IFsgXTtcblxuXHRpZiggdHlwZW9mIG1vZGlmaWVyID09IFwiYm9vbGVhblwiICl7XG5cdFx0cmVzdWx0ID0gcHljay5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiwgbW9kaWZpZXIgKTtcblxuXHR9ZWxzZXtcblx0XHRyZXN1bHQgPSBweWNrLmJpbmQoIHNlbGYgKSggbGlzdCwgY29uZGl0aW9uICk7XG5cdH1cblxuXHRpZiggdHlwZW9mIG1vZGlmaWVyID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdHJldHVybiByZXN1bHQubWFwKCBtb2RpZmllciApO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0YWxsO1xuIl19
//# sourceMappingURL=optall.support.js.map

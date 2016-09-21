/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"repository": "https://github.com/volkovasystems/optall.git",
			"test": "optall-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Extract all designated elements.

		Setting modifier to true returns non-null, non-undefined, non-empty elements
			and if number then it should be a number.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"raze": "raze",
			"zelf": "zelf"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var raze = require( "raze" );
	var zelf = require( "zelf" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

if( typeof window != "undefined" &&
	!( "zelf" in window ) )
{
	throw new Error( "zelf is not defined" );
}

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );

var optall = function optall( list, condition, modifier ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"Arguments",
					"[*]"
				],
				"condition:required": [
					"string",
					"function"
				],
				"modifier": [
					"function",
					true
				]
			}
		@end-meta-configuration
	*/

	if( typeof condition != STRING &&
		typeof condition != FUNCTION )
	{
		throw new Error( "invalid condition" );
	}

	if( typeof condition == STRING &&
		condition != BOOLEAN &&
		condition != FUNCTION &&
		condition != NUMBER &&
		condition != OBJECT &&
		condition != STRING &&
		condition != UNDEFINED )
	{
		throw new Error( "invalid type condition" );
	}

	var self = zelf( this );

	var parameter = raze( list )
		.filter( function onEachItem( item, index ){
			if( typeof condition == STRING ){
				return ( typeof item == condition );

			}else if( typeof condition == FUNCTION &&
				( /^[A-Z]/ ).test( condition.name ) )
			{
				return ( item instanceof condition );

			}else{
				return condition.bind( self )( item, index );
			}
		} );

	if( typeof modifier == BOOLEAN &&
		modifier === true )
	{
		return parameter.filter( function onEachItem( item ){
			return ( item !== null &&
				typeof item != UNDEFINED &&
				item !== "" &&
				!isNaN( item ) );
		} );

	}else if( typeof modifier == FUNCTION ){
		return parameter.map( modifier );

	}else{
		return parameter;
	}
};

if( typeof module != "undefined" ){
	module.exports = optall;
}

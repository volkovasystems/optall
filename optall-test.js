
const assert = require( "assert" );
const optall = require( "./optall.js" );

assert.deepEqual( optall( [ 1, 2, 3 ], 2, true ), [ 2 ], "should be equal" );

console.log( "ok" );

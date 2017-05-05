"use strict";

const assert = require( "assert" );
const optall = require( "./optall.js" );

assert.deepEqual( optall( [ 1, 2, 3 ], 2, true ), [ 2 ] );

console.log( "ok" );

/**
 * Created by joshuabrown on 3/15/16.
 */
/*
* connect four game
 */
var playArea = [
    [ false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false ]
];

function displayPlayArea( inputArray ){
    //console.log(playArea); // too ugly
    // this works, however, it be nicer to do something a bit more colorful with SVG.
    for( var i = 0; i < inputArray.length; i++ ){
        console.log( inputArray[i] );
    }
}

function takeTurn( inputArray ){
    // this will be in random mode.
    var targetColumn = 0;
    targetColumn = Math.floor( ( Math.random() * 7 ) + 1 );
    //console.log( targetColumn );
    for( var i = 0; i < inputArray.length; i++ ){
        inputArray[ i ][ targetColumn ] = true;
    }
    displayPlayArea( inputArray );
}

function checkWin(){

}

// initial display
displayPlayArea(playArea);
takeTurn( playArea );

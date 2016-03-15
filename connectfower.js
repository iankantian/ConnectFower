/**
 * Created by joshuabrown on 3/15/16.
 */
/*
* connect four game
 */

var black = 1;
var red = 2;

var playArea = [
    [ 0,0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0,0 ]
];

console.log('command to play is  takeTurn( color )');

function displayPlayArea( inputArray ){
    //console.log(playArea); // too ugly
    // this works, however, it be nicer to do something a bit more colorful with SVG.
    //console.log('current state of play area');
    for( var i = 0; i < inputArray.length; i++ ){
        console.log( inputArray[i] );
    }
}

function randomColumn (){
    var result = Math.floor( ( Math.random() * 7 ) + 0 );
    if ( result == 7 ){
        result--;
    }
    return result;
}

function takeTurn( color, inputArray ){
    if( inputArray == undefined ){
        inputArray = playArea;
    }
    // this will be in random mode.
    var targetColumn = randomColumn();
    //console.log( targetColumn );
    for( var i = 0; i < inputArray.length; i++ ){ // row at a time
        if( inputArray[ i ][ targetColumn ] == black || inputArray[ i ][ targetColumn ] == red ){
            //console.log( 'found checker ', color );
            if( i == 0 ){
                // take another turn, this column is all full!
                // this will never exit when the columns are all full!
                takeTurn( color, inputArray );
            }
            else{
                inputArray[ i - 1 ][ targetColumn ] = color;
            }
        }
        else if( i == inputArray.length - 1 ){
                //bottom of input array, place checker
                //console.log( 'bottom found! placing color ', color);
                inputArray[ i ][ targetColumn ] = color;
                break;
        }
        else{
            //console.log('else');
        }
    }
    displayPlayArea( inputArray );
    checkWin( inputArray );
}

function checkWin( inputArray ) {
    console.log('did I win?');
    var cellToCheck = 0;
    var winCondition = 0;
    for (var i = 0; i < inputArray.length; i++) { // row at a time
        for( var j = 0; j < inputArray[i].length; j++ ){
            // there are 8 directions a win can be garnered....
            cellToCheck = inputArray[i][j];
            if( cellToCheck == 0 ){
                console.log('empty cell');
                continue; // no need to check from this cell
            }
            else{
                // right
                if( inputArray[i][j+1] == cellToCheck && inputArray[i][j+2] == cellToCheck && inputArray[i][j+3] == cellToCheck){
                    if( j > 4 ){ // not possible to win right
                        continue;
                    }
                    else {
                        console.log('right win detection');
                    }
                }
                else{
                }
            }
            // left -- will be taken care of by all the checks for right.
            // up -- down will capture all of those too
            // down
            // upRight
            // upLeft -- downRight will take these
            // downRight
            // downLeft -- upRight will do these
        }
    }
}
// initial display
displayPlayArea(playArea);

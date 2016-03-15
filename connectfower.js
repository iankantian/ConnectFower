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

function displayPlayArea( inputArray ){
    //console.log(playArea); // too ugly
    // this works, however, it be nicer to do something a bit more colorful with SVG.
    console.log('current state of play area');
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
            console.log( 'found checker ', color );
            if( i == 0 ){
                //need to try another column, this one's all filled.
            }
            else{
                inputArray[ i - 1 ][ targetColumn ] = color;
            }
        }
        else if( i == inputArray.length - 1 ){
                //bottom of input array, place checker
                console.log( 'bottom found! placing color ', color);
                inputArray[ i ][ targetColumn ] = color;
                break;
        }
        else{
            console.log('else');
        }
    }
    displayPlayArea( inputArray );
}

function checkWin(){

}

// initial display
displayPlayArea(playArea);
takeTurn( black );

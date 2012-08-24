var canvas = document.getElementById("tetris");
var ctx = canvas.getContext( '2d' );
var W = 300, H = 600;
var BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

function drawBlock( x, y ) {
    ctx.fillRect( BLOCK_W * x, BLOCK_H * y, BLOCK_W - 2 , BLOCK_H - 2 );
    ctx.strokeRect( BLOCK_W * x, BLOCK_H * y, BLOCK_W - 2 , BLOCK_H - 2 );
}

function render() {
    ctx.clearRect( 0, 0, W, H );

    for ( var x = 0; x < COLS; ++x ) {
        for ( var y = 0; y < ROWS; ++y ) {
            if ( board[ y ][ x ] ) {
                ctx.strokeStyle = colors[ board[ y ][ x ] - 1 ];
                ctx.fillStyle = colors[ board[ y ][ x ] - 1 ];
                drawBlock( x, y );
            }
        }
    }

    if(end_flag)
        return;
    
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( current[ y ][ x ] ) {
                ctx.strokeStyle = colors[ current[ y ][ x ] - 1 ];
                ctx.fillStyle = colors[ current[ y ][ x ] - 1 ];
                drawBlock( currentX + x, currentY + y );
            }
        }
    }
}

setInterval( render, 30 );

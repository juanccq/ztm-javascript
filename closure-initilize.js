let view;

function initialize() {
    let counter = 0;

    return function() {
        if( counter > 0 ) {
            return;
        }
        else {
            counter++;
            view = 'v';
            console.log( 'view has been sent!' );
        }
    }
    
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
startOnce();

console.log( view );
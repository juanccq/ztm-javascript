const a = function() {
    console.log( 'a', this );
    const b = function() {
        console.log( 'b', b );
        const c = {
            hi: function() {
                console.log( 'c', c );
            }
        }
        c.hi();
    }

    b();
}

a();
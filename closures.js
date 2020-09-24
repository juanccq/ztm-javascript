function heavyDuty( index ) {
    const bigArray = new Array(7000).fill(':D');
    console.log('created');

    return bigArray[ index ]
}

heavyDuty(588)
heavyDuty(577)
heavyDuty(900)

const getHeadyD = heavyDuty2();
getHeadyD(477);
getHeadyD(900);
getHeadyD(1000);


function heavyDuty2() {
    const bigArray = new Array(7000).fill(':D');
    console.log('created again');

    return function( index ) {
        return bigArray[ index ]
    } 
}
import React from 'react';
import CountUp from 'react-countup';

interface Props {
    type: string,
    count: number,
    icon: JSX.Element,
    counter: object
}


// https://www.npmjs.com/package/react-countup
export const Counter = (props : Props) => {

    // const {  type, count } = props
    return (
        <>
            {/* <CountUp
                // start={-875.039}
                // duration={2.75}
                // separator=" "
                // decimals={4}
                // decimal=","
                // prefix="EUR "
                // suffix=" left"
                // onEnd={() => console.log('Ended! 👏')}
                // onStart={() => console.log('Started! 💨')}
                
                end=


            /> */}
        </>
    );
};

export default Counter;

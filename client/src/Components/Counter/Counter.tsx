import React from 'react';
import CountUp from 'react-countup';

interface Props {
    type: string,
    count: number
}


// https://www.npmjs.com/package/react-countup
export const Counter = ({ type, count }: Props) => {
    return (
        <>
            <CountUp
                // start={-875.039}
                // duration={2.75}
                // separator=" "
                // decimals={4}
                // decimal=","
                // prefix="EUR "
                // suffix=" left"
                // onEnd={() => console.log('Ended! 👏')}
                // onStart={() => console.log('Started! 💨')}
                
                end={count}
            />
        </>
    );
};

export default Counter;

import React from 'react';


export const AddProfessional = () => {
    return (

        <div className='flex  w-[62] '>
            <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" className='m-8 rounded-3xl w-[42rem] ' alt="" />




            <div className='flex flex-col w-2/5  '>

                <div className='flex flex-col w-2/3 m-auto justify-center'>
                    <span className=' font-medium  text-tiny font-sans mb-0 text-indigo'>¿Eres profesional?</span>

                    <span className='font-normal text-3xl pb-4'>Unite a nuestro equipo</span>


                    <span className=' text-extralight  text-silver'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>


                    <button className='bg-indigo rounded-md text-white flex justify-center w-[10rem] py-2 mt-8 px-6'>Comenzá

                        <svg width="20" className='  flex m-auto justify-center' height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5774 9.07741C13.252 9.40285 13.252 9.93049 13.5774 10.2559C13.9028 10.5814 14.4305 10.5814 14.7559 10.2559L18.9226 6.08926C19.248 5.76382 19.248 5.23618 18.9226 4.91075L14.7559 0.744078C14.4305 0.418641 13.9029 0.418641 13.5774 0.744078C13.252 1.06951 13.252 1.59715 13.5774 1.92259L16.3215 4.66667H1.66667C1.20643 4.66667 0.833336 5.03976 0.833336 5.5C0.833336 5.96024 1.20643 6.33333 1.66667 6.33333H16.3215L13.5774 9.07741Z" fill="white" />
                        </svg>

                    </button>
                </div>

            </div>
        </div>


    );
};



import React from 'react';
import { Icon,Copyright,Item,Newsletter } from './index';
import  {icons, itemServices, itemAbout } from '../../Utils/footer';






interface FooterProps {
    viewBox: string;
    dataIcon: string;
    d: string;
    h: string;
    route?: string;
    title: string;
    classValue: string;
   
};





export const Footer = ({} : FooterProps) => {



    return (
        <>
                <footer className="text-center bg-gray-900 text-white grid grid-cols-12">
                 
                        


                        <div className="mt-6 col-start-2 col-end-6  flex items-center ">
                            <Copyright  />
                        </div>

                        <div className="grid mt-6 lg:grid-cols-4 md:grid-cols-2 col-start-6 col-end-10">
                            <ul className="list-none mb-0 flex-row space-y-2 col-start-1 col-end-6">

                                {
                                    itemServices.map(item => {
                                        return <Item route={item.route} title={item.title} classValue={item.classValue} />
                                    })

                                }
                            </ul>

                            <ul className="list-none mb-0 flex-row space-y-2 col-start-6 col-end-10">

                                {
                                    itemAbout.map(item => {
                                        return <Item route={item.route} title={item.title} classValue={item.classValue} />
                                    })

                                }
                            </ul>


                        </div>
                        <div className=' mb-12 col-start-2 col-end-6           '>

                            <Newsletter h='working' />

                        </div>

                        <div className="flex  items-center justify-center  mb-12   col-start-9 col-end-13">


                            {
                                icons.map(icon => {

                                    return <Icon dataIcon={icon.dataIcon} d={icon.d} viewBox={icon.viewBox}  route={icon.route} classValue={icon.classValue} />


                                })

                            }

                        </div>
                     
                


                </footer>
        </>
    );
};






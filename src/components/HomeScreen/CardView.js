import React, { useEffect, useState } from 'react';
import "./CardView.css";
import calenderlogo from "..//../images/icon_cal.svg";
import locationlogo from "..//../images/location.svg";
const CardView = (props) => {
    let currentLink=`/service?serviceId=${props.serviceId}&name=${props.name}&time=${props.time}&address=${props.address}&totalAmount=${props.totalAmount}`;
    return (
        <>
        <a href={currentLink}>
            <div className='data_card'>
                <div id="name">
                 {props.name}
                </div>
                <div id="time">
                <div>
                       <img src={calenderlogo} />
                   </div>
                <div>
                {props.time}
                        </div>
                   
                </div>
                <div id="address">
                <div>
                       <img src={locationlogo} />
                   </div>
                    <div>
                    {props.address}
                        </div>
                  
                </div>
            </div>
            </a>
        </>
    );
};
export default CardView;
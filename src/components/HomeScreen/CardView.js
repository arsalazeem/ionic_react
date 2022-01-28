import React, { useEffect, useState } from 'react';
import "./CardView.css";
import calenderlogo from "..//../images/icon_cal.svg";
import locationlogo from "..//../images/location.svg";
const CardView = (props) => {
    return (
        <>
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
        </>
    );
};
export default CardView;
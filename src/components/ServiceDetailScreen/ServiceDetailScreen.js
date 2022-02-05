import React, { useEffect, useState } from 'react';
import "./serviceDetailScreen.css";
import calenderlogo from "..//../images/icon_cal_color.svg";
import JobLogo from "..//../images/icon_job_color.svg";
const ServiceDetailScreen = () => {
    const [name,setName]=useState("");
    const[time,setTime]=useState("");
    const [address,setAddress]=useState("");
    const [amount,setAmount]=useState("");
    useEffect(() => {
        // let serviceData=localStorage.getItem("service_detail");
        //  serviceData=JSON.parse(serviceData);
        //  console.log(serviceData);
         const queryParams = new URLSearchParams(window.location.search);
        //  console.log(queryParams.get('serviceId'));
         setName(queryParams.get('name'));
         setTime(queryParams.get('time'));
         setAddress(queryParams.get('address'));
         setAmount(queryParams.get('totalAmount'));
      
      },[]);
    return (
        <>
            <h3>Job Details</h3>
            <div className="card_wrapper">
                <div className="first_row">
                    <div id="name">
                     {name}
                    </div>
                    <div id="call">
                        Call
                    </div>
                </div>
                <div className="second_row">
                    <div id="estimates">
                        Estimates
                    </div>
                    <div id="price">
                        £ {amount}
                    </div>
                </div>
                <div className="third_row">
                    <div id="job_label">
                        Job Schedule
                    </div>
                    <div id="date_row">
                        <div id="cal_icon">
                            <img src={calenderlogo} />
                        </div>
                        <div id="date_and_time">
                            {time}
                        </div>
                    </div>
                </div>
                <div className="third_row">
                    <div id="job_label">
                        Job Location
                    </div>
                    <div id="date_row">
                        <div id="cal_icon">
                            <img src={JobLogo}/>
                        </div>
                        <div id="date_and_time">
                            {address}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ServiceDetailScreen;
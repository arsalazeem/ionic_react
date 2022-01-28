import React, { useEffect, useState } from 'react';
import "./serviceDetailScreen.css";
import calenderlogo from "..//../images/icon_cal.svg";
import locationlogo from "..//../images/location.svg";
const serviceDetailScreen = () => {
    return (
        <>
            <h3>Job Details</h3>
            <div className="card_wrapper">
                <div className="first_row">
                    <div id="name">
                     John Doe
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
                        £ 80.00
                    </div>
                </div>
                <div className="third_row">
                    <div id="job_label">
                        Job Schedule
                    </div>
                    <div id="date_row">
                        <div id="cal_icon">
                            <img src="icon_cal.svg" />
                        </div>
                        <div id="date_and_time">
                            12:30 PM , 31-12-2018
                        </div>
                    </div>
                </div>
                <div className="third_row">
                    <div id="job_label">
                        Job Schedule
                    </div>
                    <div id="date_row">
                        <div id="cal_icon">
                            <img src="icon_job.svg" />
                        </div>
                        <div id="date_and_time">
                            Tallin, Estonia
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default serviceDetailScreen;
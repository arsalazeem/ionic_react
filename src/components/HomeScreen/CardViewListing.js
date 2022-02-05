import React, { useEffect, useState } from 'react';
import CardView from './CardView';
import { getRequest } from '../service/apiClient';
import moment from 'moment'; 
import axios from 'axios';
import { fetchAppointments } from '../service/constants';
import "./CardViewListing.css";
import { IonItemSliding } from '@ionic/react';
const CardViewListing=()=>{
    const [cardData,setCardData]=useState([]);
    useEffect(() => {
        let token=localStorage.getItem("token");
        axios.get("https://stagingapi.workerx.co/api/v1/en/worker/fetch-appointments", { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            if (res.data.success==0){
                window.location.href="/";
            }
            else{
        localStorage.setItem("service_detail",JSON.stringify(res.data.data));
        let currentData=res.data.data.appointments;
         setCardData(currentData);
            }
        //  console.log(currentData);
        }
        );
      },[]);
return (
<>
<div id="heading">
Scheduled Jobs
</div>
<div className="cards_wrapper">
  {
  cardData.map(item=>{
let getTime= moment.unix(item.date); 
let formatedDate=getTime.format('dddd MMMM Do YYYY, h:mm a');
    return <CardView name={item.name} time={formatedDate} address={item.address.streetAddress} serviceId={item.id} totalAmount={item.estimation.totalAmount}/>
  })
  }
</div>
</>
);
};
export default CardViewListing;
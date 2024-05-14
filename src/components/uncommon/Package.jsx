import * as React from "react";
import { useEffect, useState } from "react";
import { redirect,useNavigate } from "react-router-dom";
import USFlag from "../../assets/us-flag.png";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { loadStripe } from "@stripe/stripe-js";
import usePostApi from "../../Apis/usePostApi";

export default function Package ({cost, style, buttonStyle}) {
  const [auth, setAuth] = useState(false);
  const [postData, setPostData, response, fetch] = usePostApi('checkout')
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  const paymentProcessor = async (element) => {
    element
    if (!auth) {
      return navigate("/login");
    }
    const stripe = await loadStripe("pk_test_51N6gMzHZgk0coxBwvmwFAoRfjbCaNhSlYFChLFO1OLWdXWmE2SPDUhxclnIlDTBc0LAyYvCmd2DMLLJWUWIDcI2a00GamT67fQ");
    
    try{
      const response = await fetch({price:cost},{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "x-auth-token",
        "x-auth-token":localStorage.getItem('token'),
      })
      const result = stripe.redirectToCheckout({sessionId: response.data.id});
      if (result.error) {
        console.log(result.error);
      }
      console.log(response);
    }
    catch(error){
      console.log("Error is: ",error)
    }
   
  }

  return (
    <div className="package-card flex flex-col flex-wrap my-10 py-5 px-3 mx-6" style={style}>
      <div className="package-card-header flex flex-row flex-wrap justify-between items-center">
        <div className="package-card-country flex flex-col flex-wrap">
          <p className="country-name font-extrabold text-4xl">USA</p>
          From
        </div>
        <div className="package-card-flag flex flex-row items-center">
          <div className="info-icon px-2">
            <InfoIcon />
          </div>
          <div className="card-flag px-2">
            <img src={USFlag} alt="" />
          </div>
        </div>
      </div>
      <div className="package-price">
        <p className="price text-3xl font-normal">
          <span className="font-extrabold">${cost}</span>/account/month
        </p>
      </div>
      <div className="package-button my-4 mx-auto">
        <button className="text-slate-50 px-12 py-1" onClick={paymentProcessor} style={buttonStyle}>Start</button>
      </div>
      <div className="package-list flex flex-col flex-wrap mx-auto">
        <div className="package-list-item">
          <span>
            <CheckCircleIcon />
          </span>{" "}
          Access to Unlimited Linkedin sales agents.
        </div>
        <div className="package-list-item">
          <span>
            <CheckCircleIcon />
          </span>{" "}
          Template to generate qualified meetings.
        </div>
        <div className="package-list-item">
          <span>
            <CheckCircleIcon />
          </span>{" "}
          Free Linkedin Automation system setup.
        </div>
        <div className="package-list-item">
          <span>
            <CheckCircleIcon />
          </span>{" "}
          Dedicated Slack Support.
        </div>
        <div className="package-list-item">
          <span>
            <CheckCircleIcon />
          </span>{" "}
          Linkedin Automation Coaching.
        </div>
        <div className="package-list-item">
          <span>
            <CheckCircleIcon />
          </span>{" "}
          100% Optimized & Customized.
        </div>
      </div>
    </div>
  );
}

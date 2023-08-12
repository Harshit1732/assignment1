import React, { useState } from "react";
import { AlertClock } from "../helpers/icons";
import "./Form.css";

const Form = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [totalPrice, setTotalPrice] = useState(18500);

  const handlePlanClick = (plan, total, discount) => {
    setSelectedPlan(plan);
    setTotalPrice(total - discount);
  };

  const isPlanSelected = (plan) => {
    return plan === selectedPlan;
  };

  return (
    <div className="form">
      <div className="progress-bar">
        <div className="stage-1">
          <div className="icon-1">
            <div className="div2">1</div>
          </div>
          <div className="text-1">Sign Up</div>
        </div>
        <div className="stage-1">
          <div className="icon-1">
            <div className="div2">2</div>
          </div>
          <div className="text-1">Subscribe</div>
        </div>
      </div>
      <div className="form-header">
        <div className="text9">Select your subscription plan</div>
      </div>
      <div className="input-container">
        <div className={`text-field-1 ${isPlanSelected("12 Months Subscription") ? "selected" : ""}`} onClick={() => handlePlanClick("12 Months Subscription", 9900, 18401)}>
        <input type="radio" name="subscription" className="radio-button-icon" checked={selectedPlan === "12 Months Subscription"} />
          <div className="text-container5">
            <div className="text10">12 Months Subscription</div>
            <div className="right-text-container">
              <div className="top-text">
                <div className="text11">Total</div>
                <div className="text12">₹99</div>
              </div>
              <div className="bottom-text">
                <div className="left-text">₹8</div>
                <div className="text14">/mo</div>
              </div>
            </div>
          </div>
          <div className="tag">
            <div className="offer-expired">Offer expired</div>
          </div>
        </div>
        <div className={`text-field-2 ${isPlanSelected("12 Month Subscription", 17900, 13000) ? "selected" : ""}`} onClick={() => handlePlanClick("12 Month Subscription", 17900, 13000)}>
        <input type="radio" name="subscription" className="radio-button-icon" checked={selectedPlan === "12 Month Subscription"} />
          <div className="text-container5">
            <div className="text10">12 Months Subscription</div>
            <div className="left-text-container">
              <div className="top-text">
                <div className="text16">Total</div>
                <div className="text12">₹179</div>
              </div>
              <div className="bottom-text">
                <div className="left-text">₹15</div>
                <div className="text19">/mo</div>
              </div>
            </div>
          </div>
          <div className="tag1">
            <div className="recommended">Recommended</div>
          </div>
        </div>
        <div className={`text-field-3 ${isPlanSelected("6 Months Subscription") ? "selected" : ""}`} onClick={() => handlePlanClick("6 Months Subscription", 14900, 8501)}>
        <input type="radio" name="subscription" className="radio-button-icon" checked={selectedPlan === "6 Months Subscription"} />
          <div className="text-container7">
            <div className="text10">6 Months Subscription</div>
            <div className="left-text-container">
              <div className="top-text">
                <div className="text16">Total</div>
                <div className="text12">₹149</div>
              </div>
              <div className="bottom-text">
                <div className="left-text">₹25</div>
                <div className="text19">/mo</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-field-3 ${isPlanSelected("3 Months Subscription") ? "selected" : ""}`} onClick={() => handlePlanClick("3 Months Subscription", 9900, 0)}>
        <input type="radio" name="subscription" className="radio-button-icon" checked={selectedPlan === "3 Months Subscription"} />
          <div className="text-container7">
            <div className="text10">3 Months Subscription</div>
            <div className="left-text-container">
              <div className="top-text">
                <div className="text16">Total</div>
                <div className="text12">₹99</div>
              </div>
              <div className="bottom-text">
                <div className="left-text">₹33</div>
                <div className="text19">/mo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-container">
        <div className="alert-header">
          <div className="left-text">Subscription Fee</div>
          <div className="text31">₹18,500</div>
        </div>
        <div className="alert">
          <div className="alert-header">
            <div className="text10">Limited time offer</div>
            <div className="text33">- ₹18,401</div>
          </div>
          <div className="alert-body">
            <AlertClock />
            <div className="left-text">{`Offer valid till 25th March 2023 `}</div>
          </div>
        </div>
        <div className="alert-header">
          <div className="left-text">
            <span className="total">Total </span>
            <span>(Incl. of 18% GST)</span>
          </div>
          <b className="right-text">{`₹${totalPrice}`}</b>
        </div>
      </div>
      <div className="button-container">
        <div className="secondary-button">
          <b className="text35">cancel</b>
        </div>
        <div className="primary-button1">
          <b className="text35">proceed to pay</b>
        </div>
      </div>
      <div className="icon-container">
        <div className="razorpay-icon">
          <img className="razorpay-icon-child" alt="" src="/frame-12537@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Form;

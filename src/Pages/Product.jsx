import "../styles/Product.css";
import logo from "../assets/LA-Logos/LAL-1-updated.png";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Package from "../components/uncommon/Package.jsx";
import InputSlider from "../components/uncommon/InputSlider";
import SignUp from "./Signup.jsx";
import { loadStripe } from "@stripe/stripe-js";
import usePostApi from "../Apis/usePostApi.jsx";
import { useParams } from "react-router-dom";

const steps = [
  {
    label: "Choose your offer",
    description: ``,
  },
  {
    label: "Your information",
    description: "",
  },
  {
    label: "Payment",
    description: ``,
  },
];

sessionStorage.clear();

const Product = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cost, setCost] = useState(1);
  const [selected, checkSelected] = useState(false);
  const [postData, setPostData, response, fetch] = usePostApi("checkout");
  const { packageCost } = useParams();
  sessionStorage.setItem("baseCost", packageCost);
  // sessionStorage.setItem(
  //   "baseCost",
  //   packages.querySelector('input[type="hidden"]').value
  // );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep + 1 != 0) {
      document.querySelector("#form-1").style.display = "none";
    } else {
      document.querySelector("#form-1").style.display = "flex";
    }
    if (activeStep + 1 != 1) {
      document.querySelector("#form-2").style.display = "none";
    } else {
      document.querySelector("#form-2").style.display = "flex";
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep - 1 == 0) {
      document.querySelector("#form-1").style.display = "flex";
    } else {
      document.querySelector("#form-1").style.display = "none";
    }
    if (activeStep - 1 == 1) {
      document.querySelector("#form-2").style.display = "flex";
    } else {
      document.querySelector("#form-2").style.display = "none";
    }
  };
  const onPackageClick = (e) => {
    let packages = document.getElementsByClassName("package-card");
    sessionStorage.setItem(
      "baseCost",
      e.currentTarget.querySelector('input[type="hidden"]').value
    );
    for (let i = 0; i < packages.length; i++) {
      packages[i].classList.remove("selected");
    }
    e.currentTarget.classList.add("selected");
    checkSelected(e.currentTarget.classList.contains("selected"));
    document.getElementById("package-error").style.display = "none";
  };

  const paymentProcessor = async () => {
    handleNext();
    const stripe = await loadStripe(
      "pk_test_51N6gMzHZgk0coxBwvmwFAoRfjbCaNhSlYFChLFO1OLWdXWmE2SPDUhxclnIlDTBc0LAyYvCmd2DMLLJWUWIDcI2a00GamT67fQ"
    );

    try {
      const response = await fetch(
        {
          price: sessionStorage.getItem("totalCost"),
          base_price: sessionStorage.getItem("baseCost"),
          accounts: sessionStorage.getItem("accounts"),
        },
        {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "x-auth-token",
          "x-auth-token": sessionStorage.getItem("token"),
        }
      );
      const result = stripe.redirectToCheckout({ sessionId: response.data.id });
      if (result.error) {
        console.log(result.error);
      }
      console.log(response);
    } catch (error) {
      console.log("Error is: ", error);
    }
  };

  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="stepper flex flex-col p-16 md:w-2/5">
        <div className="logo w-2/5 mt-4">
          <img src={logo} alt="" />
        </div>
        <div className="pl-4 mt-4 text-2xl font-semibold">
          Subscribe to a Linkedin profile ready for automation in just a few
          clicks
        </div>
        <div className="steps">
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel style={{ fontSize: "1.5rem" }}>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
      <div className="forms p-9 md:w-3/5">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Back
        </Button>
        <div className="form flex flex-col" id="form-1">
          <div className="text-4xl font-bold mt-28 mb-12">
            Choose your account type
          </div>
          <InputSlider setPrice={setCost} />
          <div className="packages flex flex-col flex-wrap justify-center">
            <Package
              cost={packageCost}
              button="false"
              style={{ border: "1px solid var(--light)" }}
              onClick={onPackageClick}
            />
            {/* <Package
              cost={180 * cost}
              button="false"
              style={{ border: "1px solid var(--light)" }}
              onClick={onPackageClick}
            /> */}
            <span
              className="hidden text-red-600 font-light mx-10"
              id="package-error"
            >
              *Please select a package
            </span>
          </div>
          <div className="m-auto">
            <button
              className="section-button"
              onClick={() => {
                const packages = document.querySelector("package-card");
                console.log(packages);
                // if (!selected) {
                //   document.getElementById("package-error").style.display =
                //     "block";
                //   return false;
                // }
                const baseCost = sessionStorage.getItem("baseCost");
                const accounts = sessionStorage.getItem("accounts");
                sessionStorage.setItem("totalCost", baseCost * accounts);
                handleNext();
              }}
            >
              CONTINUE
            </button>
          </div>
        </div>
        <div className="form hidden flex-col" id="form-2">
          <SignUp action={paymentProcessor} />
        </div>
      </div>
    </div>
  );
};

export default Product;

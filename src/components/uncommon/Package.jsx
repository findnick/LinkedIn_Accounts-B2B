import USFlag from "../../assets/us-flag.png";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Package ({cost, style}) {
  // const paymentProcessor = () => {
  //   const packageCost = cost;
  // }

  return (
    <div className="package-card flex flex-col flex-wrap my-10 py-5 px-3" style={style}>
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
        <p className="price text-4xl font-normal">
          <span className="font-extrabold">${cost}</span>/account/month
        </p>
      </div>
      <div className="package-button my-4 mx-auto">
        <button className="text-slate-50 px-12 py-1">Start</button>
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

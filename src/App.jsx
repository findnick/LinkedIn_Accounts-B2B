import ResponsiveAppBar from "./components/common/ResponsiveAppBar";
import "../src/App.css";
import Chips from "./components/common/Chips";
import Card from "./components/common/Card";
import CardStack from "./components/common/CardStack";
import GrayScale from "./assets/gray-img.png";
import IndexTable from "./components/uncommon/IndexTable";
import USFlag from "./assets/us-flag.png";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Package from "./components/uncommon/Package";

const App = () => {
  const howItWorks = [
    {
      image: { GrayScale },
      title: "Onboarding",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
    {
      image: { GrayScale },
      title: "Campaigning Launch",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
    {
      image: { GrayScale },
      title: "Dedicated Support",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <div className="chips">
        <Chips />
      </div>
      <div className="index-section">
        <div className="heading">
          The #1 B2B
          <img
            src={GrayScale}
            alt=""
            style={{
              borderRadius: 45,
              width: 80,
              position: "absolute",
              right: 0,
              marginLeft: 48,
              marginTop: 12,
            }}
          />
          <br />
          Prospecting Service
        </div>
        <div className="para">
          Automated LinkedIn sales agents that target your ideal clients.
          <br />
          When you work with us, it&#39;s not about &quot;marketing&quot; your{" "}
          <br />
          business&mdash;it&#39;s about pitching thousands of potential
          <br />
          customers. Directly. Effectively. Affordably.
        </div>
        <a href="" className="section-button">
          BOOK A DEMO
        </a>
      </div>
      <div className="index-section">
        <div className="heading">Building an Internal</div>
        <div className="heading">Sales Team</div>
        <CardStack
          display="grid"
          gridTemplateColumns="25% 25% 25%"
          margin="0px 10%"
          justifyContent="center"
          justifyItems="center"
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            cardTitle="AVERAGE SALARY"
            height={"200px"}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            <div>$134,281</div>
            <div>(Glassdoor)</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            cardTitle="HIRING & TRAINING"
            height={"200px"}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            <div>120-180 Days</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            cardTitle="ROI"
            height={"200px"}
            titleStyle={{ textAlign: "center", fontSize: "40px" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            <div>28% of reps hit quota</div>
          </Card>
        </CardStack>
        <div className="heading">vs</div>
        <CardStack
          display="grid"
          gridTemplateColumns="25% 25% 25%"
          margin="0px 10%"
          justifyContent="center"
          justifyItems="center"
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            cardTitle="AVERAGE SALARY"
            height={"200px"}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            <div>$180/month</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            cardTitle="HIRING & TRAINING"
            height={"200px"}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            <div>3-7 Days</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            cardTitle="ROI"
            height={"200px"}
            titleStyle={{ textAlign: "center", fontSize: "40px" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            <div>97% Success Rate</div>
          </Card>
        </CardStack>
      </div>
      <div className="index-section">
        <div className="heading">
          Why Automated <br /> LinkedIn Agents?
        </div>
        <CardStack display="flex" flexDirection="column" alignItems="center">
          <Card
            style={{
              display: "grid",
              gridTemplateAreas: "'title title logo' 'footer footer logo'",
              gridTemplateColumns: "40% 50% 10%",
              gridTemplateRows: "30% 70%",
              padding: 0,
            }}
            cardTitle="Scalability"
            logoStyle={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 13px 90px 7px",
              gridArea: "logo",
            }}
            imgStyle={{ width: "100%" }}
            titleStyle={{ gridArea: "title", alignSelf: "end" }}
            footerStyle={{
              fontSize: 20,
              gridArea: "footer",
              paddingLeft: 20,
              alignSelf: "start",
            }}
          >
            <p>
              You don&#39;t need to hire, manage, or train your agents. There
              are no commissions being paid out, and you don&#39;t need to vet
              them for quality work. Just go focus on fullfillment and scaling
              your business internally while our system helps you get clients.
              All you need is to respond back to prospects & monitor your
              campaign.
            </p>
          </Card>
          <Card
            style={{
              display: "grid",
              gridTemplateAreas: "'title title logo' 'footer footer logo'",
              gridTemplateColumns: "40% 50% 10%",
              gridTemplateRows: "30% 70%",
              padding: 0,
            }}
            cardTitle="Scalability"
            logoStyle={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 13px 90px 7px",
              gridArea: "logo",
            }}
            imgStyle={{ width: "100%" }}
            titleStyle={{ gridArea: "title", alignSelf: "end" }}
            footerStyle={{
              fontSize: 20,
              gridArea: "footer",
              paddingLeft: 20,
              alignSelf: "start",
            }}
          >
            <p>
              You don&#39;t need to hire, manage, or train your agents. There
              are no commissions being paid out, and you don&#39;t need to vet
              them for quality work. Just go focus on fullfillment and scaling
              your business internally while our system helps you get clients.
              All you need is to respond back to prospects & monitor your
              campaign.
            </p>
          </Card>
          <Card
            style={{
              display: "grid",
              gridTemplateAreas: "'title title logo' 'footer footer logo'",
              gridTemplateColumns: "40% 50% 10%",
              gridTemplateRows: "30% 70%",
              padding: 0,
            }}
            cardTitle="Scalability"
            logoStyle={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 13px 90px 7px",
              gridArea: "logo",
            }}
            imgStyle={{ width: "100%" }}
            titleStyle={{ gridArea: "title", alignSelf: "end" }}
            footerStyle={{
              fontSize: 20,
              gridArea: "footer",
              paddingLeft: 20,
              alignSelf: "start",
            }}
          >
            <p>
              You don&#39;t need to hire, manage, or train your agents. There
              are no commissions being paid out, and you don&#39;t need to vet
              them for quality work. Just go focus on fullfillment and scaling
              your business internally while our system helps you get clients.
              All you need is to respond back to prospects & monitor your
              campaign.
            </p>
          </Card>
          <Card
            style={{
              display: "grid",
              gridTemplateAreas: "'title title logo' 'footer footer logo'",
              gridTemplateColumns: "40% 50% 10%",
              gridTemplateRows: "30% 70%",
              padding: 0,
            }}
            cardTitle="Scalability"
            logoStyle={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 13px 90px 7px",
              gridArea: "logo",
            }}
            imgStyle={{ width: "100%" }}
            titleStyle={{ gridArea: "title", alignSelf: "end" }}
            footerStyle={{
              fontSize: 20,
              gridArea: "footer",
              paddingLeft: 20,
              alignSelf: "start",
            }}
          >
            <p>
              You don&#39;t need to hire, manage, or train your agents. There
              are no commissions being paid out, and you don&#39;t need to vet
              them for quality work. Just go focus on fullfillment and scaling
              your business internally while our system helps you get clients.
              All you need is to respond back to prospects & monitor your
              campaign.
            </p>
          </Card>
          <Card
            style={{
              display: "grid",
              gridTemplateAreas: "'title title logo' 'footer footer logo'",
              gridTemplateColumns: "40% 50% 10%",
              gridTemplateRows: "30% 70%",
              padding: 0,
            }}
            cardTitle="Scalability"
            logoStyle={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 13px 90px 7px",
              gridArea: "logo",
            }}
            imgStyle={{ width: "100%" }}
            titleStyle={{ gridArea: "title", alignSelf: "end" }}
            footerStyle={{
              fontSize: 20,
              gridArea: "footer",
              paddingLeft: 20,
              alignSelf: "start",
            }}
          >
            <p>
              You don&#39;t need to hire, manage, or train your agents. There
              are no commissions being paid out, and you don&#39;t need to vet
              them for quality work. Just go focus on fullfillment and scaling
              your business internally while our system helps you get clients.
              All you need is to respond back to prospects & monitor your
              campaign.
            </p>
          </Card>
          <Card
            style={{
              display: "grid",
              gridTemplateAreas: "'title title logo' 'footer footer logo'",
              gridTemplateColumns: "40% 50% 10%",
              gridTemplateRows: "30% 70%",
              padding: 0,
            }}
            cardTitle="Scalability"
            logoStyle={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 13px 90px 7px",
              gridArea: "logo",
            }}
            imgStyle={{ width: "100%" }}
            titleStyle={{ gridArea: "title", alignSelf: "end" }}
            footerStyle={{
              fontSize: 20,
              gridArea: "footer",
              paddingLeft: 20,
              alignSelf: "start",
            }}
          >
            <p>
              You don&#39;t need to hire, manage, or train your agents. There
              are no commissions being paid out, and you don&#39;t need to vet
              them for quality work. Just go focus on fullfillment and scaling
              your business internally while our system helps you get clients.
              All you need is to respond back to prospects & monitor your
              campaign.
            </p>
          </Card>
        </CardStack>
      </div>
      <div className="index-section" style={{ marginTop: 100 }}>
        <div className="heading">FEATURES</div>
        <div className="index-table">
          <IndexTable />
        </div>
      </div>
      <div className="index-section">
        <div className="heading">How it Works:</div>
        <CardStack display="flex" flexDirection="row" flexWrap="wrap">
          {howItWorks.map((card, index) => {
            console.log(index);
            return (
              <Card
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  margin: "20px auto",
                  width: "18rem",
                  height: "330px",
                  textAlign: "left",
                  padding: "0.75rem 1rem 0.75rem 0.15rem",
                }}
                logoStyle={{ margin: "0 auto" }}
                imgStyle={{ padding: 5, width: "5rem" }}
                cardTitle={card.title}
                titleStyle={{ fontSize: "1rem" }}
                footerStyle={{
                  fontWeight: "100",
                  fontSize: "15px",
                  padding: "20px",
                }}
              >
                {card.footer}
              </Card>
            );
          })}
        </CardStack>
      </div>
      <div className="index-section">
        <div className="heading">Pricing</div>
        <div className="packages flex flex-row flex-wrap">
          <Package cost="150" />
          <Package cost="180" style={{background: "linear-gradient(#1048e5, #2751c5)", color: "#fff"}} />
        </div>
      </div>
    </>
  );
};

export default App;

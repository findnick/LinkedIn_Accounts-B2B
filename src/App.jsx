import ResponsiveAppBar from "./components/common/ResponsiveAppBar";
import "../src/App.css";
import Chips from "./components/common/Chips";
import Card from "./components/common/Card";
import CardStack from "./components/common/CardStack";
import GrayScale from "./assets/gray-img.png";
import IndexTable from "./components/uncommon/IndexTable";
import Package from "./components/uncommon/Package";
import Footer from "./components/common/Footer";
import Sales1 from "./assets/Material/ICON 7-01.png";
import Sales2 from "./assets/Material/ICON 8-01.png";
import Sales3 from "./assets/Material/ICON 9-01.png";

const App = () => {
  const automatedAgents = [ 
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: GrayScale,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
  ];
  const howItWorks = [
    {
      image: GrayScale,
      title: "Onboarding",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
    {
      image: GrayScale,
      title: "Campaigning Launch",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
    {
      image: GrayScale,
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
          <img
              src={GrayScale}
              alt=""
              className="human-icon"
              style={{
                borderRadius: 45,
                width: 80,
                position: 'absolute',
                right: "25%",
                bottom: "52%",
              }}
            />
          The #1 B2B
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
      <div className="index-section sales-team-card">``
        <div className="heading">Building an Internal</div>
        <div className="heading">Sales Team</div>
        <CardStack
          display="grid"
          gridTemplateColumns="auto auto auto"
          margin="0px 10%"
          justifyContent="center"
          justifyItems="center"
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "65%",
            }}
            cardTitle="AVERAGE SALARY"
            height={"200px"}
            image={Sales1}
            imgStyle={{width: "33%"}}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
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
              width: "65%",
            }}
            cardTitle="HIRING & TRAINING"
            height={"200px"}
            image={Sales2}
            imgStyle={{width: "33%"}}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            <div>120-180 Days</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "65%",
            }}
            cardTitle="ROI"
            height={"200px"}
            image={Sales3}
            imgStyle={{width: "33%"}}
            titleStyle={{ textAlign: "center", fontSize: "2rem" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            <div>28% of reps hit quota</div>
          </Card>
        </CardStack>
        <div className="heading">vs</div>
        <CardStack
          display="grid"
          gridTemplateColumns="auto auto auto"
          margin="0px 10%"
          justifyContent="center"
          justifyItems="center"
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "65%",
            }}
            cardTitle="AVERAGE SALARY"
            height={"200px"}
            image={Sales1}
            imgStyle={{width: "33%"}}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            <div>$180/month</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "65%",
            }}
            cardTitle="HIRING & TRAINING"
            height={"200px"}
            image={Sales2}
            imgStyle={{width: "33%"}}
            titleStyle={{ textAlign: "center" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            <div>3-7 Days</div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "65%",
            }}
            cardTitle="ROI"
            height={"200px"}
            image={Sales3}
            imgStyle={{width: "33%"}}
            titleStyle={{ textAlign: "center", fontSize: "2rem" }}
            footerStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.3rem",
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
          {automatedAgents.map((agents, index) => {
            return (
              <Card
                key={index}
                style={{
                  display: "grid",
                  gridTemplateAreas: "'title title logo' 'footer footer logo'",
                  gridTemplateColumns: "auto auto auto",
                  gridTemplateRows: "auto auto",
                  padding: "1rem 0",
                }}
                cardTitle={agents.title}
                logoStyle={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "15px 13px 90px 7px",
                  gridArea: "logo",
                  width: "7rem",
                  height: 200,
                }}
                image={agents.image}
                imgStyle={{ width: "100%" }}
                titleStyle={{ gridArea: "title", alignSelf: "end" }}
                footerStyle={{
                  fontSize: 20,
                  gridArea: "footer",
                  paddingLeft: 20,
                  alignSelf: "start",
                }}
              >
                <p>{agents.footer}</p>
              </Card>
            );
          })}
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
                image={card.image}
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
        <div className="packages flex flex-row flex-wrap justify-evenly">
          <Package cost="150" />
          <Package
            cost="180"
            style={{
              background: "linear-gradient(#1048e5, #2751c5)",
              color: "#fff",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

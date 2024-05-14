import ResponsiveAppBar from "./components/common/ResponsiveAppBar";
import "../src/App.css";
import Chips from "./components/common/Chips";
import Card from "./components/common/Card";
import CardStack from "./components/common/CardStack";
import IndexTable from "./components/uncommon/IndexTable";
import Package from "./components/uncommon/Package";
import Footer from "./components/common/Footer";
import Sales1 from "./assets/Material/ICON 7-01.png";
import Sales2 from "./assets/Material/ICON 8-01.png";
import Sales3 from "./assets/Material/ICON 9-01.png";
import Works1 from "./assets/Material/ICON 3-01.png";
import Works2 from "./assets/Material/ICON-01.png";
import Works3 from "./assets/Material/ICON 2-01.png";
import Agents1 from "./assets/Material/ICON 4-01.png";
import Agents2 from "./assets/Material/ICON 5-01.png";
import Agents3 from "./assets/Material/ICON 6-01.png";
import LandingCarousel from "./components/uncommon/LandingCarousel";
import HumanIcon from "./assets/Material/IMAGE WITH CIRCLE SHAPE-01.png";

const App = () => {
  const automatedAgents = [
    {
      image: Agents1,
      title: "Scalability",
      footer:
        "You don't need to hire, manage, or train your agents. There are no commissions being paid out, and you don't need to vet them for quality work. Just go focus on fullfillment and scaling your business internally while our system helps you get clients. All you need is to respond back to prospects & monitor your campaign.",
    },
    {
      image: Agents2,
      title: "Unbeatable Affordability",
      footer:
        "Starting at just $180 a month, we’re the game-changer in generating qualified meetings. While others sales agencies charge upwards of $5,000 to $15,000 a month, we’re not only the best solution, the most affordable solution, but we also don’t take commissions. ",
    },
    {
      image: Agents3,
      title: "Free LinkedIn Automation System Setup",
      footer:
        "Whether you start with 1 rep or 100, we’ll optimize your LinkedIn accounts & connect your agents to your dedicated LinkedIn automation system which we will set up. From there, all you need to do is start your campaign and generate meetings. ",
    },
    {
      image: Agents1,
      title: "Build a Consistent Revenue Stream",
      footer:
        "Relying on referrals sucks. Spending money on ads is even worse. Build a system that you know will bring you meetings, connect you with clients, and ultimately just get you more sales in a consistent and affordable manner. ",
    },
    {
      image: Agents2,
      title: "Winning Templates",
      footer:
        "We give you templates & best practices that we KNOW works, have gotten us results, and our clients results. All for free, because your success is our success. ",
    },
    {
      image: Agents3,
      title: "Zero Risk, All Reward",
      footer:
        "Forget about long-term commitments. Our confidence in our service is reflected in our no-commitment policy. Why? Because when you win, we win.",
    },
  ];
  const howItWorks = [
    {
      image: Works1,
      title: "Onboarding",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
    {
      image: Works2,
      title: "Campaigning Launch",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
    {
      image: Works3,
      title: "Dedicated Support",
      footer:
        "Once you purchase your agents, we will add you into Slack & have you fill out your onboarding form. This will help us optimize your accounts and get you ramped up as soon as possible.",
    },
  ];
  const images = [
    {
      url: "assets/Screenshot 2024-03-16 at 3.40.35 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.41.45 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.42.28 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.43.01 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.43.47 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.44.02 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.44.41 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.45.03 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.45.33 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.46.04 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.48.21 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.48.36 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.48.54 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.49.17 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.49.25 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.50.10 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.50.21 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.50.49 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.50.57 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.51.05 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.51.13 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.52.30 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.52.44 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.53.03 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.54.30 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.54.40 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.54.46 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.55.08 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.55.31 PM.png",
    },
    {
      url: "assets/Screenshot 2024-03-16 at 3.55.42 PM.png",
    },
    {
      url: "assets/Screenshot 2024-04-19 at 11.17.43 AM.png",
    },
    {
      url: "assets/Screenshot 2024-04-19 at 11.21.21 AM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.14.17 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.15.15 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.17.05 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.19.12 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.21.00 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.22.10 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.22.30 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.24.29 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.24.51 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.26.48 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.28.45 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.29.43 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.35.25 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.36.11 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.38.20 PM.png",
    },
    {
      url: "assets/Screenshot 2024-05-03 at 3.41.41 PM.png",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <div className="chips">
        <Chips />
      </div>
      <div className="index-section my-12">
        <div className="heading">
          <img
            src={HumanIcon}
            alt=""
            className="human-icon"
            style={{
              borderRadius: 45,
              width: "15rem",
              position: "absolute",
              right: "22%",
              bottom: "40%",
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
        <a href="/login" className="section-button">
          BOOK A DEMO
        </a>
      </div>
      <div className="index-section my-12 sales-team-card">
        <div className="heading">Building an Internal</div>
        <div className="heading">Sales Team</div>
        <div className="mb-12"></div>
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
            imgStyle={{ width: "33%" }}
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
            imgStyle={{ width: "33%" }}
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
            imgStyle={{ width: "33%" }}
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
            imgStyle={{ width: "33%" }}
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
            imgStyle={{ width: "33%" }}
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
            imgStyle={{ width: "33%" }}
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
      <div className="index-section my-12">
        <div className="heading">
          Why Automated <br /> LinkedIn Agents?
        </div>
        <div className="mb-12"></div>
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
                  width: "8rem",
                  height: 200,
                }}
                image={agents.image}
                imgStyle={{ width: "100%" }}
                titleStyle={{ gridArea: "title", alignSelf: "center" }}
                footerStyle={{
                  fontSize: 20,
                  gridArea: "footer",
                  paddingLeft: 20,
                  alignSelf: "start",
                }}
              >
                <p style={{ lineHeight: "normal" }}>{agents.footer}</p>
              </Card>
            );
          })}
        </CardStack>
      </div>
      <div className="index-section mt-48 mx-0" id="price-table">
        <div className="heading">FEATURES</div>
        <div className="index-table">
          <IndexTable />
        </div>
      </div>
      <div className="index-section my-12">
        <div className="heading">How it Works:</div>
        <div className="mb-12"></div>
        <CardStack display="flex" flexDirection="row" flexWrap="wrap">
          {howItWorks.map((card, index) => {
            console.log(index);
            return (
              <Card
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  margin: "20px auto",
                  width: "18rem",
                  height: "380px",
                  textAlign: "left",
                  padding: "0.75rem 1rem 0.75rem 0.15rem",
                }}
                logoStyle={{ margin: "0 auto", width: "10rem" }}
                image={card.image}
                imgStyle={{ padding: 5, width: "100%" }}
                cardTitle={card.title}
                titleStyle={{ fontSize: "1rem", marginBottom: 25 }}
                footerStyle={{
                  fontWeight: "100",
                  fontSize: "15px",
                  padding: "0 16px",
                  lineHeight: 1.6,
                }}
              >
                {card.footer}
              </Card>
            );
          })}
        </CardStack>
      </div>
      <div className="index-section my-12">
        <div className="heading">Pricing</div>
        <div className="mb-12"></div>
        <div className="packages flex flex-row flex-wrap justify-center">
          <Package cost="150" style={{ border: "3px solid #1048e5" }} />
          <Package
            cost="180"
            style={{
              background: "linear-gradient(var(--light), var(--dark))",
              color: "#fff",
            }}
            buttonStyle={{
              background: "#FFF",
              color: "var(--light)"
            }}
          />
        </div>
      </div>
      <div className="index-section my-12">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/levistrategies/call"
          style={{
            minWidth: "320px",
            height: "700px",
          }}
        ></div>
      </div>
      <div className="index-section my-12">
          <LandingCarousel images={images} />
      </div>
      <Footer />
    </>
  );
};

export default App;

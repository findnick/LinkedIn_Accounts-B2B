import TestNavbar from "../components/common/TestNavbar";
import Footer from "../components/common/Footer";
import Box from "@mui/material/Box";

export default function Thankyou() {
  return (
    <>
      <TestNavbar />
      <Box sx={{ mx: 20, my: 15 }}>
        <div
          className="heading text-center"
          style={{ lineHeight: 1.5, fontWeight: 700 }}
        >
          Thankyou for Subscribing to Our Package.
        </div>
        <div
          className="heading text-center"
          style={{ lineHeight: 1.5, fontWeight: 300, fontSize: 25 }}
        >
          We have sent you the email with Package Details
        </div>
      </Box>
      <Footer />
    </>
  );
}

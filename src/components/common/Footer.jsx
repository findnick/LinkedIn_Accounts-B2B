import { Box, Grid, Stack } from "@mui/material";
import logo2 from '../../assets/LA-Logos/LAL-1.png'

const Footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        direction="row"
        rowSpacing={2}
        backgroundColor="#007EFF"
        width="100%"
        padding="2rem"
      >
        <Grid item lg={7}>
          <Box>
            <Stack spacing={1}>
              <Box sx={{ width: "200px", height: "200px" }}>
                <img
                  src={logo2}
                  alt=""
                  style={{ width: "100%", height: "250px" }}
                />
              </Box>
              <Box sx={{ color: "white" }}>FACEBOOK|INSTAGRAM|LINKEDIN</Box>
              <Box sx={{ color: "white" }}>
                2024 LINKEDIN ALL RIGHTS RESERVERED | TERMS & CONDITIONS |
                FULFILMENT POLICY
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item lg={5} sx={{ display: "flex", alignItems: "flex-end" }}>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={1} sx={{ display: "flex", alignItems: "flex-end" }}>
              <Box sx={{ color: "white" }}>+529000097</Box>
              <Box sx={{ color: "white" }}>SALES@#1231B2B.COM</Box>
              <Box sx={{ color: "white" }}>ABOUT | BLOG | CONTACT | CAREER</Box>
              <Box sx={{ color: "white" }}>
                700 MILAM SUITE 1300 HOUSTON, TEXAS 77002
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

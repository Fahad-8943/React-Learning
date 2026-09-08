import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import logo from "../assets/logo.png";

function Header() {
  const aboutUs =
    "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.";
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <img
              src={logo}
              alt="Resume Builder logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Resume Builder
            </Typography>
            <Tooltip title={aboutUs}>
              <Button
                color="inherit"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                About US
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;

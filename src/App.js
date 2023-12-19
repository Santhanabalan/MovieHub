import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Main from "./Main";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#222831',
    },
    secondary: {
      main: '#393E46',
    },
  },
});

export default function Album() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      {/* Hero unit */}
      <Main />
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
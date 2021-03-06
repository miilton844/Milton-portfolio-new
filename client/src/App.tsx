import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/themes/themes';
import { useTypedSelector } from "./redux/hooks/useTypeSelector";
import { Footer } from "../src/components/Footer/Footer"

const App = () => {
  const darkMode = useTypedSelector(state => {
    return state.darkMode
  });

  return (
    <Router>
      <ThemeProvider theme={darkMode.type === 'light' ? lightTheme : darkTheme}>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </ThemeProvider>
    </Router>
  );
}
export default App;

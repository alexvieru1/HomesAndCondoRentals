
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import { themeSettings } from './theme';
import {createTheme} from '@mui/material/styles'
import { CssBaseline, ThemeProvider } from '@mui/material';
import Login from './pages/LoginPage/Login';
import { useSelector } from 'react-redux';
import ListingsPage from './pages/ListingsPage/ListingsPage';

function App() {
  const mode = useSelector(state=>state.mode)
  const theme = createTheme(themeSettings(mode))
  return (
   <BrowserRouter>
   <ThemeProvider theme={theme}>
    <CssBaseline/>
   <Routes>
    <Route path='/' element={<WelcomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path ='/locations/:city' element={<ListingsPage/>}/>
   </Routes>
   </ThemeProvider>
   </BrowserRouter>
  );
}

export default App;

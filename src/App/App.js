import './App.css';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <Menu/>
                <Content/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

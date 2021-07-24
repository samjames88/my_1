import './Menu.css';
import {NavLink, Redirect} from 'react-router-dom';

function Menu() {
    return (
        <div className='menu'>
            <Redirect from="/" to="/unity"/>
            <NavLink to="/unity"><strong>UNITY</strong></NavLink>
            <NavLink to="/android"><strong>ANDROID</strong></NavLink>
            <NavLink to="/scratch"><strong>SCRATCH</strong></NavLink>
            <NavLink to="/lrm"><strong>LRM</strong></NavLink>
            <NavLink to="/python"><strong>PYTHON</strong></NavLink>
            <NavLink to="/pc"><strong>PC</strong></NavLink>
            <NavLink to="/arduino"><strong>ARDUINO</strong></NavLink>
            <NavLink to="/fre"><strong>FRE</strong></NavLink>
        </div>
    );
}

export default Menu;
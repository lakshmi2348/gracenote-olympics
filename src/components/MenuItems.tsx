import './MenuItems.scss';
import { NavLink } from 'react-router-dom';

export const MenuItems = () => {
    return (
        <div>
            <ul className="menu-items">
                <li className="">
                    <NavLink activeClassName="active" className="menu-list" to="/medalsummary/" target="_self">Medal Summary</NavLink>
                </li>
                <li className="">                   
                    <NavLink activeClassName="active" className="menu-list" to="/sportslist/" target="_self">Sports List</NavLink>
                </li>
                <li className="">
                    <NavLink activeClassName="active" className="menu-list" to="/winnerslist/" target="_self">Medal Winners</NavLink>
                </li> 
            </ul>
        </div>
    );
}
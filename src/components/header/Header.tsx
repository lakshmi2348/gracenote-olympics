import logo from '../../images/Gracenote-logo.png';
import './Header.scss'

export const Header = () => {
    return (
        <header className="app-header">
          <img src={logo} className="" alt="logo" />
          <span>Olympics 2014 Summary</span>
        </header>
    );
}
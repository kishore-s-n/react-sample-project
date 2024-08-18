import NavComp from "../Utils/NavComp";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='grp1'>
        <div className='logo'>SamSite</div>
        <div className='dropdown'>
          <button className='dropbtn'>Dropdown</button>
          <div className='dropdown-content'>
            <a href='#'>Item 1</a>
            <a href='#'>Item 2</a>
            <a href='#'>Item 3</a>
          </div>
        </div>
        <div className='nav-items'>
          <NavComp text='Home' variant='' />
          <NavComp text='About' variant='' />
          <NavComp text='Services' variant='' />
          <NavComp text='Contact' variant='' />
        </div>
      </div>
      <div className='auth-buttons'>
        <button className='login-btn'>Login</button>
        <button className='join-btn'>Join the Club</button>
      </div>
    </nav>
  );
};

export default Navbar;

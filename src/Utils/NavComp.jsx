/* eslint-disable react/prop-types */
import "./NavComp.css";

const NavComp = ({ text, variant }) => {
  const classes = `nav-comp ${variant}`;
  return <div className={classes}>{text}</div>;
};

export default NavComp;

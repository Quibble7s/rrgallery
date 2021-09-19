import React from "react";

import Button from "../Buttons/Button";

import "../../sass/components/Navbar/navbar.scss";
import { Logout } from "../../helpers/Actions/Auth";

const Navbar = () => {
  return (
    <nav className='nav'>
      <h1 className='text text--size-title text--primary'>rrgallery</h1>
      <Button value='Logout' className='btn' onClick={Logout} />
    </nav>
  );
};

export default Navbar;

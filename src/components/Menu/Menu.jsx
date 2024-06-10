import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ items, active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="menu__content background_block">
        <ul>
          {items.map((item) => (
            <li>
              <Link to={item.to}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

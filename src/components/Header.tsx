import React from "react";
import {
  MdHelpOutline,
  MdHelp,
  MdOutlineSettings,
  MdSettings,
} from "react-icons/md";
import { BsBarChart, BsBarChartFill } from "react-icons/bs";

const menuOptions = [
  { id: "help-button", iconLight: <MdHelpOutline />, iconDark: <MdHelp /> },
  {
    id: "stats-button",
    iconLight: <BsBarChart />,
    iconDark: <BsBarChartFill />,
  },
  {
    id: "settings-button",
    iconLight: <MdOutlineSettings />,
    iconDark: <MdSettings />,
  },
];

const Header = () => {
  return (
    <header>
      <div className="flex">
        <div className="flex-0">
          <h1>Pokedle</h1>
        </div>
        <div className="flex-1">
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            {menuOptions.map((option, index) => (
              <button className="btn" key={index} id={option.id}>
                {option.iconLight}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { Stat } from "./components/Stat";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiSvelte } from "react-icons/si";
export const Statistics = () => {
  const iconArray = [
    { icon: <AiFillHtml5 size={50} />, value: 70 },
    { icon: <SiCss3 size={40} />, value: 85 },
    { icon: <BiLogoJavascript size={45} />, value: 75 },
    { icon: <BiLogoTypescript size={45} />, value: 40 },
    { icon: <BiLogoReact size={45} />, value: 65 },
    { icon: <SiSvelte size={45} />, value: 20 },
  ];
  return (
    <div className="statistics" id="section">
      <h1 className="title">Skills</h1>
      <div className="progress">
        {iconArray.map((stat, idx) => {
          return <Stat data={stat} key={idx}/>;
        })}
      </div>
    </div>
  );
};
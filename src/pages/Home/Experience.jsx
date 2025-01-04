import { PiRadioButtonFill } from "react-icons/pi"

export const Experience = () => {
  return <div className="experience" id="section">
    <h1 className="title">Experiência</h1>
    <div className="content">
      <div className="wrapper">
        <PiRadioButtonFill/>
        <div className="bar"/>
        <PiRadioButtonFill/>
        <div className="bar"/>
      </div>
      <div className="val">
        <span><h1>Nexus Group</h1><p>Trabalhei como desenvolvedor na agência de servidores de FiveM "Nexus Group" (15/07/2023)</p></span>
        <span><h1>Reborn Games</h1><p>Trabalhei como desenvolvedor front-end chefe na empresa de jogos "Reborn Games" (12/09/2023)</p></span>
      </div>
    </div>
  </div>
}
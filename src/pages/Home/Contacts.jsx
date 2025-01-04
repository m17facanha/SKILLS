import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TbGps } from "react-icons/tb";

export const Contacts = () => {
  return <div className="contacts" id="section">
    <h1 className="title">Contato</h1>
    <div className="content">
      <div className="val">
        <BsWhatsapp size={40}/>
        <p> </p>
      </div>
      <div className="val">
        <FiMail size={40}/>
        <p>m17produçoes@gmail.com</p>
      </div>
      <div className="val">
        <TbGps size={40}/>
        <p>Fortaleza, Ceara, Brasil</p>
      </div>
    </div>
  </div>
}
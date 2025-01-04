import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineBehance } from "react-icons/ai"
import { RxDiscordLogo } from "react-icons/rx"
import { FiGithub } from "react-icons/fi"

export const Footer = () => {
 return <SFooter>
  <h1>OBRIGADO</h1>
  <h2>POR CHEGAR ATÉ AQUI!</h2>
  <p>Para contratar qualquer serviço basta entrar en contato comigo pelas redes sociais abaixo ou pelo WhatsApp.</p>
  <p style={{marginTop: "25px"}}>Até logo!!!</p>
  <div className="socials">
    <div className="k">
      <div className="icon">
        <AiOutlineInstagram size={17}/>
      </div>
      @M17_DEV
    </div>
    <div className="k">
      <div className="icon">
        <RxDiscordLogo size={16}/>
      </div>
      @THdev
    </div>
    <div className="k">
      <div className="icon">
        <FiGithub size={15}/>
      </div>
      THzx
    </div>
    <div className="k">
      <div className="icon">
        <AiOutlineWhatsApp size={18}/>
      </div>
      +55 71 99964-5511
    </div>
    <div className="k">
      <div className="icon">
        <AiOutlineBehance size={20}/>
      </div>
     M17 DEV
    </div>
  </div>
  <img className="bg" src="esboco1.png"/>
  <img className="bgr" src="esboco1.png"/>
 </SFooter>
}

const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;
  & h1 {
    color: #9342f7;
    font-family: "Outfit";
    font-weight: 800;
    font-size: 50px;
    z-index: 2;
  }
  & h2 {
    color: #11071d;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 40px;
    z-index: 2;
  }
  & p {
    font-weight: 500;
    width: 600px;
    font-size: 18px;
    font-family: "Manrope";
    color: #11071d;
    text-align: center;
  }
  & .socials {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    & .k {
      color: #1f0047;
      display: flex;
      align-items: center;
      gap: 4px;
      font-family: "Outfit";
      user-select: text;
      & .icon {
        user-select: none;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        border: 2px solid black;
        display: grid;
        place-items: center;
      }
    }
  }
  & .bg {
    opacity: 0.2;
    position: absolute;
    z-index: 0;
    height: 90%;
    left: -5%;
    @media (max-width: 768px) {
      left: -25%;
    }
  }
  & .bgr {
    @media (max-width: 768px) {
      display: none;
    }
    opacity: 0.2;
    position: absolute;
    z-index: 0;
    height: 90%;
    right: -5%;
  }
`
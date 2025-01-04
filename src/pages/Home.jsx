import styled, { keyframes } from "styled-components";
import {
  BsGithub,
  BsDiscord,
  BsFillMouse2Fill,
  BsThreeDots,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Statistics } from "./Home/Statistiscs";
import { Contacts } from "./Home/Contacts";
import { Formation } from "./Home/Formation";
import { Experience } from "./Home/Experience";
import { Footer } from "./Home/Footer";
import { useNavigate } from "react-router-dom"

const contacts = [
  {
    icon: <BsGithub size={37} />,
    url: "https://github.com/THzx",
  },
  {
    icon: <BsDiscord size={43} />,
    url: "https://discord.gg/ ",
  },
  {
    icon: <AiFillInstagram size={40} />,
    url: "https://www.instagram.com/M17_DEV/",
  },
];

const ContactLink = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, props["delay"]);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [props["delay"]]);
  return isVisible ? (
    <div onClick={() => window.open(props["contact"]["url"])}>
      {props["contact"]["icon"]}
    </div>
  ) : null;
};
 
export const Home = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth < window.innerHeight
    setMobile(isMobile)
    // if (window.innerWidth < 760) navigate("/discord")
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleResize = () => {
      // if (window.innerWidth < 760) navigate("/discord")
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const renderContactLinks = () => {
    return contacts.map((contact, index) => (
      <ContactLink key={index} contact={contact} delay={index * 250} />
    ));
  };
  return (
    <SHome>
      <SHeader>
        <div>
          <p>
            Olá! <a>Me chamo</a> <span>Matheus Façanha</span>
          </p>
          <h1>
            front-end
            <br />
            developer
          </h1>
          <footer>
            <span id="row">{renderContactLinks()}</span>
            <small style={{overflowY: "hidden"}}>
              <Typewriter
                words={[
                  "Desenvolvedor Front-End com habilidades em Javascript , basico de Typescript e experiência em suas frameworks. Familiarizado com metodologias ágeis e organização de projetos.",
                ]}
                typeSpeed={15}
                cursor
                cursorStyle="|"
              />
            </small>
          </footer>
        </div>
        {
          <div id="scroll" style={{ opacity: isScrolled ? "0" : "0.6" }}>
            <BsFillMouse2Fill size={15} /> Deslize para ver mais
          </div>
        }
      </SHeader>
      <SAboutMe>
        <div className="instagram">
          <header>
            <a>
              <img src="instagram_pfp.jpg" className="pfp" draggable={false} />
              <div>
                <p> TH</p>
                <small
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/bE9zzRtnNqcY7b8P8")
                  }
                >
                   Fortaleza, Ceara, Brasil
                </small>
              </div>
            </a>
            <BsThreeDots />
          </header>
          <img src="TH_pikeno.png" className="post" draggable={false} />
          <section className="actionsRow">
            <svg
              width="19"
              height="17"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3475 1.70007C19.8088 1.1611 19.1691 0.733548 18.4651 0.441844C17.7611 0.150141 17.0065 0 16.2445 0C15.4825 0 14.7279 0.150141 14.0239 0.441844C13.3199 0.733548 12.6802 1.1611 12.1415 1.70007L11.0235 2.81811L9.90546 1.70007C8.81728 0.611895 7.3414 0.00056404 5.80248 0.000564051C4.26357 0.000564063 2.78768 0.611895 1.69951 1.70007C0.611331 2.78825 1.14658e-08 4.26413 0 5.80304C-1.14658e-08 7.34196 0.611331 8.81784 1.69951 9.90602L2.81754 11.0241L11.0235 19.23L19.2294 11.0241L20.3475 9.90602C20.8864 9.3673 21.314 8.72767 21.6057 8.02367C21.8974 7.31966 22.0475 6.56509 22.0475 5.80304C22.0475 5.041 21.8974 4.28643 21.6057 3.58242C21.314 2.87842 20.8864 2.23879 20.3475 1.70007Z"
                fill="#FF3040"
              />
            </svg>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.02779C18.0032 10.2743 17.712 11.504 17.15 12.6167C16.4836 13.95 15.4592 15.0714 14.1915 15.8554C12.9237 16.6394 11.4628 17.055 9.97221 17.0556C8.72567 17.0588 7.49599 16.7676 6.38332 16.2056L1 18L2.79444 12.6167C2.23243 11.504 1.94119 10.2743 1.94444 9.02779C1.94502 7.53723 2.36058 6.07627 3.14456 4.80854C3.92855 3.54081 5.05001 2.51639 6.38332 1.85003C7.49599 1.28802 8.72567 0.996777 9.97221 1.00003H10.4444C12.413 1.10863 14.2723 1.93952 15.6664 3.33361C17.0605 4.7277 17.8914 6.58702 18 8.55557V9.02779Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6227 2.17511L8.37268 10.4251"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6227 2.17511L11.3727 17.1751L8.37268 10.4251L1.62268 7.42511L16.6227 2.17511Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={() => setSaved(!saved)}
              style={{ position: "absolute", right: "10px" }}
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2235 18.8592L8.22351 13.8592L1.22351 18.8592V2.85919C1.22351 2.32876 1.43422 1.82005 1.8093 1.44498C2.18437 1.06991 2.69308 0.859192 3.22351 0.859192H13.2235C13.7539 0.859192 14.2627 1.06991 14.6377 1.44498C15.0128 1.82005 15.2235 2.32876 15.2235 2.85919V18.8592Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>
          <footer>
            <p>120 curtidas</p>
            <p>
              M17_DEV <span>Sou apaixonado por tecnologia desde pequeno!</span>
            </p>
            <div className="comment">
              <img
                src="https://cdn.discordapp.com/attachments/1128738989302620230/1316761592905601134/icons8-comentarios-96.png?ex=675c394b&is=675ae7cb&hm=fd76065b556343cf40cf4291ef1ef954f0474ce881e10e3b6e45ce38345d30a2&"
                draggable={false}
              />
              Adicionar um comentário...
            </div>
          </footer>
        </div>
        <div className="content">
          <h1>SOBRE MIM</h1>
          <h2>
            Olá, meu nome é Matheus Façanha, tenho 19 anos, sou
            entusiasta da tecnologia e estudante de desenvolvimento Front-End,
            tenho diversos projetos pessoais, e já forneço inúmeras soluções
            para a comunidade. Gosto de desenvolver interfaces bonitas,
            atraentes e amigáveis com a intenção de trazer uma boa experiência
            ao usuário. Atualmente, trabalho com interfaces interativas com a
            plataforma FiveM.
          </h2>
        </div>
        <img
          className="pattern"
          src="https://media.discordapp.net/attachments/1144736810656858114/1156379032452079726/pattern.png?ex=6514c165&is=65136fe5&hm=9c5c76a1e82efa757cbc291ad1297f3e211a2fc04c73cf2a8a19cec8c9b2728c&=&width=677&height=671"
          draggable={false}
        />
      </SAboutMe>
      <SStatistics>
        <Statistics />
        <Contacts />
        <Formation />
        <Experience />
      </SStatistics>
      <Footer/>
    </SHome>
  );
};

const animations = {
  showText: keyframes`
    from { opacity: 0; transform: translateX(-100px) };
    to { opacity: 1; transform: translateX(0px) };
  `,
  showIcon: keyframes`
    from { opacity: 0; transform: translateY(50px) };
    to { opacity: 1; transform: translateY(0px) };
  `,
  fadeIn: keyframes`
    from { opacity: 0 };
    to { opacity: 1 };
  `,
};

const SHome = styled.main`
  scroll-behavior: smooth;
`;

const SHeader = styled.header`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle, #474049, #0f0f0f);

  display: grid;
  place-items: center;

  font-family: "Manrope";
  color: white;
  position: relative;
  & div {
    overflow: visible;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
      scale: 0.8;
    }
    & p {
      animation: ${animations.fadeIn} 2s ease;
      font-family: "JetBrains Mono";
      font-size: 17px;
      & a {
        font-size: 17px;
        opacity: 0.7;
        font-weight: 500;
      }
      & span {
        font-size: 19px;
        opacity: 1;
        font-weight: 700;
      }
    }
    & h1 {
      line-height: 1;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 100px;
      overflow: hidden;
      animation: ${animations.showText} 1s ease;
    }
    & footer {
      display: flex;
      gap: 50px;
      overflow: visible;
      & #row {
        width: 180px;
        display: flex;
        align-items: center;
        gap: 30px;
        overflow: visible;
        & svg {
          animation: ${animations.showIcon} 1s ease;
          cursor: pointer;
          color: #9342f7;
          &:hover {
            opacity: 0.8;
            scale: 1.1;
          }
        }
      }
      & small {
        height: 54px;
        width: 500px;
        font-size: 14px;
        font-family: "JetBrains Mono";
        opacity: 0.9;
      }
    }
  }
  & #scroll {
    @media (max-width: 768px) {
      scale: 1.2;
    }
    position: absolute;
    bottom: 50px;
    left: 50px;
    display: flex;
    align-items: center;
    font-family: "Outfit";
    flex-direction: row;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
  }
`;

const SAboutMe = styled.section`
  height: 670px;
  width: 100vw;
  background: #ffffff;

  color: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  position: relative;

  padding: 0 400px;
  z-index: -2;

  @media (max-width: 1560px) {
    padding: 0 350px;
  }
  @media (max-width: 1470px) {
    padding: 0 250px;
  }
  @media (max-width: 1250px) {
    padding: 0 150px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 50px 0;
    height: 950px;
  }
  @media (max-width: 450px) {
    height: 1000px;
  }
  @media (max-width: 350px) {
    height: 1100px;
  }
  @media (max-width: 290px) {
    height: 940px;
  }
  & .instagram {
    height: 480px;
    width: 320px;
    background: #ffffff;
    filter: drop-shadow(0 0 50px rgba(0, 0, 0, 0.7));
    border-radius: 10px;
    @media (max-width: 420px) {
      scale: 0.9
    }
    @media (max-width: 310px) {
      scale: 0.7
    }
    & header {
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding: 0 15px;
      height: 53px;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      & a {
        display: flex;
        align-items: center;
        gap: 13px;
        & .pfp {
          border-radius: 100%;
          height: 32px;
        }
        & div {
          overflow: hidden;
          line-height: 1;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          & p {
            overflow: hidden;
            font-weight: 600;
            font-size: 14px;
          }
          & small {
            font-weight: 400;
            font-size: 12px;
            opacity: 0.8;
            &:hover {
              cursor: pointer;
              color: #0051ff;
            }
          }
        }
      }
    }
    & .post {
      width: 100%;
    }
    & .actionsRow {
      position: relative;
      display: flex;
      gap: 10px;
      height: 27px;
      padding: 0 10px;
      align-items: center;
      & svg {
        cursor: pointer;
      }
    }
    & footer {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 0 10px;
      margin-top: 5px;
      & p {
        overflow: hidden;
        line-height: 1;
        font-size: 13px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #141414;
        & span {
          font-weight: 600;
          overflow: visible;
        }
      }
      & .comment {
        margin-top: 3px;
        display: flex;
        align-items: center;
        gap: 5px;
        & img {
          height: 17px;
        }
        color: #757575;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
      }
    }
  }
  & .content {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: flex-end;
    @media (max-width: 1024px) {
      align-items: center;
    }
    & h1 {
      font-family: "Manrope";
      font-size: 50px;
      overflow-y: hidden;
      @media (max-width: 300px) {
        font-size: 40px;
      }
    }
    & h2 {
      overflow-y: hidden;
      font-family: "Outfit";
      font-size: 20px;
      text-align: right;
      width: 600px;
      font-weight: 500;
      @media (max-width: 1770px) {
        width: 500px;
      }
      @media (max-width: 1630px) {
        width: 400px;
      }
      @media (max-width: 1024px) {
        width: 350px;
        text-align: center;
      }
      @media (max-width: 450px) {
        font-size: 18px;
        width: 80vw;
      }
      @media (max-width: 290px) {
        font-size: 15px;
      }
    }
  }
  & .pattern {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    height: 100%;
  }
`;

const SStatistics = styled.section`
  width: 100vw;
  height: 850px;
  background: #111;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150vh;
  }
  @media (max-width: 768px) {
    height: 110vh;
  }
  
  & #section {
    display: flex;
    flex-direction: column;
    padding-left: 25%;
    @media (max-width: 1440px) {
      padding-left: 20%;
    }
    height: 275px;
    width: 50vw;
    @media (max-width: 768px) {
      padding-left: 0%;
      height: fit-content;
      margin-top: 5vw;
      width: 80vw;
    }
    gap: 15px;
    & .title {
      display: flex;
      align-items: center;
      overflow: hidden;
      color: #e4e4e4;
      font-family: "Outfit";
      font-weight: 700;
      font-size: 55px;
      @media (max-width: 1024px) {
        font-size: 28px;
      }
    }
  }
  & .statistics {
    & .progress {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      width: 600px;
      @media (max-width: 1024px) {
        width: 450px;
        display: flex;
        flex-direction: column-reverse;
        gap: 10px;
      }
      @media (max-width: 768px) {
        width: 80vw;
      }
      & .reg {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #9342f7;
        width: 260px;
        @media (max-width: 1024px) {
          width: 390px;
        }
        @media (max-width: 768px) {
          width: 80vw;
        }
        & .icon {
          height: 50px;
          width: 50px;
          display: grid;
          place-items: center;
        }
        & .wrapper {
          border: 2px solid #9342f7;
          width: 200px;
          @media (max-width: 768px) {
            width: 140px;
          }
          @media (max-width: 1024px) {
            width: 320px;
          }
          @media (max-width: 768px) {
            margin-right: 2vw;
            width: 70vw;
          }
          height: 22px;
          border-radius: 999px;
          padding: 4px;
        }
      }
    }
  }
  & .contacts {
    & .title {
      color: #e4e4e4;
      font-family: "Outfit";
      font-weight: 700;
      font-size: 55px;
    }
    & .content {
      & .val {
        & svg {
          color: #9342f7;
        }
        display: flex;
        align-items: center;
        gap: 15px;
        color: white;
        font-family: "JetBrains Mono";
        & p {
          user-select: text;
          background: rgba(255, 255, 255, 0.075);
          padding: 4px 10px;
          border-radius: 4px;
        }
      }
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
  & .formation {
    & .title {
      color: #e4e4e4;
      font-family: "Outfit";
      font-weight: 700;
      font-size: 55px;
    }
    & .content {
      width: 600px;
      @media (max-width: 1024px) {
        width: 450px;
      }
      & .val {
        & svg {
          color: #9342f7;
        }
        display: flex;
        align-items: center;
        gap: 15px;
        color: white;
        font-family: "Manrope";
        & p {
          user-select: text;
          padding: 4px 10px;
          border-radius: 4px;
        }
      }
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
  & .experience {
    & .title {
      color: #e4e4e4;
      font-family: "Outfit";
      font-weight: 700;
      font-size: 55px;
    }
    & .content {
      display: flex;
      gap: 15px;
      & .wrapper {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        & svg {
          color: #9342f7;
        }
        & .bar {
          background: #9342f77d;
          height: 50px;
          width: 1px;
        }
      }
      & .val {
        width: 300px;
        & span {
          font-family: "Outfit";
          & h1 {
            color: white;
            font-size: 17px;
            font-weight: 700;
          }
          & p {
            color: #cfcfcfce;
            font-size: 15px;
            font-weight: 500;
          }
        }
      } 
    }
  }
`;

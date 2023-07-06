import { AiFillInstagram, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import CSS from "../assets/skills/CSS.png"
import HTML from "../assets/skills/HTML.png"
import JAVA from "../assets/skills/JAVA.png"
import JS from "../assets/skills/JS.png"
import MYSQL from "../assets/skills/MYSQL.png"
import PHP from "../assets/skills/PHP.png"
import PYTHON from "../assets/skills/PYTHON.png"
import REACT from "../assets/skills/REACT.png"
import TS from "../assets/skills/TS.png"
import NODE from "../assets/skills/NODE.svg"
export const meGusta = [
    "trabajar en equipo",
    "aprender",
    "resolver problemas",
    "programar"
]

export const redesSociales = [
    {
      name:"CV",
      logo:<AiFillFilePdf size="100%"/>
    },
    {
      name:"Linkeding",
      url:"https://www.linkedin.com/in/julen-perez-coca/",
      logo:<AiFillLinkedin size="100%"/>
    },
    {
      name:"Instagram",
      url:"https://www.instagram.com/julper23",
      logo:<AiFillInstagram size="100%"/>
      
    }
  ]

  export const habilidades = [
    {
      name:"CSS",
      logo:CSS,
      web:true,
      movil:true,
      backend:false,
      lenguajes:false
    },
    {
      name:"HTML",
      logo:HTML,
      web:true,
      movil:false,
      backend:false,
      lenguajes:false
    },
    {
      name:"Java",
      logo:JAVA,
      web:false,
      movil:false,
      backend:false,
      lenguajes:true
    },
    {
      name:"JavaScript",
      logo:JS,
      web:true,
      movil:true,
      backend:true,
      lenguajes:true
    },
    {
      name:"MySQL",
      logo:MYSQL,
      web:false,
      movil:false,
      backend:true,
      lenguajes:false
    },
    {
      name:"PHP",
      logo:PHP,
      web:true,
      movil:false,
      backend:false,
      lenguajes:false
    },
    {
      name:"Python",
      logo:PYTHON,
      web:false,
      movil:false,
      backend:false,
      lenguajes:true
    },
    {
      name:"React",
      logo:REACT,
      web:true,
      movil:true,
      backend:true,
      lenguajes:false
    },
    {
      name:"TypeScript",
      logo:TS,
      web:true,
      movil:true,
      backend:false,
      lenguajes:false
    },
    {
      name:"Node",
      logo:NODE,
      web:true,
      movil:true,
      backend:true,
      lenguajes:false
    }
  ]
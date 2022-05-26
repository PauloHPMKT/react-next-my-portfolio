import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJsSquare, 
    FaReact, 
    FaSass, 
    FaNodeJs, 
    FaGitAlt 
} from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'

export const Skills = [
    {
        slug: "html",
        Component: FaHtml5,
        title: "Html",
        Description: () => <>Cria estrutura base semântica de páginas.</>
    },
    {
        slug: "css",
        Component: FaCss3Alt,
        title: "CSS",
        Description: () => <>Cria os estilos de todo o projeto.</>
    },
    {
        slug: "sass",
        Component: FaSass,
        title: "Sass",
        Description: () => <>Processa CSS com superpoderes.</>
    },
    {
        slug: "javacript",
        Component: FaJsSquare,
        title: "JavaScript",
        Description: () => <>Cria funcionalidades e interação da aplicação</>
    },
    {
        slug: "react-js",
        Component: FaReact,
        title: "React JS",
        Description: () => <>Create user interfaces patterns</>
    },
    {
        slug: "node-js",
        Component: FaNodeJs,
        title: "Node JS",
        Description: () => <>Create Server side and backend structure</>
    },
    {
        slug: "express-js",
        Component: SiExpress,
        title: "Express JS",
        Description: () => <>Create routes structure and APIrest</>
    },
    {
        slug: "mongo-db",
        Component: SiMongodb,
        title: "Mongo DB",
        Description: () => <>Databaase to menager and flow datas</>
    },
    {
        slug: "git",
        Component: FaGitAlt,
        title: "Sitema Git",
        Description: () => <>Using to versioning code</>
    },
]
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa'

export const Skills = [
    {
        slug: "html",
        Component: FaHtml5,
        title: "Html",
        Description: () => <>Create Markup structure pages</>
    },
    {
        slug: "css",
        Component: FaCss3Alt,
        title: "CSS",
        Description: () => <>Create styles of the project</>
    },
    {
        slug: "javacript",
        Component: FaJsSquare,
        title: "JavaScript",
        Description: () => <>Create page interactions</>
    },
    {
        slug: "react-js",
        Component: FaReact,
        title: "React JS",
        Description: () => <>Create user interfaces patterns</>
    },
]
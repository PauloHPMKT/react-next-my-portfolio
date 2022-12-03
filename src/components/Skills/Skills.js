import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaReact,
	FaSass,
	FaNodeJs,
	FaGitAlt,
	FaVuejs,
	FaDocker,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

export const Skills = [
	{
		slug: "html",
		Component: FaHtml5,
		title: "Html",
		Description: () => <>Cria estrutura base semântica de páginas.</>,
	},
	{
		slug: "css",
		Component: FaCss3Alt,
		title: "CSS",
		Description: () => <>Cria os estilos de todo o projeto.</>,
	},
	{
		slug: "sass",
		Component: FaSass,
		title: "Sass",
		Description: () => <>Processa CSS com superpoderes.</>,
	},
	{
		slug: "javascript",
		Component: FaJsSquare,
		title: "JavaScript",
		Description: () => <>Cria funcionalidades e interação da aplicação</>,
	},
	{
		slug: "typescript",
		Component: SiTypescript,
		title: "TypeScript",
		Description: () => <>JavaScript com tipos de alto nível</>,
	},
	{
		slug: "react-js",
		Component: FaReact,
		title: "React JS",
		Description: () => <>Criando frontend com estruturas declarativas</>,
	},
	{
		slug: "vue-js",
		Component: FaVuejs,
		title: "Vue JS",
		Description: () => <>Desenvolvendo frontend com vuex e options API</>,
	},
	{
		slug: "node-js",
		Component: FaNodeJs,
		title: "Node JS",
		Description: () => <>Criando servidores e estruturas de backend</>,
	},
	{
		slug: "express-js",
		Component: SiExpress,
		title: "Express JS",
		Description: () => <>Criando backend, roteamento e APIs</>,
	},
	{
		slug: "mongo-db",
		Component: SiMongodb,
		title: "Mongo DB",
		Description: () => <>DB para armazenamento e gestão de dados</>,
	},
	{
		slug: "docker",
		Component: FaDocker,
		title: "Docker",
		Description: () => <>Criar e gerir aplicações containerizadas</>,
	},
	{
		slug: "git",
		Component: FaGitAlt,
		title: "Sitema Git",
		Description: () => <>Usando sistema de versionamento de códigos</>,
	},
];

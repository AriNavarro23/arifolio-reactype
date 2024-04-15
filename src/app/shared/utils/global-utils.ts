import { v4 as uuid } from 'uuid'

import {
	IDevToolsElement,
	IExperienceCard,
	IProjectCard,
} from '../models/global-interface'


//projects
import todolist from '../../../assets/todolist.webp'
import weather from '../../../assets/weather.jpg'
import crud from '../../../assets/crud.webp'
import password from '../../../assets/password.webp'
//background
import bg_1 from '../../../assets/bg-melo.jpg'
import bg_2 from '../../../assets/bg-abc.jpg'
import bg_3 from '../../../assets/bg-an.jpg'
//logos
import melo from '../../../assets/logo-melo.png'
import abc from '../../../assets/logo-abc.webp'
import an from '../../../assets/logo-an.png'


export const Projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'projects-section.project_name.todolist',
		description: 'projects-section.projects.todolist',
		screenShot: todolist,
		demoLink: 'https://todolist-ochre-eight.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 1,
		technologies: ['React Js','|',' CSS'],
	},
	{
		id: uuid(),
		project_name: 'projects-section.project_name.weather',
		description: 'projects-section.projects.weather',
		screenShot: weather,
		demoLink: 'https://weather-app-silk-gamma.vercel.app/',
		className: 'lg:row-span-2 xl:col-span-4',
		isPrivate: true,
		index: 2,
		technologies: ['React Js','|','Bootstrap'],
	},
	{
		id: uuid(),
		project_name: 'projects-section.project_name.password',
		description: 'projects-section.projects.password',
		screenShot: password,
		demoLink: 'https://password-generator-react-eta.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
		technologies: ['React Js','|','Tailwind CSS','|','Next.js'],
	},
	{
		id: uuid(),
		project_name: 'projects-section.project_name.crud',
		description: 'projects-section.projects.crud',
		screenShot: crud,
		demoLink: 'https://crud-redux-delta.vercel.app/',
		className: 'lg:row-span-2 xl:col-span-4',
		isPrivate: true,
		index: 4,
		technologies: ['React Js','|','Tailwind CSS'],
	},
]
export const Experiences: IExperienceCard[] = [
	//melo
	{
		id: uuid(),
		company_logo: melo,
		company_name: 'Melo Estudio',
		position_name: 'Web design and Developer',
		dates: 'experience-section.companies.melo.dates',
		url_site: 'https://melo-studio.vercel.app/',
		background_url: bg_1,
	},
	//abc consultant
	{
		id: uuid(),
		company_logo: abc,
		company_name: 'ABC Consultant',
		position_name: 'Front-end Developer jr',
		dates: 'experience-section.companies.abc.dates',
		url_site: 'https://abc-consultant.vercel.app/',
		background_url: bg_2,
	},
	//freelance
	{
		id: uuid(),
		company_logo: an,
		company_name: 'Freelance',
		position_name: 'Front-end Developer jr',
		dates: 'experience-section.companies.free.dates',
		url_site: 'https://an-developer.vercel.app/',
		background_url: bg_3,
	},

]

export const DevTools: IDevToolsElement[] = [
	{
		id: uuid(),
		name: 'HTML5',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'CSS3',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
	},
	{
		id: uuid(),
		name: 'TypeScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	},
	{
		id: uuid(),
		name: 'SASS',
		icon: 'https://www.svgrepo.com/show/374061/sass.svg',
	},
	{
		id: uuid(),
		name: 'React',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		id: uuid(),
		name: 'Next.js',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
		className: 'dark:invert opacity-70',
	},
	{
		id: uuid(),
		name: 'Vite',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
	},
	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},
	{
		id: uuid(),
		name: 'Node.js',
		icon: 'https://www.svgrepo.com/show/355140/node.svg',
	},
	{
		id: uuid(),
		name: 'MongoDB',
		icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
	},
	{
		id: uuid(),
		name: 'MySQL',
		icon: 'https://www.svgrepo.com/show/306453/mysql.svg',
		className: 'dark:invert opacity-70',
	},
]

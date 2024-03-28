import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { GrCloudDownload } from 'react-icons/gr'
import { LuLanguages } from 'react-icons/lu'

import { useThemeStore } from '../../../shared/stores/useThemeStore'
import { useTranslateStore } from '../../../shared/stores/useTranslateStore.ts'
import { switchLanguage } from '../../../shared/utils/translate-utils.tsx'

import SunIcon from '../../icons/SunIcon.tsx'
import MoonIcon from '../../icons/MoonIcon.tsx'

const Header = () => {
	//constante para portal y declaro para typescript que es un elemento html y no es nulo
	const portalDiv = document.getElementById('portal')!
	//creo constante para obtener la funcion de cambio de tema
	const toggleTheme = useThemeStore(state => state.toggleTheme)
	//creo constante para obtener el tema
	const theme = useThemeStore(state => state.theme)
	//creo constantes para obtener y cambiar el estado de mostrar el toggle de traduccion
	const showTranslateToggle = useTranslateStore(
		state => state.showTranslateToggle,
	)
	//creo constante para obtener la funcion de cambiar el estado de mostrar el toggle de traduccion
	const setShowTranslateToggle = useTranslateStore(
		state => state.setShowTranslateToggle,
	)
	//creo funcion para cambiar el idioma
	const handleLanguage = (lang: string) => {
		setShowTranslateToggle(false)
		switchLanguage(lang)
	}

	return (
		//boton lenguaje - boton de descarga de cv - boton de cambio de tema
		//creo un div desplegablepara mostrar opciones en el boton de lenguaje
		<header className='w-full overflow-x-hidden h-[5rem] flex justify-center dark:bg-dusky bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased'>
			<nav className='w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-6xl'>
				<div className='w-7 h-7 bg-dusky flex items-center justify-center dark:bg-moonlit p-4 rounded-lg'>
					<a 
						href='/'
						className='text-moonlit text-md font-semibold dark:text-dusky'>
						AN
					</a>
				</div>
				<div className='flex items-center gap-4'>
					<button
						title='Translate'
						className='text-xl'
						onClick={() => setShowTranslateToggle(true)}
					>
						<LuLanguages />
					</button>
					{theme === 'light' ? (
						<button title='Switch to dark theme' onClick={toggleTheme}>
							<MoonIcon className='w-6 h-6 fill-current text-[#2f3133] active:rotate-[360deg] transition-all duration-300' />
						</button>
					) : (
						<button title='Switch to white theme' onClick={toggleTheme}>
							<SunIcon className='w-6 h-6 fill-current text-sun-beam active:rotate-[360deg] transition-all duration-300' />
						</button>
					)}
					<a
						className='w-auto h-7 px-4 font-medium flex items-center gap-2 bg-dusky text-moonlit rounded-3xl dark:text-dusky dark:bg-moonlit lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-transform duration-300'
						href='https://drive.google.com/file/d/151lwCETPShntSduJmXZSxe7ZaQ09gF1v/view?usp=sharing'
						target='_blank'
					>
						<GrCloudDownload />
						<div className='flex items-center'>
							<span className='hidden lg:flex'>Download &nbsp;</span>
							<span>CV</span>
						</div>
					</a>
				</div>
			</nav>
			{showTranslateToggle &&
				createPortal(
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.2 }}
						className='w-full h-full relative max-w-5xl px-5 xl:max-w-6xl'
					>
						<div className='w-auto h-auto absolute flex flex-col items-center p-1 top-[0.4rem] z-[10] right-[7.5rem] lg:right-[13.3rem] lg:top-[1.4rem] bg-white dark:bg-raisin-black rounded-xl text-left shadow-md'>
							<div className='w-0 h-0 absolute -top-3 border-l-[10px] border-l-transparent border-b-[15px] border-b-white dark:border-b-raisin-black border-r-[10px] border-r-transparent' />
							<button
								title='English'
								className='w-full px-5 py-2 text-sm font-medium cursor-pointer hover:bg-moonlit hover:dark:bg-dusky rounded-xl'
								onClick={() => handleLanguage('en')}
							>
								English
							</button>
							<button
								title='Spanish'
								className='w-full px-5 py-2 text-sm font-medium cursor-pointer hover:bg-moonlit hover:dark:bg-dusky rounded-xl'
								onClick={() => handleLanguage('es')}
							>
								Español
							</button>
						</div>
					</motion.div>,
					portalDiv,
				)}
		</header>
	)
}

export default Header

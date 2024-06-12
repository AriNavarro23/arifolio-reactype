import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'

import { GoHeartFill } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'
import { RiReactjsLine } from 'react-icons/ri'

const Footer = () => {
	const { t } = useTranslation('global')
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='w-full h-40 flex flex-col items-start justify-center max-w-5xl px-5 xl:max-w-6xl text-base'
		>
			<div className='w-full h-full bg-white dark:bg-raisin-black rounded-3xl flex items-center justify-between px-10'>
				<div className='flex flex-col items-start opacity-50 max-w-[50%] lg:max-w-fit'>
					<p>© 2024 Ariel Navarro.</p>
					<p>{t('others-translations.copy-right')}</p>
					<p className='items-center gap-2 hidden lg:flex'>
						{t('others-translations.made-with')} <GoHeartFill className='text-red-700' /> {t('others-translations.and')} <RiReactjsLine className='text-cyan-600 dark:text-react' />
					</p>
				</div>
				<div className='flex flex-col-reverse gap-3 items-center'>
					<p className='opacity-50 hidden lg:flex'>
						{t('others-translations.last-update')}
					</p>
					<div className='flex items-center gap-4 text-xl'>
						<a
							className='flex items-center text-xs font-bold p-1 lg:px-6 rounded lg:rounded-lg bg-moonlit text-dusky'
							href='mailto:navarro.ari.dev@gmail.com'
							title='Email me'
						>
							<MdAlternateEmail />
							<span className='hidden lg:flex'> Contactame para hacer $</span>
						</a>
						<a
							className='flex items-center font-medium text-2xl'
							href='https://www.linkedin.com/in/arinavarro/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer

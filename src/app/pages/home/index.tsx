import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Header from '../../theme/components/Header/Header'
import Footer from '../../theme/components/Footer/Footer'
import HeroSection from '../../theme/components/Sections/HeroSection'
import ExperienceSection from '../../theme/components/Sections/ExperienceSection'
import ToolsSection from '../../theme/components/Sections/ToolsSection'
import PositionsSection from '../../theme/components/Sections/PositionSection/index'

const Home = () => {
	const { t } = useTranslation('global')

	return (
		<div className='w-full bg-noon select-none text-midnight flex flex-col items-center subpixel-antialiased dark:bg-dusky dark:text-noon scroll-smooth gap-5 lg:gap-10 mb-10'>
			<div
				id='portal'
				className='w-full flex items-center justify-center mt-16 lg:mt-[3rem] fixed z-20'
			/>
			<Header />
			<main className='w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-6xl mt-[5.5rem]'>
				<HeroSection />
				<header className='w-full flex flex-col gap-2 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.25, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
						{t('projects-section.title')}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.25, duration: 0.3 }}
						viewport={{ once: true }}
						className='opacity-70'
					>
						{t('projects-section.description')}
					</motion.p>
				</header>
				<ExperienceSection />
				<header className='w-full flex flex-col gap-2 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
						{t('technologies-section.title')}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='opacity-70'
					>
						{t('technologies-section.description')}
					</motion.p>
				</header>
				<ToolsSection />
				<header className='w-full flex flex-col gap-2 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
						{t('experience-section.title')}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='opacity-70'
					>
						{t('experience-section.description')}
					</motion.p>
				</header>
				<PositionsSection />
			</main>
			<Footer />
		</div>
	)
}

export default Home

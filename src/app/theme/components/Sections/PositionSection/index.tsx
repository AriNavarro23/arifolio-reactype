import { FC } from 'react'
import { Experiences } from '../../../../shared/utils/global-utils'

import ExperienceCard from '../../ExperienceCard/ExperienceCard'

import { IExperienceCard } from '../../../../shared/models/global-interface'

const PositionsSection: FC = () => {
	return (
		<section className='w-full grid auto-rows-[260px] grid-cols-8 gap-4'>
			{Experiences.map((experience: IExperienceCard) => (
				<ExperienceCard {...experience} />
			))}
		</section>
	)
}

export default PositionsSection

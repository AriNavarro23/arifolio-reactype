import { FC } from 'react'
import { Projects } from '../../../../shared/utils/global-utils'

import ProjectCard from '../../../../theme/components/ProjectCard/ProjectCard'

import { IProjectCard } from '../../../../shared/models/global-interface'

const ExperienceSection: FC = () => {
	return (
		<section className='w-full grid auto-rows-[380px] lg:auto-rows-[140px] grid-cols-8 gap-4'>
			{Projects.map((project: IProjectCard) => {
				return <ProjectCard {...project} />
			})}
		</section>
	)
}

export default ExperienceSection

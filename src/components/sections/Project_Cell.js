import React from 'react'
import { Button, Link, Text, Card } from '@chakra-ui/react'

const ProjectCell = ({
	title,
	href,
	thumbnailSrc,
	description,
	githubLink
}) => {

	return (
		<Card
			maxWidth={['100%', '45%']}
			minHeight='500px'
			margin='1rem'
			boxShadow='var(--chakra-shadows-xl)'
		>
			<Text
				as='h3'
				fontSize='1.5rem'
				fontWeight='700'
				wordBreak='normal'
				m='1rem auto'
				textShadow='var(--chakra-shadows-md)'
			>
				<Link href={href}>{title}</Link>
			</Text>
			<Link
				href={href}
			>
			<img
				className='thumbnail'
				alt='rumblr project thumbnail screenshot'
				src={thumbnailSrc}
			/>
			</Link>
			<Text
				padding='1rem'
			>
				{description}
			</Text>
			<Link
				m='auto auto 1rem auto'
				className='githubRepoLink'
				href={githubLink}
			>
				<Button fontSize='1.2rem'>Github Repo</Button>
			</Link>
		</Card>
	)
}

export default ProjectCell
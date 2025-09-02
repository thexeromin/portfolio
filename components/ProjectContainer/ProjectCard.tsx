import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'

interface ProjectCardProps {
  config: {
    title: string
    description: string
    github_link: string
    live_link: string
    image: string
    tags: Array<string>
  }
}

const ProjectCard: NextComponentType<NextPageContext, {}, ProjectCardProps> = ({
  config,
}) => {
  const { title, description, github_link, live_link, image, tags } = config

  return (
    <Box pos="relative" role="group" cursor={'pointer'}>
      <Image
        objectFit="cover"
        w="full"
        h="400px"
        src={image}
        alt={title}
        borderRadius="md"
        border="2px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      />

      <Box
        pos="absolute"
        borderRadius="md"
        w="full"
        h="full"
        bg={useColorModeValue('gray.50', 'gray.700')}
        border="2px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bottom={0}
        p={5}
        opacity={0}
        transition="all 300ms ease-in-out"
        _groupHover={{ opacity: 1 }}
      >
        <Heading size="md" color={useColorModeValue('gray.900', 'gray.200')}>
          {title}
        </Heading>

        <Text>{description}</Text>

        <Stack direction="row" mt={5}>
          {tags.map((tag, idx) => (
            <Badge colorScheme="default" key={tag + '-' + idx}>
              {tag}
            </Badge>
          ))}
        </Stack>

        <Stack direction="row" mt={5}>
          <Button
            rounded={'full'}
            size="sm"
            leftIcon={<FaGithub />}
            as={'a'}
            href={github_link}
            target={'_blank'}
          >
            Github
          </Button>
          <Button
            rounded={'full'}
            size="sm"
            leftIcon={<BsArrowUpRight />}
            as={'a'}
            href={live_link}
            target={'_blank'}
          >
            Live
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ProjectCard

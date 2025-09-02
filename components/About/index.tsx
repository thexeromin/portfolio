import type { NextComponentType, NextPageContext } from 'next'
import { Container, Center, Text, Image } from '@chakra-ui/react'

import SectionWrapper from '../SectionWrapper'

import { aboutMe, profileImage } from '../../utils'

interface AboutProps {}

const About: NextComponentType<NextPageContext, {}, AboutProps> = () => {
  return (
    <SectionWrapper title="About" desc="Get to know about me 😎" id='about'>
      <Container>
        <Center>
          <Image
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            src={profileImage}
            alt="Abhijit Paul"
          />
        </Center>

        <Text color="whiteAlpha.800" textAlign="justify" mt="3rem" fontWeight="300">
          {aboutMe}
        </Text>
      </Container>
    </SectionWrapper>
  )
}

export default About

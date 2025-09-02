import { ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { headingStyle, subHeadingStyle } from './style'

interface SectionWrapperProps {
  title: string
  desc?: string
  children: ReactNode
  id?: string
}

const SectionWrapper: NextComponentType<
  NextPageContext,
  {},
  SectionWrapperProps
> = ({ children, title, desc, id }) => {
  return (
    <Container id={id || ''} maxW={'4xl'} borderRadius={'0.375rem'} mt="3rem">
      <Box pt="2rem" mb="5">
        <Heading size={'lg'}>{title}</Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {desc || ''}
        </Text>
      </Box>
      {children}
    </Container>
  )
}

export default SectionWrapper

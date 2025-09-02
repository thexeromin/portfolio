import type { NextComponentType, NextPageContext } from 'next'
import { Container, Text, useColorModeValue } from '@chakra-ui/react'

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = () => {
  return (
    <footer>
      <Container
        maxW={'7xl'}
        borderRadius={'0.375rem'}
        bg={'transparent'}
        backdropFilter="blur(10px)"
        mt="3rem"
        py={4}
      >
        <Text
          color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
          textAlign="center"
        >
          © {new Date().getFullYear()} Abhijit Paul
        </Text>
      </Container>
    </footer>
  )
}

export default Footer

import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import NavLink from './NavLink'

import { NavLinks, BRAND_NAME } from '../../utils'

const Navbar: NextComponentType<NextPageContext, {}, {}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box my={{ xs: 0, md: 5 }} pos={'fixed'} w={'full'} top={0} zIndex={1}>
      <Container
        bg={useColorModeValue('white', 'gray.900')}
        border="2px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        maxW={'4xl'}
        borderRadius={{
          xs: 'none',
          md: 'full',
        }}
        px={10}
      >
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            rounded={'full'}
            variant={'ghost'}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading size={'sm'} textTransform={'uppercase'}>
              {BRAND_NAME}
            </Heading>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {NavLinks.map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3} justify="center">
              <Button
                onClick={toggleColorMode}
                rounded={'full'}
                size={'sm'}
                variant={'ghost'}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NavLinks.map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}

export default Navbar

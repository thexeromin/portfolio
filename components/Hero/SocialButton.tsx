import type { NextComponentType, NextPageContext } from 'next'
import { ReactNode } from 'react'
import { chakra, VisuallyHidden } from '@chakra-ui/react'

interface SocialButtonProps {
  children: ReactNode
  label: string
  href: string
}

const SocialButton: NextComponentType<
  NextPageContext,
  {},
  SocialButtonProps
> = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="whiteAlpha.200"
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.100',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default SocialButton

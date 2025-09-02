import type { NextComponentType, NextPageContext } from 'next'
import { Link, useColorModeValue } from '@chakra-ui/react'

interface NavLinkProps {
  label: string
}

const NavLink: NextComponentType<NextPageContext, {}, NavLinkProps> = ({
  label,
}) => (
  <Link
    px={3}
    py={1}
    rounded={'full'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${label.toLowerCase()}`}
  >
    {label}
  </Link>
)

export default NavLink

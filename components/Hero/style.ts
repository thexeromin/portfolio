import { SystemStyleObject } from '@chakra-ui/react'

export const containerStyle: SystemStyleObject = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDir: {
    xs: 'column',
    md: 'row',
  },
  gap: '1.4rem',
  marginTop: {
    xs: '7rem',
    md: '11rem',
  },
  maxW: '4xl',
  mx: 'auto',
}

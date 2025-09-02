import type { NextComponentType, NextPageContext } from 'next'
import { Avatar, Box } from '@chakra-ui/react'

interface Props {
  href?: string
  label?: string
}

const ProfileImage: NextComponentType<NextPageContext, {}, Props> = ({}) => {
  const size = '170px'

  return (
    <Box
      as="div"
      minW={size}
      borderRadius={'full'}
      bg="linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4)"
      p="1"
      h={size}
    >
      <Avatar
        src="./profile.jpg"
        size="full"
        top={0}
      />
    </Box>
  )
}

export default ProfileImage

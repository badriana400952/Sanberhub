'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Avatar, Heading,
  Divider
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link, Outlet, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../store/user/UserSlice'
const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function ResponsiveAppBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  if (token === null) {
    return <Navigate to={`/login`} />
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <>
      <Box px={4}>
        <Container maxW={'container.2xl'}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Heading as="h1" size="lg" color={'teal'}>
                <Link to={`/`}>
                  Sanberhub
                </Link>
              </Heading>
              <Heading as="h1" size="sm" color={'teal'}><Link to={`/soal`}>
                  Test Logic
                </Link></Heading>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    // name={`${user.firstName}`}
                    src={'#'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      // name={`${user.firstName}`}
                      src={'#'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <Divider />

                  <MenuItem><Button onClick={handleLogout}>Logout</Button></MenuItem>
                </MenuList>

              </Menu>
            </Flex>
          </Flex>
        </Container>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Outlet />
    </>
  )
}
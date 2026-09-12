import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' p={4} bg='gray.100' _dark={{ bg: 'gray.800', color: 'white' }}>
            <Image src={logo} boxSize='60px' />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
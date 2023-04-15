
import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';
import {

    Text,
    IconButton,
    // Button,
    Stack,
    useColorModeValue,
    // useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

import plight from "../image/plight.png"
import pdark from "../image/pdark.png"
import { useSelector,useDispatch } from 'react-redux';
import { handeltheme } from '../redux/action';

export default function WithSubnavigation() {
    const data=useSelector((store)=> store.theme)
    const dispatch=useDispatch()
    console.log(data)
    const { isOpen, onToggle } = useDisclosure();
    const size = '50px';
    
    const color = 'teal';

    const pulseRing = keyframes`
      0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
      `;

      function handletheme(){
        dispatch(handeltheme())
      }
    return (
        <Box position={'fixed'} zIndex={'1'} width={'100%'} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
            <Flex

                bg={useColorModeValue(data?'white':'black', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', sm: 'none', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} justifyContent={'space-between'}  >




                    <Flex
                        display={{ base: 'none', sm: 'flex', md: 'flex' }}
                        w="full"
                        overflow="hidden">
                        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
                        <Box
                            as="div"
                            position="relative"
                            w={size}
                            h={size}
                            _before={{
                                content: "''",
                                //   position: 'relative',
                                display: 'block',
                                width: '300%',
                                height: '300%',
                                boxSizing: 'border-box',
                                marginLeft: '-50%',
                                marginTop: '-100%',
                                borderRadius: '50%',
                                bgColor: color,
                                animation: `2.00s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                            }}>
                            <Avatar
                                src={data?pdark:plight}
                                size="full"
                                onClick={handletheme}
                                position="absolute"
                                top={0}
                                _hover={{cursor:'pointer'}}
                            />
                            
                        </Box>
                    </Flex>




                    <Flex display={{ base: 'none', sm: 'flex', md: 'flex' }} mr={5} alignItems={'center'}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                {/* <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack> */}
            </Flex>

            {/* <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse> */}
        </Box>
    );
}

const DesktopNav = () => {
    const data=useSelector((store)=> store.theme)
 
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    {navItem.label==="Resume"?<button style={{border:data?'1px solid green':'1px solid white',borderRadius:'10px',padding:'3px 10px', color:data?'black':'white'}}>Resume</button>:
                    <Text _hover={{cursor:'pointer'}} color={data?'black':'white'} fontSize='18px' paddingLeft='10px'>
                    {navItem.label}
                    </Text>}
                    
                </Box>
            ))}
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'About',
      
    },
    {
        label: 'Skills',
     
    },
    {
        label: 'Projects',
      
    },
    {
        label: 'Statistics',
       
    },
    {
        label: 'Contact',
       
    },
    {
        label: 'Resume',
        
    },
];

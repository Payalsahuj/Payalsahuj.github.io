import "../CSS/navitem.css"
import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';
import {
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
import {Link} from 'react-router-dom'

import plight from "../image/plight.png"
import pdark from "../image/pdark.png"
import { useSelector,useDispatch } from 'react-redux';
import { handeltheme } from '../redux/action';

export default function WithSubnavigation() {
    const data=useSelector((store)=> store.theme)
    const dispatch=useDispatch()
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
                // borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', sm: 'flex', md: 'none' }}>
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
                        display={{ base: 'none', sm: 'none', md: 'flex' }}
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




                    <Flex display={{ base: 'none', sm: 'none', md: 'flex' }} mr={5} alignItems={'center'}>
                        <DesktopNav />
                    </Flex>
                </Flex>
            </Flex>

          
        </Box>
    );
}

const DesktopNav = () => {
    const data=useSelector((store)=> store.theme)
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Link  key={navItem.label} to={navItem.link}>
                <Box>
                    {navItem.label==="Resume"?
                    <button className={`resumebutton ${navItem.class}`} style={{border:data?'1px solid green':'1px solid white', color:data?'black':'white'}}>Resume</button>:
                    <p className={`navitem ${navItem.class}`}  style={{color:data?'black':'white'}} >
                    {navItem.label}
                    </p>}
                    
                </Box>
                </Link>
            ))}
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Home',
        class:"nav-link home",
        link:'/'
      
    },
    {
        label: 'About',
        class:"nav-link about",
        link:'/about'
    },
    {
        label: 'Skills',
        class:"nav-link skills",
        link:'/skills'
      
    },
    {
        label:'Statistics',
        class:'nav-link statistics',
        link:'/statistics'
    },
    {
        label: 'Projects',
        class:"nav-link projects",
        link:'/project'
       
    },
    {
        label: 'Contact',
        class:"nav-link contact",
        link:'/contact'
       
    },
    {
        label: 'Resume',
        class:"nav-link resume",
        link:'/resume'
    },
];

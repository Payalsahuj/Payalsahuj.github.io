import "../CSS/navitem.css";
import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";
import {
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  // useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import resume from "../image/Payal-Sahu-Resume.pdf";
// import {Link} from 'react-router-dom'
import plight from "../image/plight.png";
import pdark from "../image/pdark.png";
import { useSelector, useDispatch } from "react-redux";
import { handeltheme } from "../redux/action";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function WithSubnavigation() {
  const data = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure();
  const size = "50px";

  const color = "teal";
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
  function handletheme() {
    dispatch(handeltheme());
  }
  return (
    <Box
      position={"fixed"}
      zIndex={"2"}
      width={"100%"}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Flex
        bg={useColorModeValue(data ? "white" : "black", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", sm: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          justifyContent={"space-between"}
        >
          <Flex
            display={{ base: "none", sm: "none", md: "flex" }}
            w="full"
            overflow="hidden"
          >
            {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
            <Box
              as="div"
              position="relative"
              w={size}
              h={size}
              _before={{
                content: "''",
                //   position: 'relative',
                display: "block",
                width: "300%",
                height: "300%",
                boxSizing: "border-box",
                marginLeft: "-50%",
                marginTop: "-100%",
                borderRadius: "50%",
                bgColor: "#93ff2d",
                animation: `2.00s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
              }}
            >
              <Avatar
                src={data ? pdark : plight}
                size="full"
                onClick={handletheme}
                position="absolute"
                top={0}
                _hover={{ cursor: "pointer" }}
              />
            </Box>
          </Flex>
          <Flex
            display={{ base: "none", sm: "none", md: "flex" }}
            mr={5}
            alignItems={"center"}
          >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
const DesktopNav = () => {
  const data = useSelector((store) => store.theme);
  return (
    <Stack direction={"row"} spacing={4}>
      <AnchorLink
        className={`navitem nav-link home`}
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href="#home"
      >
        <Text>Home</Text>
      </AnchorLink>
      <AnchorLink
        className={`navitem nav-link about`}
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href="#about"
      >
        <Text>About</Text>
      </AnchorLink>
      <AnchorLink
        className={`navitem nav-link skills`}
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href="#skills"
      >
        <Text>Skill</Text>
      </AnchorLink>
      <AnchorLink
        className={`navitem nav-link projects`}
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href="#projects"
      >
        <Text>Project</Text>
      </AnchorLink>
      <AnchorLink
        className={`navitem nav-link statistics`}
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href="#statistics"
      >
        <Text>Statistics</Text>
      </AnchorLink>
      <AnchorLink
        className={`navitem nav-link contact`}
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href="#contact"
      >
        <Text>Contact</Text>
      </AnchorLink>
      <a
        id="resume-link-1"
        className="resumebutton nav-link resume"
        style={{
          color: data ? "black" : "white",
          fontFamily: "cursive",
          marginRight: "10px",
        }}
        href={resume}
        download={"Payal-Sahu-Resume"}
      >
        <button
          id="resume-button-1"
          style={{
            color: data ? "black" : "white",
            border: "1px solid white",
            padding: "5px 10px",
            borderRadius: "10px",
          }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1ZupJ5-dd3WKtb_hd8kvAr4if9syB5Kyc/view?usp=sharing"
            )
          }
        >
          Resume
        </button>
      </a>
    </Stack>
  );
};

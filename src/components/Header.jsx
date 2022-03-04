import React, { useEffect, useState } from 'react';
import { chakra, Box, Button, Text } from '@chakra-ui/react';
import WrapContent from './general/WrapContent';
import { AnimatePresence, motion } from 'framer-motion';

const tags = ['Build your Squad', 'Engage in Battle!', 'Collect Rewards'];

const Header = () => {
  const [tagIndex, setTagIndex] = useState(0);
  let count = 0;
  useEffect(() => {
    const changeTagIndex = setInterval(() => {
      setTagIndex(count % tags.length);
      count++;
    }, 2500);

    return () => {
      clearInterval(changeTagIndex);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box px={4} py={32} mx="auto" id="header">
      <WrapContent>
        <Box
          w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
          textAlign={{ base: 'left', md: 'center' }}
          mx="auto"
          minH="300px"
        >
          <chakra.h1
            mb={3}
            fontSize={{ base: '5xl', md: '6xl' }}
            fontWeight="bold"
            color="gray.100"
          >
            AI GAMING METAVERSE
          </chakra.h1>
          <chakra.p
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.100"
            lineHeight="base"
          >
            Get rewards for playing in the AnovaX metaverse!
          </chakra.p>
          <Box
            h="50px"
            width={'fit-content'}
            m={{ base: '0', md: 'auto' }}
            px="4"
            minW="250px"
            position="relative"
            rounded="lg"
          >
            <AnimatePresence>
              {tagIndex === 0 && (
                <Box
                  as={motion.div}
                  key="0"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  position="absolute"
                >
                  <Text as="h1" color={'white'} fontSize={'35px'}>
                    {tags[0]}
                  </Text>
                </Box>
              )}
              {tagIndex === 1 && (
                <Box
                  as={motion.div}
                  key="1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  position={'absolute'}
                >
                  <Text as="h1" color={'white'} fontSize={'35px'}>
                    {tags[1]}
                  </Text>
                </Box>
              )}
              {tagIndex === 2 && (
                <Box
                  as={motion.div}
                  key="2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  position={'absolute'}
                >
                  <Text as="h1" color={'white'} fontSize={'35px'}>
                    {tags[2]}
                  </Text>
                </Box>
              )}
            </AnimatePresence>
          </Box>
          <Box py="5">
            <Button
              border={'1px solid'}
              px="8"
              className="pulse pulseButton exo"
              bg="none"
              fontSize={'20px'}
            >
              Buy $ANV
            </Button>
          </Box>
        </Box>
      </WrapContent>
    </Box>
  );
};

export default Header;

// import React from 'react';
// import {
//   chakra,
//   Box,
//   useColorModeValue,
//   Stack,
//   Button,
//   Link,
// } from '@chakra-ui/react';

// const Hero = () => {
//   return (
//     <Box pos="relative" overflow="hidden" id="header" py="40px">
//       <Box maxW="7xl" mx="auto">
//         <Box
//           pos="relative"
//           pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
//           w="full"
//           border="solid 1px transparent"
//         >
//           <Box
//             mx="auto"
//             maxW={{ base: '7xl' }}
//             px={{ base: 4, sm: 6, lg: 8 }}
//             mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
//           >
//             <Box
//               textAlign="center"
//               w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
//               mx="auto"
//             >
//               <chakra.h1
//                 fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
//                 letterSpacing="tight"
//                 lineHeight="short"
//                 fontWeight="extrabold"
//                 color="white"
//               >
//                 <chakra.span display={{ base: 'block', xl: 'inline' }}>
//                   Digiland DAO for{' '}
//                 </chakra.span>
//                 <chakra.span
//                   display={{ base: 'block', xl: 'inline' }}
//                   color={useColorModeValue('brand.600', 'brand.400')}
//                 >
//                   land ownership
//                 </chakra.span>
//               </chakra.h1>
//               <chakra.p
//                 mt={{ base: 3, sm: 5, md: 5 }}
//                 mx={{ sm: 'auto', lg: 0 }}
//                 mb={6}
//                 fontSize={{ base: 'xl', md: 'xl' }}
//                 color="gray.300"
//                 lineHeight="base"
//               >
//                 digitalizing land ownership on the blockchain
//               </chakra.p>
//               <Stack
//                 mx="auto"
//                 direction={{ base: 'column', sm: 'column', md: 'row' }}
//                 mb={{ base: 4, md: 8 }}
//                 spacing={{ base: 4, md: 2 }}
//                 justifyContent="center"
//                 w={['80%', '60%']}
//               >
//                 <Button
//                   border="solid 1px transparent"
//                   fontSize={{ base: 'md', md: 'lg' }}
//                   rounded="md"
//                   color="white"
//                   bg="blue.800"
//                   px={{ base: 8, md: 10 }}
//                   py={{ base: 5, md: 7 }}
//                   cursor="pointer"
//                   w="full"
//                   as={Link}
//                   href="#getinvolved"
//                   _hover={{
//                     textDecoration: 'none',
//                     bg: 'brand.700',
//                   }}
//                 >
//                   Get involved!
//                 </Button>
//                 <Button
//                   w="full"
//                   px={{ base: 8, md: 10 }}
//                   py={{ base: 5, md: 7 }}
//                   border="solid 1px transparent"
//                   fontSize={{ base: 'md', md: 'lg' }}
//                   rounded="md"
//                   color="gray.300"
//                   bg="brand.100"
//                   _hover={{ bg: 'blue.900' }}
//                   cursor="pointer"
//                 >
//                   Vote
//                 </Button>
//               </Stack>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;

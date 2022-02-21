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
            bg="black"
            width={'fit-content'}
            m={{ base: '0', md: 'auto' }}
            px="4"
            minW="250px"
            rounded="lg"
          >
            <AnimatePresence>
              {tagIndex === 0 && (
                <motion.div
                  key="0"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                >
                  <Text as="h1" color={'white'} fontSize={'28px'}>
                    {tags[0]}
                  </Text>
                </motion.div>
              )}
              {tagIndex === 1 && (
                <motion.div
                  key="1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                >
                  <Text as="h1" color={'white'} fontSize={'28px'}>
                    {tags[1]}
                  </Text>
                </motion.div>
              )}
              {tagIndex === 2 && (
                <motion.div
                  key="2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                >
                  <Text as="h1" color={'white'} fontSize={'28px'}>
                    {tags[2]}
                  </Text>
                </motion.div>
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

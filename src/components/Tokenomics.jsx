import { Box, Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import WrapContent from './general/WrapContent';

export default function Tokenomics() {
  return (
    <Box py="80px" bgAttachment={'fixed'} id="tokenomics">
      <WrapContent>
        <Stack
          spacing="5"
          textAlign={'center'}
          color="white"
          maxW={'500px'}
          m="auto"
        >
          <Text as="h2" fontSize="5xl">
            AnovaX Tokenomics and Roadmap
          </Text>
          <Text as="i" fontSize={'17px'}>
            Our Token is Designed to always Reward the Holders and Players.
          </Text>
          <Text fontSize={'17px'}>
            $ANV serves as the native currency for AnovaX. Players use $ANV to
            mint characters, mint arenas, extending the lives of your characters
            by hiring and Buy/Sell on the AnovaX Marketplace. There is a maximum
            supply of 100,000,000 $ANV tokens. Liquidity will be locked and the
            Game rewards will be realized by percentage every month.
          </Text>
          <br />
          <Button
            border={'1px solid'}
            p="1em 2em"
            className="pulse pulseButton exo"
            bg="none"
            fontSize={'20px'}
          >
            Download Whitepaper
          </Button>
        </Stack>
      </WrapContent>
    </Box>
  );
}

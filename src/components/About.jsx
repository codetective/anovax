import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import WrapContent from './general/WrapContent';

export const Ticker = ({ classNameName, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <Text
              as="h4"
              fontSize={'48px'}
              classNameName={classNameName}
              ref={countUpRef}
            />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default function About() {
  return (
    <Box bg="#0e0e0e" color={'white'} id="about" py="80px">
      <WrapContent>
        <Box as={Stack} spacing="50px" textAlign={'center'}>
          <Text as="h2" fontSize="5xl">
            About The Game
          </Text>
          <Text fontSize={'20px'}>
            AnovaX is an AI-powered fighting universe in which anyone can earn
            rewards such as tokens and NFTs through competent gameplay and
            contributions to the ecosystem. Players can engage in combat, gather
            resources, develop their characters, and establish their own
            land-based kingdoms. The game will be powered by its official token,
            the AnovaX token ($ANV). In-game characters can also be collected as
            NFTs in the game and exchanged for tokens in our official NFT
            marketplace.
          </Text>
          <SimpleGrid columns={[1, 1, 3]} spacing="10" pt="20px">
            {/* <!-- START: Counter --> */}
            <Box py="10">
              <Box>
                <Stack spacing="5">
                  <Ticker className="count" end={15000} />
                  <Text as="p" fontSize={'24px'}>
                    Unique Characters
                  </Text>
                </Stack>
              </Box>
            </Box>
            {/* <!-- END: Counter --> */}
            {/* <!-- START: Counter --> */}
            <Box
              borderTop={['1px solid', '1px solid', 'none']}
              borderBottom={['1px solid', '1px solid', 'none']}
              borderLeft={['none', 'none', '1px solid']}
              borderRight={['none', 'none', '1px solid']}
              borderColor={['gray.700', 'gray.700', 'gray.700']}
              py="10"
            >
              <Box>
                <Stack spacing="5">
                  <Ticker className="count" end={350} />

                  <Text as="p" fontSize={'24px'}>
                    Epic Bosses
                  </Text>
                </Stack>
              </Box>
            </Box>
            {/* <!-- END: Counter --> */}
            {/* <!-- START: Counter --> */}
            <Box py="10">
              <Box>
                <Stack spacing="5">
                  <Ticker className="count" end={35} />

                  <Text as="p" fontSize={'24px'}>
                    Battle Arenas
                  </Text>
                </Stack>
              </Box>
            </Box>
            {/* <!-- END: Counter --> */}
          </SimpleGrid>
        </Box>
      </WrapContent>
    </Box>
  );
}

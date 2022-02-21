import { Box, Center, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import WrapContent from './general/WrapContent';
import { AiFillFire } from 'react-icons/ai';
import { GiGamepad } from 'react-icons/gi';
import { IoIosRibbon } from 'react-icons/io';

export default function Features() {
  return (
    <Box bg="#0e0e0ea1" color={'white'} id="features" py="80px">
      <WrapContent>
        <Box as={Stack} spacing="40px" textAlign={'center'}>
          <Text as="h2" fontSize="5xl">
            AnovaX Features!
          </Text>

          <SimpleGrid columns={[1, 1, 3]} spacing="10">
            <Box py="10">
              <Box>
                <Stack spacing="8">
                  <Center>
                    <Icon as={GiGamepad} fontSize={'48px'} />
                  </Center>
                  <Text as="h2" fontSize={'25px'} textTransform={'uppercase'}>
                    INCREDIBLE ATMOSPHERE
                  </Text>
                  <Text as="p" fontSize={'17px'}>
                    AnovaX is based on high-quality PvP and PvE characters,
                    schenes, and gameplay created in the Unreal Engine 4.
                  </Text>
                </Stack>
              </Box>
            </Box>

            <Box py="10">
              <Box>
                <Stack spacing="8">
                  <Center>
                    <Icon as={AiFillFire} fontSize={'48px'} />
                  </Center>
                  <Text as="h2" fontSize={'25px'} textTransform={'uppercase'}>
                    Catchy Battles
                  </Text>
                  <Text as="p" fontSize={'17px'}>
                    Enjoy an exciting 3D gameplay from any device. High-end game
                    details will be based on the devices' graphics handling
                    power.
                  </Text>
                </Stack>
              </Box>
            </Box>
            <Box py="10">
              <Box>
                <Stack spacing="8">
                  <Center>
                    <Icon as={IoIosRibbon} fontSize={'48px'} />
                  </Center>
                  <Text as="h2" fontSize={'25px'} textTransform={'uppercase'}>
                    Exciting Rewards
                  </Text>
                  <Text as="p" fontSize={'17px'}>
                    Gamers will earn rewards from gaming, while holders will
                    earn rewards based on the quantity of tokens they hold.
                  </Text>
                </Stack>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </WrapContent>
    </Box>
  );
}

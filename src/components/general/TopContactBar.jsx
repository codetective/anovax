import React from 'react';
import { Flex, Box, Text, HStack, Icon, Link } from '@chakra-ui/react';
import WrapContent from './WrapContent';
import {
  FaEnvelope,
  FaMedium,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const links = [
  {
    name: 'Youtube',
    url: 'https://youtube.com/channel/UC0kb78eqE4hgTZ1v6olLlkg',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@AnovaX_official',
  },
  {
    name: 'Twitter',
    url: 'https://mobile.twitter.com/AnovaX_official',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/AnovaXChat1',
  },
];

function TopContactBar() {
  return (
    <WrapContent bgColor="black">
      <HStack minH="60px" id="topBar" py={[4, 0]}>
        <Flex
          flexDir={['column', 'row']}
          justifyContent={'space-between'}
          w="full"
          alignItems={'center'}
        >
          <Box mb={[4, 0]}>
            <Text
              color="white"
              fontWeight={'semibold'}
              display="flex"
              alignItems={'center'}
              fontSize={'md'}
            >
              <Box as="span" pr="2">
                <FaEnvelope />
              </Box>
              <a className="righteous" href="mailto:OficialAnovaX1@gmail.com">
                CONTACT
              </a>
            </Text>
          </Box>
          <HStack spacing={8}>
            {links.map((link, index) => (
              <Link
                key={index}
                target="_blank"
                href={link.url}
                aria-label={link.name}
              >
                <Icon
                  as={
                    link.name === 'Youtube'
                      ? FaYoutube
                      : link.name === 'Twitter'
                      ? FaTwitter
                      : link.name === 'Telegram'
                      ? FaTelegram
                      : FaMedium
                  }
                  aria-label={link.name}
                  color="white"
                  fontSize="2xl"
                />
              </Link>
            ))}
          </HStack>
        </Flex>
      </HStack>
    </WrapContent>
  );
}

export default TopContactBar;

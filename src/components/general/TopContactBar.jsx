import React from 'react';
import { Flex, Box, Text, HStack, Icon, Link } from '@chakra-ui/react';
import WrapContent from './WrapContent';
import {
  FaEnvelope,
  FaMedium,
  FaTelegram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

const links = [
  {
    name: 'Github',
    url: 'https://github.com/anovabox',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@anovagamebox',
  },
  {
    name: 'Twitter',
    url: 'https://mobile.twitter.com/AnovaXOfficial',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/AnovaXOfficial',
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
              {/* <Box as="span" pr="2">
                <FaEnvelope />
              </Box>
              <a className="righteous" href="mailto:OficialAnovaX1@gmail.com">
                CONTACT
              </a> */}
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
                    link.name === 'Github'
                      ? FaGithub
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

import { HStack, Link, Text } from '@chakra-ui/react';
import ScrollLink from './ScrollLink';

function NavMD() {
  return (
    <>
      <ScrollLink to="header">
        <Text as="a" cursor={'pointer'} fontSize={'3xl'}>
          AnovaX
        </Text>
      </ScrollLink>
      <HStack spacing="10" alignItems="center">
        <ScrollLink to="about">
          <Text cursor={'pointer'} as="a" fontSize={'20px'} display="block">
            About
          </Text>
        </ScrollLink>
        <ScrollLink to="features">
          <Text cursor={'pointer'} as="a" fontSize={'20px'}>
            Features
          </Text>
        </ScrollLink>
        <ScrollLink to="tokenomics">
          <Text cursor={'pointer'} as="a" fontSize={'20px'}>
            Tokenomics
          </Text>
        </ScrollLink>
        <Link href="#" isExternal target={'_blank'}>
          <Text fontSize={'20px'} as="a" cursor={'pointer'}>
            Contract
          </Text>
        </Link>
        <Link href="#" isExternal target={'_blank'}>
          <Text fontSize={'20px'} as="a" cursor={'pointer'}>
            Docs
          </Text>
        </Link>
      </HStack>
    </>
  );
}

export default NavMD;

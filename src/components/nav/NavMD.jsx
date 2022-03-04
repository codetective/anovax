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
          <Text py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
            About
          </Text>
        </ScrollLink>
        <ScrollLink to="features">
          <Text py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
            Features
          </Text>
        </ScrollLink>
        <Link
          href="https://anovax.gitbook.io/anova-gamebox/anovax-usdanv-token/distribution"
          isExternal
          target={'_blank'}
        >
          <Text py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
            Tokenomics
          </Text>
        </Link>
        <Link
          href="https://anovax.gitbook.io/anova-gamebox"
          isExternal
          target={'_blank'}
        >
          <Text py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
            Whitepaper
          </Text>
        </Link>
        <Link href="#" isExternal target={'_blank'}>
          <Text py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
            Contract
          </Text>
        </Link>
      </HStack>
    </>
  );
}

export default NavMD;

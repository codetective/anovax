import {
  Box,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import WrapContent from './general/WrapContent';
import cake from '../images/footercakeswap.png';
import bscscan from '../images/footerbscscan.png';
import cmc from '../images/footercmc.png';
import proof from '../images/footerproof.png';

export default function Footer() {
  return (
    <Box id="footer" as="footer" py="80px" color="white" bg="#0c1113">
      <WrapContent>
        <Stack spacing="20px">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="10" w="80%">
            <Link isExternal target="_blank">
              <Image src={cake} height="80%" />
            </Link>
            <Link isExternal target="_blank">
              <Image src={bscscan} height="100%" />
            </Link>
            <Link isExternal target="_blank">
              <Image src={cmc} height="100%" />
            </Link>
            <Link isExternal target="_blank">
              <Image src={proof} height="100%" />
            </Link>
          </SimpleGrid>

          <Text>
            {' '}
            © 2021 AnovaX is based in the United Kingdom. All other trademarks
            or trade names are the property of their respective owners. All
            rights reserved.
          </Text>
          <Flex justifyContent={'space-between'}>
            <Box />
            <Box ml="auto">
              <a href="#" class="link-effect">
                Terms of Service
              </a>{' '}
              <span>|</span>{' '}
              <a href="#" class="link-effect">
                Privacy Policy
              </a>
            </Box>
          </Flex>

          {/* <div id="jarallax-container-1" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100;"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1172.97px; height: 334.862px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: 0px;"/></div> */}
        </Stack>
      </WrapContent>
    </Box>
  );
}

import { IconButton, useDisclosure, Link, Text } from '@chakra-ui/react';

import { BiMenuAltLeft } from 'react-icons/bi';
import NavSMDrawer from './NavSMDrawer';
import { ScrollToTop } from './ScrollLink';

function NavSM() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavSMDrawer isOpen={isOpen} onClose={onClose} />

      <Link onClick={ScrollToTop} href="/">
        <Text as="a" cursor={'pointer'} fontSize={'3xl'}>
          AnovaX
        </Text>
      </Link>
      <IconButton
        onClick={onOpen}
        bg="transparent"
        aria-label="Go to cart"
        _focus={{
          boxShadow: '0',
        }}
        icon={
          <span
            style={{
              fontSize: '1.8rem',
            }}
          >
            <BiMenuAltLeft />
          </span>
        }
      />
    </>
  );
}

export default NavSM;

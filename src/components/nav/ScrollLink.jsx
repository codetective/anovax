import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const ScrollToTop = () => {
  scroll.scrollToTop();
};

export default function ScrollLink({ children, to }) {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {children}
    </Link>
  );
}

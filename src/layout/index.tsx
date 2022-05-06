import type { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box maxW={800} m="0 auto" transition="0.5s ease-out">
    <Box m="8">
      <Header />
      <Box as="main" marginY={22}>
        {children}
      </Box>
      <Footer />
    </Box>
  </Box>
);

export default Layout;

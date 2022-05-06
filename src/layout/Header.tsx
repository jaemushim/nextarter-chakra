import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => (
  <Flex as="header" align="center" w="full">
    <Heading as="h1">TO DO</Heading>

    <Box ml="auto">
      <ThemeToggle />
    </Box>
  </Flex>
);

export default Header;

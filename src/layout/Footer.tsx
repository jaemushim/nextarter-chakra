import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => (
  <Flex as="footer" align="center" w="full">
    <Text>{new Date().getFullYear()} - jaemu</Text>
  </Flex>
);

export default Footer;

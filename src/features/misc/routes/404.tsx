import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex justify="center" direction="column" minH="70vh">
      <Text fontSize="xs" textAlign="center">
        <ChakraLink href="https://stories.freepik.com/web" isExternal rel="noopener noreferrer">
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box mt={4} textAlign="center">
          <Text>It&apos;s Okay!</Text>
          <Link href="/" passHref>
            <Button bgColor={colorMode === 'light' ? 'gray.300' : 'teal.500'}>
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;

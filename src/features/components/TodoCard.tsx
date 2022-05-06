import * as React from 'react';

import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
  Image,
  Box,
  Spacer,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface TodoCardProps {
  title: string;
  description: string;
}

const getTagColor = (type: string) => {
  const loweredType = type.toLowerCase();
  if (loweredType === 'rails' || loweredType === 'ruby') {
    return 'red';
  }
  if (loweredType === 'react') {
    return 'cyan';
  }
  if (loweredType === 'javascript') {
    return 'yellow';
  }
  if (loweredType === 'typescript' || loweredType === 'tailwindcss') {
    return 'blue';
  }
  if (loweredType === 'chakraui' || loweredType === 'css') {
    return 'teal';
  }
};

const TodoCard: React.FC<TodoCardProps> = ({ title, description }) => {
  const textColor = useColorModeValue('gray.500', 'gray.200');
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Box w="100%">
      <motion.div onClick={toggleOpen}>
        <VStack
          align="start"
          justify="flex-start"
          w="100%"
          h="100%"
          p={4}
          textAlign="left"
          bg={useColorModeValue('white', 'gray.800')}
          borderWidth="1px"
          borderColor={useColorModeValue('gray.100', 'gray.700')}
          _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
          cursor="pointer"
          transition="all 0.25s"
          rounded="xl"
          spacing={4}
          transition-timing-function="spring(1 100 10 10)"
        >
          <Box w="full">
            <motion.div layout>
              <Text
                fontSize="md"
                fontWeight="bold"
                noOfLines={1}
                onClick={(e) => e.stopPropagation()}
              >
                {title}
              </Text>
            </motion.div>
            <Spacer my="2" />
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text color={textColor} fontSize="sm" noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text
                    color={textColor}
                    fontSize="sm"
                    // noOfLines={{ base: isOpen ? 5 : 2 }}
                  >
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
          </Box>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default TodoCard;

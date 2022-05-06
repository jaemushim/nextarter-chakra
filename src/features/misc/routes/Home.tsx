import { Box } from '@chakra-ui/react';

import TodoCard from '@/features/components/TodoCard';
import TodoList from '@/features/components/TodoList';

const Home = () => (
  <Box alignItems="center" gap={8} d={{ md: 'flex' }} w="full" minH="80vh" mb={8}>
    <TodoCard
      title="test"
      description="asdlksmad asdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmadasdlksmad"
    />
  </Box>
);

export default Home;

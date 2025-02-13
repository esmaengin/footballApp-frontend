import { Box, Flex, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="brand.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Box fontWeight="bold">My App</Box>
        <Button colorScheme="whiteAlpha">Login</Button>
      </Flex>
    </Box>
  );
}


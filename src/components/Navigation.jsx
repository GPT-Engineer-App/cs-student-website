import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" padding="1.5rem" backgroundColor="gray.800" color="white" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/projects" px={2}>
          Projects
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;

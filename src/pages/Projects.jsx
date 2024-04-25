import React from "react";
import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box padding={8}>
      <VStack spacing={8}>
        <Box id="project1" padding={4} backgroundColor="gray.50">
          <Heading as="h2">Project 1 - Web Application for Task Management</Heading>
          <Text>This project is a web application designed to help users manage their tasks efficiently.</Text>
          <Link href="https://github.com/johndoe/project1" isExternal>
            View on GitHub
          </Link>
        </Box>
        <Box id="project2" padding={4} backgroundColor="gray.50">
          <Heading as="h2">Project 2 - Machine Learning Model for Image Classification</Heading>
          <Text>This project involves developing a machine learning model to classify images with high accuracy.</Text>
          <Link href="https://github.com/johndoe/project2" isExternal>
            View on GitHub
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Projects;

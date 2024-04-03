import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Link, Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Flex alignItems="center" marginBottom={8}>
        <Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMTUxNDg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" borderRadius="full" boxSize="150px" marginRight={8} />
        <Box>
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="xl">Computer Science Student</Text>
        </Box>
      </Flex>

      <Box marginBottom={8}>
        <Heading as="h2" size="lg" marginBottom={4}>
          About Me
        </Heading>
        <Text>Hi, I'm John! I'm a passionate computer science student with a love for programming and problem-solving. I enjoy working on exciting projects and learning new technologies.</Text>
      </Box>

      <Box marginBottom={8}>
        <Heading as="h2" size="lg" marginBottom={4}>
          Skills
        </Heading>
        <UnorderedList>
          <ListItem>Java</ListItem>
          <ListItem>Python</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Node.js</ListItem>
        </UnorderedList>
      </Box>

      <Box marginBottom={8}>
        <Heading as="h2" size="lg" marginBottom={4}>
          Projects
        </Heading>
        <UnorderedList>
          <ListItem>
            <Link href="https://github.com/johndoe/project1" isExternal>
              Project 1
            </Link>{" "}
            - A web application for task management
          </ListItem>
          <ListItem>
            <Link href="https://github.com/johndoe/project2" isExternal>
              Project 2
            </Link>{" "}
            - A machine learning model for image classification
          </ListItem>
        </UnorderedList>
      </Box>

      <Box>
        <Heading as="h2" size="lg" marginBottom={4}>
          Contact
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <Icon as={FaGithub} boxSize={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
          <Link href="mailto:johndoe@example.com" isExternal>
            <Icon as={FaEnvelope} boxSize={8} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;

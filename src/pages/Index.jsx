import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Link, Icon, UnorderedList, ListItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Collapse, Button } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Navigation />
      <Box maxWidth="800px" margin="auto" padding={8} backgroundColor="gray.100">
        <Flex alignItems="center" marginBottom={8}>
          <Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMTUxNDg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" borderRadius="full" boxSize="150px" marginRight={8} />
          <Box>
            <Heading as="h1" size="2xl">
              Jad Hneiny
            </Heading>
            <Text fontSize="xl">Senior Computer Science Student</Text>
          </Box>
        </Flex>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  About Me
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>Hi, I'm John! I'm a passionate computer science student with a love for programming and problem-solving. I enjoy working on exciting projects and learning new technologies.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Skills
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>Java</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Node.js</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Projects
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>
                  <Button as={Link} href="/projects#project1" variant="link" colorScheme="blue">
                    Project 1 - A web application for task management
                  </Button>
                </ListItem>
                <ListItem>
                  <Button as={Link} href="/projects#project2" variant="link" colorScheme="blue">
                    Project 2 - A machine learning model for image classification
                  </Button>
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Education
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>American University of Beirut (AUB), Computer Science Degree - Sep 2022 – (Expected) Jun 2025</Text>
              <Text>Majoring in Computer Science, Minor in Business, GPA: 3.3/4.0</Text>
              <Text>Activities and societies: AUB Consulting Club, Computer Science Student Society, International Business Case Competitions</Text>
              <Text>American Community School of Beirut (ACS), High School - Sep 2018 – Jun 2022</Text>
              <Text>GPA: 3.7/4.0, High Distinction, National Honor Society (NHS) member</Text>
              <Text>Lebanese Baccalaureate Certificate, and High School Certificate</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Certifications
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>Introduction to Cybersecurity, Cisco - Dec 2023</ListItem>
                <ListItem>Introduction to Data Science, Cisco - Jan 2024</ListItem>
                <ListItem>Networking Basics, Cisco - Mar 2024</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={12}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Experience
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList spacing={3}>
                <ListItem>CafeConnect: University Cafeteria WebApp, Lead Programmer and Project Manager - Jan 2024 – May 2024</ListItem>
                <ListItem>JK Networks: A Reliable Network on top of UDP, Lead Programmer and Project Manager - Jan 2024 – May 2024</ListItem>
                <ListItem>Spell Master Bot: AI-like Bot Algorithm, Lead Programmer and Project Manager - Aug 2023 – Nov 2023</ListItem>
                <ListItem>Personal Portfolio Website, Sole Programmer - Jan 2024 – Present</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Volunteering
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>Interact: Rotary Sponsored Club, Vice President - Sep 2021 – Jul 2022</ListItem>
                <ListItem>Inaash Organization, Member - Sep 2020 – Jul 2022</ListItem>
                <ListItem>Nour International, Teaching Assistant - Sep 2018 – Jul 2020</ListItem>
                <ListItem>Borderlands Sri Lanka, Member - Sep 2017 – May 2018</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={12}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Skills
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList spacing={3}>
                <ListItem>Java - Experienced in object-oriented programming</ListItem>
                <ListItem>Python - Proficient in data analysis and machine learning</ListItem>
                <ListItem>JavaScript - Skilled in front-end technologies</ListItem>
                <ListItem>React - Advanced in building interactive UIs</ListItem>
                <ListItem>Node.js - Knowledgeable in server-side scripting</ListItem>
                <ListItem>C, C++ - Good with system-level programming</ListItem>
                <ListItem>HTML, CSS - Competent in web design</ListItem>
                <ListItem>MySQL, NoSQL - Experienced in database management</ListItem>
                <ListItem>Database Systems - Understanding of complex database concepts</ListItem>
                <ListItem>Software Engineering - Well-versed in software development life cycles</ListItem>
                <ListItem>Computer Architecture - Familiar with the structure of computer systems</ListItem>
                <ListItem>Office Package (Word, Excel, PowerPoint, Access) - Efficient in office tools</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle marginBottom={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Contact
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>Tel: +961 70545537 | jbh07@mail.aub.edu | jadhneiny123@gmail.com | Beirut, Lebanon</Text>
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Index;

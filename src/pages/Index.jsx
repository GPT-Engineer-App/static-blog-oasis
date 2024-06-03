import { Container, Heading, VStack, Box, Text, Image, HStack, IconButton, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";
import NewPostForm from "../components/NewPostForm";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const initialPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "React Hooks are functions that let you use state and other React features without writing a class...",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGhvb2tzfGVufDB8fHx8MTcxNzQyNDM4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
    author: "John Doe",
    date: "October 1, 2023",
  },
  {
    id: 2,
    title: "A Guide to Chakra UI",
    excerpt: "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications...",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFrcmElMjB1aXxlbnwwfHx8fDE3MTc0MjQzODN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    author: "Jane Smith",
    date: "October 5, 2023",
  },
  {
    id: 3,
    title: "Getting Started with Vite",
    excerpt: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects...",
    image: "https://placehold.co/600x400",
    author: "Alice Johnson",
    date: "October 10, 2023",
  },
];

const Index = () => {
  const [posts, setPosts] = useState(initialPosts);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={8} textAlign="center">
        My Tech Blog
      </Heading>
      <Button onClick={onOpen} colorScheme="teal" mb={4}>
        Add New Post
      </Button>
      <VStack spacing={8}>
        {posts.map((post) => (
          <Box key={post.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src={post.image} alt={post.title} objectFit="cover" w="100%" h="200px" />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {post.title}
              </Heading>
              <Text mb={4}>{post.excerpt}</Text>
              <HStack justifyContent="space-between">
                <Text fontSize="sm" color="gray.500">
                  By {post.author} on {post.date}
                </Text>
                <HStack spacing={2}>
                  <IconButton aria-label="Share on Twitter" icon={<FaTwitter />} size="sm" />
                  <IconButton aria-label="Share on Facebook" icon={<FaFacebook />} size="sm" />
                  <IconButton aria-label="Share on LinkedIn" icon={<FaLinkedin />} size="sm" />
                </HStack>
              </HStack>
            </Box>
          </Box>
        ))}
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewPostForm addPost={addPost} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;

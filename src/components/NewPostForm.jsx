import { useState } from "react";
import { Box, Button, Input, Textarea, VStack, Heading } from "@chakra-ui/react";

const NewPostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, excerpt, image, author, date });
    setTitle("");
    setExcerpt("");
    setImage("");
    setAuthor("");
    setDate("");
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" w="100%">
      <Heading as="h3" size="md" mb={4}>
        New Post
      </Heading>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        <Input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Input placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button type="submit" colorScheme="blue">
          Add Post
        </Button>
      </VStack>
    </Box>
  );
};

export default NewPostForm;

import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={4}>Latest and greatest in electronics</Text>
        <Image src="https://via.placeholder.com/600x400" alt="Featured Product" mx="auto" />
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300x200" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text>$299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300x200" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text>$399.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300x200" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text>$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
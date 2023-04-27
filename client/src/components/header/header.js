import { Box, Container, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { color } from "framer-motion";
import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./header.css";
//TODO:
export default function Header() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <VStack>
      <Box>
        <Container px={2} py={1} minW="container.sm" bg="teal" color="white">
          <Flex>
            <Link to="/profile">
              <Text as="b">Profile</Text>
            </Link>
            <Spacer />
            {user && (
              <>
                <Link to="/logout">
                  <Text as="b">Logout</Text>
                </Link>
                <Box ml="5">
                  <Link to="/forgetPassword">
                    <Text as="b">ForgetPassword</Text>
                  </Link>
                </Box>
              </>
            )}
            {!user && (
              <>
                <Link to="/login">
                  <Text as="b">Login</Text>
                </Link>
                <Box ml="5">
                  <Link to="/register">
                    <Text as="b">Register</Text>
                  </Link>
                </Box>
              </>
            )}
          </Flex>
        </Container>
      </Box>
    </VStack>
  );
}

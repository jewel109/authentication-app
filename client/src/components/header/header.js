import { Text,Box, Container, Flex, Spacer, VStack } from "@chakra-ui/react";
import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./header.css";
//TODO:
export default function Header() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    // <div className=' flex justify-between'>
    //   <ul className=''>
    //     <li>
    //       <Link to="/profile">profile</Link>
    //     </li>
    //   </ul>
    //   <ul className='flex justify-evenly'>
    //     {user && (<li>
    //       <Link to="/logout">logout</Link>
    //     </li>)}
    //     {!user && (<><li>
    //       <Link to="/login">login</Link>
    //     </li>
    //       <li className='ml-1'>
    //         <Link to='/register'>register</Link>
    //       </li></>)}
    //   </ul>
    //
    // </div>
    <VStack>
      <Box>
        <Container px={2} py={1} minW="container.sm" bg="teal" color="white">
          <Flex>
            <Link to="/profile"><Text as='b'>Profile</Text></Link>
            <Spacer />
            {user && <Link to="/logout"><Text as='b'>Logout</Text></Link>}
            {!user && (
              <>
                <Link to="/login"><Text as='b'>Login</Text></Link>
                <Box ml="5">
                  <Link to="/register"><Text as='b'>Register</Text></Link>
                </Box>
              </>
            )}
          </Flex>
        </Container>
      </Box>
    </VStack>
  );
}

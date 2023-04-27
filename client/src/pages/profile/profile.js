import React, { useContext } from "react";
import { Link as Rlink} from "react-router-dom";
import { Link, Text } from '@chakra-ui/react'
import { AuthContext } from "../../context/authContext";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

export default function Profile() {
  const { user } = useContext(AuthContext);
  // TODO:make fully chakra based
  console.log(user);
  return (
    <>
      {user && <p>{user.username}</p>}
      {!user && (
        <Alert mt={2} status="error" borderRadius="base">
          <AlertIcon w={9} h={8}/>
          <AlertTitle>You are not logged in</AlertTitle>
          <AlertDescription>
            <Text>
              Try to   
              <Link color="teal.500">
                <Rlink to="/login"> Login</Rlink>
              </Link>
            </Text>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

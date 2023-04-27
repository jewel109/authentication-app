import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import react, {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useSignUp } from "../../hooks/useSignUp";
import * as Yup from "yup";

// TODO: make fully chakra based
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required").nullable(),
  email: Yup.string().email("Invalid email").required("Required").nullable(),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required").nullable(),
});
export default function Register() {
  const [err, setError] = useState("");
  const { signUp } = useSignUp();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, actions) => {
        const err = await signUp(values.name, values.email, values.password);

        if (err == null) {
          navigate("/profile");
        } else {
          setError(err);
          values.email=""
          values.name=""
          values.password=""
        }
      }}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel>Password</FormLabel>
                <Input {...field} placeholder="password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Register
          </Button>
          {err
            ? (
                <Alert status="error" mt={2} borderRadius="base">
                  <AlertIcon w={9} h={8} />
                  <AlertTitle>{err}</AlertTitle>
                  <AlertDescription>
                   Try again
                  </AlertDescription>
                </Alert>
            )
            : null}
        </Form>
      )}
    </Formik>
  );
}

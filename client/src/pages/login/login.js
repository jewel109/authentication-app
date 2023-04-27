import react, { useEffect, useState } from "react";
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
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.js";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required").nullable(),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required").nullable(),
});

export default function Login() {
  const { login } = useLogin();
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  // TODO: make fully chakra based
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, actions) => {
        const err = await login(values.email, values.password);
        console.log(err);
        if (err == null) {
          navigate("/profile");
        } else {
          setError(err);
          values.email = "";
          values.password = "";
        }
      }}
    >
      {(props) => (
        <Form>
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
            Login
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

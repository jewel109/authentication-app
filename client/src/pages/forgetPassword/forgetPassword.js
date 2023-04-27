import { Field, Form, Formik } from "formik";
import react, { useState } from "react";
import instance from "../../services/axios";
import axiosError from "../../services/errorHandler/axiosError";
import * as Yup from "yup";
import {
  Alert,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const emailSchema = Yup.object().shape({
  email: Yup.string().email("Give a valid email").required("Email is required"),
});

export default function ForgetPassword() {
  const [err, setErr] = useState(null);
  const [message, setMessage] =useState(null)
  const [sent, setSent] = useState(null)
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={emailSchema}
      onSubmit={async (values, actions) => {
        const email = values.email;
        try {
          const { data } = await instance.post("/auth/forgotpassword", {
            email,
          });
          console.log(data);
          setMessage(data.message)
          setSent(true)
        } catch (error) {
          
          const err = axiosError(error);
          console.log(err.error);
          setErr(err.error);
        }
      }}
    >
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl
                mt={2}
                isInvalid={form.errors.email && form.touched.email}
              >
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Sent
          </Button>
          {!err && sent
            ? <Alert mt={2} status="success" borderRadius="base" >{message}</Alert>
            : null}
        </Form>
      )}
    </Formik>
  );
}

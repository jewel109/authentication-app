import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import react, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useSignUp } from "../../hooks/useSignUp";
import * as Yup from "yup";

// TODO: make fully chakra based
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required").nullable(),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required").nullable(),
});
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error } = useSignUp();
  const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //
  //   const err = await signUp(email, password)
  //
  //   if (err == null) {
  //     navigate('/profile')
  //   }
  //
  // }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label>email </label>
  //       <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
  //       <label> password </label>
  //       <input type="password" onChange={(e) =>
  //         setPassword(e.target.value)} value={password} />
  //       <button type="submit">register</button>
  //     </form>
  //     {error && <p>{error}</p>}
  //   </div>
  // )

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, actions) => {
        // new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        // const err = await signUp(values.email, values.password);
        // if (err == null) {
        //   navigate("/profile");
        // } else {
        //   console.log(err)
        //   return <p>{err}</p>;
        // }
      }}
    >
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="email" />
                {props.errors.email
                  ? <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                  : null}
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl>
                <FormLabel>password</FormLabel>
                <Input {...field} placeholder="password" />
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

import react from "react";
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
import { useAuthContext } from "../../hooks/useAuthcontext";
import instance from "../../services/axios";
import axiosError from "../../services/errorHandler/axiosError";

const schema = Yup.object().shape({
  password: Yup.string().min(4, "Too Short").max(50, "Too Long").required(
    "Required",
  ),
});

export default function ResetPassword() {
  const { user } = useAuthContext();
  console.log(user);  
  const params = new URLSearchParams(window.location.search)
  console.log(params)
  const resetPasswordToken =params.get("resetPasswordToken") 
  console.log(resetPasswordToken)

  return (
    <Formik
      initialValues={{
        password: "",
      }}
      validationSchema={schema}
      onSubmit={async (values, actions) => {
        const password = values.password;
        try {
          const { data } = await instance.put("/auth/resetpassword", {
            password
          }, {params:{resetPasswordToken}})
          console.log(data)
        } catch (err) {
          const error = axiosError(err);
          console.log(error);
        }
      }}
    >
      {(props) => (
        <Form>
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
            Reset
          </Button>
        </Form>
      )}
    </Formik>
  );
}

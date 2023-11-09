import { router } from "expo-router";
import React from "react";
import { Button, TextInput, View } from "react-native";
import { userServices } from "../../api";
import { useAuth } from "../../context/auth";
import { useErrorsContext } from "../../context/error-provider";


function Register() {
  const { signIn } = useAuth();
  const {errors, setErrors} = useErrorsContext();
  const [submitting, setSubmitting] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("")
  const [phone, setPhone] = React.useState("");
  const [toggleHidePasswordConfirmation, setToggleHidePasswordConfirmation] =
    React.useState(true);
  const [toggleHidePassword, setToggleHidePassword] = React.useState(true);

  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const emailRef: any = React.useRef(null);
  const passwordRef: any = React.useRef(null);
  const passwordConfirmationRef: any = React.useRef(null);
  const phoneRef: any = React.useRef(null);
  const [wantsMarketingEmails, setWantsMarketingEmails] = React.useState(0);

  const LOGIN_TIMEOUT = 10000; // Set timeout for 10 seconds, adjust as needed

  const onSubmit = () => {
    if(submitting) return;

    const timeoutId = setTimeout(() => {
      setSubmitting(false);
      console.error('Login request timed out.'); 
      // You can also handle other timeout-specific actions or error messages here.
    }, LOGIN_TIMEOUT);
    setSubmitting(true);
    userServices
      .postRegisterUser({
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1] ? name.split(" ")[1] : "Last",
        email,
        password: password,
        wants_marketing_emails: wantsMarketingEmails,
        confirm_password: passwordConfirmation,
        phone,
        plan: "free",
      })
      .then((res) => {
        console.log(res, "res inside of register")

        clearTimeout(timeoutId); // Clear the timeout if request succeeds within the timeframe

        console.log(res.data.decoded, "decoded")
        if(res.status === 200) {
          console.log(res.data.decoded, "decoded")
        if(res.data.decoded) {
          signIn(res.data.decoded);
        }}
    
      }
      )
      .catch((err) => {
        clearTimeout(timeoutId); // Clear the timeout if there's an error before the timeout occurs

        setErrors(err.response.data)
      })
      .finally(() => {
        setSubmitting(false);
      })
    }

  return (
    <View

    >
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            paddingTop: 20,
          }}
        >
        </View>

        <TextInput

          value={name}
          onChangeText={setName}
          placeholder="Name"

          onSubmitEditing={() => emailRef.current.focus()}

        />
        <TextInput
          value={email}
          ref={emailRef}
          onSubmitEditing={() => phoneRef.current.focus()}

          onChangeText={setEmail}
          placeholder="Email"
        />
        <TextInput
          ref={phoneRef}
          value={phone}
          onSubmitEditing={() => passwordRef.current.focus()}
          onChangeText={setPhone}

          placeholder="Phone"
        />

        <TextInput
          value={password}
          onSubmitEditing={() => passwordConfirmationRef.current.focus()}
          ref={passwordRef}
          secureTextEntry={toggleHidePassword}
          onChangeText={setPassword}
          placeholder="Password"
        />
        <TextInput

          ref={passwordConfirmationRef}
          onSubmitEditing={() => onSubmit()}
       
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          placeholder="Password Confirmation"
        />

        

        <Button
        title={"Register"}
      
          onPress={() => onSubmit()}
        />

        
      </View>
    </View>
  );
}

export default Register;

import { router } from "expo-router";
import React from "react";
import { Button, TextInput, View } from "react-native";
import { userServices } from "../../api";
import { useAuth } from "../../context/auth";
import { useErrorsContext } from "../../context/error-provider";


function Login() {
  const [submitting, setSubmitting] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {errors, setErrors} = useErrorsContext();
  const [toggleHidePassword, setToggleHidePassword] = React.useState(false);
  const {signIn} = useAuth();

  

  const emailRef: any = React.useRef(null);
  const passwordRef: any = React.useRef(null);
  const phoneRef: any = React.useRef(null);

  const LOGIN_TIMEOUT = 10000; // Set timeout for 10 seconds, adjust as needed

  const onSubmit = () => {
    if(submitting) {
      return;
    }
    
    setSubmitting(true);
    
    const timeoutId = setTimeout(() => {
      setSubmitting(false);
      console.error('Login request timed out.'); 
      // You can also handle other timeout-specific actions or error messages here.
    }, LOGIN_TIMEOUT);
  
    userServices
      .postLoginUser({
        email,
        password: password,
      })
      .then((res) => {
        console.log(res, "res inside of login")
        console.log(res.data, "res.data")
        clearTimeout(timeoutId); // Clear the timeout if request succeeds within the timeframe
        console.log(res.data.decoded, "decoded")
        if(res.data.decoded) {
          signIn(res.data.decoded);
        }
      })
      .catch((err) => {
        clearTimeout(timeoutId); // Clear the timeout if there's an error before the timeout occurs
        setErrors(err.response.data)
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  // console.log(submitting, "submitting")
  // console.log(userServices, "userServices")
  
  return (
    <View>
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
          value={email}
          ref={emailRef}
          onSubmitEditing={() => phoneRef.current.focus()}
          onChangeText={setEmail}
          placeholder="Email"
        />
   

        <TextInput
          value={password}
          secureTextEntry={!toggleHidePassword}
          onSubmitEditing={() => onSubmit()}
          ref={passwordRef}
          onChangeText={setPassword}
          placeholder="Password"
        />
    

        <Button
          title="LOGIN"
          
          
          onPress={() => onSubmit()}
        />

   
      </View>
      </View>
  );
}

export default Login;

import * as React from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup'
import { Formik } from 'formik'

function Signup({ navigation }) {
    return (
        <ScrollView>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flexDirection: 'column', margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontWeight: "100", fontSize: 40 }}>Let's create your account</Text>
          </View>
          <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => 
        {
            navigation.navigate('Login')
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email()
            .required(),
          password: yup
            .string()
            .min(6)
            .required(),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <React.Fragment>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 50}}>
                <TextInput
                    style={{ fontSize: 20 }} 
                    onChangeText={handleChange('email')}
                    value={values.email}
                    onBlur={() => setFieldTouched('email')}
                    placeholder="Enter your email or mobile number"
                    editable
                />
            </View>
            {touched.email && errors.email &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            }
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    secureTextEntry={true}
                    style={{ fontSize: 20 }}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    onBlur={() => setFieldTouched('password')}
                    placeholder="Enter your password"
                    editable
                />
            </View>
            {touched.password && errors.password &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            }
            <View style={{ flex: 1, marginTop: 50, justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ width: 300 }}>
                <Button
                        buttonStyle={{ backgroundColor: "#FF5800" }}
                        title="Sign Up"
                        disabled={!isValid}
                        onPress={handleSubmit}
                    />
                </View>
            </View>
          </React.Fragment>
        )}
      </Formik>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Text>By signing up you accept the Terms of Service and Privacy Policy.</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <Text>Or sign up with</Text>
            </View>
          <View style={{ marginBottom: 10, width: 300 }}>
            <Button
                icon={
                    <Icon
                    style={{ justifyContent:"space-between", marginRight: "auto", marginLeft: 10 }}
                      name="facebook"
                      size={15}
                      color="white"
                    />
                  }
                buttonStyle={{ backgroundColor: "#3B5998", borderRadius: 25 }}
                title="Facebook"
                titleStyle={{ marginRight: "auto" }}
                onPress={() => alert('Signed Up')}
            />
          </View>
          <View style={{ marginBottom: 10, width: 300 }}>
            <Button
                icon={
                    <Icon
                        style={{ justifyContent:"space-between", marginRight: "auto", marginLeft: 10 }}
                      name="google"
                      size={15}
                      color="white"
                    />
                  }
                  titleStyle={{ marginRight: "auto" }}
                buttonStyle={{ backgroundColor: "#F14336", borderRadius: 25 }}
                title="Google"
                onPress={() => alert('Signed Up')}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
          <View>
            <Text>Have an account already?
                <Text style={{color: '#FF5800', fontSize: 15, fontWeight: "bold" }}
                    onPress={() => navigation.navigate('Login')}> Login
                </Text>
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }

export default Signup;
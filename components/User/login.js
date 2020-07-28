import React, { useState, useLayoutEffect } from 'react';
import { Text, View, Image, Linking, TextInput, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup'
import { Formik } from 'formik'

function Login({ navigation }) {
    return (
        <ScrollView>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flexDirection: 'column', margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontWeight: "400", fontSize: 45 }}>Welcome back! We missed you</Text>
          </View>
               <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => 
        {
            if (values.email === 'user@ftlabs.io' && values.password === 'password') navigation.navigate('h')
            else navigation.navigate('Login')
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
                        title="Login"
                        disabled={!isValid}
                        onPress={handleSubmit}
                    />
                </View>
            </View>
          </React.Fragment>
        )}
      </Formik>
            <View style={{ flex: 1, marginTop: 50, justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Text onPress={() => Linking.openURL('http://google.com')}>Forgot Password?</Text>
                </View>
            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <Text>Or login with</Text>
            </View>
          <View style={{ marginBottom: 10, width: 300, flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: "auto" }}>
                <Button
                    icon={
                        <Icon
                        style={{ width: 25, height: 25 }}
                        name="facebook"
                        size={20}
                        color="white"
                        />
                    }
                    buttonStyle={{ backgroundColor: "#3B5998", borderRadius: 25, marginLeft: 20 }}
                    onPress={() => alert('Signed Up')}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: "auto" }}>
                <Button
                    icon={
                        <Icon
                            style={{ width: 25, height: 25 }}
                        name="google"
                        size={20}
                        color="white"
                        />
                    }
                    buttonStyle={{ backgroundColor: "#F14336", borderRadius: 25, marginLeft: 20 }}
                    onPress={() => alert('Signed Up')}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: "auto" }}>
                <Button
                    icon={
                        <Icon
                            style={{ width: 25, height: 25 }}
                        name="twitter"
                        size={20}
                        color="white"
                        />
                    }
                    buttonStyle={{ backgroundColor: "#38A1F3", borderRadius: 25, marginLeft: 20 }}
                    onPress={() => alert('Signed Up')}
                />
              </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
          <View>
            <Text>Don't have an account already?
                <Text style={{color: '#FF5800', fontSize: 15, fontWeight: "bold" }}
                    onPress={() => navigation.navigate('Sign Up')}> Sign up
                </Text>
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }

export default Login;
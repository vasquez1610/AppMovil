import React, { useEffect } from "react";
import { Image, ScrollView, Text, ToastAndroid, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import RoundedButton from '../../components/RoundedButton';
import styles from './Styles';
import useViewModel from './ViewModel';



export const RegisterScreen = () => {
  const {name, lastname, email, phone,  password, confirmPassword, onChange, register,errorMessage } = useViewModel();

useEffect(() => {
  if (errorMessage !== '')
    ToastAndroid.show(errorMessage, ToastAndroid.LONG)
}, [errorMessage]);
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
        <Text style={styles.formText}>REGISTRARSE</Text>

        <CustomTextInput
          icon={require('../../../../assets/user.png')}
          placeholder='Nombres'
          keyboardType='default'
          property='name'
          onChangeText={onChange}
          value={name}
          secureTextEntry={false}
        />

        <CustomTextInput
          icon={require('../../../../assets/my_user.png')}
          placeholder='Apellidos'
          keyboardType='default'
          property='lastname'
          onChangeText={onChange}
          value={lastname}
          secureTextEntry={false}
        />

        <CustomTextInput
          icon={require('../../../../assets/email.png')}
          placeholder='Correo Electronico'
          keyboardType='default'
          property='email'
          onChangeText={onChange}
          value={email}
          secureTextEntry={false}
        />

        <CustomTextInput
          icon={require('../../../../assets/phone.png')}
          placeholder='Telefono'
          keyboardType='numeric'
          property='phone'
          onChangeText={onChange}
          value={phone}
          secureTextEntry={false}
        />

        <CustomTextInput
          icon={require('../../../../assets/password.png')}
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <CustomTextInput
          icon={require('../../../../assets/confirm_password.png')}
          placeholder='Confirmar Contraseña'
          keyboardType='default'
          property='confirmPassword'
          onChangeText={onChange}
          value={confirmPassword}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text='CONFIRMAR' onPress={() => register()}/>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};
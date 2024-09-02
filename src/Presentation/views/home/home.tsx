import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Image, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from '../../../../App';
import CustomTextInput from '../../components/CustomTextInput';
import RoundedButton from "../../components/RoundedButton";
import styles from './Styles';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    const { email, password, errorMessage, user,  onChange, login } = useViewModel();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined) {
            navigation.replace('ProfileInfoScreen');
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>
                <CustomTextInput
                    icon={require('../../../../assets/email.png')}
                    placeholder='Correo electrónico'
                    value={email}
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                />
                <CustomTextInput
                    icon={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    value={password}
                    keyboardType='default'
                    secureTextEntry={true}
                    property='password'
                    onChangeText={onChange}
                />
                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ENTRAR' onPress={() => login()} />
                </View>
                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


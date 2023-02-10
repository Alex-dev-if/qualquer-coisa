import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.mensagem}>Bem vindo (a)!</Text>   
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Insira seu name"
                    style={styles.input}
                    />
                
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Insira sua senha"
                    style={styles.input}
                    />

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('TelaInicio')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRegistro}
                onPress={ () => navigation.navigate('Cadastro')}>
                    <Text style={styles.registroText}>Não tem conta? Clique aqui</Text>
                </TouchableOpacity>

            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'gold',
    borderRadius: 10,
    width: 225,
    height: 250,
    justifyContent: 'center '
  },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    mensagem:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: 'purple',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistro:{
        marginTop: 14,
        alignSelf: 'center'
    }
})

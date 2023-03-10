import React from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        
           
          <ImageBackground 
          style={styles.backgroundTema}
          source={require('../../assets/welcome2.png')}
          >
              <View style={styles.containerLogo}>
                <Image 
                style={styles.image}
                source={require('../../assets/logo2.png')}/>
              </View>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
              
          </ImageBackground>
        
    );
}

const styles = StyleSheet.create({

    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backgroundTema:{
      flex:1,
      flexDirection: "column",
    },

    image:{
      width: 250,
      height: 250,
    },

    button:{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 11,
        width: '40%',
        alignSelf: 'center',
        bottom: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 20,
        color: 'purple',
        fontWeight: 'bold'
    }
    
})

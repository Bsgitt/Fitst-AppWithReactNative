import React from 'react'
import * as Facebook from 'expo-facebook';
import { FacebookSocialButton } from "react-native-social-buttons";
import { View,Alert} from 'react-native'

export default function FacebookAuth() {
    async function logIn() {
        try {
          await Facebook.initializeAsync({
            appId: '1434380476756499',
          });
          const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            console.log(response)
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    return (
        <View>
                    <FacebookSocialButton onPress={logIn}  />

        </View>
    )
}

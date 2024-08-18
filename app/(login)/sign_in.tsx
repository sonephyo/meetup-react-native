import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {

  const handlePress = () => {
    router.replace('/home')
  }

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 24}}>SignIn To be implemented</Text>
      <CustomButton handlePress={handlePress} text="Sign In"/>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 3,
  },
})
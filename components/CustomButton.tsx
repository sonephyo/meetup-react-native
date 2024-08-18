import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({handlePress, text} : {
    handlePress: () => void
    text: string
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
    <Text style={{color: "#FFFFFF", fontWeight: "500", fontSize: 16}}>{text}</Text>
  </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F2583E', // Button color
        marginTop: 16,
        paddingVertical: 12, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 8, // Rounded corners
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 3.84, // Shadow radius
        elevation: 5, // Elevation for Android
      }
})
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import Stack from '../navegacao/Stack'
import Tab from '../navegacao/Tab'
// import Drawer from '../navegacao/Drawer'

export default (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                {/* <Drawer /> */}
                <Tab />
                {/* <Stack /> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}
import React from 'react'
import { View, Text, Button } from 'react-native'

import TextoCentral from '../components/TextoCentral'

const TelaA = (props) => {
    const r = props.route
    const numero = r
        && r.params
        && r.params.numero ? r.params.numero : 0
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title="Abrir"
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        }, 3000)
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo="#F0AA45">
                    Tela D - {numero}
                </TextoCentral>
            </View>
        </View>
    )
}

export default TelaA
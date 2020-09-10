import React from 'react'
import { View, Text } from 'react-native'

import TextoCentral from '../components/TextoCentral'

const TelaA = (props) => {
    const r = props.route
    const numero = r
        && r.params
        && r.params.numero ? r.params.numero : 0
    return (
        <TextoCentral corFundo="#35E539">
            Tela C - {numero}
        </TextoCentral>
    )
}

export default TelaA
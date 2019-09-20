import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ? // só precisa disso por causa q é localhost
    'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }
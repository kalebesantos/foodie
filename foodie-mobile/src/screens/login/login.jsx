import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from '../../components/button/button';

function Login(){
    return <View style={styles.container}>
        <Header texto='Acesse sua conta' />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label='E-mail' />
            </View>

            <View style={styles.form}>
                <TextBox label='Senha' isPassword />
            </View>

            <View style={styles.form}>
                <Button texto='Acessar' />
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>Criar minha conta</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login;
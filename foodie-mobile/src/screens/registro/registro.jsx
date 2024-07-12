import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registro.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from '../../components/button/button';

function Registro(){
    return <ScrollView>
        <View style={styles.container}>
            <Header texto='Criar sua conta' />
            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <TextBox label='Nome Completo' />
                </View>
                <View style={styles.form}>
                    <TextBox label='E-mail' />
                </View>
                <View style={styles.form}>
                    <TextBox label='Escolha uma Senha' isPassword />
                </View>
                <View style={styles.form}>
                    <TextBox label='Confirme sua Senha' isPassword />
                </View>
                <View style={styles.form}>
                    <Button texto='Próximo Passo' />
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Acessar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}

export default Registro;
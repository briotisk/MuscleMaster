import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Perfil() {

  return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.perfil}>
                <ThemedView style={styles.foto}>
                    <Image source={require('@/assets/images/SignUpImg.png')} style={styles.img}/>
                </ThemedView>
                <ThemedView style={styles.nome_e_email}>
                    <ThemedText style={styles.title} type="title">Gabriel Brioto</ThemedText>
                    <ThemedText type="default">gabriel_supino@gmail.com</ThemedText>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.personal_infos}>
                <ThemedView style={styles.atributos_pessoais}>
                    <ThemedText style={styles.cor_preta}>180cm</ThemedText>
                    <ThemedText style={styles.cor_branca}>Altura</ThemedText>
                </ThemedView>
                <ThemedView style={styles.atributos_pessoais}>
                    <ThemedText style={styles.cor_preta}>80kg</ThemedText>
                    <ThemedText style={styles.cor_branca}>Peso</ThemedText>
                </ThemedView>
                <ThemedView style={styles.atributos_pessoais}>
                    <ThemedText style={styles.cor_preta}>22yo</ThemedText>
                    <ThemedText style={styles.cor_branca}>Idade</ThemedText>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.accountContainer}>
                <ThemedText style={styles.conta}>Account</ThemedText>
            </ThemedView>
            <View style={styles.horizontalLine} />
            <ThemedView style={styles.dados_conta}>
                <ThemedText style={styles.atributo_conta}>Dados Pessoais</ThemedText>
            </ThemedView>
            <ThemedView style={styles.dados_conta}>
                <ThemedText style={styles.atributo_conta}>Conquistas</ThemedText>
            </ThemedView>
            <ThemedView style={styles.dados_conta}>
                <ThemedText style={styles.atributo_conta}>Histórico de Atividade</ThemedText>
            </ThemedView>
            <ThemedView style={styles.dados_conta}>
                <ThemedText style={styles.atributo_conta}>Treinos</ThemedText>
            </ThemedView>
            <ThemedView style={styles.notificationContainer}>
                <ThemedText style={styles.notificacoes}>Noficações</ThemedText>
            </ThemedView>
            <View style={styles.horizontalLine} />
            <ThemedView style={styles.dados_conta}>
                <ThemedText style={styles.atributo_conta}>Configurações de notificações</ThemedText>
            </ThemedView>
        </ThemedView>
  );
}

const styles = StyleSheet.create({
    
    title: {
        color: '#fbba00',
    },
    container: {
        height: screenHeight,
        flex: 0,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        gap: 8,
    },
    personal_infos: {
        flexDirection: 'row',
        gap: 40,
    },
    atributos_pessoais: {
        backgroundColor: '#fbba00',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 10,
    },
    cor_preta: {
        color: '#000000',
        fontWeight: 'bold',
        paddingBottom: 10,
        fontSize: 20,
    },
    cor_branca: {
        fontSize: 20,
    },
    conta: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 60,
        textAlign: 'left',
    },
    accountContainer: {
        width: '100%',
        paddingLeft: 20,
    },
    horizontalLine: {
        marginTop: 10,
        width: '100%',
        height: 0.6,
        backgroundColor: '#fff',
    },
    dados_conta: {
        width: '100%',
        paddingLeft: 20,
        fontSize: 20,
    },
    atributo_conta: {
        textAlign: 'left',
        fontSize: 20,
    },
    notificationContainer: {
        width: '100%',
    },
    notificacoes: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 40,
        textAlign: 'left',
        paddingLeft: 20,
    },
    perfil: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Alinha os itens à esquerda
        gap: 30,
    },
    foto: {
        paddingLeft: 0,
    },
    nome_e_email: {
        paddingTop: 20,
    },
    img: {
        height: 80,
        width: 80,
    },
});

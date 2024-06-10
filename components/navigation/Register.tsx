import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput } from "react-native";
import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Register() {

    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const currentDate = getCurrentDate();
    const [date, setDate] = useState(currentDate);
   

  return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} type="title">Muscle Master</ThemedText>
            <ThemedText style={styles.title} type="subtitle">Register</ThemedText>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Username*"/>
                <TextInput style={styles.textInput} placeholder="Country*"/>
                <TextInput style={styles.textInput} placeholder="Phone Number*"/>
                <DatePicker
                    style={styles.datePicker}
                    date={date}
                    mode="date"
                    placeholder="Selecione a Data"
                    format="DD/MM/YYYY"
                    minDate="01/01/1900"
                    maxDate={currentDate}
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                />
                <TextInput style={styles.textInput} placeholder="Email*"/>
                <TextInput style={styles.textInput} placeholder="Password*"/>
                <TextInput style={styles.textInput} placeholder="Re-enter Password*"/>
            </View>
            <TouchableHighlight style={styles.btt}>
                <View>
                    <ThemedText type="default">Register</ThemedText>
                </View>
            </TouchableHighlight>
        </ThemedView>
  );
}

const styles = StyleSheet.create({
    datePicker: {
        width: 200,
    },
    btt: {
        alignItems: 'center',
        backgroundColor: '#383838',
        padding: 10,
        borderRadius: 10,
        width: screenWidth*0.8, 
        marginBottom: '30%'
    },
    textInputSub: {
        margin: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    },
    inputContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        padding: 0,
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000', 
    },
    title: {
        color: '#383838',
        marginBottom: 10,
        marginTop: 10
    },
    container: {
        backgroundColor: '#fbba00',
        height: screenHeight,
        flex: 0,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        gap: 8,
        paddingLeft: 0,
    },
    
});
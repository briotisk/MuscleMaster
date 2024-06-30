import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Button, Platform } from "react-native";
import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/AntDesign";
import RNPickerSelect from 'react-native-picker-select';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Link } from 'expo-router';
import { createTable, insertUser } from '../../database';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');

    const countries = [
        { label: 'Argentina', value: 'ARG' },
        { label: 'Australia', value: 'AUS' },
        { label: 'Brazil', value: 'BRA' },
        { label: 'Canada', value: 'CAN' },
        { label: 'China', value: 'CHN' },
        { label: 'France', value: 'FRA' },
        { label: 'Germany', value: 'DEU' },
        { label: 'India', value: 'IND' },
        { label: 'Italy', value: 'ITA' },
        { label: 'Japan', value: 'JPN' },
        { label: 'Mexico', value: 'MEX' },
        { label: 'Russia', value: 'RUS' },
        { label: 'Saudi Arabia', value: 'SAU' },
        { label: 'South Africa', value: 'ZAF' },
        { label: 'South Korea', value: 'KOR' },
        { label: 'Turkey', value: 'TUR' },
        { label: 'United Kingdom', value: 'GBR' },
        { label: 'United States', value: 'USA' },
    ];

    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };
    const currentDate = getCurrentDate();

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const formatDate = (date: Date): string => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} type="title">Muscle Master</ThemedText>
            <ThemedText style={styles.title} type="subtitle">Register</ThemedText>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Username*"/>
                <RNPickerSelect
                placeholder={{
                    label: 'Country*',
                    value: null,
                }}
                items={countries}
                onValueChange={(value) => setSelectedCountry(value)}
                style={{
                    inputIOS: styles.inputIOS,
                    inputAndroid: styles.inputAndroid,
                }}
                value={selectedCountry}
            />
                <TextInput style={styles.textInput} placeholder="Phone Number*"/>
                <View style={styles.datePickerContainer}>
                    <View>
                        <ThemedText style={styles.title} type="default">Date of birth:</ThemedText>
                    </View>
                    <View>
                        <View style={styles.dateOfBirth}>
                            <TextInput
                                style={styles.dateShow}
                                value={formatDate(date)}
                                placeholder="Select Date"
                                onFocus={showDatepicker}
                                editable={false}
                            />
                            <Icon name="calendar" size={45} color='#383838'/>
                        </View>
                        <View style={styles.bttDate}>
                            <Button onPress={showDatepicker} title="Select Date" />
                        </View>
                    </View>                    
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                        minimumDate={new Date(1900, 0, 1)}
                        maximumDate={new Date()}
                    />
                )}
                <TextInput style={styles.textInput} placeholder="Email*"/>
                <TextInput style={styles.textInput} placeholder="Password*"/>
                <TextInput style={styles.textInput} placeholder="Re-enter Password*"/>
            </View>
            <TouchableHighlight style={styles.btt}>
            <Link href="/pages/TreinosCadastrados"><View>
                    <ThemedText type="default">Register</ThemedText>
                </View></Link>
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
        borderRadius: 3,
        borderBottomColor: '#000',
        color: 'gray',
        backgroundColor: '#383838',
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
    datePickerContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 0,
        paddingLeft: '10%',
        paddingRight: '10%',
    },    
    dateShow: {
        backgroundColor: 'white',
        color: 'black',
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 5,
        marginLeft: 10,
        borderColor: '#383838',
        borderRadius: 5,
        borderWidth: 2,
    },
    pickerSelectStyles: {
        backgroundColor: 'white',
        color: 'black',
        borderColor: '#383838',
        borderRadius: 5,
        borderWidth: 2,
    },
    dateOfBirth: {
        marginLeft: 15,
        paddingLeft: 20,
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'gray',
        paddingRight: 30,
        backgroundColor: '#383838',
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'gray',
        paddingRight: 30,
        backgroundColor: '#383838',
    },
    bttDate: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        paddingLeft: 40,
    }
});
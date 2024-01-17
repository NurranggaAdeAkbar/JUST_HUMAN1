import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Button,
  Card,
  TextInput,
  Title,
  Provider as PaperProvider,
  DataTable,
  Text,  // Import Text from 'react-native'
} from 'react-native-paper';

import CustomButton from '../components/customButton';

const RNpaper = ({ navigation }) => {
  const [barangValue, setBarangValue] = useState('');
  const [alamatValue, setAlamatValue] = useState('');
  const [activeValue, setActiveValue] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleButtonPress = () => {
    if (barangValue !== '' && alamatValue !== '' && activeValue !== '') {
      setDataList([
        ...dataList,
        { barang: barangValue, alamat: alamatValue, active: activeValue },
      ]);
      setBarangValue('');
      setAlamatValue('');
      setActiveValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);
  };

  const rnPaper = () => {
    navigation.navigate('RNpaper');
  };

  const mkonsumen = () => {
    navigation.navigate('manajemenkonsumen');
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.text}>Manajemen Konsumen</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Konsumen</Title>
              <TextInput
                label="Konsumen"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={barangValue}
                onChangeText={(text) => setBarangValue(text)}
              />
              <Title>Alamat</Title>
              <TextInput
                label="Alamat"
                left={<TextInput.Icon name="map" />}
                style={styles.input}
                value={alamatValue}
                onChangeText={(text) => setAlamatValue(text)}
              />
              <Title>Active</Title>
              <TextInput
                label="Active"
                left={<TextInput.Icon name="checkbox-marked-circle" />}
                style={styles.input}
                value={activeValue}
                onChangeText={(text) => setActiveValue(text)}
              />
              <Button
                mode="contained"
                icon="arrow-right"
                onPress={handleButtonPress}
                style={styles.button}>
                Submit
              </Button>
            </Card.Content>
          </Card>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Konsumen</DataTable.Title>
              <DataTable.Title>Alamat</DataTable.Title>
              <DataTable.Title>Active</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>

            {dataList.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.barang}</DataTable.Cell>
                <DataTable.Cell>{item.alamat}</DataTable.Cell>
                <DataTable.Cell>{item.active}</DataTable.Cell>
                <DataTable.Cell>
                  <Button
                    mode="outlined"
                    icon="delete"
                    onPress={() => handleDeleteItem(index)}
                    style={styles.deleteButton}>
                    Delete
                  </Button>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      </ScrollView>
      <CustomButton type="TERTIARY" text="Home" onPress={goHome} />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#9EB8D9',
  },
  cardContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: 300,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RNpaper;

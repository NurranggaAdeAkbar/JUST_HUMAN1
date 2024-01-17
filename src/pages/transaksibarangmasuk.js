import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Button,
  Card,
  TextInput,
  Title,
  Provider as PaperProvider,
  DataTable,
  Text,
} from 'react-native-paper';

import CustomButton from '../components/customButton';

const RNpaper = ({ navigation }) => {
  const [barangValue, setBarangValue] = useState('');
  const [stockValue, setStockValue] = useState('');
  const [minStockValue, setMinStockValue] = useState('');
  const [satuanValue, setSatuanValue] = useState('');
  const [dataList, setDataList] = useState([
    { barang: 'rokokmagnum', stock: '3', min_stock: '5', satuan: 'slop' },
    { barang: 'rokokesse', stock: '5', min_stock: '8', satuan: 'slop' },
  ]);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleButtonPress = () => {
    if (barangValue !== '' && stockValue !== '' && minStockValue !== '' && satuanValue !== '') {
      setDataList([
        ...dataList,
        { barang: barangValue, stock: stockValue, min_stock: minStockValue, satuan: satuanValue },
      ]);
      setBarangValue('');
      setStockValue('');
      setMinStockValue('');
      setSatuanValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);
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
          <Text style={styles.text}>Transaksi Barang Masuk</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Barang</Title>
              <TextInput
                label="Barang"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={barangValue}
                onChangeText={(text) => setBarangValue(text)}
              />
              <Title>Stock</Title>
              <TextInput
                label="Stock"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={stockValue}
                onChangeText={(text) => setStockValue(text)}
              />
              <Title>Min Stock</Title>
              <TextInput
                label="Min Stock"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={minStockValue}
                onChangeText={(text) => setMinStockValue(text)}
              />
              <Title>Satuan</Title>
              <TextInput
                label="Satuan"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={satuanValue}
                onChangeText={(text) => setSatuanValue(text)}
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
              <DataTable.Title>Barang</DataTable.Title>
              <DataTable.Title>Stock</DataTable.Title>
              <DataTable.Title>Min Stock</DataTable.Title>
              <DataTable.Title>Satuan</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>

            {dataList.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.barang}</DataTable.Cell>
                <DataTable.Cell>{item.stock}</DataTable.Cell>
                <DataTable.Cell>{item.min_stock}</DataTable.Cell>
                <DataTable.Cell>{item.satuan}</DataTable.Cell>
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

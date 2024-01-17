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
  const [namaValue, setNamaValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [nikValue, setNikValue] = useState('');
  const [levelValue, setLevelValue] = useState('');
  const [dataList, setDataList] = useState([
    { nama: 'Admin', username: 'admin', nik: '221344324', level: 'Administrator' },
    { nama: 'SuperAdmin', username: 'superadmin', nik: '223542354', level: 'Super Admin' },
  ]);

  const handleButtonPress = () => {
    if (namaValue !== '' && usernameValue !== '' && nikValue !== '' && levelValue !== '') {
      setDataList([
        ...dataList,
        { nama: namaValue, username: usernameValue, nik: nikValue, level: levelValue },
      ]);
      setNamaValue('');
      setUsernameValue('');
      setNikValue('');
      setLevelValue('');
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
          <Text style={styles.text}>Manajemen User</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Nama</Title>
              <TextInput
                label="Nama"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={namaValue}
                onChangeText={(text) => setNamaValue(text)}
              />
              <Title>Username</Title>
              <TextInput
                label="Username"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={usernameValue}
                onChangeText={(text) => setUsernameValue(text)}
              />
              <Title>NIK</Title>
              <TextInput
                label="NIK"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={nikValue}
                onChangeText={(text) => setNikValue(text)}
              />
              <Title>Level</Title>
              <TextInput
                label="Level"
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                value={levelValue}
                onChangeText={(text) => setLevelValue(text)}
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
              <DataTable.Title>Nama</DataTable.Title>
              <DataTable.Title>Username</DataTable.Title>
              <DataTable.Title>NIK</DataTable.Title>
              <DataTable.Title>Level</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>

            {dataList.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.nama}</DataTable.Cell>
                <DataTable.Cell>{item.username}</DataTable.Cell>
                <DataTable.Cell>{item.nik}</DataTable.Cell>
                <DataTable.Cell>{item.level}</DataTable.Cell>
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

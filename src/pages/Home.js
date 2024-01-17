import React, { useState } from 'react';
import { ScrollView, View, Text, Modal, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import CustomButton from '../components/customButton';
import CustomInput from '../components/customInput';

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isMenuVisible, setMenuVisible] = useState(false);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now().toString(), text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  const rnPaper = () => {
    setMenuVisible(false);
    navigation.navigate('RNpaper');
  };

  const mk = () => {
    setMenuVisible(false);
    navigation.navigate('MK');
  };

  const lbk = () => {
    setMenuVisible(false);
    navigation.navigate('LBK');
  };

  const lbm = () => {
    setMenuVisible(false);
    navigation.navigate('LBM');
  };

  const mu = () => {
    setMenuVisible(false);
    navigation.navigate('MU');
  };

  const sm = () => {
    setMenuVisible(false);
    navigation.navigate('SM');
  };

  const tbm = () => {
    setMenuVisible(false);
    navigation.navigate('TBM');
  };

  const tbk = () => {
    setMenuVisible(false);
    navigation.navigate('TBK');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={() => {
            setMenuVisible(!isMenuVisible);
          }}>
          <ScrollView>
          <View style={styles.menu}>
            <Text style={styles.text}>Menu</Text>
            <View style={styles.listMenu}>
              <CustomButton text="manajemenkonsumen" onPress={mk} />
              <CustomButton text="manajemenpemasok" onPress={rnPaper} />
              <CustomButton text="laporanbarangkeluar" onPress={lbk} />
              <CustomButton text="laporanbarangmasuk" onPress={lbm} />
              <CustomButton text="manajemenuser" onPress={mu} />
              <CustomButton text="stokmenipis" onPress={sm} />
              <CustomButton text="transaksibarangkeluar" onPress={tbk} />
              <CustomButton text="transaksibarangmasuk" onPress={tbm} />
              <CustomButton text="Home" onPress={() => setMenuVisible(false)} />
            </View>
            <CustomButton
              type="TERTIARY"
              text="Close Menu"
              onPress={() => setMenuVisible(!isMenuVisible)}
            />
          </View>
          </ScrollView>
        </Modal>
        <Entypo
          name="menu"
          size={50}
          color="black"
          onPress={() => setMenuVisible(true)}
        />
        <View style={styles.task}>
          <Text style={styles.text}>{"\n\n"}Home{"\n\n\n\n\n\n"}</Text>
          <View style={styles.task}>
            <Text style={styles.text}>
              Hai, SuperAdmin. {"\n"}
              Selamat datang {"\n"}
              Di Sistem Inventory Gudang {"\n"}
              Suka Maju. {"\n\n"}
              Yakni sebuah aplikasi {"\n"}
              Yakni dapat membantu anda {"\n"}
              Untuk mengerjakan transaksi {"\n"}
              Secara cepat dan mudah. {"\n"}
              Saat ini, Anda login sebagai SuperAdmin.
            </Text>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text>{item.text}</Text>
                <MaterialCommunityIcons
                  name="delete-variant"
                  size={28}
                  color="black"
                  onPress={() => deleteTask(item.id)}
                />
              </View>
            )}
          />
          <CustomButton type="TERTIARY" text="Logout" onPress={handleLogout} />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B0DEF2',
  },
  task: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B0DEF2',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 300,
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#929CAD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    color: '#929CAD',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0DEF2',
    padding: 10,
  },
  listMenu: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default Home;

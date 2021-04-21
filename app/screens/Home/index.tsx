import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from '../../../app/store/actions/loginActions';
import NavigationService from '../../../app/navigation/NavigationService';

import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const viewProject = () => NavigationService.navigate('ViewProject');
  const addProject = () => NavigationService.navigate('AddProject');
  return (
    <View style={styles.container}>
      <Button style={styles.btn} mode="outlined" onPress={addProject}>
        Add New Project
      </Button>
      <Button style={styles.btn} mode="outlined" onPress={viewProject}>
        View Project
      </Button>
      <Button style={styles.btn} mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;

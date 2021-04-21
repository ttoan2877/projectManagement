import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

const DATA = [
  {
    userID: '1',
    username: 'toanttm',
    totalProject: '3',
    totalTask: '3',
  },
];

const onPrjDetail = () => {
  NavigationService.navigate('ViewProject');
};
const onTskDetail = () => {
  NavigationService.navigate('ViewTask');
};

const Item = ({ username, totalProject, totalTask }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{username}</Text>
    <Text style={styles.textView}>Total assigned project: {totalProject}</Text>
    <Button onPress={onPrjDetail}>Project detail</Button>
    <Text style={styles.textView}>Total assigned task: {totalTask}</Text>
    <Button onPress={onTskDetail}>Task detail</Button>
  </View>
);

const ViewAssignee: React.FC = () => {
  const renderItem = ({ item }: any) => (
    <Item
      username={item.username}
      totalProject={item.totalProject}
      totalTask={item.totalTask}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.userID}
      />
    </SafeAreaView>
  );
};

export default ViewAssignee;

import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

const INITIAL_DATA = [
  {
    id: '1',
    taskName: 'Coding 1',
    description: 'Design component',
    assignee: 'toanttm',
    taskStatus: 'New',
  },
  {
    id: '2',
    taskName: 'Coding 2',
    description: 'Coding css',
    assignee: 'toanttm',
    taskStatus: 'Re-Open',
  },
  {
    id: '3',
    taskName: 'Coding 3',
    description: 'Coding data model',
    assignee: 'toanttm',
    taskStatus: 'Closed',
  },
];

const editTask = () => NavigationService.navigate('EditTask');

const Item = ({ id, taskName, description, assignee, taskStatus }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Task No.{id}: {taskName}
    </Text>
    <Text style={styles.textView}>Description: {description}</Text>
    <Text style={styles.textView}>Assignee: {assignee}</Text>
    <Text style={styles.status}>Status: {taskStatus}</Text>
    <Button onPress={editTask}>Edit task</Button>
  </View>
);

const ViewTask: React.FC = ({ route }: any) => {
  const [data, setData] = useState<any[]>(INITIAL_DATA);

  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      taskName={item.taskName}
      description={item.description}
      assignee={item.assignee}
      taskStatus={item.taskStatus}
    />
  );

  useFocusEffect(
    React.useCallback(() => {
      const addNewTask = () => {
        setData(data.concat({ ...route?.params?.task, id: data.length + 1 }));
      };
      addNewTask();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ViewTask;

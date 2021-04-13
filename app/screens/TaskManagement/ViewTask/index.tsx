import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

const DATA = [
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

const Item = ({ id, taskName, taskDescription, taskAssignee, taskStatus }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Project No.{id}: {taskName}
    </Text>
    <Text style={styles.textView}>Description: {taskDescription}</Text>
    <Text style={styles.textView}>Assignee: {taskAssignee}</Text>
    <Text style={styles.status}>Status: {taskStatus}</Text>
    <Button>Edit Task</Button>
    <Button>Delete Task</Button>
  </View>
);

const ViewTask: React.FC = () => {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      taskName={item.taskName}
      taskDescription={item.taskDescription}
      taskAssignee={item.taskAssignee}
      taskStatus={item.taskStatus}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ViewTask;

import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

const DATA = [
  {
    userID: '1',
    username: 'toanttm',
    totalProject: '3',
    totalTask: '3',
  },
];

const TASK =[
  {
    taskid: '1',
    taskName: 'Coding 1',
    description: 'Design component',
    taskStatus: 'New',
  },
  {
    taskid: '2',
    taskName: 'Coding 2',
    description: 'Coding css',
    taskStatus: 'Re-Open',
  },
  {
    taskid: '3',
    taskName: 'Coding 3',
    description: 'Coding data model',
    taskStatus: 'Closed',
  },
];

const PROJECT = [
  {
    id: '1',
    projectName: 'ASP.NET',
    projectDescription: 'Coding using ASP.NET',
    projectAssignee: '',
    projectStatus: 'Closed',
  },
  {
    id: '2',
    projectName: 'VB.NET',
    projectDescription: 'Coding using VB.NET',
    projectAssignee: '',
    projectStatus: 'Closed',
  },
  {
    id: '3',
    projectName: 'React-Native',
    projectDescription: 'Coding using React-Native',
    projectAssignee: '',
    projectStatus: 'On-going',
  },
];

const Item = ({
  userID,
  username,
  totalProject
  totalTask,
}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
       {username}
    </Text>
    <Text style={styles.textView}>Total assigned project: {totalProject}</Text>
    <Button>Project detail</Button>
    <Text style={styles.textView}>Total assigned task: {totalTask}</Text>
    <Button>Task detail</Button>
  </View>
);

const ViewAssignee: React.FC = () => {
  const renderItem = ({ item }) => (
    <Item
      userID={item.id}
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

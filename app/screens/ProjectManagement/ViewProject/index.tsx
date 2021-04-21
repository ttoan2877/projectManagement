import { useFocusEffect } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

const INITIAL_DATA = [
  {
    id: '1',
    projectName: 'ASP.NET',
    projectDescription: 'Coding using ASP.NET',
    projectAssignee: 'toanttm',
    projectStatus: 'Closed',
  },
  {
    id: '2',
    projectName: 'VB.NET',
    projectDescription: 'Coding using VB.NET',
    projectAssignee: 'toanttm',
    projectStatus: 'Closed',
  },
  {
    id: '3',
    projectName: 'React-Native',
    projectDescription: 'Coding using React-Native',
    projectAssignee: 'toanttm',
    projectStatus: 'On-going',
  },
];

const editProject = () => NavigationService.navigate('EditProject');
const viewAssignee = () => NavigationService.navigate('ViewAssignee');
const viewTask = () => NavigationService.navigate('ViewTask');

const Item = ({
  id,
  projectName,
  projectDescription,
  projectAssignee,
  projectStatus,
}: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Project No.{id}: {projectName}
    </Text>
    <Text style={styles.textView}>Description: {projectDescription}</Text>
    <Text style={styles.textView}>Assignee: {projectAssignee}</Text>
    <Text style={styles.status}>Status: {projectStatus}</Text>
    <Button onPress={viewAssignee}>View Assignee</Button>
    <Button onPress={viewTask}>View Task</Button>
    <Button onPress={editProject}>Edit project</Button>
  </View>
);

const ViewProject: React.FC = ({ route }: any) => {
  const [data, setData] = useState<any[]>(INITIAL_DATA);

  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      projectName={item.projectName}
      projectDescription={item.projectDescription}
      projectAssignee={item.projectAssignee}
      projectStatus={item.projectStatus}
    />
  );

  useFocusEffect(
    React.useCallback(() => {
      const addNewProject = () => {
        setData(
          data.concat({ ...route?.params?.project, id: data.length + 1 }),
        );
      };
      addNewProject();
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

export default ViewProject;

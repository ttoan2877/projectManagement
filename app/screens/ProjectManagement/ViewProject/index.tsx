import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

const DATA = [
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

const Item = ({
  id,
  projectName,
  projectDescription,
  projectAssignee,
  projectStatus,
}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Project No.{id}: {projectName}
    </Text>
    <Text style={styles.textView}>Description: {projectDescription}</Text>
    <Text style={styles.textView}>Assignee: {projectAssignee}</Text>
    <Text style={styles.status}>Status: {projectStatus}</Text>
    <Button>Edit project</Button>
  </View>
);

const ViewProject: React.FC = () => {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      projectName={item.projectName}
      projectDescription={item.projectDescription}
      projectAssignee={item.projectAssignee}
      projectStatus={item.projectStatus}
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

export default ViewProject;

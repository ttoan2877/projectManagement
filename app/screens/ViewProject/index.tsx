import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

const DATA = [
  {
    id: '1',
    title: 'ASP.NET',
    description: 'description',
    assignee: '',
  },
  {
    id: '2',
    title: 'VB.NET',
    description: 'description',
    assignee: '',
  },
  {
    id: '3',
    title: 'React-Native',
    description: 'description',
    assignee: '',
  },
];

const Item = ({ id, title, description, assignee }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Project No.{id}: {title}
    </Text>
    <Text style={styles.title}>Description: {description}</Text>
    <Text style={styles.title}>Assignee {assignee}</Text>
    <Button>Edit project</Button>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      description={item.description}
      assignee={item.assignee}
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

export default App;

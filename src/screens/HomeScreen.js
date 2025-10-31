import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {Button, Card} from '../components';

const HomeScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={{padding: theme.spacing.md}}>
        <Text style={[styles.title, {color: theme.colors.text, ...theme.typography.h1}]}>
          Welcome to Mobile App Framework
        </Text>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Getting Started
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            This is a simple mobile app framework built with React Native. It includes navigation, theming, and reusable components.
          </Text>
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Features
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            • Dark/Light theme support{'\n'}
            • Navigation (Stack & Tabs){'\n'}
            • Reusable components{'\n'}
            • API service integration{'\n'}
            • Storage utilities{'\n'}
            • Helper functions
          </Text>
        </Card>

        <Button
          title="View Details"
          onPress={() => navigation.navigate('Details')}
          style={{marginTop: theme.spacing.md}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 16,
  },
  subtitle: {
    marginBottom: 12,
  },
  text: {
    lineHeight: 24,
  },
});

export default HomeScreen;

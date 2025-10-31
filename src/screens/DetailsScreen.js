import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {Card, Button} from '../components';

const DetailsScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={{padding: theme.spacing.md}}>
        <Text style={[styles.title, {color: theme.colors.text, ...theme.typography.h1}]}>
          Details
        </Text>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Framework Components
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            This framework includes several pre-built components that you can use to build your mobile application:
          </Text>
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Components
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            • Button - Customizable button with variants{'\n'}
            • Card - Container component with shadow{'\n'}
            • Input - Text input with label and error states{'\n'}
          </Text>
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Services
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            • API Service - HTTP client with interceptors{'\n'}
            • Storage Service - Local storage wrapper{'\n'}
            • Navigation - Stack and Tab navigation{'\n'}
          </Text>
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Utilities
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            • Date formatting{'\n'}
            • Debounce and throttle functions{'\n'}
            • Validation helpers{'\n'}
            • String manipulation{'\n'}
          </Text>
        </Card>

        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          variant="secondary"
          style={{marginTop: theme.spacing.md, marginBottom: theme.spacing.lg}}
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

export default DetailsScreen;

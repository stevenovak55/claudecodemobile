import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {Card, Input, Button} from '../components';

const ProfileScreen = () => {
  const {theme} = useTheme();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    console.log('Saving profile:', {name, email, phone});
    // Add your save logic here
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={{padding: theme.spacing.md}}>
        <Text style={[styles.title, {color: theme.colors.text, ...theme.typography.h1}]}>
          Profile
        </Text>

        <Card style={{marginTop: theme.spacing.md}}>
          <Input
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />

          <Button
            title="Save Changes"
            onPress={handleSave}
            style={{marginTop: theme.spacing.sm}}
          />
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Account Information
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            Member since: January 2024{'\n'}
            Account type: Premium{'\n'}
            Status: Active
          </Text>
        </Card>
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

export default ProfileScreen;

import React from 'react';
import {View, Text, StyleSheet, ScrollView, Switch} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {Card} from '../components';

const SettingsScreen = () => {
  const {theme, toggleTheme} = useTheme();
  const [notifications, setNotifications] = React.useState(true);
  const [location, setLocation] = React.useState(false);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={{padding: theme.spacing.md}}>
        <Text style={[styles.title, {color: theme.colors.text, ...theme.typography.h1}]}>
          Settings
        </Text>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Appearance
          </Text>

          <View style={styles.settingRow}>
            <Text style={[styles.settingLabel, {color: theme.colors.text, ...theme.typography.body}]}>
              Dark Mode
            </Text>
            <Switch
              value={theme.isDark}
              onValueChange={toggleTheme}
              trackColor={{false: theme.colors.border, true: theme.colors.primary}}
              thumbColor="#FFFFFF"
            />
          </View>
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            Preferences
          </Text>

          <View style={styles.settingRow}>
            <Text style={[styles.settingLabel, {color: theme.colors.text, ...theme.typography.body}]}>
              Push Notifications
            </Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{false: theme.colors.border, true: theme.colors.primary}}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={[styles.settingRow, {borderTopWidth: 1, borderTopColor: theme.colors.border}]}>
            <Text style={[styles.settingLabel, {color: theme.colors.text, ...theme.typography.body}]}>
              Location Services
            </Text>
            <Switch
              value={location}
              onValueChange={setLocation}
              trackColor={{false: theme.colors.border, true: theme.colors.primary}}
              thumbColor="#FFFFFF"
            />
          </View>
        </Card>

        <Card style={{marginTop: theme.spacing.md}}>
          <Text style={[styles.subtitle, {color: theme.colors.text, ...theme.typography.h3}]}>
            About
          </Text>
          <Text style={[styles.text, {color: theme.colors.textSecondary, ...theme.typography.body}]}>
            Version: 1.0.0{'\n'}
            Build: 100{'\n'}
            © 2024 Mobile App Framework
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
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingLabel: {
    flex: 1,
  },
});

export default SettingsScreen;

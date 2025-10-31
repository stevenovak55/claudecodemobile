# Mobile App Framework

A simple, clean, and scalable mobile app framework built with React Native. This framework provides a solid foundation for building cross-platform mobile applications with modern best practices.

## Features

- **Cross-Platform**: Built with React Native for iOS and Android
- **Navigation**: Stack and Tab navigation using React Navigation
- **Theming**: Dark/Light theme support with easy customization
- **Reusable Components**: Pre-built UI components (Button, Card, Input)
- **API Integration**: Configured HTTP client with interceptors
- **Storage**: Simple storage service for persistent data
- **Utilities**: Helper functions for common tasks
- **Type Safety**: Structured for easy TypeScript migration

## Project Structure

```
mobile-app-framework/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Input.js
│   │   └── index.js
│   ├── context/           # React contexts
│   │   └── ThemeContext.js
│   ├── navigation/        # Navigation configuration
│   │   ├── AppNavigator.js
│   │   └── routes.js
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── SettingsScreen.js
│   │   └── DetailsScreen.js
│   ├── services/         # API and storage services
│   │   ├── api.js
│   │   └── storage.js
│   ├── theme/           # Theme configuration
│   │   ├── colors.js
│   │   ├── spacing.js
│   │   └── typography.js
│   ├── utils/           # Helper utilities
│   │   ├── constants.js
│   │   └── helpers.js
│   └── App.js          # Root component
├── index.js            # App entry point
├── app.json           # App configuration
├── package.json       # Dependencies
└── README.md         # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mobile-app-framework
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS pods (macOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

**iOS:**
```bash
npm run ios
# or
yarn ios
```

**Android:**
```bash
npm run android
# or
yarn android
```

**Start Metro bundler:**
```bash
npm start
# or
yarn start
```

## Core Features

### Theme System

The framework includes a comprehensive theming system with dark/light mode support:

```javascript
import { useTheme } from './context/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hello World</Text>
    </View>
  );
};
```

### Navigation

Pre-configured navigation with stack and tab navigators:

```javascript
import { useNavigation } from '@react-navigation/native';
import ROUTES from './navigation/routes';

const MyScreen = () => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate(ROUTES.DETAILS);
  };
};
```

### Components

#### Button
```javascript
<Button
  title="Click Me"
  onPress={handlePress}
  variant="primary" // primary, secondary, danger, outline
  size="medium"     // small, medium, large
  loading={false}
  disabled={false}
/>
```

#### Card
```javascript
<Card>
  <Text>Card Content</Text>
</Card>
```

#### Input
```javascript
<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="Enter email"
  error={emailError}
/>
```

### API Service

HTTP client with request/response interceptors:

```javascript
import api from './services/api';

// GET request
const fetchData = async () => {
  try {
    const data = await api.get('/endpoint');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// POST request
const postData = async () => {
  try {
    const response = await api.post('/endpoint', { key: 'value' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

### Storage Service

Simple key-value storage:

```javascript
import storage from './services/storage';

// Save data
await storage.setItem('key', 'value');

// Retrieve data
const value = await storage.getItem('key');

// Remove data
await storage.removeItem('key');

// Clear all
await storage.clear();
```

### Utility Helpers

```javascript
import { formatDate, debounce, validateEmail, truncate } from './utils/helpers';

// Format dates
const formatted = formatDate(new Date(), 'long');

// Debounce function
const debouncedSearch = debounce(searchFunction, 300);

// Validate email
const isValid = validateEmail('test@example.com');

// Truncate string
const short = truncate('Long text here', 20);
```

## Customization

### Colors

Edit `src/theme/colors.js` to customize the color palette:

```javascript
export const lightColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  // ... more colors
};
```

### Typography

Edit `src/theme/typography.js` to customize text styles:

```javascript
export const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' },
  // ... more styles
};
```

### Spacing

Edit `src/theme/spacing.js` to customize spacing values:

```javascript
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  // ... more values
};
```

## Testing

```bash
npm test
# or
yarn test
```

## Building for Production

**iOS:**
```bash
cd ios
xcodebuild -workspace YourApp.xcworkspace -scheme YourApp -configuration Release
```

**Android:**
```bash
cd android
./gradlew assembleRelease
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue in the repository.

---

Built with React Native

import React, {createContext, useContext, useState, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

  const theme = useMemo(
    () => ({
      colors: isDark ? colors.dark : colors.light,
      spacing,
      typography,
      isDark,
    }),
    [isDark],
  );

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

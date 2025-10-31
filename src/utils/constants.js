export const APP_NAME = 'Mobile App Framework';
export const APP_VERSION = '1.0.0';

export const SCREEN_BREAKPOINTS = {
  small: 320,
  medium: 768,
  large: 1024,
};

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const API_TIMEOUT = 10000;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection failed. Please check your internet.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
};

export default {
  APP_NAME,
  APP_VERSION,
  SCREEN_BREAKPOINTS,
  ANIMATION_DURATION,
  API_TIMEOUT,
  ERROR_MESSAGES,
};

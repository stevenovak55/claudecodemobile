// Simple storage service wrapper
// In a real app, you'd use @react-native-async-storage/async-storage

class StorageService {
  constructor() {
    this.storage = new Map();
  }

  async getItem(key) {
    try {
      return this.storage.get(key) || null;
    } catch (error) {
      console.error('Storage getItem error:', error);
      return null;
    }
  }

  async setItem(key, value) {
    try {
      this.storage.set(key, value);
      return true;
    } catch (error) {
      console.error('Storage setItem error:', error);
      return false;
    }
  }

  async removeItem(key) {
    try {
      this.storage.delete(key);
      return true;
    } catch (error) {
      console.error('Storage removeItem error:', error);
      return false;
    }
  }

  async clear() {
    try {
      this.storage.clear();
      return true;
    } catch (error) {
      console.error('Storage clear error:', error);
      return false;
    }
  }
}

export default new StorageService();

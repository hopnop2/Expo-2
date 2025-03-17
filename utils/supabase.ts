import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

// ตรวจสอบว่าอยู่ในสภาพแวดล้อม web SSR หรือไม่
const isServer = typeof window === 'undefined';

// สร้าง custom storage สำหรับใช้ใน SSR environment
const createCustomStorage = () => {
  return {
    getItem: (key) => {
      if (isServer) return null; // ส่งคืน null เมื่ออยู่บน server
      return AsyncStorage.getItem(key);
    },
    setItem: (key, value) => {
      if (isServer) return; // ไม่ทำอะไรเมื่ออยู่บน server
      return AsyncStorage.setItem(key, value);
    },
    removeItem: (key) => {
      if (isServer) return; // ไม่ทำอะไรเมื่ออยู่บน server
      return AsyncStorage.removeItem(key);
    },
  };
};

// สร้าง Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: createCustomStorage(),
    autoRefreshToken: true,
    persistSession: !isServer, // ไม่ persistent session บน server
    detectSessionInUrl: false,
  },
});

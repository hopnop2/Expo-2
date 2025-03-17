import React from 'react';
import { Text, TextStyle, TextProps, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';

interface StyledTextProps extends TextProps {
  variant?: 'header' | 'title' | 'normal';
  centered?: boolean;
  rounded?: boolean;
  withBackground?: boolean;
}

export function StyledText({ 
  children, 
  variant = 'normal',
  centered = false,
  rounded = false,
  withBackground = false,
  style, 
  ...otherProps 
}: StyledTextProps) {
  const colorScheme = useColorScheme() || 'dark';
  const colors = Colors[colorScheme];

  const variantStyles = {
    header: {
      fontSize: 24,
      fontWeight: 'bold' as TextStyle['fontWeight'],
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold' as TextStyle['fontWeight'],
      marginVertical: 5,
    },
    normal: {
      fontSize: 16,
    }
  };

  // ปรับแก้: ทำให้ background จำเป็นต้องมีเพื่อให้ borderRadius ทำงานได้
  const backgroundStyle = withBackground || rounded ? {
    backgroundColor: colors.background || '#000000', // ใช้สีดำเป็นค่าเริ่มต้นหากไม่มี colors.background
    padding: 10,
    marginVertical: 5,
  } : {};

  // แยกสไตล์ rounded เพื่อให้มั่นใจว่าจะใช้งานได้แม้ไม่เลือก withBackground
  const roundedStyle = rounded ? {
    borderRadius: 15, // เพิ่มค่าให้เห็นชัดเจนยิ่งขึ้น
    overflow: 'hidden' as TextStyle['overflow'], // เพิ่ม overflow: hidden เพื่อให้แน่ใจว่าขอบมนจะปรากฏ
  } : {};

  const styles = StyleSheet.create({
    base: {
      color: colors.text || '#ffffff',
      ...variantStyles[variant],
    },
    centered: {
      textAlign: 'center' as TextStyle['textAlign'],
    },
  });

  return (
    <Text
      style={[
        styles.base,
        centered && styles.centered,
        backgroundStyle,
        roundedStyle,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

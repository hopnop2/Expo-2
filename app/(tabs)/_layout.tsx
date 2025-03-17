// rnf
import React from "react"
// import Octicons from "@expo/vector-icons/Octicons"
import { Tabs } from "expo-router"
import { icons } from "@/constants"
// เพิ่ม Platform API เพื่อตรวจสอบว่ากำลังรันบนเว็บหรือมือถือ
import { View, Image, Text, StyleSheet, Platform } from "react-native"
import { StatusBar } from "expo-status-bar"
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof Octicons>["name"]
//   color: string
// }) {
//   return <Octicons size={24} style={{ marginBottom: 5 }} {...props} />
// }

// สร้าง component TabIcon สำหรับแสดง icon แต่ละ tab
const TabIcon = ({ icon, color, focused }: any) => {
  return (
    // เปลี่ยนจาก className เป็น styles ซึ่งมีประสิทธิภาพดีกว่าบนเว็บ
    <View style={styles.iconContainer}>
      {/* แยกการแสดงผลระหว่างเว็บและมือถือ */}
      {Platform.OS === 'web' ? (
        // สำหรับเว็บ: ไม่ใช้ tintColor เพราะมีปัญหาบนเว็บ
        <Image
          source={icon}
          resizeMode="contain"
          // ใช้ opacity แทน tintColor บนเว็บ
          style={[
            styles.iconImage,
            { opacity: focused ? 1 : 0.7 }
          ]}
        />
      ) : (
        // สำหรับมือถือ: ใช้ tintColor ตามปกติ
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          style={styles.iconImage}
        />
      )}
    </View>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 }, // ขนาดตัวอักษรของ Tab
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 70,
          paddingTop: 5,
        },
        // เพิ่ม transition properties เฉพาะบนเว็บช่วยให้การเปลี่ยนแท็บราบรื่น
        tabBarItemStyle: Platform.OS === 'web' ? { 
          transitionProperty: 'color',
          transitionDuration: '150ms'
        } : undefined,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.setting}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  )
}

// สร้าง StyleSheet แทนการใช้ className เพื่อประสิทธิภาพที่ดีขึ้นบนเว็บ
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3, // ใช้ margin แทน gap ซึ่งมีปัญหาบนเว็บบางครั้ง
  },
  iconImage: {
    width: 24,
    height: 24,
  }
});

import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

import { icons } from "../constants";

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}: any) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium mb-4">{title}</Text>

            <View className="w-full h-16 px-4 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
                <TextInput
                    // แก้ไขส่วนนี้: เปลี่ยน bg-white-200 เป็น bg-transparent และเพิ่ม text-white
                    className="w-full bg-transparent rounded-xl min-h-[62px] flex flex-row justify-center items-center text-white mt-5"
                    // เพิ่ม style เพื่อกำหนดสีข้อความชัดเจน
                    style={styles.input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

// เพิ่ม StyleSheet เพื่อกำหนดสีข้อความให้ชัดเจน
const styles = StyleSheet.create({
    input: {
        color: '#FFFFFF', // กำหนดสีข้อความเป็นสีขาว
    }
});

export default FormField;

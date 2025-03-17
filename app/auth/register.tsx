import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { images } from '@/constants'
import Button from '@/components/Button'
import {  router } from "expo-router";
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
export default function register() {
  return (
    <SafeAreaView className="bg-gray-900 h-full px-4 my-6">
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className='h-full'>
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to AuraShop
          </Text>

          <FormField
            title="Username"
            value={null}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={null}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={null}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Register"
            handlePress={() => {}}
            containerStyles="mt-7"
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Button title="Register" onPress={() => router.replace('/auth/login')} />
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
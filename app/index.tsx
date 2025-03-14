// นำเข้า React สำหรับการสร้าง Component
import React from 'react'
// นำเข้า Redirect จาก expo-router สำหรับนำทางระหว่างหน้า
import { Redirect } from 'expo-router'
// นำเข้า SafeAreaView เพื่อรองรับพื้นที่ปลอดภัยบนอุปกรณ์ที่มีรอยบาก (notch)
import { SafeAreaView } from 'react-native-safe-area-context'
// นำเข้า Component พื้นฐานของ React Native
import { Text, View, ScrollView, Image } from 'react-native'
// นำเข้ารูปภาพจากไฟล์ constants
import { images } from '@/constants'
// นำเข้า CustomButton ที่เป็น Component ที่สร้างเอง
import CustomButton from '@/components/CustomButton'
// นำเข้า CustomButton ที่เป็น Component ที่สร้างเอง
import { useRouter } from 'expo-router'


// สร้าง Component หลักของหน้า Welcome
export default function Index() {
const router = useRouter()
   return ( 
   
    <Redirect href={"/(tabs)/home"} />
    
//     // SafeAreaView เป็น container หลักที่ช่วยให้เนื้อหาไม่ทับกับส่วน UI ของระบบ
// //    <SafeAreaView className='bg-gray-900 h-full'>
// //         {/* ScrollView ช่วยให้สามารถเลื่อนดูเนื้อหาได้ถ้าเนื้อหาเกินขนาดหน้าจอ */}
// //         <ScrollView contentContainerStyle={{ height: '100%' }}>
// //             {/* View หลักที่ครอบเนื้อหาทั้งหมด จัดให้อยู่ตรงกลาง */}
// //             <View className='w-full flex justify-center items-center h-full px-4'>
// //                 {/* แสดงโลโก้ของแอปพลิเคชัน */}
// //                 <Image
// //                 source = {images.logo}
// //                 className ='h-[84px]'
// //                 resizeMode ='contain'
// //                 />

// //                 {/* แสดงรูปภาพหลักขนาดใหญ่ (รูปการ์ด) */}
// //                 <Image
// //                 source = {images.cards}
// //                 className ='max-w-[300px] w-full h-[300px]'
// //                 resizeMode ='contain'
// //                 />
                
// //                 {/* ส่วนข้อความหลักและรูปประกอบ */}
// //                 <View className='relative mt-5'>
// //                     {/* ข้อความต้อนรับขนาดใหญ่ */}
// //                     <Text className='text-3xl font-bold text-white text-center'>
// //                         Lorem ipsum dolor sit amet {"\n"} getup. <Text className='text-orange-500'>AuraShop.</Text>
// //                     </Text>
// //                     {/* รูปภาพตกแต่งวางตำแหน่งแบบ absolute */}
// //                     <Image
// //                         source = {images.path}
// //                         className ='w-[120px] h-[25px] absolute -bottom-8 right-0'
// //                         resizeMode ='contain'
// //                     />
// //                 </View>
                
// //                 {/* ข้อความอธิบายเพิ่มเติม */}
// //                 <Text className='text-sm font-light text-gray-200 mt-8 text-center'>
// //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem sunt soluta dolor, incidunt optio.
// //                 </Text>
                
// //                 {/* ปุ่มดำเนินการต่อ */}
// //                 <CustomButton
// //                     title="Continue with Email"
// //                     handlePress={() => { 
// //                         router.push('/auth/login')
                        
// //                     }}
// //                     containerStyles="w-full mt-7"
// //                 />
// //             </View>
// //         </ScrollView>
// //     </SafeAreaView>
   
  )
}

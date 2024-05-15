import { Navbar } from '@/components/Navbar';
import { View, Text, Input, Textarea } from '@tarojs/components';
import { useState } from 'react';

export default () => {
  const [navbarHeight, setNavbarHeight] = useState(60);
  const onNavbarHeightChange = (height: number) => {
    setNavbarHeight(height);
  };
  return (
    <View className='h-screen'>
      <Navbar back title='意见反馈' onHeightChange={onNavbarHeightChange} />
      <View className='pt-[8px] px-[16px] flex flex-col' style={{ height: `calc(100% - ${navbarHeight}px)` }}>
        <View className='flex-1 rounded-[8px] bg-white px-[12px] pt-[16px]'>
          <Text className='text-[16px] text-[#09244B] font-[500] mb-[12px] block'>门诊就医满意度调查</Text>
          <View className='py-[10px] flex items-center'>
            <Text className='text-[15px] text-[#09244B] font-[400]'>姓名</Text>
            <Input placeholderTextColor='#09244B' className='text-[15px] text-right ml-auto' placeholder='请输入姓名' />
          </View>
          <View className='py-[10px] flex items-center'>
            <Text className='text-[15px] text-[#09244B] font-[400]'>联系方式</Text>
            <Input
              placeholderTextColor='#09244B'
              className='text-[15px] text-right ml-auto'
              placeholder='请输入联系方式'
            />
          </View>
          <View className='w-full border-[1px] border-solid border-[#EBECEE] rounded-[8px] mt-[10px] p-[10px]'>
            <Textarea
              placeholderStyle='color: #6B7C93'
              className='w-full text-[15px] font-[400] box-border min-h-[250px]'
              placeholder='请输入您宝贵的意见'
              maxlength={400}
              showCount={false}
              autoHeight
            />
            <View className='w-full flex justify-end'>
              <Text className='font-[400] text-[15px] text-[#6B7C93]'>0/400</Text>
            </View>
          </View>
        </View>
        <View className='w-full h-[44px] rounded-[4px] bg-[#3DBEDF] mt-[8px] mb-[16px] flex items-center justify-center'>
          <Text className='text-[16px] text-white font-[400]'>完成</Text>
        </View>
      </View>
    </View>
  );
};

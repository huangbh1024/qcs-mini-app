import { Navbar } from '@/components/Navbar';
import { View, Text, ScrollView, Radio } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import { useState } from 'react';

export default () => {
  const [navbarHeight, setNavbarHeight] = useState(60);
  const onNavbarHeightChange = (height: number) => {
    setNavbarHeight(height);
  };

  const questions = Array.from({ length: 7 }).map(() => ({
    title: '医院环境',
    answers: [
      { label: '满意', value: 1 },
      { label: '比较满意', value: 2 },
      { label: '不满意', value: 3 },
    ],
  }));
  return (
    <View className='h-screen'>
      <Navbar back title='满意度调查' onHeightChange={onNavbarHeightChange} />
      <View className='pt-[8px] px-[16px] flex flex-col' style={{ height: `calc(100% - ${navbarHeight}px)` }}>
        <ScrollView
          scrollY
          showScrollbar={false}
          enhanced
          enableFlex
          className='rounded-[8px] bg-white px-[12px] py-[16px] box-border'
          style={{ height: `calc(100% - ${pxTransform(68)})` }}
        >
          <Text className='text-[18px] text-[#09244B] font-[500]'>门诊就医满意度调查</Text>
          {questions.map((item, index) => (
            <View key={index} className='mt-[20px] flex flex-col'>
              <Text className='text-[15px] font-[400] text-[#09244B]'>{`${index + 1}、${item.title}`}</Text>
              {item.answers.map(answer => (
                <View key={answer.value} className='mt-[8px] flex items-center'>
                  <Radio style='transform: scale(0.65)' />
                  <Text className='text-[#6B7C93] text-[15px] font-[400]'>{answer.label}</Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
        <View className='h-[44px] w-full bg-[#3DBEDF] rounded-[4px] flex items-center justify-center mt-[8px] mb-[16px]'>
          <Text className='text-[16px] text-white font-[400]'>提交</Text>
        </View>
      </View>
    </View>
  );
};

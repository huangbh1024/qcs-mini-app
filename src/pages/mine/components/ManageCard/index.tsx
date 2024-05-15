import { View, Image, Text } from '@tarojs/components';
import documentIcon from '@/assets/icons/document.png';
import folderIcon from '@/assets/icons/folder.png';
import healthyIcon from '@/assets/icons/healthy.png';
import { navigateTo } from '@tarojs/taro';

export const ManageCard = () => {
  const routeTo = (page: 'appointmentRecord' | 'patientManagement' | 'medicalRecord') => {
    const url = `/pages/${page}/index`;
    navigateTo({ url });
  };
  return (
    <View className='bg-white h-[107px] rounded-[8px] mt-[12px] flex'>
      <View className='w-[calc(100%/3)] h-full flex items-center justify-center flex-col'>
        <Image src={folderIcon} className='w-[54px] h-[54px]' onClick={() => routeTo('patientManagement')} />
        <Text className='mt-[2px] text-[15px] text-[#09244B] font-[400]'>就诊人管理</Text>
      </View>
      <View className='w-[calc(100%/3)] h-full flex items-center justify-center flex-col'>
        <Image src={documentIcon} className='w-[54px] h-[54px]' onClick={() => routeTo('appointmentRecord')} />
        <Text className='mt-[2px] text-[15px] text-[#09244B] font-[400]'>预约记录</Text>
      </View>
      <View className='w-[calc(100%/3)] h-full flex items-center justify-center flex-col'>
        <Image src={healthyIcon} className='w-[54px] h-[54px]' onClick={() => routeTo('medicalRecord')} />
        <Text className='mt-[2px] text-[15px] text-[#09244B] font-[400]'>就诊记录</Text>
      </View>
    </View>
  );
};

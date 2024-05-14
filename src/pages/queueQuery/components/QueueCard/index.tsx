import { View, Text } from '@tarojs/components';

export const QueueCard = () => {
  return (
    <View className='w-full h-[199px] px-[12px] py-[10px] bg-white rounded-[8px] mt-[16px] flex flex-col'>
      <View className='w-full font-medium text-[16px]	flex justify-between items-center'>
        <View className='flex items-center'>
          <View className='w-[4px] h-[10px] bg-[#3dbedf] rouned-[1px] mr-[6px]'></View>
          <Text className='text-[#09244b] before:w-[4px]'>序号</Text>
        </View>
        <Text className='text-[#3dbedf]'>23244</Text>
      </View>
      <View className='mt-[12px] flex-1'>
        <View className='w-full h-[50%] border-0 border-b-[1px] border-solid border-[#EBECEE] flex items-center justify-between font-normal text-[15px]'>
          <Text className='text-[#6B7C93]'>科室</Text>
          <Text className='text-[#09244B]'>普通内科</Text>
        </View>
        <View className='w-full h-[50%] flex items-center justify-between'>
          <Text className='text-[#6B7C93]'>医生</Text>
          <Text className='text-[#09244B]'>刘医生</Text>
        </View>
      </View>
      <View className='w-full h-[36px] bg-[#3DBEDF]/10 rounded-[4px] mt-[12px] flex justify-center items-center text-[16px] font-medium'>
        <Text className='text-[#09244b] mr-[10px]'>前方等待</Text>
        <Text className='text-[#ff3a2e]'>12人</Text>
      </View>
    </View>
  );
};

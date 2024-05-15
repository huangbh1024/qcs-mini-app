import { View, Image, Text } from '@tarojs/components';
import avatarImg from '@/assets/images/avatar.jpg';

export const UserInfo = () => {
  return (
    <View className='flex items-center'>
      <Image src={avatarImg} className='w-[60px] h-[60px] rounded-[50%]' />
      <View className='flex flex-col justify-center ml-[20px]'>
        <Text className='text-[#333333] text-[18px] font-[500]'>肖俊鑫</Text>
        <Text className='text-[#A0A7BA] text-[14px] font-[400] mt-[4px]'>ID:22369874</Text>
      </View>
    </View>
  );
};

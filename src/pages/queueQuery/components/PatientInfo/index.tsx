import { View, Image, Text } from '@tarojs/components';
import emptyAvatarIcon from '@/assets/icons/emptyAvatar.png';
import arrowRightWhiteIcon from '@/assets/icons/arrowRightWhite.png';

export const PatientInfo = () => {
  return (
    <View className='w-full h-[60px] bg-[#3dbedf] rounded-[8px] px-[8px] flex items-center'>
      <Image src={emptyAvatarIcon} className='w-[36px] h-[36px]' />
      <Text className='ml-[8px] font-medium text-[17px] text-white'>肖浚鑫</Text>
      <Image src={arrowRightWhiteIcon} className='ml-auto w-[18px] h-[18px]' />
    </View>
  );
};

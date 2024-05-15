import { InformationCard } from '@/components/InformationCard';
import { Navbar } from '@/components/Navbar';
import { View } from '@tarojs/components';

export default () => {
  return (
    <>
      <Navbar title='我的收藏' back />
      <View className='mt-[8px] px-[16px]'>
        {Array.from({ length: 5 }).map((_, index) => (
          <InformationCard key={index} needAction className='mb-[8px]' />
        ))}
      </View>
    </>
  );
};

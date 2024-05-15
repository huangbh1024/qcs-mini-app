import { Navbar } from '@/components/Navbar';
import { Text, View } from '@tarojs/components';
import { useState } from 'react';
import { UserInfo } from './components/UserInfo';
import { ManageCard } from './components/ManageCard';
import { ActionCard } from './components/ActionCard';

export default () => {
  const [navbarHeight, setNavbarHeight] = useState(60);
  const onNavbarHeightChange = (height: number) => {
    setNavbarHeight(height);
  };

  return (
    <View className='px-[16px] h-screen'>
      <Navbar title='我的' center onHeightChange={onNavbarHeightChange} />
      <View className='pt-[8px] flex flex-col' style={{ height: `calc(100% - ${navbarHeight}px)` }}>
        <UserInfo />
        <ManageCard />
        <ActionCard />
        <View className='bg-white h-[48px] rounded-[8px] mt-[8px] mb-[5px] flex items-center justify-center'>
          <Text className='text-[#3DBEDF] text-[16px] font-[500]'>退出登录</Text>
        </View>
      </View>
    </View>
  );
};

import { View, Image, Text } from '@tarojs/components';
import successIcon from '@/assets/icons/successStatu.png';
import failIcon from '@/assets/icons/failStatus.png';
import classNames from 'classnames';
import { getCurrentInstance, switchTab, navigateTo } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';

export default () => {
  const instance = getCurrentInstance();
  const onClickBackHome = () => {
    // 回到首页
    switchTab({ url: '/pages/index/index' });
  };
  const onClickQueueQuery = () => {
    // 跳转队列查询
    navigateTo({
      url: '/pages/queueQuery/index',
    });
  };
  const [type, setType] = useState('fail');
  useEffect(() => {
    setType((instance.router?.params?.type as string) ?? 'fail');
  }, [instance.router?.params?.type]);
  return (
    <>
      <Navbar title='在线签到' back />
      <View className='mt-[30px] px-[16px] flex flex-col items-center'>
        <Image src={type === 'success' ? successIcon : failIcon} className='w-[60px] h-[60px] mb-[8px]' />
        <Text className='text-[#09244B] font-[500] text-[20px] mb-[10px]'>
          {type === 'success' ? '预约成功' : '签到失败'}
        </Text>
        <Text className='text-[#6B7C93] font-[400] text-[15px] mb-[20px]'>
          {type === 'success' ? '请耐心等待医生叫号' : '请重新签到'}
        </Text>
        <View className='h-[36px] w-full font-[400] text-[16px] flex items-center justify-between'>
          {type === 'success' && (
            <View
              className='h-full w-[calc(50%-5px)] rounded-[4px] border-[1px] border-solid border-transparent text-white flex items-center justify-center bg-[#3DBEDF]'
              onClick={onClickQueueQuery}
            >
              队列查询
            </View>
          )}
          <View
            className={classNames([
              'h-full rounded-[4px] border-[1px] border-solid border-[#3DBEDF] text-[#3DBEDF] flex items-center justify-center bg-white',
              type === 'success' ? 'w-[calc(50%-5px)]' : 'w-full',
            ])}
            onClick={onClickBackHome}
          >
            返回首页
          </View>
        </View>
      </View>
    </>
  );
};

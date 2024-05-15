import startIcon from '@/assets/icons/start.png';
import arrowRightIcon from '@/assets/icons/arrowRight.png';
import smileIcon from '@/assets/icons/smile.png';
import messageIcon from '@/assets/icons/message.png';
import { View, Image, Text } from '@tarojs/components';
import classNames from 'classnames';
import { navigateTo } from '@tarojs/taro';

export const ActionCard = () => {
  const actions = [
    { text: '我的收藏', icon: startIcon, page: 'favoritesList' },
    { text: '满意度调查', icon: smileIcon, page: 'satisfactionSurvey' },
    { text: '意见反馈', icon: messageIcon, page: 'feedback' },
  ];
  return (
    <View className='bg-white h-[368px] rounded-[8px] mt-[8px] flex-1 py-[10px] px-[8px]'>
      {actions.map((item, index) => (
        <View key={index} className='w-full flex items-center'>
          <Image src={item.icon} className='w-[20px] h-[20px] mr-[8px]' />
          <View
            className={classNames([
              'flex-1 border-0 border-solid border-[#EBECEE] py-[16px] flex items-center justify-between',
              index !== actions.length - 1 && 'border-b-[1px]',
            ])}
            onClick={() => navigateTo({ url: `/pages/${item.page}/index` })}
          >
            <Text className='text-[15px] text-[#09244B] font-[400]'>{item.text}</Text>
            <Image src={arrowRightIcon} className='w-[20px] h-[20px]' />
          </View>
        </View>
      ))}
    </View>
  );
};

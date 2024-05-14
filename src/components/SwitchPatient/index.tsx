import { View, Image, Text } from '@tarojs/components';
import { Popup } from '@nutui/nutui-react-taro';
import emptyAvatarIcon from '@/assets/icons/emptyAvatar.png';
import arrowRightWhiteIcon from '@/assets/icons/arrowRightWhite.png';
import { useState } from 'react';
import classNames from 'classnames';

export const SwitchPatient = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [currentSelect, setCurrentSelect] = useState(1);

  const patientList = [
    { id: 1, name: '肖俊鑫' },
    { id: 2, name: '李梓发' },
    { id: 3, name: '赵吾光' },
  ];

  const onChangePaitent = (id: number) => {
    setCurrentSelect(id);
    setVisiblePopup(false);
  };

  return (
    <>
      <View
        className='w-full h-[60px] bg-[#3dbedf] rounded-[8px] px-[8px] flex items-center'
        onClick={() => setVisiblePopup(true)}
      >
        <Image src={emptyAvatarIcon} className='w-[36px] h-[36px]' />
        <Text className='ml-[8px] font-medium text-[17px] text-white'>肖浚鑫</Text>
        <Image src={arrowRightWhiteIcon} className='ml-auto w-[18px] h-[18px]' />
      </View>
      <Popup
        className='px-[16px] py-[20px]'
        visible={visiblePopup}
        onClose={() => setVisiblePopup(false)}
        position='bottom'
      >
        <View className='flex items-center justify-between mb-[28px]'>
          {/* 隐藏，用于让标题居中显示 */}
          <View className='invisible font-[400] text-[16px] text-[#3DBEDF]'>取消</View>
          <Text className='font-[500] text-[18px] text-[#09244B]'>切换就诊人</Text>
          <View className='font-[400] text-[16px] text-[#3DBEDF]' onClick={() => setVisiblePopup(false)}>
            取消
          </View>
        </View>
        <View className='flex flex-col'>
          {patientList.map(item => (
            <View
              key={item.id}
              className={classNames([
                'w-full h-[44px] rounded-[4px] mb-[16px] flex items-center justify-center bg-[#F7F9FA] text-[#09244B]',
                currentSelect === item.id && '!bg-[#3DBEDF] !text-white',
              ])}
              onClick={() => onChangePaitent(item.id)}
            >
              <Text className='font-[500] text-[16px]'>{item.name}</Text>
            </View>
          ))}
        </View>
      </Popup>
    </>
  );
};

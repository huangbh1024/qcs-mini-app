import { Navbar } from '@/components/Navbar';
import { Text, View, Image, Input } from '@tarojs/components';
import userIcon from '@/assets/icons/user.png';
import callIcon from '@/assets/icons/call.png';
import cardIcon from '@/assets/icons/card.png';
import addFailIcon from '@/assets/icons/addFail.png';
import addSuccessIcon from '@/assets/icons/addSuccess.png';
import { Dialog } from '@/components/Dialog';
import { useState } from 'react';

export default () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [userInfo, setUserInfo] = useState({
    idNo: '',
    cardNo: '',
    phone: '',
  });

  const [status, setStatus] = useState<'success' | 'fail'>('fail');
  const [errorTips] = useState('请输入正确信息！');

  const onClickSubmit = () => {
    // 简单做个非空判断
    if (!userInfo.cardNo || !userInfo.phone || !userInfo.idNo) {
      setStatus('fail');
    } else {
      setStatus('success');
    }
    setVisibleDialog(true);
  };
  return (
    <>
      <Navbar back title='添加就诊人' />
      <View className='px-[16px] mt-[8px]'>
        <View className='w-full rounded-[8px] bg-white px-[12px] pt-[16px]'>
          <Text className='text-[18px] text-[#09244B] font-[500] mb-[12px] block'>请填写就诊人信息</Text>
          <View className='py-[16px] border-0 border-b-[1px] border-solid border-[#EBECEE] flex items-center'>
            <Image src={userIcon} className='w-[20px] h-[20px] mr-[8px]' />
            <Input
              placeholderTextColor='#09244B'
              className='text-[15px]'
              placeholder='请输入身份证号'
              value={userInfo.idNo}
              onInput={({ detail }) => setUserInfo({ ...userInfo, idNo: detail.value })}
            />
          </View>
          <View className='py-[16px] border-0 border-b-[1px] border-solid border-[#EBECEE] flex items-center'>
            <Image src={cardIcon} className='w-[20px] h-[20px] mr-[8px]' />
            <Input
              placeholderTextColor='#09244B'
              className='text-[15px]'
              placeholder='请输入就诊卡号'
              value={userInfo.cardNo}
              onInput={({ detail }) => setUserInfo({ ...userInfo, cardNo: detail.value })}
            />
          </View>
          <View className='py-[16px] flex items-center'>
            <Image src={callIcon} className='w-[20px] h-[20px] mr-[8px]' />
            <Input
              placeholderTextColor='#09244B'
              className='text-[15px]'
              placeholder='请输入联系电话'
              value={userInfo.phone}
              onInput={({ detail }) => setUserInfo({ ...userInfo, phone: detail.value })}
            />
          </View>
        </View>
        <View
          className='w-full mt-[8px] bg-[#3DBEDF] rounded-[4px] h-[44px] flex items-center justify-center'
          onClick={onClickSubmit}
        >
          <Text className='text-[16] text-white font-[400]'>完成</Text>
        </View>
      </View>
      <Dialog
        visible={visibleDialog}
        onConfirm={() => setVisibleDialog(false)}
        showCancelBtn={false}
        showTitle={false}
        content={
          <View className='w-full flex flex-col items-center'>
            <Image src={status === 'success' ? addSuccessIcon : addFailIcon} className='w-[60px] h-[60px]' />
            <Text className='text-[16px] text-[#09244B] font-[500] block mt-[9px]'>
              {status === 'success' ? '添加成功' : '添加失败'}
            </Text>
            {status === 'fail' && (
              <Text className='block text-[15px] text-[#6B7C93] font-[400] mt-[20px]'>{errorTips}</Text>
            )}
          </View>
        }
      />
    </>
  );
};

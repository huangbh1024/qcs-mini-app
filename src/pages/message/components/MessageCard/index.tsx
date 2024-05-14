import { Image, Text, View } from '@tarojs/components';
import cancelIcon from '@/assets/icons/cancel.png';
import successIcon from '@/assets/icons/success.png';
import classNames from 'classnames';

interface Props {
  type?: 'fail' | 'success'; // 预约取消/预约成功
  list?: Array<{ title: string; value: string }>;
  date?: string;
}
export const MessageCard = (props: Props) => {
  const { type = 'fail', list = [], date = '' } = props;
  return (
    <View className='mb-[16px]'>
      <View className='mb-[8px] flex items-center justify-center'>
        <Text className='font-[400] text-[14px] text-[#6B7C93]'>{date}</Text>
      </View>
      <View className='w-full bg-white rounded-[8px] px-[10px]'>
        <View className='py-[10px] border-0 border-b-[1px] border-solid border-[#EBECEE] flex items-center'>
          <Image src={type === 'fail' ? cancelIcon : successIcon} className='w-[16px] h-[16px] mr-[6px]' />
          <Text
            className={classNames(['text-[16px] font-[500]', type === 'fail' ? 'text-[#FF5656]' : 'text-[#33D853]'])}
          >
            {type === 'fail' ? '预约取消' : '预约成功'}
          </Text>
        </View>
        <View className='pb-[4px]'>
          <View className='py-[8px]'>
            <Text className='text-[#09244B] font-[400] text-[15px]'>
              {type === 'fail'
                ? '肖俊鑫，你好，你的预约已取消！'
                : '具体就诊信息如下，你可在首页进行在线签到、取消预约等操作！'}
            </Text>
          </View>
          {list.map((item, index) => (
            <View key={index} className='py-[8px] flex items-center'>
              <View className='w-[25%]'>
                <Text className='text-[#6B7C93] text-[15px] font-[400]'>{item.title}</Text>
              </View>
              <View className='flex-1'>
                <Text className='text-[#09244B] text-[15px] font-[400]'>{item.value}</Text>
              </View>
            </View>
          ))}
          {/* <View className='py-[8px] flex items-center'>
          <View className='w-[25%]'>
            <Text className='text-[#6B7C93] text-[15px] font-[400]'>科室</Text>
          </View>
          <View className='flex-1'>
            <Text className='text-[#09244B] text-[15px] font-[400]'>c</Text>
          </View>
        </View>
        <View className='py-[8px] flex items-center'>
          <View className='w-[25%]'>
            <Text className='text-[#6B7C93] text-[15px] font-[400]'>医生</Text>
          </View>
          <View className='flex-1'>
            <Text className='text-[#09244B] text-[15px] font-[400]'>刘医生</Text>
          </View>
        </View>
        <View className='py-[8px] flex items-center'>
          <View className='w-[25%]'>
            <Text className='text-[#6B7C93] text-[15px] font-[400]'>就诊日期</Text>
          </View>
          <View className='flex-1'>
            <Text className='text-[#09244B] text-[15px] font-[400]'>2024-02-11 上午</Text>
          </View>
        </View> */}
        </View>
      </View>
    </View>
  );
};

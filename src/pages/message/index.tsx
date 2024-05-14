import { Navbar } from '@/components/Navbar';
import { View } from '@tarojs/components';
import { MessageCard } from './components/MessageCard';

const Message = () => {
  return (
    <View className='px-[16px]'>
      <Navbar title='消息' center />
      <View className='mt-[12px]'>
        <MessageCard
          type='fail'
          date='2024-02-11 14:09:22'
          list={[
            { title: '科室', value: '科室' },
            { title: '医生', value: '刘医生' },
            { title: '就诊日期', value: '2024-02-11 上午' },
          ]}
        />
        <MessageCard
          type='success'
          date='2024-02-11 14:09:22'
          list={[
            { title: '就诊人', value: '晓君姐' },
            { title: '科室', value: '科室' },
            { title: '医生', value: '刘医生' },
            { title: '科室位置', value: '门诊一号楼3楼' },
            { title: '就诊日期', value: '2024-02-11  上午  第23号' },
          ]}
        />
      </View>
    </View>
  );
};

export default Message;

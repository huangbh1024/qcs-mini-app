import { View } from '@tarojs/components';
import { Navbar } from '@/components/Navbar';
import { PatientInfo } from './components/PatientInfo';
import { QueueCard } from './components/QueueCard';

export default () => {
  return (
    <View>
      <Navbar title='队列查询' back />
      <View className='mt-[8px] px-[16px] text-left not-italic normal-case'>
        {/* 个人信息 */}
        <PatientInfo />
        {/* 队列卡片 */}
        {Array.from({ length: 2 }).map((_, index) => (
          <QueueCard key={index} />
        ))}
      </View>
    </View>
  );
};

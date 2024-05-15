import { ExhibitCard } from '@/components/ExhibitCard';
import { Navbar } from '@/components/Navbar';
import { SwitchPatient } from '@/components/SwitchPatient';
import { View } from '@tarojs/components';

export default () => {
  const mockData = [
    { id: 1, deptName: '普通内科', doctorName: '刘医生', date: '2024-02-11 上午', index: '第29号' },
    { id: 2, deptName: '普通内科', doctorName: '刘医生', date: '2024-02-11 上午', index: '第29号' },
  ];
  return (
    <View>
      <Navbar back title='就诊记录' />
      <View className='mt-[8px] px-[16px]'>
        <SwitchPatient />
        {mockData.map(item => (
          <ExhibitCard
            key={item.id}
            title={item.date}
            list={[
              { title: '科室', value: item.deptName },
              { title: '医生', value: item.doctorName },
              { title: '号序', value: item.index },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

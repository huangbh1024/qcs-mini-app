import { View, Text } from '@tarojs/components';
import { Navbar } from '@/components/Navbar';
import { SwitchPatient } from '@/components/SwitchPatient';
import { ExhibitCard } from '@/components/ExhibitCard';

export default () => {
  return (
    <View>
      <Navbar title='报告查询' back />
      <View className='mt-[8px] px-[16px] text-left not-italic normal-case'>
        {/* 个人信息 */}
        <SwitchPatient />
        {/* 队列卡片 */}
        {Array.from({ length: 2 }).map((_, index) => (
          <ExhibitCard
            key={index}
            title='序号'
            titleAction={<Text className='text-[#3dbedf]'>02308080283</Text>}
            bottomAction={
              <View className='w-full h-[36px] bg-[#3DBEDF] rounded-[4px] mt-[12px] flex justify-center items-center text-[16px] font-medium'>
                <Text className='text-[#FFFFFF]'>查看明细</Text>
              </View>
            }
            list={[
              { title: '项目', value: 'xxxx' },
              { title: '流水号', value: '092934' },
              { title: '科室', value: '心外科' },
              { title: '医生', value: '刘医生' },
              { title: '申请时间', value: '2024-02-11 15:03:22' },
              { title: '报告时间', value: '2024-02-11 15:03:22' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

import { View, Text } from '@tarojs/components';
import { Navbar } from '@/components/Navbar';
import { SwitchPatient } from '@/components/SwitchPatient';
import { ExhibitCard } from '@/components/ExhibitCard';

export default () => {
  return (
    <View>
      <Navbar title='队列查询' back />
      <View className='mt-[8px] px-[16px] text-left not-italic normal-case'>
        {/* 个人信息 */}
        <SwitchPatient />
        {/* 队列卡片 */}
        {Array.from({ length: 2 }).map((_, index) => (
          <ExhibitCard
            key={index}
            title='序号'
            titleAction={<Text className='text-[#3dbedf]'>23244</Text>}
            bottomAction={
              <View className='w-full h-[36px] bg-[#3DBEDF]/10 rounded-[4px] mt-[4px] flex justify-center items-center text-[16px] font-medium'>
                <Text className='text-[#09244b] mr-[10px]'>前方等待</Text>
                <Text className='text-[#ff3a2e]'>12人</Text>
              </View>
            }
            list={[
              { title: '科室', value: '普通内科' },
              { title: '医生', value: '刘医生' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

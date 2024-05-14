import { View, Text } from '@tarojs/components';
import { Navbar } from '@/components/Navbar';
import { SwitchPatient } from '@/components/SwitchPatient';
import { ExhibitCard } from '@/components/ExhibitCard';
import classNames from 'classnames';

export default () => {
  const mockData = [
    { id: 1, deptName: '普通内科', doctorName: '刘医生', date: '2024-02-11 上午', canCheck: true },
    { id: 2, deptName: '普通内科', doctorName: '刘医生', date: '2024-02-11 上午', canCheck: false },
  ];
  return (
    <View>
      <Navbar title='在线签到' back />
      <View className='mt-[8px] px-[16px] text-left not-italic normal-case'>
        {/* 个人信息 */}
        <SwitchPatient />
        {/* 队列卡片 */}
        {mockData.map(item => (
          <ExhibitCard
            key={item.id}
            title='预约信息'
            bottomAction={
              <View
                className={classNames([
                  'w-full h-[36px] rounded-[4px] flex justify-center items-center text-[16px] font-medium',
                  item.canCheck ? 'bg-[#3DBEDF]' : 'bg-[#3DBEDF]/10',
                ])}
              >
                <Text className={classNames([item.canCheck ? 'text-[#FFFFFF]' : 'text-[#3DBEDF]'])}>
                  {item.canCheck ? '立即签到' : '未到开放签到时间'}
                </Text>
              </View>
            }
            list={[
              { title: '科室', value: item.deptName },
              { title: '医生', value: item.doctorName },
              { title: '就诊日期', value: item.date },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

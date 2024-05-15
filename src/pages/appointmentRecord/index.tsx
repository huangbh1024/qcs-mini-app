import { ExhibitCard } from '@/components/ExhibitCard';
import { Navbar } from '@/components/Navbar';
import { SwitchPatient } from '@/components/SwitchPatient';
import { Text, View } from '@tarojs/components';

export default () => {
  const mockData = [
    {
      id: 1,
      deptName: '普通内科',
      doctorName: '刘医生',
      date: '2024-02-11 上午',
      index: '第29号',
      name: '肖俊鑫',
      status: 1,
    },
    {
      id: 2,
      deptName: '普通内科',
      doctorName: '刘医生',
      date: '2024-02-11 上午',
      index: '第29号',
      name: '肖俊鑫',
      status: 2,
    },
    {
      id: 3,
      deptName: '普通内科',
      doctorName: '刘医生',
      date: '2024-02-11 上午',
      index: '第29号',
      name: '肖俊鑫',
      status: 3,
    },
  ];
  const statusTextMap = { 1: '待就诊', 2: '已取消', 3: '已超时' };
  const statusStyleMap = {
    1: { background: '#3DBEDF', color: '#fff' },
    2: { background: '#FF4D4D', color: '#fff' },
    3: { background: '#C6CBD3', color: '#fff' },
  };
  return (
    <View>
      <Navbar back title='预约记录' />
      <View className='mt-[8px] px-[16px]'>
        <SwitchPatient />
        {mockData.map(item => (
          <ExhibitCard
            key={item.id}
            title={item.date}
            titleAction={
              <View
                className='absolute top-[-10px] right-[-12px] w-[68px] h-[24px] flex items-center justify-center rounded-tr-[8px] rounded-bl-[8px]'
                style={{
                  background: statusStyleMap[item.status].background,
                }}
              >
                <Text
                  className='text-[12px] font-[400]'
                  style={{
                    color: statusStyleMap[item.status].color,
                  }}
                >
                  {statusTextMap[item.status]}
                </Text>
              </View>
            }
            list={[
              { title: '科室', value: item.deptName },
              { title: '医生', value: item.doctorName },
              { title: '就诊人', value: item.name },
              { title: '号序', value: item.index },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

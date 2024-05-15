import { ExhibitCard } from '@/components/ExhibitCard';
import { Navbar } from '@/components/Navbar';
import { Text, View, Radio } from '@tarojs/components';

export default () => {
  const mockData = [
    { id: 1, name: '肖俊鑫', phone: '133****2424', idNum: '23235235235235', cardNo: '3523523525', isDefault: true },
    { id: 2, name: '肖俊鑫', phone: '133****2424', idNum: '23235235235235', cardNo: '3523523525' },
  ];

  return (
    <View>
      <Navbar back title='就诊人管理' />
      <View className='mt-[8px] px-[16px]'>
        {mockData.map(item => (
          <ExhibitCard
            key={item.id}
            title={item.name}
            titileWithBlock={false}
            titleAction={
              item.isDefault ? (
                <View className='absolute top-[-10px] right-[-12px] w-[68px] h-[24px] flex items-center justify-center rounded-tr-[8px] rounded-bl-[8px] bg-[#3DBEDF]'>
                  <Text className='text-[12px] font-[400] text-white'>默认</Text>
                </View>
              ) : null
            }
            bottomAction={
              <View className='w-full flex items-center justify-between'>
                <View className='flex items-center'>
                  <Radio checked={item.isDefault} style='transform: scale(0.65)' color='#3DBEDF' />
                  <Text className='font-[400] text-[15px] text-[#09244B]'>
                    {item.isDefault ? '默认就诊人' : '设为默认'}
                  </Text>
                </View>
                <View className='flex items-center justify-center rounded-[30px] px-[24px] py-[4px] bg-[#FF4D4D]'>
                  <Text className='text-[15px] text-white font-[400]'>解绑</Text>
                </View>
              </View>
            }
            list={[
              { title: '电话', value: item.phone },
              { title: '身份证', value: item.idNum },
              { title: '就诊卡号', value: item.cardNo },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

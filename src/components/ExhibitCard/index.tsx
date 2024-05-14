import { View, Text } from '@tarojs/components';
import { ReactNode } from 'react';

export interface Props {
  title: string;
  titileWithBlock?: boolean;
  titleAction?: ReactNode;
  bottomAction?: ReactNode;
  list?: Array<{ title: string; value: string }>;
}
export const ExhibitCard = (props: Props) => {
  const { title, titileWithBlock = true, titleAction, bottomAction, list = [] } = props;
  return (
    <View className='w-full px-[12px] py-[10px] bg-white rounded-[8px] mt-[16px] flex flex-col'>
      <View className='w-full font-medium text-[16px] flex justify-between items-center relative'>
        <View className='flex items-center'>
          {titileWithBlock && <View className='w-[4px] h-[10px] bg-[#3dbedf] rouned-[1px] mr-[6px]'></View>}
          <Text className='text-[#09244b] before:w-[4px]'>{title}</Text>
        </View>
        {titleAction}
      </View>
      <View className='mt-[12px] flex-1'>
        {list.map((item, index) => (
          <View
            key={index}
            className='w-full h-[50%] border-0 border-b-[1px] border-solid border-[#EBECEE] flex items-center justify-between font-normal text-[15px] py-[16px] last:border-b-0'
          >
            <Text className='text-[#6B7C93]'>{item.title}</Text>
            <Text className='text-[#09244B]'>{item.value}</Text>
          </View>
        ))}
      </View>
      {bottomAction}
    </View>
  );
};

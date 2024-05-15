import { Dialog as NutDialog } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { ReactNode } from 'react';

export interface Props {
  visible: boolean;
  content?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
}
export const Dialog = (props: Props) => {
  const { visible, onCancel = () => {}, onConfirm = () => {}, content = '' } = props;
  return (
    <NutDialog
      title='提示'
      visible={visible}
      footer={
        <View className='w-full flex items-center justify-between text-[16px] font-[400]'>
          <View
            className='h-[36px] bg-[#EFF1F3] rounded-[4px] w-[calc(50%-5px)] flex items-center justify-center'
            onClick={onCancel}
          >
            <Text className='text-[#6B7C93]'>取消</Text>
          </View>
          <View
            className='h-[36px] bg-[#3DBEDF] rounded-[4px] w-[calc(50%-5px)] flex items-center justify-center'
            onClick={onConfirm}
          >
            <Text className='text-white'>确认</Text>
          </View>
        </View>
      }
    >
      {content}
    </NutDialog>
  );
};

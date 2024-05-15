import { Dialog as NutDialog } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface Props {
  visible: boolean;
  content?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  showCancelBtn?: boolean;
  showTitle?: boolean;
}
export const Dialog = (props: Props) => {
  const {
    visible,
    onCancel = () => {},
    onConfirm = () => {},
    content = '',
    showCancelBtn = true,
    showTitle = true,
  } = props;
  const title = showTitle ? '提示' : '';
  return (
    <NutDialog
      title={title}
      visible={visible}
      footer={
        <View className='w-full flex items-center justify-between text-[16px] font-[400]'>
          {showCancelBtn && (
            <View
              className='h-[36px] bg-[#EFF1F3] rounded-[4px] w-[calc(50%-5px)] flex items-center justify-center'
              onClick={onCancel}
            >
              <Text className='text-[#6B7C93]'>取消</Text>
            </View>
          )}
          <View
            className={classNames([
              'h-[36px] bg-[#3DBEDF] rounded-[4px] flex items-center justify-center',
              showCancelBtn ? 'w-[calc(50%-5px)]' : 'w-full',
            ])}
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

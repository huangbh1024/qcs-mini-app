import { View, Text, Image, ScrollView } from '@tarojs/components';
import informationPic from '@/assets/images/informationPic.png';
import viewIcon from '@/assets/icons/view.png';
import classnames from 'classnames';
import { Swipe, SwipeProps } from '@nutui/nutui-react-taro';
import styles from './index.module.scss';

export interface Props extends SwipeProps {
  needAction?: boolean;
}

export const InformationCard = (props: Props) => {
  const { className = '', needAction = false, ...rest } = props;

  return (
    <Swipe
      className={classnames(['rounded-[8px]', className])}
      rightAction={
        needAction && (
          <View className='h-full w-[72px] bg-[#FF4D4D] flex items-center justify-center'>
            <Text className='text-white text-[14px] font-[400]'>取消收藏</Text>
          </View>
        )
      }
      {...rest}
    >
      <View className={styles['information-card']}>
        <Image src={informationPic} className={styles['main-picture']} />
        <View className={styles['main-info-wrapper']}>
          <Text className={styles['title']}>健康资讯</Text>
          <ScrollView className={styles['keyword']} enableFlex scrollX showScrollbar={false} enhanced>
            {Array.from({ length: 6 }).map((_, index) => (
              <View className={styles['keyword-item']} key={index}>
                <Text>关键词{index + 1}</Text>
              </View>
            ))}
          </ScrollView>
          <View className={styles['date-and-view']}>
            <Text className={styles['date']}>2024-03-09</Text>
            <View className={styles['view']}>
              <Image src={viewIcon} />
              <Text>103</Text>
            </View>
          </View>
        </View>
      </View>
    </Swipe>
  );
};

import { useState, useEffect, ReactNode } from 'react';
import { getSystemInfoSync, getMenuButtonBoundingClientRect, navigateBack } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import backIcon from '@/assets/icons/back.png';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface Props {
  title?: ReactNode;
  position?: 'static' | 'fixed';
  back?: boolean;
  center?: boolean;
}

export const Navbar = (props: Props) => {
  const { title = '', position = 'static', back = false, center = false } = props;
  const [statusBarHeight, setStatusBarHeight] = useState(20);
  const [navBarHeight, setNavBarHeight] = useState(40);
  const initStatusBarHeight = () => {
    const systemInfo = getSystemInfoSync();
    setStatusBarHeight(systemInfo.statusBarHeight ? systemInfo.statusBarHeight : 20); // 单位是px
    if (process.env.TARO_ENV === 'weapp') {
      // 微信小程序 获取胶囊的信息
      const menuButtonInfo = getMenuButtonBoundingClientRect();
      // 实际标题的高度 = 胶囊高度 + 胶囊pading*2
      setNavBarHeight((menuButtonInfo.top - (systemInfo.statusBarHeight ?? 20)) * 2 + menuButtonInfo.height);
    }
  };

  useEffect(() => {
    initStatusBarHeight();
  }, []);

  // 点击返回按钮
  const handleClickBack = () => {
    navigateBack();
  };
  return (
    <>
      <View className={styles['navbar']} style={{ position }}>
        {/* 占位 */}
        <View style={{ height: statusBarHeight + 'px' }}></View>
        {/* 实际标题栏 */}
        <View
          className={classNames([styles['navbar-title'], !back && center && '!justify-center'])}
          style={{ height: navBarHeight + 'px' }}
        >
          {back && <Image src={backIcon} className={styles['back-icon']} onClick={handleClickBack} />}
          <View>{title}</View>
          {/* 为了让title居中显示 */}
          {back && <View className={styles['back-icon']}></View>}
        </View>
      </View>
      {/* 垫片 (解决 navbar fixed后，下面的元素顶到最上面的问题) */}
      {position === 'fixed' && <View style={{ height: statusBarHeight + navBarHeight + 'px' }}></View>}
    </>
  );
};

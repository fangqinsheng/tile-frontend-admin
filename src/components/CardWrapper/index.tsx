import { dom2canvas } from '@/utils/tool';
import { useFullscreen } from 'ahooks';
import { Spin } from 'antd';
import classNames from 'classnames';
import React, {
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './index.less';

interface CardWrapperInter {
  title?: string | React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  myRef?: React.RefObject<any>;
  fullScreenAble?: boolean; // 是否可全屏
  foldable?: boolean; // 是否可折叠
  isFold?: boolean; // 是否折叠
  noPadding?: boolean; // 没有padding
  shadow?: boolean; // 是否有阴影
  downloadAble?: boolean; // 是否可下载
  noTitleTag?: boolean; // 不要标题tag
  id?: string;
  fixed?: boolean; // 是否固定标题
  size?: 'normal' | 'small'; // 设置容器大小
  titleSize?: 'large' | 'middle' | 'small'; // 设置标题大小
  bodyStyle?: React.CSSProperties; // CardWrapper body 样式
  bodyClass?: string; // CardWrapper body 类
  headStyle?: React.CSSProperties; // CardWrapper head 样式
  extraStyle?: React.CSSProperties; // CardWrapper extra 样式
  headClass?: string; // CardWrapper head 类
  fullChangeCallBack?: (isFullscreen: boolean) => void;
  border?: boolean; // 卡片四周边框
  foldableChange?: (isFold: boolean) => void; // 折叠回调
  // 为了兼容旧版预留的旧配置项（用于将标题、容器大小设置为small）
  small?: boolean;
  wrapperRef?: any;
}
const CardWrapper: React.FC<CardWrapperInter> = (props) => {
  const {
    className = '',
    children,
    title,
    extra,
    loading = false,
    foldable,
    fullScreenAble,
    downloadAble,
    isFold,
    myRef,
    shadow,
    fixed,
    noPadding,
    noTitleTag,
    titleSize = 'large',
    size = 'normal',
    style,
    bodyStyle,
    bodyClass = '',
    fullChangeCallBack,
    foldableChange,
    small,
    headStyle,
    extraStyle,
    headClass = '',
    border = false,
    id,
    wrapperRef,
    ...rest
  } = props;
  const [folded, setFold] = useState(isFold);
  const fixedClass = fixed ? 'cardContainerFixed' : '';
  const cardSizeClass = size === 'small' || small ? 'cardContainerSmall' : '';
  const cardTitleClass =
    // eslint-disable-next-line no-nested-ternary
    titleSize === 'small' || small
      ? 'cardTitleSmall'
      : titleSize === 'middle'
      ? 'cardTitleMiddle'
      : '';

  const ref: any = useRef();
  const [isFullscreen, { enterFullscreen, exitFullscreen }] =
    useFullscreen(ref);

  useEffect(() => {
    setFold(isFold);
  }, [isFold]);

  useEffect(() => {
    if (!fullChangeCallBack) {
      return;
    }
    fullChangeCallBack(isFullscreen);
  }, [fullChangeCallBack, isFullscreen]);

  useImperativeHandle(myRef, () => ({
    foldHandle: (stauts: boolean) => {
      setFold(stauts);
    },
  }));

  const onDownload = useCallback(() => {
    dom2canvas({
      ref,
    })?.then((canvas) => {
      if (!canvas) return;
      const a = document.createElement('a');
      a.setAttribute('href', canvas.toDataURL());
      a.setAttribute('download', 'downImg');
      a.setAttribute('target', '_self');
      a.click();
    });
  }, []);

  // 全屏
  const FullScreen = memo(() => {
    if (!fullScreenAble) {
      return <></>;
    }
    return isFullscreen ? (
      <div
        className="icon ppsfont icon-tuichuquanping"
        style={{ marginLeft: 16, color: 'var(--neutral-color3)' }}
        onClick={exitFullscreen}
      />
    ) : (
      <div
        className="icon ppsfont icon-quanping"
        style={{ marginLeft: 16, color: 'var(--neutral-color3)' }}
        title="全屏展示"
        onClick={enterFullscreen}
      />
    );
  });

  // 折叠
  const Fold = memo(() => {
    if (!foldable) {
      return <></>;
    }
    return (
      <i
        onClick={() => {
          setFold(!folded);
          foldableChange?.(!folded);
        }}
        className={`ppsfont icon-shang ${folded ? 'foldIconFold' : 'foldIcon'}`}
      />
    );
  });

  // 下载
  const DownLoadBtn = memo(() => {
    if (!downloadAble) {
      return <></>;
    }
    return (
      <i
        className="icon ppsfont icon-daochu"
        style={{ marginLeft: 16, color: 'var(--neutral-color3)' }}
        title="下载"
        onClick={onDownload}
      />
    );
  });

  return (
    <div
      className={classNames('cardComponent', {
        cardBorder: border,
        shadow,
      })}
      style={style}
      id={id}
      ref={wrapperRef}
    >
      <Spin spinning={loading}>
        <div
          className={`cardContainer
        ${noPadding ? 'noPadding' : ''} ${
            noTitleTag ? 'noTitleTag' : ''
          } ${fixedClass} ${cardSizeClass} ${cardTitleClass} ${className}`}
          {...rest}
          ref={ref}
        >
          {/* 头部内容 */}
          {(title || extra) && (
            <>
              <div
                className={`cardHeadWrapper cardHeadFixed  ${headClass}`}
                style={headStyle}
              >
                <div className="cardHeadTitle">{title}</div>
                <div className="cardHeadExtra" style={extraStyle}>
                  <div>{extra}</div>
                  <Fold />
                  <DownLoadBtn />
                  <FullScreen />
                </div>
              </div>
            </>
          )}
          {/* 容器内容 */}
          {children && (
            <div
              className={`cardBody ${
                foldable && folded ? 'foldedChildren' : 'foldChildren'
              } ${bodyClass} `}
              style={bodyStyle}
            >
              {children}
            </div>
          )}
        </div>
      </Spin>
    </div>
  );
};

export default CardWrapper;

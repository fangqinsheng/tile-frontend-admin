/* eslint-disable no-bitwise */
// -----------------------------------------------------------------------------
// 工具函数集
// -----------------------------------------------------------------------------

import html2canvas from 'html2canvas';

export const dom2canvas = ({
  ref,
  className,
  width,
  height,
}: {
  ref?: React.MutableRefObject<null | HTMLElement>;
  className?: string;
  width?: number;
  height?: number;
}): undefined | Promise<HTMLCanvasElement | undefined> => {
  let targetElement: HTMLElement | null = null;
  if (ref !== undefined && ref?.current) {
    targetElement = ref.current;
  }
  if (className !== undefined) {
    targetElement = document.querySelector(`.${className}`);
  }
  if (!targetElement) return undefined;

  const { offsetWidth, offsetHeight } = targetElement;
  return new Promise((resolve, reject) => {
    html2canvas(targetElement as HTMLElement, {
      width: width || offsetWidth,
      height: height || offsetHeight,
    })
      .then((canvas) => {
        if (!canvas) return resolve(undefined);
        return resolve(canvas);
      })
      .catch((err: any) => {
        window.console.log('dom2canvas方法：转换dom时出错了');
        reject(err);
      });
  });
};

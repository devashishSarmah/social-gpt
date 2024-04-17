import { ImageLoaderConfig } from '@angular/common';

export default (path: string) => {
  return (config: ImageLoaderConfig) => {
    const quality = config.isPlaceholder ? 'q_auto:low' : 'q_auto';

    let params = `f_auto,${quality},c_pad,ar_1:1,b_auto`;
    if (config.width) {
      params += `,w_${config.width}`;
    }

    if (config.loaderParams?.['rounded']) {
      params += `,r_max`;
    }

    return `${path}/image/upload/${params}/${config.src}`;
  };
};

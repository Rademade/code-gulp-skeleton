import { src, dest }                        from 'gulp';
import { DIST_IMAGES_DIR, ROOT_IMAGES_DIR } from './helpers/variables';

export const imagesTask = () => {
  return src(ROOT_IMAGES_DIR + '**/*.*')
    .pipe(dest(DIST_IMAGES_DIR))
};

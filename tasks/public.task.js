import { src, dest }                from 'gulp';
import {DIST_DIR, ROOT_DIR} from './helpers/variables';

export const publicTask = () => {
  return src(ROOT_DIR + 'public/**/*.*')
    .pipe(dest(DIST_DIR))
};

import { src, dest }                from 'gulp';
import { DIST_JS_DIR, ROOT_JS_DIR } from './helpers/variables';

export const jsTask = () => {
  return src(ROOT_JS_DIR + '**/*.js')
    .pipe(dest(DIST_JS_DIR))
};

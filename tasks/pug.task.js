import {src, dest} from 'gulp';
import pug from 'gulp-pug';
import {ROOT_TEMPLATES_DIR, DIST_DIR} from './helpers/variables';
import {browserSyncInstance} from './helpers/browser-sync-instance';

export const pugTask = () => {
  return src(ROOT_TEMPLATES_DIR + '*.pug')
    .pipe(pug({
      pretty: true,
      basedir: ROOT_TEMPLATES_DIR,
    }))
    .pipe(dest(DIST_DIR))
    .pipe(browserSyncInstance.stream())
};

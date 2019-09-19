import { src, dest } from 'gulp';
import postcss       from 'gulp-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssPresetsEnv from 'postcss-preset-env';
import { DIST_DIR, DIST_CSS_DIR, ROOT_CSS_DIR } from './helpers/variables';
import { browserSyncInstance }    from './helpers/browser-sync-instance';

const postcssPlugins = [
  postcssImport(),
  postcssNested(),
  postcssPresetsEnv()
];

export const cssTask = () => {
  return src(ROOT_CSS_DIR + 'manifest.css')
    .pipe(postcss(postcssPlugins))
    .pipe(dest(DIST_CSS_DIR))
    .pipe(browserSyncInstance.stream())
};

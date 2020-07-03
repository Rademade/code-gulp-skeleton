import { src, dest }                                      from 'gulp';
import postcss                                            from 'gulp-postcss';
import postcssImport                                      from 'postcss-import';
import postcssNested                                      from 'postcss-nested';
import postcssApply                                       from 'postcss-apply';
import concat                                             from 'gulp-concat';
import postcssPresetsEnv                                  from 'postcss-preset-env';
import { DIST_CSS_DIR, ROOT_CSS_DIR, ROOT_TEMPLATES_DIR } from './helpers/variables';
import { browserSyncInstance }                            from './helpers/browser-sync-instance';

const postcssPlugins = [
  postcssImport(),
  postcssApply({
    sets: {
      'overflow-text': {
        'display': '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
        'text-overflow': 'ellipsis',
        'overflow': 'hidden',
      },
    }
  }),
  postcssNested(),
  postcssPresetsEnv({
    preserve: false,
    stage: 1,
    browsers: '>0%',
    importFrom: [
      ROOT_CSS_DIR + 'base/variables.css',
    ],
  })
];

export const cssManifestTask = () => {
  return src([ROOT_CSS_DIR + '*.css'])
    .pipe(postcss(postcssPlugins))
    .pipe(dest(DIST_CSS_DIR))
    .pipe(browserSyncInstance.stream())
};

export const cssComponentsTask = () => {
  return src(ROOT_TEMPLATES_DIR + '**/*.css')
    .pipe(postcss(postcssPlugins))
    .pipe(concat('components.css'))
    .pipe(dest(DIST_CSS_DIR))
    .pipe(browserSyncInstance.stream())
};

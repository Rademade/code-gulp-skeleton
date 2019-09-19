import '@babel/polyfill';

import del from 'del';
import { DIST_DIR } from './helpers/variables';

export const cleanTask = async () => {
  const deletedPaths = await del([DIST_DIR]);
  console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
};

import baseConfig from '@ssheverev/eslint-config';
import reactConfig from '@ssheverev/eslint-react-config';
import tsConfig from '@ssheverev/eslint-ts-config';
import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,
  ...tsConfig,
  ...reactConfig,
  ...nx.configs['flat/react'],
  {
    ignores: ['**/out-tsc'],
  },
];


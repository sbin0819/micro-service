import { injectFactory } from '@mono/shell-router';
import { routes } from './routes';

import './index.scss';

const inject = injectFactory({
  routes,
});

export default inject;

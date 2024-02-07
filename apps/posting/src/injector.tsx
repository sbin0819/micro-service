import { injectFactory } from '@mono/shell-router';
import { routes } from './routes';
import '@mono/ui-kit/index.css';

const inject = injectFactory({
  routes,
});

export default inject;

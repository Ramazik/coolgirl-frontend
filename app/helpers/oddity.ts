import { helper } from '@ember/component/helper';

export function oddity([value]: [number] /*, hash */): 'even' | 'odd' {
  return value % 2 === 0 ? 'even' : 'odd';
}

export default helper(oddity);

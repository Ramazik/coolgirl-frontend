import { helper } from '@ember/component/helper';

export function groupByEq<T>(
  _pos: [],
  {
    items,
    itemWidth,
    padding,
    width,
  }: {
    items: T[];
    itemWidth: number;
    padding: number;
    width?: number;
  }
): T[][] {
  if (!width) {
    return [];
  }

  const count = Math.floor((width + padding) / (itemWidth + padding));

  if (count < 1) {
    return items.map((item) => [item]);
  }

  return items.reduce((result, item, index) => {
    if (index % count === 0) {
      result.push([]);
    }

    result[result.length - 1].push(item);

    return result;
  }, [] as T[][]);
}

export default helper(groupByEq);

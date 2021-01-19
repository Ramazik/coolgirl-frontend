import Helper from '@ember/component/helper';

interface Cache<T> {
  items: T[];
  itemWidth: number;
  padding: number;
  width: number;
  result: T[][];
}

/**
 * Note: This helper does not support mutating the items array!
 **/

export default class groupByHelper<T> extends Helper {
  previousValues?: Cache<T>;

  compute(
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
    // If all arguments are the same, return cached result
    if (
      !!this.previousValues &&
      items === this.previousValues.items &&
      itemWidth === this.previousValues.itemWidth &&
      padding === this.previousValues.padding &&
      width === this.previousValues.width
    ) {
      return this.previousValues?.result;
    }

    if (!width) {
      return [];
    }

    const count = Math.floor((width + padding) / (itemWidth + padding));

    if (count < 1) {
      return items.map((item) => [item]);
    }

    const result = items.reduce((result, item, index) => {
      if (index % count === 0) {
        result.push([]);
      }

      result[result.length - 1].push(item);

      return result;
    }, [] as T[][]);

    // Cache the new result
    this.previousValues = {
      items,
      itemWidth,
      padding,
      width,
      result,
    };

    return result;
  }
}

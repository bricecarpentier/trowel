import * as fs from 'fs';
import { extname } from 'path';
import * as trowel from './index';

const withoutTestOrIndex = (path: string): boolean =>
  !(path.endsWith('.test.ts') || path.startsWith('index'));

const fileNameToMethodName = (path: string): string =>
  path.replace(extname(path), '');

describe('trowel', () => {
  let methodNames: string[];

  beforeAll(async () => {
    const files = await fs.promises.readdir(__dirname);
    methodNames = files
      .filter(withoutTestOrIndex)
      .map(fileNameToMethodName)
      .sort();
  });

  test('exports all functions', () => {
    expect(Object.keys(trowel).sort()).toEqual(methodNames);
  });
});

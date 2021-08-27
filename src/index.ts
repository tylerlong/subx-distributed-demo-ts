/* eslint-disable node/no-unpublished-import */
import SubX from 'subx';
import hyperid from 'hyperid';

import {Text, Shape, StoreType, StoreFunctions, StoreData} from './types';

const uuid = hyperid();

const rect1: Shape = {
  id: uuid(),
  type: 'rectangle',
  color: '#ff7a03',
  length: 512,
  width: 512,
};

const rect2: Shape = {
  id: uuid(),
  type: 'rectangle',
  color: 'white',
  length: 450,
  width: 450,
};

const text: Text = {
  text: 'R',
  color: '#0884bc',
  fontSize: 400,
  fontFamily: 'Menlo, Consolas, Monaco, "Courier New", monospace',
};

const storeData: StoreData = {
  shapes: [rect1, rect2],
  text,
};

const storeFunctions: StoreFunctions = {
  saveSVG(svg: String) {
    console.log(svg);
  },
  savePNG(dataUri: string) {
    console.log(dataUri);
  },
};

const store = SubX.proxy<StoreType>({...storeData, ...storeFunctions});

export default store;

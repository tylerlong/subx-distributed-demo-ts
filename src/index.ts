import SubX from 'subx';

import {
  Text,
  StoreFunctions,
  StoreData,
  Rectangle,
  Ellipse,
  Shape,
} from './types';

const rect1 = new Rectangle('#ff7a03', 512, 512);
const rect2 = new Rectangle('white', 450, 450);

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

const store = SubX.create({...storeData, ...storeFunctions});

store.$.subscribe(event => {
  console.log(event);
});

(store.shapes[0] as Rectangle).width = 513;

console.log(store.shapes[0] instanceof Rectangle);
console.log(store.shapes[0] instanceof Ellipse);
console.log(store.shapes[0] instanceof Shape);
console.log(store.shapes[0]);

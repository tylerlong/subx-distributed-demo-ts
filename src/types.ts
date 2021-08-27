import hyperid from 'hyperid';

const uuid = hyperid();

export class Shape {
  id: string;
  color: string;
  constructor(id: string, color: string) {
    this.id = id;
    this.color = color;
  }
}

export class Rectangle extends Shape {
  length: number;
  width: number;
  constructor(color: string, length: number, width: number) {
    super(uuid(), color);
    this.length = length;
    this.width = width;
  }
}

export class Ellipse extends Shape {
  xRadius: number;
  yRadius: number;
  constructor(color: string, xRadius: number, yRadius: number) {
    super(uuid(), color);
    this.xRadius = xRadius;
    this.yRadius = yRadius;
  }
}

// export type Rectangle = {
//   length: number;
//   width: number;
// };

// export type Ellipse = {
//   xRadius: number;
//   yRadius: number;
// };

// export type Shape = (Rectangle | Ellipse) & {
//   id: string;
//   type: 'rectangle' | 'ellipse';
//   color: string;
// };

export type Text = {
  text: string;
  color: string;
  fontSize: number;
  fontFamily: string;
};

export type StoreData = {
  shapes: Shape[];
  text: Text;
};

export type StoreFunctions = {
  saveSVG: (svg: string) => void;
  savePNG: (dataUri: string) => void;
};

export type StoreType = StoreData & StoreFunctions;

export type AppProps = {
  store: StoreType;
};

export type SvgProps = {
  shapes: Shape[];
  text: Text;
};

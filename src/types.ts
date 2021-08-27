export type Rectangle = {
  length: number;
  width: number;
};

export type Ellipse = {
  xRadius: number;
  yRadius: number;
};

export type Shape = (Rectangle | Ellipse) & {
  id: string;
  type: 'rectangle' | 'ellipse';
  color: string;
};

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

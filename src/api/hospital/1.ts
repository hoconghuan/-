interface RootObject {
  code: number;
  message: string;
  data: Datum[];
  ok: boolean;
}

interface Datum {
  depcode: string;
  depname: string;
  children?: Datum[];
}

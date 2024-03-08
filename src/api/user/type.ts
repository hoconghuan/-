interface RootObject {
  code: number;
  message: string;
  ok: boolean;
}

export interface ResponseData extends RootObject {
  data: string;
}

interface RootObject {
  code: number;
  message: string;
  ok: boolean;
}

interface Data {
  redirectUri: string;
  appid: string;
  scope: string;
  state: string;
}

export interface loginData extends RootObject {
  data: Data;
}

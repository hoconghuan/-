import * as exp from "constants";

// 定义接口
export interface ResponseData {
  code: string;
  message: string;

  ok: boolean;
}
//定义医院
export interface Hospital {
  id: string;
  createtime: string;
  updatetime: string;
  isDeleted: number;
  param: {
    fullAddress: string;
    hostypeString: string;
  };
  hoscode: string;
  hosname: string;
  hosType: number;
  provinceCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: string;
  route: string;
  status: number;
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
}

// 定义医院数组
export type HospitalList = Hospital[];

export interface HospitalResponseData extends ResponseData {
  data: {
    content: HospitalList;
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  };
}

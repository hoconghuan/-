// 定义接口
export interface ResponseData {
  code: number;
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
//定义医院返回数据
export interface HospitalResponseData extends ResponseData {
  data: {
    content: HospitalList; //数据在这里。
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

// 医院等级及类型
export interface HospitalLevelAndRegion {
  createTime: string;
  dictCode: string;
  hasChildren: boolean;
  id: number;
  isDeleted: number;
  name: string;
  param: {};
  parentId: number;
  updateTime: string;
  value: string;
}
// 医院等级及类型数组
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
// 医院返回等级及类型数组
export interface HospitalLevelAndRegionResponseData extends ResponseData {
  data: HospitalLevelAndRegionArr;
}

export interface SearchInfo extends ResponseData {
  data: HospitalList;
}

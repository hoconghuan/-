interface RootObject {
  code: number;
  message: string;
  ok: boolean;
}

export interface Data {
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
  hospital: {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: {
      hostypeString: string;
      fullAddress: string;
    };
    hoscode: string;
    hosname: string;
    hostype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro: string;
    route: string;
    status: number;
    bookingRule?: any;
  };
}
export interface HospitalData extends RootObject {
  data: Data;
}

export interface Datum {
  depcode: string;
  depname: string;
  children?: Datum[];
}
export type OfficeData = Datum[];

export interface DepartmentData extends RootObject {
  data: OfficeData;
}

export interface RegisterDataForm {
  total: number;
  bookingScheduleList: BookingScheduleLists;
  baseMap: {
    workDateString: string;
    releaseTime: string;
    bigname: string;
    stopTime: string;
    depname: string;
    hosname: string;
  };
}
export interface BookingScheduleList {
  workDate: string;
  workDateMd: string;
  dayOfWeek: string;
  docCount: number;
  reservedNumber: null | number;
  availableNumber: number;
  status: number;
}
export type BookingScheduleLists = BookingScheduleList[];
export interface RegisterData extends RootObject {
  data: RegisterDataForm;
}

export interface ArrangeList {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    dayOfWeek: string;
    depname: string;
    hosname: string;
  };
  hoscode: string;
  depcode: string;
  title: string;
  docname: string;
  skill: string;
  workDate: string;
  workTime: number;
  reservedNumber: number;
  availableNumber: number;
  amount: number;
  status: number;
  hosScheduleId: string;
}
export type ArrangeLists = ArrangeList[];
export interface HospitalArrangeListData extends RootObject {
  data: ArrangeLists;
}

//代表的是一个就诊人数据ts类型
export interface UserInfo {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    certificatesTypeString: string;
    contactsCertificatesTypeString: string;
    cityString: null;
    fullAddress: string;
    districtString: null;
    provinceString: null;
  };
  userId: number;
  name: number;
  certificatesType: string;
  certificatesNo: string;
  sex: number;
  birthdate: string;
  phone: string;
  isMarry: number;
  provinceCode: null;
  cityCode: null;
  districtCode: null;
  address: string;
  contactsName: string;
  contactsCertificatesType: string;
  contactsCertificatesNo: string;
  contactsPhone: string;
  isInsure: number;
  cardNo: null;
  status: string;
}
export type UserArr = UserInfo[];
export interface UserResponseData extends RootObject {
  data: UserArr;
}

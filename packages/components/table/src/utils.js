import { isArray } from "lodash-es";
export const getResRealData = (res) => {
  if (isArray(res)) {
    return {
      data: res,
    };
  } else if (res && isArray(res.data)) {
    return {
      total: res.total,
      data: res.data,
    };
  } else if (res && res.data && isArray(res.data.records)) {
    return {
      total: res.data.total,
      data: res.data.records,
    };
  } else if (res && res.data && isArray(res.data.list)) {
    return {
      total: res.data.total,
      data: res.data.list,
    };
  } else {
    return {
      data: [],
    };
  }
};

export const resetPageNoFormDelete = (pageInfo) => {
  const { pageNo, pageSize, totalNum } = pageInfo;
  if (pageNo > Math.ceil((totalNum - 1) / pageSize) && pageNo > 1) {
    return pageNo - 1;
  }
  return pageNo;
};
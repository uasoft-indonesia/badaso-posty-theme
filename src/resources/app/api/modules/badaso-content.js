import resource from "../../../../../../core/src/resources/js/api/resource";
import QueryString from "../../../../../../core/src/resources/js/api/query-string";

let apiPrefix = process.env.MIX_API_ROUTE_PREFIX
  ? "/" + process.env.MIX_API_ROUTE_PREFIX
  : "/badaso-api";

export default {
  browse(data = {}) {
    let ep = apiPrefix + "/module/content/v1/content";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  read(data) {
    let ep = apiPrefix + "/module/content/v1/content/read";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  fetch(data) {
    let ep = apiPrefix + "/module/content/v1/content/fetch";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  fetchMultiple(data) {
    let ep = apiPrefix + "/module/content/v1/content/fetch-multiple";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  fill(data) {
    return resource.put(apiPrefix + "/module/content/v1/content/fill", data);
  },

  edit(data) {
    return resource.put(apiPrefix + "/module/content/v1/content/edit", data);
  },

  add(data) {
    return resource.post(apiPrefix + "/module/content/v1/content/add", data);
  },

  delete(data) {
    let paramData = {
      data: data,
    };
    return resource.delete(apiPrefix + "/module/content/v1/content/delete", paramData);
  },

  deleteMultiple(data) {
    let paramData = {
      data: data,
    };
    return resource.delete(
      apiPrefix + "/module/content/v1/content/delete-multiple",
      paramData
    );
  },
};

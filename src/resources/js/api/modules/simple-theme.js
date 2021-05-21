import resource from "../../../../../../badaso/src/resources/js/api/resource";
import QueryString from "../../../../../../badaso/src/resources/js/api/query-string";

let apiPrefix = process.env.MIX_API_ROUTE_PREFIX
  ? "/" + process.env.MIX_API_ROUTE_PREFIX + "/module/blog"
  : "/badaso-api/module/blog";

export default {
  browse(data = {}) {
    let ep = apiPrefix + "/v1/post";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  read(data) {
    let ep = apiPrefix + "/v1/post/read-slug";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  categories(data = {}) {
    let ep = apiPrefix + "/v1/category";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  comment(data) {
    return resource.post(apiPrefix + "/v1/comment/add", data);
  },

  fetchComment(data = {}) {
    let ep = apiPrefix + "/v1/comment/post";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  }
};

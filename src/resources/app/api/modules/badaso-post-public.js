import resource from "../../../../../../core/src/resources/js/api/resource";
import QueryString from "../../../../../../core/src/resources/js/api/query-string";

let apiPrefix = process.env.MIX_API_ROUTE_PREFIX
  ? "/" + process.env.MIX_API_ROUTE_PREFIX + "/module/post"
  : "/badaso-api/module/post";

export default {
  fetchPosts(data = {}) {
    let ep = apiPrefix + "/v1/post";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  fetchPost(data) {
    let ep = apiPrefix + "/v1/post/read-slug";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  fetchCategories(data = {}) {
    let ep = apiPrefix + "/v1/category";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  fetchPopularPosts(data = {}) {
    let ep = apiPrefix + "/v1/post/popular";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  addComment(data) {
    return resource.post(apiPrefix + "/v1/comment/add", data);
  },

  fetchComment(data = {}) {
    let ep = apiPrefix + "/v1/comment/post";
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  }
};

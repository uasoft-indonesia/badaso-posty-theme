import configurations from "../../../../../core/src/resources/js/api/modules/badaso-configuration.js";
import blogModules from "../../../../../post-module/src/resources/js/api/modules/badaso-blog.js";
import contentModules from "../../../../../content-module/src/resources/js/api/modules/badaso-content.js";

let exported = {};
exported.badasoBlog = blogModules;
exported.badasoContent = contentModules;
exported.badasoConfiguration = configurations;

export default exported
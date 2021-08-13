import configurations from "../../../../../core/src/resources/js/api/modules/badaso-configuration.js";
import postModules from "../../../../../post-module/src/resources/js/api/modules/badaso-post-public.js";
import contentModules from "../../../../../content-module/src/resources/js/api/modules/badaso-content.js";

let exported = {};
exported.badasoPostPublic = postModules;
exported.badasoContent = contentModules;
exported.badasoConfiguration = configurations;

export default exported
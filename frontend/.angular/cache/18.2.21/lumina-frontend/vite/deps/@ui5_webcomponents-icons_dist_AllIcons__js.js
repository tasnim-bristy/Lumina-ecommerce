import {
  registerIconLoader
} from "./chunk-3YXAI4SY.js";
import "./chunk-CQWP6VSU.js";
import "./chunk-JASJJZVS.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-icons/dist/json-imports/Icons.js
var loadIconsBundle = (collection) => __async(void 0, null, function* () {
  let iconData;
  if (collection === "SAP-icons-v5") {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-v5" */
      "./SAP-icons-3PM2CRIA.js"
    )).default;
  } else {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-v4" */
      "./SAP-icons-HHCPTTE7.js"
    )).default;
  }
  if (typeof iconData === "string" && iconData.endsWith(".json")) {
    throw new Error('[icons] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use `import "@ui5/webcomponents-icons/dist/Assets-static.js". Check the "Assets" documentation for more information.');
  }
  return iconData;
});
var registerLoaders = () => {
  registerIconLoader("SAP-icons-v4", loadIconsBundle);
  registerIconLoader("SAP-icons-v5", loadIconsBundle);
};
registerLoaders();
//# sourceMappingURL=@ui5_webcomponents-icons_dist_AllIcons__js.js.map

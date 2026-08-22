// node_modules/@ui5/webcomponents-base/dist/util/willShowContent.js
var willShowContent = (childNodes) => {
  return Array.from(childNodes).filter((node) => {
    return node.nodeType !== Node.COMMENT_NODE && (node.nodeType !== Node.TEXT_NODE || (node.nodeValue || "").trim().length !== 0);
  }).length > 0;
};
var willShowContent_default = willShowContent;

export {
  willShowContent_default
};
//# sourceMappingURL=chunk-KZFZS4LL.js.map

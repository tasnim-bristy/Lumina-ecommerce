// node_modules/@ui5/webcomponents-base/dist/IgnoreCustomElements.js
var tagPrefixes = [];
var ignoreCustomElements = (tagPrefix) => {
  if (typeof tagPrefix !== "string" || !tagPrefix.length) {
    throw new Error("Only string characters for a tag prefix.");
  }
  tagPrefixes.push(tagPrefix);
};
var shouldIgnoreCustomElement = (tag) => {
  return tagPrefixes.some((pref) => tag.startsWith(pref));
};

export {
  ignoreCustomElements,
  shouldIgnoreCustomElement
};
//# sourceMappingURL=chunk-XQ36JZLT.js.map

import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-base/dist/FeaturesRegistry.js
var features = /* @__PURE__ */ new Map();
var registerFeature = (name, feature) => {
  features.set(name, feature);
};
var getFeature = (name) => {
  return features.get(name);
};

// node_modules/@ui5/webcomponents-base/dist/EventProvider.js
var EventProvider = class {
  constructor() {
    this._eventRegistry = /* @__PURE__ */ new Map();
  }
  attachEvent(eventName, fnFunction) {
    const eventRegistry = this._eventRegistry;
    const eventListeners = eventRegistry.get(eventName);
    if (!Array.isArray(eventListeners)) {
      eventRegistry.set(eventName, [fnFunction]);
      return;
    }
    if (!eventListeners.includes(fnFunction)) {
      eventListeners.push(fnFunction);
    }
  }
  detachEvent(eventName, fnFunction) {
    const eventRegistry = this._eventRegistry;
    const eventListeners = eventRegistry.get(eventName);
    if (!eventListeners) {
      return;
    }
    const indexOfFnToDetach = eventListeners.indexOf(fnFunction);
    if (indexOfFnToDetach !== -1) {
      eventListeners.splice(indexOfFnToDetach, 1);
    }
    if (eventListeners.length === 0) {
      eventRegistry.delete(eventName);
    }
  }
  /**
   * Fires an event and returns the results of all event listeners as an array.
   *
   * @param eventName the event to fire
   * @param data optional data to pass to each event listener
   * @returns {Array} an array with the results of all event listeners
   */
  fireEvent(eventName, data) {
    const eventRegistry = this._eventRegistry;
    const eventListeners = eventRegistry.get(eventName);
    if (!eventListeners) {
      return [];
    }
    return eventListeners.map((fn) => {
      return fn.call(this, data);
    });
  }
  /**
   * Fires an event and returns a promise that will resolve once all listeners have resolved.
   *
   * @param eventName the event to fire
   * @param data optional data to pass to each event listener
   * @returns {Promise} a promise that will resolve when all listeners have resolved
   */
  fireEventAsync(eventName, data) {
    return Promise.all(this.fireEvent(eventName, data));
  }
  isHandlerAttached(eventName, fnFunction) {
    const eventRegistry = this._eventRegistry;
    const eventListeners = eventRegistry.get(eventName);
    if (!eventListeners) {
      return false;
    }
    return eventListeners.includes(fnFunction);
  }
  hasListeners(eventName) {
    return !!this._eventRegistry.get(eventName);
  }
};
var EventProvider_default = EventProvider;

// node_modules/@ui5/webcomponents-base/dist/RenderQueue.js
var MAX_PROCESS_COUNT = 10;
var RenderQueue = class {
  constructor() {
    this.list = [];
    this.lookup = /* @__PURE__ */ new Set();
  }
  add(webComponent) {
    if (this.lookup.has(webComponent)) {
      return;
    }
    this.list.push(webComponent);
    this.lookup.add(webComponent);
  }
  remove(webComponent) {
    if (!this.lookup.has(webComponent)) {
      return;
    }
    this.list = this.list.filter((item) => item !== webComponent);
    this.lookup.delete(webComponent);
  }
  shift() {
    const webComponent = this.list.shift();
    if (webComponent) {
      this.lookup.delete(webComponent);
      return webComponent;
    }
  }
  isEmpty() {
    return this.list.length === 0;
  }
  isAdded(webComponent) {
    return this.lookup.has(webComponent);
  }
  /**
   * Processes the whole queue by executing the callback on each component,
   * while also imposing restrictions on how many times a component may be processed.
   *
   * @param callback - function with one argument (the web component to be processed)
   */
  process(callback) {
    let webComponent;
    const stats = /* @__PURE__ */ new Map();
    webComponent = this.shift();
    while (webComponent) {
      const timesProcessed = stats.get(webComponent) || 0;
      if (timesProcessed > MAX_PROCESS_COUNT) {
        throw new Error(`Web component processed too many times this task, max allowed is: ${MAX_PROCESS_COUNT}`);
      }
      callback(webComponent);
      stats.set(webComponent, timesProcessed + 1);
      webComponent = this.shift();
    }
  }
};
var RenderQueue_default = RenderQueue;

// node_modules/@ui5/webcomponents-base/dist/util/getSingletonElementInstance.js
var getSingletonElementInstance = (tag, parentElement = document.body, createEl) => {
  let el = document.querySelector(tag);
  if (el) {
    return el;
  }
  el = createEl ? createEl() : document.createElement(tag);
  return parentElement.insertBefore(el, parentElement.firstChild);
};
var getSingletonElementInstance_default = getSingletonElementInstance;

// node_modules/@ui5/webcomponents-base/dist/getSharedResource.js
var getMetaDomEl = () => {
  const el = document.createElement("meta");
  el.setAttribute("name", "ui5-shared-resources");
  el.setAttribute("content", "");
  return el;
};
var getSharedResourcesInstance = () => {
  if (typeof document === "undefined") {
    return null;
  }
  return getSingletonElementInstance_default(`meta[name="ui5-shared-resources"]`, document.head, getMetaDomEl);
};
var getSharedResource = (namespace, initialValue) => {
  const parts = namespace.split(".");
  let current = getSharedResourcesInstance();
  if (!current) {
    return initialValue;
  }
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const lastPart = i === parts.length - 1;
    if (!Object.prototype.hasOwnProperty.call(current, part)) {
      current[part] = lastPart ? initialValue : {};
    }
    current = current[part];
  }
  return current;
};
var getSharedResource_default = getSharedResource;

// node_modules/@ui5/webcomponents-base/dist/generated/VersionInfo.js
var VersionInfo = {
  version: "1.24.29",
  major: 1,
  minor: 24,
  patch: 29,
  suffix: "",
  isNext: false,
  buildTime: 1783946180
};
var VersionInfo_default = VersionInfo;

// node_modules/@ui5/webcomponents-base/dist/Runtimes.js
var currentRuntimeIndex;
var currentRuntimeAlias = "";
var compareCache = /* @__PURE__ */ new Map();
var Runtimes = getSharedResource_default("Runtimes", []);
var registerCurrentRuntime = () => {
  if (currentRuntimeIndex === void 0) {
    currentRuntimeIndex = Runtimes.length;
    const versionInfo = VersionInfo_default;
    Runtimes.push(__spreadProps(__spreadValues({}, versionInfo), {
      alias: currentRuntimeAlias,
      description: `Runtime ${currentRuntimeIndex} - ver ${versionInfo.version}${currentRuntimeAlias ? ` (${currentRuntimeAlias})` : ""}`
    }));
  }
};
var getCurrentRuntimeIndex = () => {
  return currentRuntimeIndex;
};
var compareRuntimes = (index1, index2) => {
  const cacheIndex = `${index1},${index2}`;
  if (compareCache.has(cacheIndex)) {
    return compareCache.get(cacheIndex);
  }
  const runtime1 = Runtimes[index1];
  const runtime2 = Runtimes[index2];
  if (!runtime1 || !runtime2) {
    throw new Error("Invalid runtime index supplied");
  }
  if (runtime1.isNext || runtime2.isNext) {
    return runtime1.buildTime - runtime2.buildTime;
  }
  const majorDiff = runtime1.major - runtime2.major;
  if (majorDiff) {
    return majorDiff;
  }
  const minorDiff = runtime1.minor - runtime2.minor;
  if (minorDiff) {
    return minorDiff;
  }
  const patchDiff = runtime1.patch - runtime2.patch;
  if (patchDiff) {
    return patchDiff;
  }
  const collator = new Intl.Collator(void 0, {
    numeric: true,
    sensitivity: "base"
  });
  const result = collator.compare(runtime1.suffix, runtime2.suffix);
  compareCache.set(cacheIndex, result);
  return result;
};
var getAllRuntimes = () => {
  return Runtimes;
};

// node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js
var Tags = getSharedResource_default("Tags", /* @__PURE__ */ new Map());
var Definitions = /* @__PURE__ */ new Set();
var Failures = /* @__PURE__ */ new Map();
var failureTimeout;
var UNKNOWN_RUNTIME = -1;
var registerTag = (tag) => {
  Definitions.add(tag);
  Tags.set(tag, getCurrentRuntimeIndex());
};
var isTagRegistered = (tag) => {
  return Definitions.has(tag);
};
var getAllRegisteredTags = () => {
  return [...Definitions.values()];
};
var recordTagRegistrationFailure = (tag) => {
  let tagRegRuntimeIndex = Tags.get(tag);
  if (tagRegRuntimeIndex === void 0) {
    tagRegRuntimeIndex = UNKNOWN_RUNTIME;
  }
  if (!Failures.has(tagRegRuntimeIndex)) {
    Failures.set(tagRegRuntimeIndex, /* @__PURE__ */ new Set());
  }
  Failures.get(tagRegRuntimeIndex).add(tag);
  if (!failureTimeout) {
    failureTimeout = setTimeout(() => {
      displayFailedRegistrations();
      Failures = /* @__PURE__ */ new Map();
      failureTimeout = void 0;
    }, 1e3);
  }
};
var displayFailedRegistrations = () => {
  const allRuntimes = getAllRuntimes();
  const currentRuntimeIndex2 = getCurrentRuntimeIndex();
  const currentRuntime = allRuntimes[currentRuntimeIndex2];
  let message = `Multiple UI5 Web Components instances detected.`;
  if (allRuntimes.length > 1) {
    message = `${message}
Loading order (versions before 1.1.0 not listed): ${allRuntimes.map((runtime) => `
${runtime.description}`).join("")}`;
  }
  [...Failures.keys()].forEach((otherRuntimeIndex) => {
    let comparison;
    let otherRuntime;
    if (otherRuntimeIndex === UNKNOWN_RUNTIME) {
      comparison = 1;
      otherRuntime = {
        description: `Older unknown runtime`
      };
    } else {
      comparison = compareRuntimes(currentRuntimeIndex2, otherRuntimeIndex);
      otherRuntime = allRuntimes[otherRuntimeIndex];
    }
    let compareWord;
    if (comparison > 0) {
      compareWord = "an older";
    } else if (comparison < 0) {
      compareWord = "a newer";
    } else {
      compareWord = "the same";
    }
    message = `${message}

"${currentRuntime.description}" failed to define ${Failures.get(otherRuntimeIndex).size} tag(s) as they were defined by a runtime of ${compareWord} version "${otherRuntime.description}": ${[...Failures.get(otherRuntimeIndex)].sort().join(", ")}.`;
    if (comparison > 0) {
      message = `${message}
WARNING! If your code uses features of the above web components, unavailable in ${otherRuntime.description}, it might not work as expected!`;
    } else {
      message = `${message}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`;
    }
  });
  message = `${message}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/UI5/webcomponents/blob/main/docs/2-advanced/03-scoping.md.`;
  console.warn(message);
};

// node_modules/@ui5/webcomponents-base/dist/locale/RTLAwareRegistry.js
var rtlAwareSet = /* @__PURE__ */ new Set();
var markAsRtlAware = (klass) => {
  rtlAwareSet.add(klass);
};
var isRtlAware = (klass) => {
  return rtlAwareSet.has(klass);
};

// node_modules/@ui5/webcomponents-base/dist/Render.js
var registeredElements = /* @__PURE__ */ new Set();
var eventProvider = new EventProvider_default();
var invalidatedWebComponents = new RenderQueue_default();
var renderTaskPromise;
var renderTaskPromiseResolve;
var mutationObserverTimer;
var queuePromise;
var renderDeferred = (webComponent) => __async(void 0, null, function* () {
  invalidatedWebComponents.add(webComponent);
  yield scheduleRenderTask();
});
var renderImmediately = (webComponent) => {
  eventProvider.fireEvent("beforeComponentRender", webComponent);
  registeredElements.add(webComponent);
  webComponent._render();
};
var cancelRender = (webComponent) => {
  invalidatedWebComponents.remove(webComponent);
  registeredElements.delete(webComponent);
};
var scheduleRenderTask = () => __async(void 0, null, function* () {
  if (!queuePromise) {
    queuePromise = new Promise((resolve) => {
      window.requestAnimationFrame(() => {
        invalidatedWebComponents.process(renderImmediately);
        queuePromise = null;
        resolve();
        if (!mutationObserverTimer) {
          mutationObserverTimer = setTimeout(() => {
            mutationObserverTimer = void 0;
            if (invalidatedWebComponents.isEmpty()) {
              _resolveTaskPromise();
            }
          }, 200);
        }
      });
    });
  }
  yield queuePromise;
});
var whenDOMUpdated = () => {
  if (renderTaskPromise) {
    return renderTaskPromise;
  }
  renderTaskPromise = new Promise((resolve) => {
    renderTaskPromiseResolve = resolve;
    window.requestAnimationFrame(() => {
      if (invalidatedWebComponents.isEmpty()) {
        renderTaskPromise = void 0;
        resolve();
      }
    });
  });
  return renderTaskPromise;
};
var whenAllCustomElementsAreDefined = () => {
  const definedPromises = getAllRegisteredTags().map((tag) => customElements.whenDefined(tag));
  return Promise.all(definedPromises);
};
var renderFinished = () => __async(void 0, null, function* () {
  yield whenAllCustomElementsAreDefined();
  yield whenDOMUpdated();
});
var _resolveTaskPromise = () => {
  if (!invalidatedWebComponents.isEmpty()) {
    return;
  }
  if (renderTaskPromiseResolve) {
    renderTaskPromiseResolve();
    renderTaskPromiseResolve = void 0;
    renderTaskPromise = void 0;
  }
};
var reRenderAllUI5Elements = (filters) => __async(void 0, null, function* () {
  registeredElements.forEach((element) => {
    const ctor = element.constructor;
    const tag = ctor.getMetadata().getTag();
    const rtlAware = isRtlAware(ctor);
    const languageAware = ctor.getMetadata().isLanguageAware();
    const themeAware = ctor.getMetadata().isThemeAware();
    if (!filters || filters.tag === tag || filters.rtlAware && rtlAware || filters.languageAware && languageAware || filters.themeAware && themeAware) {
      renderDeferred(element);
    }
  });
  yield renderFinished();
});

// node_modules/@ui5/webcomponents-base/dist/Device.js
var isSSR = typeof document === "undefined";
var internals = {
  get userAgent() {
    if (isSSR) {
      return "";
    }
    return navigator.userAgent;
  },
  get touch() {
    if (isSSR) {
      return false;
    }
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
  get ie() {
    if (isSSR) {
      return false;
    }
    return /(msie|trident)/i.test(internals.userAgent);
  },
  get chrome() {
    if (isSSR) {
      return false;
    }
    return !internals.ie && /(Chrome|CriOS)/.test(internals.userAgent);
  },
  get firefox() {
    if (isSSR) {
      return false;
    }
    return /Firefox/.test(internals.userAgent);
  },
  get safari() {
    if (isSSR) {
      return false;
    }
    return !internals.ie && !internals.chrome && /(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(internals.userAgent);
  },
  get webkit() {
    if (isSSR) {
      return false;
    }
    return !internals.ie && /webkit/.test(internals.userAgent);
  },
  get windows() {
    if (isSSR) {
      return false;
    }
    return navigator.platform.indexOf("Win") !== -1;
  },
  get macOS() {
    if (isSSR) {
      return false;
    }
    return !!navigator.userAgent.match(/Macintosh|Mac OS X/i);
  },
  get iOS() {
    if (isSSR) {
      return false;
    }
    return !!navigator.platform.match(/iPhone|iPad|iPod/) || !!(internals.userAgent.match(/Mac/) && "ontouchend" in document);
  },
  get android() {
    if (isSSR) {
      return false;
    }
    return !internals.windows && /Android/.test(internals.userAgent);
  },
  get androidPhone() {
    if (isSSR) {
      return false;
    }
    return internals.android && /(?=android)(?=.*mobile)/i.test(internals.userAgent);
  },
  get ipad() {
    if (isSSR) {
      return false;
    }
    return /ipad/i.test(internals.userAgent) || /Macintosh/i.test(internals.userAgent) && "ontouchend" in document;
  }
};
var windowsVersion;
var webkitVersion;
var tablet;
var isWindows8OrAbove = () => {
  if (isSSR) {
    return false;
  }
  if (!internals.windows) {
    return false;
  }
  if (windowsVersion === void 0) {
    const matches = internals.userAgent.match(/Windows NT (\d+).(\d)/);
    windowsVersion = matches ? parseFloat(matches[1]) : 0;
  }
  return windowsVersion >= 8;
};
var isWebkit537OrAbove = () => {
  if (isSSR) {
    return false;
  }
  if (!internals.webkit) {
    return false;
  }
  if (webkitVersion === void 0) {
    const matches = internals.userAgent.match(/(webkit)[ /]([\w.]+)/);
    webkitVersion = matches ? parseFloat(matches[1]) : 0;
  }
  return webkitVersion >= 537.1;
};
var detectTablet = () => {
  if (isSSR) {
    return false;
  }
  if (tablet !== void 0) {
    return;
  }
  if (internals.ipad) {
    tablet = true;
    return;
  }
  if (internals.touch) {
    if (isWindows8OrAbove()) {
      tablet = true;
      return;
    }
    if (internals.chrome && internals.android) {
      tablet = !/Mobile Safari\/[.0-9]+/.test(internals.userAgent);
      return;
    }
    let densityFactor = window.devicePixelRatio ? window.devicePixelRatio : 1;
    if (internals.android && isWebkit537OrAbove()) {
      densityFactor = 1;
    }
    tablet = Math.min(window.screen.width / densityFactor, window.screen.height / densityFactor) >= 600;
    return;
  }
  tablet = internals.ie && internals.userAgent.indexOf("Touch") !== -1 || internals.android && !internals.androidPhone;
};
var supportsTouch = () => internals.touch;
var isSafari = () => internals.safari;
var isChrome = () => internals.chrome;
var isTablet = () => {
  detectTablet();
  return (internals.touch || isWindows8OrAbove()) && tablet;
};
var isPhone = () => {
  detectTablet();
  return internals.touch && !tablet;
};
var isDesktop = () => {
  if (isSSR) {
    return false;
  }
  return !isTablet() && !isPhone() || isWindows8OrAbove();
};
var isIOS = () => {
  return internals.iOS;
};
var isAndroid = () => {
  return internals.android || internals.androidPhone;
};

// node_modules/@ui5/webcomponents-base/dist/thirdparty/isPlainObject.js
var class2type = {};
var hasOwn = class2type.hasOwnProperty;
var toString = class2type.toString;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call(Object);
var fnIsPlainObject = function(obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  proto = Object.getPrototypeOf(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
};
var isPlainObject_default = fnIsPlainObject;

// node_modules/@ui5/webcomponents-base/dist/thirdparty/_merge.js
var oToken = /* @__PURE__ */ Object.create(null);
var fnMerge = function(arg1, arg2, arg3, arg4) {
  var src, copyIsArray, copy, name, options, clone, target = arguments[2] || {}, i = 3, length = arguments.length, deep = arguments[0] || false, skipToken = arguments[1] ? void 0 : oToken;
  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (name === "__proto__" || target === copy) {
          continue;
        }
        if (deep && copy && (isPlainObject_default(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject_default(src) ? src : {};
          }
          target[name] = fnMerge(deep, arguments[1], clone, copy);
        } else if (copy !== skipToken) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
};
var merge_default = fnMerge;

// node_modules/@ui5/webcomponents-base/dist/thirdparty/merge.js
var fnMerge2 = function(arg1, arg2) {
  return merge_default(true, false, ...arguments);
};
var merge_default2 = fnMerge2;

// node_modules/@ui5/webcomponents-base/dist/generated/AssetParameters.js
var assetParameters = {
  "themes": {
    "default": "sap_horizon",
    "all": ["sap_fiori_3", "sap_fiori_3_dark", "sap_belize", "sap_belize_hcb", "sap_belize_hcw", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw", "sap_horizon_exp", "sap_horizon_dark_exp", "sap_horizon_hcb_exp", "sap_horizon_hcw_exp"]
  },
  "languages": {
    "default": "en",
    "all": ["ar", "bg", "ca", "cnr", "cs", "cy", "da", "de", "el", "en", "en_GB", "en_US_sappsd", "en_US_saprigi", "en_US_saptrc", "es", "es_MX", "et", "fi", "fr", "fr_CA", "hi", "hr", "hu", "id", "it", "iw", "ja", "kk", "ko", "lt", "lv", "mk", "ms", "nl", "no", "pl", "pt_PT", "pt", "ro", "ru", "sh", "sk", "sl", "sr", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_TW"]
  },
  "locales": {
    "default": "en",
    "all": ["ar", "ar_EG", "ar_SA", "bg", "ca", "cnr", "cs", "da", "de", "de_AT", "de_CH", "el", "el_CY", "en", "en_AU", "en_GB", "en_HK", "en_IE", "en_IN", "en_NZ", "en_PG", "en_SG", "en_ZA", "es", "es_AR", "es_BO", "es_CL", "es_CO", "es_MX", "es_PE", "es_UY", "es_VE", "et", "fa", "fi", "fr", "fr_BE", "fr_CA", "fr_CH", "fr_LU", "he", "hi", "hr", "hu", "id", "it", "it_CH", "ja", "kk", "ko", "lt", "lv", "ms", "mk", "nb", "nl", "nl_BE", "pl", "pt", "pt_PT", "ro", "ru", "ru_UA", "sk", "sl", "sr", "sr_Latn", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_HK", "zh_SG", "zh_TW"]
  }
};
var DEFAULT_THEME = assetParameters.themes.default;
var SUPPORTED_THEMES = assetParameters.themes.all;
var DEFAULT_LANGUAGE = assetParameters.languages.default;
var DEFAULT_LOCALE = assetParameters.locales.default;
var SUPPORTED_LOCALES = assetParameters.locales.all;

// node_modules/@ui5/webcomponents-base/dist/types/AnimationMode.js
var AnimationMode;
(function(AnimationMode2) {
  AnimationMode2["Full"] = "full";
  AnimationMode2["Basic"] = "basic";
  AnimationMode2["Minimal"] = "minimal";
  AnimationMode2["None"] = "none";
})(AnimationMode || (AnimationMode = {}));
var AnimationMode_default = AnimationMode;

// node_modules/@ui5/webcomponents-base/dist/InitialConfiguration.js
var initialized = false;
var initialConfig = {
  animationMode: AnimationMode_default.Full,
  theme: DEFAULT_THEME,
  themeRoot: void 0,
  rtl: void 0,
  language: void 0,
  timezone: void 0,
  calendarType: void 0,
  secondaryCalendarType: void 0,
  noConflict: false,
  formatSettings: {},
  fetchDefaultLanguage: false,
  enableDefaultTooltips: true
};
var getTheme = () => {
  initConfiguration();
  return initialConfig.theme;
};
var getThemeRoot = () => {
  initConfiguration();
  return initialConfig.themeRoot;
};
var getLanguage = () => {
  initConfiguration();
  return initialConfig.language;
};
var getFetchDefaultLanguage = () => {
  initConfiguration();
  return initialConfig.fetchDefaultLanguage;
};
var getNoConflict = () => {
  initConfiguration();
  return initialConfig.noConflict;
};
var getEnableDefaultTooltips = () => {
  initConfiguration();
  return initialConfig.enableDefaultTooltips;
};
var booleanMapping = /* @__PURE__ */ new Map();
booleanMapping.set("true", true);
booleanMapping.set("false", false);
var parseConfigurationScript = () => {
  const configScript = document.querySelector("[data-ui5-config]") || document.querySelector("[data-id='sap-ui-config']");
  let configJSON;
  if (configScript) {
    try {
      configJSON = JSON.parse(configScript.innerHTML);
    } catch (err) {
      console.warn("Incorrect data-sap-ui-config format. Please use JSON");
    }
    if (configJSON) {
      initialConfig = merge_default2(initialConfig, configJSON);
    }
  }
};
var parseURLParameters = () => {
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    const parts = key.split("sap-").length;
    if (parts === 0 || parts === key.split("sap-ui-").length) {
      return;
    }
    applyURLParam(key, value, "sap");
  });
  params.forEach((value, key) => {
    if (!key.startsWith("sap-ui")) {
      return;
    }
    applyURLParam(key, value, "sap-ui");
  });
};
var normalizeThemeRootParamValue = (value) => {
  const themeRoot = value.split("@")[1];
  return themeRoot;
};
var normalizeThemeParamValue = (param, value) => {
  if (param === "theme" && value.includes("@")) {
    return value.split("@")[0];
  }
  return value;
};
var applyURLParam = (key, value, paramType) => {
  const lowerCaseValue = value.toLowerCase();
  const param = key.split(`${paramType}-`)[1];
  if (booleanMapping.has(value)) {
    value = booleanMapping.get(lowerCaseValue);
  }
  if (param === "theme") {
    initialConfig.theme = normalizeThemeParamValue(param, value);
    if (value && value.includes("@")) {
      initialConfig.themeRoot = normalizeThemeRootParamValue(value);
    }
  } else {
    initialConfig[param] = value;
  }
};
var applyOpenUI5Configuration = () => {
  const openUI5Support = getFeature("OpenUI5Support");
  if (!openUI5Support || !openUI5Support.isOpenUI5Detected()) {
    return;
  }
  const OpenUI5Config = openUI5Support.getConfigurationSettingsObject();
  initialConfig = merge_default2(initialConfig, OpenUI5Config);
};
var initConfiguration = () => {
  if (typeof document === "undefined" || initialized) {
    return;
  }
  parseConfigurationScript();
  parseURLParameters();
  applyOpenUI5Configuration();
  initialized = true;
};

// node_modules/@ui5/webcomponents-base/dist/util/createStyleInHead.js
var createStyleInHead = (cssText, attributes) => {
  const style = document.createElement("style");
  style.type = "text/css";
  if (attributes) {
    Object.entries(attributes).forEach((pair) => style.setAttribute(...pair));
  }
  style.textContent = cssText;
  document.head.appendChild(style);
  return style;
};
var createStyleInHead_default = createStyleInHead;

// node_modules/@ui5/webcomponents-base/dist/util/createLinkInHead.js
var createLinkInHead = (href, attributes) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  if (attributes) {
    Object.entries(attributes).forEach((pair) => link.setAttribute(...pair));
  }
  link.href = href;
  document.head.appendChild(link);
  return new Promise((resolve) => {
    link.addEventListener("load", resolve);
    link.addEventListener("error", resolve);
  });
};
var createLinkInHead_default = createLinkInHead;

// node_modules/@ui5/webcomponents-base/dist/CSP.js
var roots = /* @__PURE__ */ new Map();
var useLinks = false;
var preloadLinks = true;
var getUrl = (packageName, path) => {
  const packageCSSRoot = roots.get(packageName);
  if (!packageCSSRoot) {
    console.warn(`Root path to the CSS resources ${packageName} not provided - use "setPackageCSSRoot" to provide the root.`);
    return "";
  }
  return `${packageCSSRoot}${path}`;
};
var shouldUseLinks = () => {
  return useLinks;
};
var shouldPreloadLinks = () => {
  return preloadLinks;
};

// node_modules/@ui5/webcomponents-base/dist/ManagedStyles.js
var isSSR2 = typeof document === "undefined";
var getStyleId = (name, value) => {
  return value ? `${name}|${value}` : name;
};
var shouldUpdate = (runtimeIndex) => {
  if (runtimeIndex === void 0) {
    return true;
  }
  return compareRuntimes(getCurrentRuntimeIndex(), parseInt(runtimeIndex)) === 1;
};
var createStyle = (data, name, value = "", theme) => {
  const content = typeof data === "string" ? data : data.content;
  const currentRuntimeIndex2 = getCurrentRuntimeIndex();
  if (shouldUseLinks()) {
    const attributes = {};
    attributes[name] = value;
    if (theme) {
      attributes["data-ui5-runtime-index"] = currentRuntimeIndex2;
      attributes["data-ui5-theme"] = theme;
    }
    const href = getUrl(data.packageName, data.fileName);
    createLinkInHead_default(href, attributes);
  } else if (document.adoptedStyleSheets && !isSafari()) {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(content);
    stylesheet._ui5StyleId = getStyleId(name, value);
    if (theme) {
      stylesheet._ui5RuntimeIndex = currentRuntimeIndex2;
      stylesheet._ui5Theme = theme;
    }
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
  } else {
    const attributes = {};
    attributes[name] = value;
    if (theme) {
      attributes["data-ui5-runtime-index"] = currentRuntimeIndex2;
      attributes["data-ui5-theme"] = theme;
    }
    createStyleInHead_default(content, attributes);
  }
};
var updateStyle = (data, name, value = "", theme) => {
  const content = typeof data === "string" ? data : data.content;
  const currentRuntimeIndex2 = getCurrentRuntimeIndex();
  if (shouldUseLinks()) {
    const link = document.querySelector(`head>link[${name}="${value}"]`);
    const href = getUrl(data.packageName, data.fileName);
    if (!theme) {
      link.href = href;
    } else {
      const linkRuntimeIndex = link.getAttribute("data-ui5-runtime-index") || void 0;
      const linkTheme = link.getAttribute("data-ui5-theme");
      if (linkTheme !== theme || shouldUpdate(linkRuntimeIndex)) {
        link.href = href;
        link.setAttribute("data-ui5-runtime-index", String(currentRuntimeIndex2));
        link.setAttribute("data-ui5-theme", theme);
      }
    }
  } else if (document.adoptedStyleSheets && !isSafari()) {
    const stylesheet = document.adoptedStyleSheets.find((sh) => sh._ui5StyleId === getStyleId(name, value));
    if (!stylesheet) {
      return;
    }
    if (!theme) {
      stylesheet.replaceSync(content || "");
    } else {
      const stylesheetRuntimeIndex = stylesheet._ui5RuntimeIndex;
      const stylesheetTheme = stylesheet._ui5Theme;
      if (stylesheetTheme !== theme || shouldUpdate(stylesheetRuntimeIndex)) {
        stylesheet.replaceSync(content || "");
        stylesheet._ui5RuntimeIndex = String(currentRuntimeIndex2);
        stylesheet._ui5Theme = theme;
      }
    }
  } else {
    const style = document.querySelector(`head>style[${name}="${value}"]`);
    if (!style) {
      return;
    }
    if (!theme) {
      style.textContent = content || "";
    } else {
      const styleRuntimeIndex = style.getAttribute("data-ui5-runtime-index") || void 0;
      const styleTheme = style.getAttribute("data-ui5-theme");
      if (styleTheme !== theme || shouldUpdate(styleRuntimeIndex)) {
        style.textContent = content || "";
        style.setAttribute("data-ui5-runtime-index", String(currentRuntimeIndex2));
        style.setAttribute("data-ui5-theme", theme);
      }
    }
  }
};
var hasStyle = (name, value = "") => {
  if (isSSR2) {
    return true;
  }
  if (shouldUseLinks()) {
    return !!document.querySelector(`head>link[${name}="${value}"]`);
  }
  const styleElement = document.querySelector(`head>style[${name}="${value}"]`);
  if (document.adoptedStyleSheets && !isSafari()) {
    return !!styleElement || !!document.adoptedStyleSheets.find((sh) => sh._ui5StyleId === getStyleId(name, value));
  }
  return !!styleElement;
};
var removeStyle = (name, value = "") => {
  if (shouldUseLinks()) {
    const linkElement = document.querySelector(`head>link[${name}="${value}"]`);
    linkElement?.parentElement?.removeChild(linkElement);
  } else if (document.adoptedStyleSheets && !isSafari()) {
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter((sh) => sh._ui5StyleId !== getStyleId(name, value));
  } else {
    const styleElement = document.querySelector(`head > style[${name}="${value}"]`);
    styleElement?.parentElement?.removeChild(styleElement);
  }
};
var createOrUpdateStyle = (data, name, value = "", theme) => {
  if (hasStyle(name, value)) {
    updateStyle(data, name, value, theme);
  } else {
    createStyle(data, name, value, theme);
  }
};
var mergeStyles = (style1, style2) => {
  if (style1 === void 0) {
    return style2;
  }
  if (style2 === void 0) {
    return style1;
  }
  const style2Content = typeof style2 === "string" ? style2 : style2.content;
  if (typeof style1 === "string") {
    return `${style1} ${style2Content}`;
  }
  return {
    content: `${style1.content} ${style2Content}`,
    packageName: style1.packageName,
    fileName: style1.fileName
  };
};

// node_modules/@ui5/webcomponents-base/dist/theming/ThemeRegistered.js
var eventProvider2 = new EventProvider_default();
var THEME_REGISTERED = "themeRegistered";
var attachThemeRegistered = (listener) => {
  eventProvider2.attachEvent(THEME_REGISTERED, listener);
};
var fireThemeRegistered = (theme) => {
  return eventProvider2.fireEvent(THEME_REGISTERED, theme);
};

// node_modules/@ui5/webcomponents-base/dist/asset-registries/Themes.js
var themeStyles = /* @__PURE__ */ new Map();
var loaders = /* @__PURE__ */ new Map();
var customLoaders = /* @__PURE__ */ new Map();
var registeredPackages = /* @__PURE__ */ new Set();
var registeredThemes = /* @__PURE__ */ new Set();
var registerThemePropertiesLoader = (packageName, themeName, loader) => {
  loaders.set(`${packageName}/${themeName}`, loader);
  registeredPackages.add(packageName);
  registeredThemes.add(themeName);
  fireThemeRegistered(themeName);
};
var getThemeProperties = (packageName, themeName, externalThemeName) => __async(void 0, null, function* () {
  const cacheKey = `${packageName}_${themeName}_${externalThemeName || ""}`;
  const cachedStyleData = themeStyles.get(cacheKey);
  if (cachedStyleData !== void 0) {
    return cachedStyleData;
  }
  if (!registeredThemes.has(themeName)) {
    const regThemesStr = [...registeredThemes.values()].join(", ");
    console.warn(`You have requested a non-registered theme ${themeName} - falling back to ${DEFAULT_THEME}. Registered themes are: ${regThemesStr}`);
    return _getThemeProperties(packageName, DEFAULT_THEME);
  }
  const [style, customStyle] = yield Promise.all([_getThemeProperties(packageName, themeName), externalThemeName ? _getThemeProperties(packageName, externalThemeName, true) : void 0]);
  const styleData4 = mergeStyles(style, customStyle);
  if (styleData4) {
    themeStyles.set(cacheKey, styleData4);
  }
  return styleData4;
});
var _getThemeProperties = (packageName, themeName, forCustomTheme = false) => __async(void 0, null, function* () {
  const loadersMap = forCustomTheme ? customLoaders : loaders;
  const loader = loadersMap.get(`${packageName}/${themeName}`);
  if (!loader) {
    if (!forCustomTheme) {
      console.error(`Theme [${themeName}] not registered for package [${packageName}]`);
    }
    return;
  }
  let data;
  try {
    data = yield loader(themeName);
  } catch (error) {
    const e = error;
    console.error(packageName, e.message);
    return;
  }
  const themeProps = data._ || data;
  return themeProps;
});
var getRegisteredPackages = () => {
  return registeredPackages;
};
var isThemeRegistered = (theme) => {
  return registeredThemes.has(theme);
};

// node_modules/@ui5/webcomponents-base/dist/util/whenDOMReady.js
var whenDOMReady = () => {
  return new Promise((resolve) => {
    if (document.body) {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    }
  });
};
var whenDOMReady_default = whenDOMReady;

// node_modules/@ui5/webcomponents-base/dist/generated/css/FontFace.css.js
var styleData = {
  packageName: "@ui5/webcomponents-base",
  fileName: "FontFace.css",
  content: `@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`
};
var FontFace_css_default = styleData;

// node_modules/@ui5/webcomponents-base/dist/generated/css/OverrideFontFace.css.js
var styleData2 = {
  packageName: "@ui5/webcomponents-base",
  fileName: "OverrideFontFace.css",
  content: `@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}`
};
var OverrideFontFace_css_default = styleData2;

// node_modules/@ui5/webcomponents-base/dist/FontFace.js
var insertFontFace = () => {
  const openUI5Support = getFeature("OpenUI5Support");
  if (!openUI5Support || !openUI5Support.isOpenUI5Detected()) {
    insertMainFontFace();
  }
  insertOverrideFontFace();
};
var insertMainFontFace = () => {
  if (!hasStyle("data-ui5-font-face")) {
    createStyle(FontFace_css_default, "data-ui5-font-face");
  }
};
var insertOverrideFontFace = () => {
  if (!hasStyle("data-ui5-font-face-override")) {
    createStyle(OverrideFontFace_css_default, "data-ui5-font-face-override");
  }
};
var FontFace_default = insertFontFace;

// node_modules/@ui5/webcomponents-base/dist/generated/css/SystemCSSVars.css.js
var styleData3 = {
  packageName: "@ui5/webcomponents-base",
  fileName: "SystemCSSVars.css",
  content: `:root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}`
};
var SystemCSSVars_css_default = styleData3;

// node_modules/@ui5/webcomponents-base/dist/SystemCSSVars.js
var insertSystemCSSVars = () => {
  if (!hasStyle("data-ui5-system-css-vars")) {
    createStyle(SystemCSSVars_css_default, "data-ui5-system-css-vars");
  }
};
var SystemCSSVars_default = insertSystemCSSVars;

// node_modules/@ui5/webcomponents-base/dist/theming/getThemeDesignerTheme.js
var warnings = /* @__PURE__ */ new Set();
var getThemeMetadata = () => {
  let el = document.querySelector(".sapThemeMetaData-Base-baseLib") || document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");
  if (el) {
    return getComputedStyle(el).backgroundImage;
  }
  el = document.createElement("span");
  el.style.display = "none";
  el.classList.add("sapThemeMetaData-Base-baseLib");
  document.body.appendChild(el);
  let metadata = getComputedStyle(el).backgroundImage;
  if (metadata === "none") {
    el.classList.add("sapThemeMetaData-UI5-sap-ui-core");
    metadata = getComputedStyle(el).backgroundImage;
  }
  document.body.removeChild(el);
  return metadata;
};
var parseThemeMetadata = (metadataString) => {
  const params = /\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(metadataString);
  if (params && params.length >= 2) {
    let paramsString = params[1];
    paramsString = paramsString.replace(/\\"/g, `"`);
    if (paramsString.charAt(0) !== "{" && paramsString.charAt(paramsString.length - 1) !== "}") {
      try {
        paramsString = decodeURIComponent(paramsString);
      } catch (ex) {
        if (!warnings.has("decode")) {
          console.warn("Malformed theme metadata string, unable to decodeURIComponent");
          warnings.add("decode");
        }
        return;
      }
    }
    try {
      return JSON.parse(paramsString);
    } catch (ex) {
      if (!warnings.has("parse")) {
        console.warn("Malformed theme metadata string, unable to parse JSON");
        warnings.add("parse");
      }
    }
  }
};
var processThemeMetadata = (metadata) => {
  let themeName;
  let baseThemeName;
  try {
    themeName = metadata.Path.match(/\.([^.]+)\.css_variables$/)[1];
    baseThemeName = metadata.Extends[0];
  } catch (ex) {
    if (!warnings.has("object")) {
      console.warn("Malformed theme metadata Object", metadata);
      warnings.add("object");
    }
    return;
  }
  return {
    themeName,
    baseThemeName
  };
};
var getThemeDesignerTheme = () => {
  const metadataString = getThemeMetadata();
  if (!metadataString || metadataString === "none") {
    return;
  }
  const metadata = parseThemeMetadata(metadataString);
  if (metadata) {
    return processThemeMetadata(metadata);
  }
};
var getThemeDesignerTheme_default = getThemeDesignerTheme;

// node_modules/@ui5/webcomponents-base/dist/theming/ThemeLoaded.js
var eventProvider3 = new EventProvider_default();
var THEME_LOADED = "themeLoaded";
var fireThemeLoaded = (theme) => {
  return eventProvider3.fireEvent(THEME_LOADED, theme);
};

// node_modules/@ui5/webcomponents-base/dist/validateThemeRoot.js
var isSSR3 = typeof document === "undefined";
var getLocationHref = () => {
  if (isSSR3) {
    return "";
  }
  return window.location.href;
};
var getMetaTagValue = (metaTagName) => {
  const metaTag = document.querySelector(`META[name="${metaTagName}"]`), metaTagContent = metaTag && metaTag.getAttribute("content");
  return metaTagContent;
};
var validateThemeOrigin = (origin, isSameOrigin = false) => {
  const allowedOrigins = getMetaTagValue("sap-allowed-theme-origins") ?? getMetaTagValue("sap-allowedThemeOrigins");
  if (!allowedOrigins) {
    return false;
  }
  if (isSameOrigin) {
    return true;
  }
  return allowedOrigins.split(",").some((allowedOrigin) => {
    return allowedOrigin === "*" || origin === allowedOrigin.trim();
  });
};
var validateThemeRoot = (themeRoot) => {
  let resultUrl;
  let isSameOrigin = false;
  try {
    if (themeRoot.startsWith(".") || themeRoot.startsWith("/") && !themeRoot.startsWith("//")) {
      resultUrl = new URL(themeRoot, getLocationHref()).toString();
      isSameOrigin = true;
    } else {
      const themeRootURL = themeRoot.startsWith("//") ? new URL(themeRoot, getLocationHref()) : new URL(themeRoot);
      const origin = themeRootURL.origin;
      const currentOrigin = new URL(getLocationHref()).origin;
      isSameOrigin = origin === currentOrigin;
      if (origin && validateThemeOrigin(origin, isSameOrigin)) {
        resultUrl = themeRootURL.toString();
      } else {
        return void 0;
      }
    }
    if (!resultUrl.endsWith("/")) {
      resultUrl = `${resultUrl}/`;
    }
    return `${resultUrl}UI5/`;
  } catch (e) {
    return void 0;
  }
};
var validateThemeRoot_default = validateThemeRoot;

// node_modules/@ui5/webcomponents-base/dist/config/ThemeRoot.js
var currThemeRoot;
var getThemeRoot2 = () => {
  if (currThemeRoot === void 0) {
    currThemeRoot = getThemeRoot();
  }
  return currThemeRoot;
};
var formatThemeLink = (theme, validatedThemeRoot) => {
  return `${validatedThemeRoot}Base/baseLib/${theme}/css_variables.css`;
};
var attachCustomThemeStylesToHead = (theme) => __async(void 0, null, function* () {
  const link = document.querySelector(`[sap-ui-webcomponents-theme="${theme}"]`);
  if (link) {
    document.head.removeChild(link);
  }
  const themeRoot = getThemeRoot2();
  if (!themeRoot) {
    return;
  }
  const validatedThemeRoot = validateThemeRoot_default(themeRoot);
  if (!validatedThemeRoot) {
    console.warn(`The ${themeRoot} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);
    return;
  }
  yield createLinkInHead_default(formatThemeLink(theme, validatedThemeRoot), {
    "sap-ui-webcomponents-theme": theme
  });
});

// node_modules/@ui5/webcomponents-base/dist/theming/applyTheme.js
var BASE_THEME_PACKAGE = "@ui5/webcomponents-theming";
var isThemeBaseRegistered = () => {
  const registeredPackages2 = getRegisteredPackages();
  return registeredPackages2.has(BASE_THEME_PACKAGE);
};
var loadThemeBase = (theme) => __async(void 0, null, function* () {
  if (!isThemeBaseRegistered()) {
    return;
  }
  const cssData = yield getThemeProperties(BASE_THEME_PACKAGE, theme);
  if (cssData) {
    createOrUpdateStyle(cssData, "data-ui5-theme-properties", BASE_THEME_PACKAGE, theme);
  }
});
var deleteThemeBase = () => {
  removeStyle("data-ui5-theme-properties", BASE_THEME_PACKAGE);
};
var loadComponentPackages = (theme, externalThemeName) => __async(void 0, null, function* () {
  const registeredPackages2 = getRegisteredPackages();
  const packagesStylesPromises = [...registeredPackages2].map((packageName) => __async(void 0, null, function* () {
    if (packageName === BASE_THEME_PACKAGE) {
      return;
    }
    const cssData = yield getThemeProperties(packageName, theme, externalThemeName);
    if (cssData) {
      createOrUpdateStyle(cssData, `data-ui5-component-properties-${getCurrentRuntimeIndex()}`, packageName);
    }
  }));
  return Promise.all(packagesStylesPromises);
});
var detectExternalTheme = (theme) => __async(void 0, null, function* () {
  const extTheme = getThemeDesignerTheme_default();
  if (extTheme) {
    return extTheme;
  }
  const openUI5Support = getFeature("OpenUI5Support");
  if (openUI5Support && openUI5Support.isOpenUI5Detected()) {
    const varsLoaded = openUI5Support.cssVariablesLoaded();
    if (varsLoaded) {
      return {
        themeName: openUI5Support.getConfigurationSettingsObject()?.theme,
        baseThemeName: ""
        // baseThemeName is only relevant for custom themes
      };
    }
  } else if (getThemeRoot2()) {
    yield attachCustomThemeStylesToHead(theme);
    return getThemeDesignerTheme_default();
  }
});
var applyTheme = (theme) => __async(void 0, null, function* () {
  const extTheme = yield detectExternalTheme(theme);
  if (!extTheme || theme !== extTheme.themeName) {
    yield loadThemeBase(theme);
  } else {
    deleteThemeBase();
  }
  const packagesTheme = isThemeRegistered(theme) ? theme : extTheme && extTheme.baseThemeName;
  yield loadComponentPackages(packagesTheme || DEFAULT_THEME, extTheme && extTheme.themeName === theme ? theme : void 0);
  fireThemeLoaded(theme);
});
var applyTheme_default = applyTheme;

// node_modules/@ui5/webcomponents-base/dist/config/Theme.js
var curTheme;
var getTheme2 = () => {
  if (curTheme === void 0) {
    curTheme = getTheme();
  }
  return curTheme;
};
var isLegacyThemeFamily = () => {
  const currentTheme = getTheme2();
  if (!isKnownTheme(currentTheme)) {
    return !getThemeDesignerTheme_default()?.baseThemeName?.startsWith("sap_horizon");
  }
  return !currentTheme.startsWith("sap_horizon");
};
var isKnownTheme = (theme) => SUPPORTED_THEMES.includes(theme);

// node_modules/@ui5/webcomponents-base/dist/Boot.js
var booted = false;
var bootPromise;
var eventProvider4 = new EventProvider_default();
var attachBoot = (listener) => {
  if (!booted) {
    eventProvider4.attachEvent("boot", listener);
    return;
  }
  listener();
};
var boot = () => __async(void 0, null, function* () {
  if (bootPromise !== void 0) {
    return bootPromise;
  }
  const bootExecutor = (resolve) => __async(void 0, null, function* () {
    registerCurrentRuntime();
    if (typeof document === "undefined") {
      resolve();
      return;
    }
    attachThemeRegistered(onThemeRegistered);
    const openUI5Support = getFeature("OpenUI5Support");
    const isOpenUI5Loaded = openUI5Support ? openUI5Support.isOpenUI5Detected() : false;
    const f6Navigation = getFeature("F6Navigation");
    if (openUI5Support) {
      yield openUI5Support.init();
    }
    if (f6Navigation && !isOpenUI5Loaded) {
      f6Navigation.init();
    }
    yield whenDOMReady_default();
    yield applyTheme_default(getTheme2());
    openUI5Support && openUI5Support.attachListeners();
    FontFace_default();
    SystemCSSVars_default();
    resolve();
    booted = true;
    yield eventProvider4.fireEventAsync("boot");
  });
  bootPromise = new Promise(bootExecutor);
  return bootPromise;
});
var onThemeRegistered = (theme) => {
  const currentTheme = getTheme2();
  if (booted && theme === currentTheme) {
    applyTheme_default(currentTheme);
  }
};

export {
  getSingletonElementInstance_default,
  getSharedResource_default,
  merge_default2 as merge_default,
  registerFeature,
  getFeature,
  DEFAULT_LANGUAGE,
  DEFAULT_LOCALE,
  getLanguage,
  getFetchDefaultLanguage,
  getNoConflict,
  getEnableDefaultTooltips,
  EventProvider_default,
  VersionInfo_default,
  registerTag,
  isTagRegistered,
  recordTagRegistrationFailure,
  markAsRtlAware,
  renderDeferred,
  renderImmediately,
  cancelRender,
  renderFinished,
  reRenderAllUI5Elements,
  createLinkInHead_default,
  getUrl,
  shouldUseLinks,
  shouldPreloadLinks,
  supportsTouch,
  isSafari,
  isChrome,
  isPhone,
  isDesktop,
  isIOS,
  isAndroid,
  createStyle,
  hasStyle,
  registerThemePropertiesLoader,
  attachBoot,
  boot,
  getTheme2 as getTheme,
  isLegacyThemeFamily
};
//# sourceMappingURL=chunk-JASJJZVS.js.map

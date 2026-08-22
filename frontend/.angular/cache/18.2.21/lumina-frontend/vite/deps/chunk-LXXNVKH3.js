import {
  DataType_default,
  Integer_default
} from "./chunk-YJ42QTVF.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-BY3NBTSA.js";
import {
  ResizeHandler_default
} from "./chunk-FMNTYMAV.js";
import {
  event_default
} from "./chunk-4CCMOZQP.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  isEnter,
  isEscape,
  isTabPrevious,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  styleMap
} from "./chunk-S2KYTLGV.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  instanceOfUI5Element,
  property_default
} from "./chunk-45WMDHUI.js";
import {
  createStyle,
  getFeature,
  getSharedResource_default,
  hasStyle,
  isChrome,
  isIOS,
  isSafari,
  registerThemePropertiesLoader,
  renderFinished
} from "./chunk-KIL2GIL2.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-5K356HEJ.js";

// node_modules/@ui5/webcomponents-base/dist/util/getActiveElement.js
var getActiveElement = () => {
  let element = document.activeElement;
  while (element && element.shadowRoot && element.shadowRoot.activeElement) {
    element = element.shadowRoot.activeElement;
  }
  return element;
};
var getActiveElement_default = getActiveElement;

// node_modules/@ui5/webcomponents-base/dist/util/getEffectiveScrollbarStyle.js
var NO_SCROLLBAR_STYLE_CLASS = "ui5-content-native-scrollbars";
var isSSR = typeof document === "undefined";
var getEffectiveScrollbarStyle = () => {
  if (isSSR || document.body.classList.contains(NO_SCROLLBAR_STYLE_CLASS)) {
    return "";
  }
  return `::-webkit-scrollbar:horizontal {
	height: var(--sapScrollBar_Dimension);
}

::-webkit-scrollbar:vertical {
	width: var(--sapScrollBar_Dimension);
}

::-webkit-scrollbar {
	background-color: var(--sapScrollBar_TrackColor);
	border-left: var(--browser_scrollbar_border, none);
}

::-webkit-scrollbar-thumb {
	border-radius: var(--browser_scrollbar_border_radius, var(--sapElement_BorderCornerRadius));
	background-color: var(--sapScrollBar_FaceColor);
}

::-webkit-scrollbar-thumb:hover {
	background-color: var(--sapScrollBar_Hover_FaceColor);
}

::-webkit-scrollbar-corner {
	background-color: var(--sapScrollBar_TrackColor);
}`;
};
var getEffectiveScrollbarStyle_default = getEffectiveScrollbarStyle;

// node_modules/@ui5/webcomponents-base/dist/types/DOMReference.js
var DOMReference = class extends DataType_default {
  static isValid(value) {
    return typeof value === "string" || value instanceof HTMLElement;
  }
  static propertyToAttribute(propertyValue) {
    if (propertyValue instanceof HTMLElement) {
      return null;
    }
    return propertyValue;
  }
};
var DOMReference_default = DOMReference;

// node_modules/@ui5/webcomponents-base/dist/util/PopupUtils.js
var popupUtilsData = getSharedResource_default("PopupUtilsData", {
  currentZIndex: 100
});
var getFocusedElement = () => {
  const element = getActiveElement_default();
  return element && typeof element.focus === "function" ? element : null;
};
var isFocusedElementWithinNode = (node) => {
  const fe = getFocusedElement();
  if (fe) {
    return isNodeContainedWithin(node, fe);
  }
  return false;
};
var isNodeContainedWithin = (parent, child) => {
  let currentNode = parent;
  if (currentNode.shadowRoot) {
    const children = Array.from(currentNode.shadowRoot.children);
    currentNode = children.find((n) => n.localName !== "style");
    if (!currentNode) {
      return false;
    }
  }
  if (currentNode === child) {
    return true;
  }
  const childNodes = currentNode.localName === "slot" ? currentNode.assignedNodes() : currentNode.children;
  if (childNodes) {
    return Array.from(childNodes).some((n) => isNodeContainedWithin(n, child));
  }
  return false;
};
var isPointInRect = (x, y, rect) => {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};
var isClickInRect = (e, rect) => {
  let x;
  let y;
  if (e instanceof MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  } else {
    const touch = e.touches[0];
    x = touch.clientX;
    y = touch.clientY;
  }
  return isPointInRect(x, y, rect);
};
function instanceOfPopup(object) {
  return "isUI5Element" in object && "_show" in object;
}
var getClosedPopupParent = (el) => {
  const parent = el.parentElement || el.getRootNode && el.getRootNode().host;
  if (parent && (instanceOfPopup(parent) || parent === document.documentElement)) {
    return parent;
  }
  return getClosedPopupParent(parent);
};
var getNextZIndex = () => {
  const openUI5Support = getFeature("OpenUI5Support");
  if (openUI5Support && openUI5Support.isOpenUI5Detected()) {
    return openUI5Support.getNextZIndex();
  }
  popupUtilsData.currentZIndex += 2;
  return popupUtilsData.currentZIndex;
};

// node_modules/@ui5/webcomponents-base/dist/util/clamp.js
var clamp = (val, min, max) => {
  return Math.min(Math.max(val, min), Math.max(min, max));
};
var clamp_default = clamp;

// node_modules/@ui5/webcomponents-base/dist/util/isElementContainingBlock.js
var isElementContainingBlock = (el) => {
  const computedStyle = getComputedStyle(el);
  return ["size", "inline-size"].indexOf(computedStyle.containerType) > -1 || ["transform", "perspective"].indexOf(computedStyle.willChange) > -1 || ["layout", "paint", "strict", "content"].indexOf(computedStyle.contain) > -1 || computedStyle.transform && computedStyle.transform !== "none" || computedStyle.perspective && computedStyle.perspective !== "none" || computedStyle.backdropFilter && computedStyle.backdropFilter !== "none";
};
var isElementContainingBlock_default = isElementContainingBlock;

// node_modules/@ui5/webcomponents-base/dist/util/getParentElement.js
var getParentElement = (el) => {
  return el.parentElement ? el.parentNode : el.parentNode.host;
};
var getParentElement_default = getParentElement;

// node_modules/@ui5/webcomponents-base/dist/util/isElementHidden.js
var isElementHidden = (el) => {
  if (el.nodeName === "SLOT") {
    return false;
  }
  return el.offsetWidth <= 0 && el.offsetHeight <= 0 || el.style && el.style.visibility === "hidden";
};
var isElementHidden_default = isElementHidden;

// node_modules/@ui5/webcomponents-base/dist/util/isElementClickable.js
var rClickable = /^(?:a|area)$/i;
var rFocusable = /^(?:input|select|textarea|button)$/i;
var isElementClickable = (el) => {
  if (el.disabled) {
    return false;
  }
  const tabIndex = el.getAttribute("tabindex");
  if (tabIndex !== null && tabIndex !== void 0) {
    return parseInt(tabIndex) >= 0;
  }
  return rFocusable.test(el.nodeName) || rClickable.test(el.nodeName) && !!el.href;
};
var isElementClickable_default = isElementClickable;

// node_modules/@ui5/webcomponents-base/dist/util/FocusableElements.js
var isFocusTrap = (el) => {
  return el.hasAttribute("data-ui5-focus-trap");
};
var isScrollable = (el) => {
  const computedStyle = getComputedStyle(el);
  return el.scrollHeight > el.clientHeight && ["scroll", "auto"].indexOf(computedStyle.overflowY) >= 0 || el.scrollWidth > el.clientWidth && ["scroll", "auto"].indexOf(computedStyle.overflowX) >= 0;
};
var getFirstFocusableElement = (container, startFromContainer) => __async(void 0, null, function* () {
  if (!container || isElementHidden_default(container)) {
    return null;
  }
  return findFocusableElement(container, true, startFromContainer);
});
var getLastFocusableElement = (container, startFromContainer) => __async(void 0, null, function* () {
  if (!container || isElementHidden_default(container)) {
    return null;
  }
  return findFocusableElement(container, false, startFromContainer);
});
var isElemFocusable = (el) => {
  return el.hasAttribute("data-ui5-focus-redirect") || !isElementHidden_default(el);
};
var findFocusableElement = (container, forward, startFromContainer) => __async(void 0, null, function* () {
  let child;
  let assignedElements;
  let currentIndex = -1;
  if (container.shadowRoot) {
    child = forward ? container.shadowRoot.firstChild : container.shadowRoot.lastChild;
  } else if (container instanceof HTMLSlotElement && container.assignedNodes()) {
    assignedElements = container.assignedNodes();
    currentIndex = forward ? 0 : assignedElements.length - 1;
    child = assignedElements[currentIndex];
  } else if (startFromContainer) {
    child = container;
  } else {
    child = forward ? container.firstElementChild : container.lastElementChild;
  }
  let focusableDescendant;
  while (child) {
    const originalChild = child;
    if (instanceOfUI5Element(child)) {
      child = yield child.getFocusDomRefAsync();
    }
    if (!child) {
      return null;
    }
    if (child.nodeType === 1 && isElemFocusable(child) && !isFocusTrap(child)) {
      if (isElementClickable_default(child)) {
        return child && typeof child.focus === "function" ? child : null;
      }
      focusableDescendant = yield findFocusableElement(child, forward);
      if (!isSafari() && !focusableDescendant && isScrollable(child)) {
        return child && typeof child.focus === "function" ? child : null;
      }
      if (focusableDescendant) {
        return focusableDescendant && typeof focusableDescendant.focus === "function" ? focusableDescendant : null;
      }
    }
    child = forward ? originalChild.nextSibling : originalChild.previousSibling;
    if (assignedElements && !assignedElements[currentIndex].contains(child)) {
      currentIndex = forward ? currentIndex + 1 : currentIndex - 1;
      child = assignedElements[currentIndex];
    }
  }
  return null;
});

// node_modules/@ui5/webcomponents-base/dist/MediaRange.js
var mediaRanges = /* @__PURE__ */ new Map();
var DEAFULT_RANGE_SET = /* @__PURE__ */ new Map();
DEAFULT_RANGE_SET.set("S", [0, 599]);
DEAFULT_RANGE_SET.set("M", [600, 1023]);
DEAFULT_RANGE_SET.set("L", [1024, 1439]);
DEAFULT_RANGE_SET.set("XL", [1440, Infinity]);
var RANGESETS;
(function(RANGESETS2) {
  RANGESETS2["RANGE_4STEPS"] = "4Step";
})(RANGESETS || (RANGESETS = {}));
var initRangeSet = (name, range) => {
  mediaRanges.set(name, range);
};
var getCurrentRange = (name, width = window.innerWidth) => {
  let rangeSet = mediaRanges.get(name);
  if (!rangeSet) {
    rangeSet = mediaRanges.get(RANGESETS.RANGE_4STEPS);
  }
  let currentRangeName;
  const effectiveWidth = Math.floor(width);
  rangeSet.forEach((value, key) => {
    if (effectiveWidth >= value[0] && effectiveWidth <= value[1]) {
      currentRangeName = key;
    }
  });
  return currentRangeName || [...rangeSet.keys()][0];
};
var MediaRange = {
  RANGESETS,
  initRangeSet,
  getCurrentRange
};
MediaRange.initRangeSet(MediaRange.RANGESETS.RANGE_4STEPS, DEAFULT_RANGE_SET);
var MediaRange_default = MediaRange;

// node_modules/@ui5/webcomponents/dist/generated/templates/PopupTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<section style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToLast}></span><div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToFirst}></span></section> `;
}
var PopupTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/templates/PopupBlockLayerTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-block-layer" ?hidden=${this._blockLayerHidden} tabindex="0" style="${styleMap(this.styles.blockLayer)}" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div>`;
}
var PopupBlockLayerTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/types/PopupAccessibleRole.js
var PopupAccessibleRole;
(function(PopupAccessibleRole2) {
  PopupAccessibleRole2["None"] = "None";
  PopupAccessibleRole2["Dialog"] = "Dialog";
  PopupAccessibleRole2["AlertDialog"] = "AlertDialog";
})(PopupAccessibleRole || (PopupAccessibleRole = {}));
var PopupAccessibleRole_default = PopupAccessibleRole;

// node_modules/@ui5/webcomponents/dist/popup-utils/OpenedPopupsRegistry.js
var OpenedPopupsRegistry = getSharedResource_default("OpenedPopupsRegistry", {
  openedRegistry: []
});
var addOpenedPopup = (instance, parentPopovers = []) => {
  if (!OpenedPopupsRegistry.openedRegistry.some((popup) => popup.instance === instance)) {
    OpenedPopupsRegistry.openedRegistry.push({
      instance,
      parentPopovers
    });
  }
  _updateTopModalPopup();
  if (OpenedPopupsRegistry.openedRegistry.length === 1) {
    attachGlobalListener();
  }
};
var removeOpenedPopup = (instance) => {
  OpenedPopupsRegistry.openedRegistry = OpenedPopupsRegistry.openedRegistry.filter((el) => {
    return el.instance !== instance;
  });
  _updateTopModalPopup();
  if (!OpenedPopupsRegistry.openedRegistry.length) {
    detachGlobalListener();
  }
};
var getOpenedPopups = () => {
  return [...OpenedPopupsRegistry.openedRegistry];
};
var _keydownListener = (event) => {
  if (!OpenedPopupsRegistry.openedRegistry.length) {
    return;
  }
  if (isEscape(event)) {
    event.stopPropagation();
    OpenedPopupsRegistry.openedRegistry[OpenedPopupsRegistry.openedRegistry.length - 1].instance.close(true);
  }
};
var attachGlobalListener = () => {
  document.addEventListener("keydown", _keydownListener);
};
var detachGlobalListener = () => {
  document.removeEventListener("keydown", _keydownListener);
};
var _updateTopModalPopup = () => {
  let popup;
  let hasModal = false;
  for (let i = OpenedPopupsRegistry.openedRegistry.length - 1; i >= 0; i--) {
    popup = OpenedPopupsRegistry.openedRegistry[i].instance;
    if (!hasModal && popup.isModal) {
      popup.isTopModalPopup = true;
      hasModal = true;
    } else {
      popup.isTopModalPopup = false;
    }
  }
};

// node_modules/@ui5/webcomponents/dist/generated/themes/Popup.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Popup.css.ts",
  content: `:host{min-width:1px;display:none;position:fixed}
`
};
var Popup_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/PopupStaticAreaStyles.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/PopupStaticAreaStyles.css.ts",
  content: `.ui5-block-layer{display:none;position:fixed;background-color:var(--_ui5-v1-24-29_popup_block_layer_background);inset:-500px;outline:none;pointer-events:all;z-index:-1}.ui5-block-layer:not([hidden]){display:inline-block}
`
};
var PopupStaticAreaStyles_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/generated/themes/PopupGlobal.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/PopupGlobal.css.ts",
  content: `.ui5-popup-scroll-blocker{overflow:hidden}
`
};
var PopupGlobal_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/Popup.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Popup_1;
var createBlockingStyle = () => {
  if (!hasStyle("data-ui5-popup-scroll-blocker")) {
    createStyle(PopupGlobal_css_default, "data-ui5-popup-scroll-blocker");
  }
};
createBlockingStyle();
var pageScrollingBlockers = /* @__PURE__ */ new Set();
var Popup = Popup_1 = class Popup2 extends UI5Element_default {
  constructor() {
    super();
    this._resizeHandler = this._resize.bind(this);
  }
  onBeforeRendering() {
    this._blockLayerHidden = !this.isOpen() || !this.isTopModalPopup;
  }
  onAfterRendering() {
    this._updateMediaRange();
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._resizeHandler);
  }
  onExitDOM() {
    if (this.isOpen()) {
      Popup_1.unblockPageScrolling(this);
      this._removeOpenedPopup();
    }
    ResizeHandler_default.deregister(this, this._resizeHandler);
  }
  get _displayProp() {
    return "block";
  }
  _resize() {
    this._updateMediaRange();
  }
  /**
   * Prevents the user from interacting with the content under the block layer
   */
  _preventBlockLayerFocus(e) {
    e.preventDefault();
  }
  /**
   * Temporarily removes scrollbars from the html element
   * @protected
   */
  static blockPageScrolling(popup) {
    pageScrollingBlockers.add(popup);
    if (pageScrollingBlockers.size !== 1) {
      return;
    }
    document.documentElement.classList.add("ui5-popup-scroll-blocker");
  }
  /**
   * Restores scrollbars on the html element, if needed
   * @protected
   */
  static unblockPageScrolling(popup) {
    pageScrollingBlockers.delete(popup);
    if (pageScrollingBlockers.size !== 0) {
      return;
    }
    document.documentElement.classList.remove("ui5-popup-scroll-blocker");
  }
  _scroll(e) {
    this.fireEvent("scroll", {
      scrollTop: e.target.scrollTop,
      targetRef: e.target
    });
  }
  _onkeydown(e) {
    const isTabOutAttempt = e.target === this._root && isTabPrevious(e);
    const isEnterOnClosedPopupChild = isEnter(e) && !this.isOpen();
    if (isTabOutAttempt || isEnterOnClosedPopupChild) {
      e.preventDefault();
    }
  }
  _onfocusout(e) {
    if (!e.relatedTarget) {
      this._shouldFocusRoot = true;
    }
  }
  _onmousedown(e) {
    if (!isSafari()) {
      this._root.removeAttribute("tabindex");
    }
    if (this.shadowRoot.contains(e.target)) {
      this._shouldFocusRoot = true;
    } else {
      this._shouldFocusRoot = false;
    }
  }
  _onmouseup() {
    if (!isSafari()) {
      this._root.tabIndex = -1;
    }
    if (this._shouldFocusRoot) {
      if (isChrome()) {
        this._root.focus();
      }
      this._shouldFocusRoot = false;
    }
  }
  /**
   * Focus trapping
   * @private
   */
  forwardToFirst() {
    return __async(this, null, function* () {
      const firstFocusable = yield getFirstFocusableElement(this);
      if (firstFocusable) {
        firstFocusable.focus();
      } else {
        this._root.focus();
      }
    });
  }
  /**
   * Focus trapping
   * @private
   */
  forwardToLast() {
    return __async(this, null, function* () {
      const lastFocusable = yield getLastFocusableElement(this);
      if (lastFocusable) {
        lastFocusable.focus();
      } else {
        this._root.focus();
      }
    });
  }
  /**
   * Use this method to focus the element denoted by "initialFocus", if provided, or the first focusable element otherwise.
   * @protected
   */
  applyInitialFocus() {
    return __async(this, null, function* () {
      yield this.applyFocus();
    });
  }
  /**
   * Focuses the element denoted by `initialFocus`, if provided,
   * or the first focusable element otherwise.
   * @public
   * @returns Promise that resolves when the focus is applied
   */
  applyFocus() {
    return __async(this, null, function* () {
      yield this._waitForDomRef();
      if (this.getRootNode() === this) {
        return;
      }
      let element;
      if (this.initialFocus) {
        element = this.getRootNode().getElementById(this.initialFocus) || document.getElementById(this.initialFocus);
      }
      element = element || (yield getFirstFocusableElement(this)) || this._root;
      if (element) {
        if (element === this._root) {
          element.tabIndex = -1;
        }
        element.focus();
      }
    });
  }
  /**
   * Tells if the component is opened
   * @public
   */
  isOpen() {
    return this.opened;
  }
  isFocusWithin() {
    return isFocusedElementWithinNode(this._root);
  }
  /**
   * Shows the block layer (for modal popups only) and sets the correct z-index for the purpose of popup stacking
   * @protected
   */
  _open(preventInitialFocus) {
    return __async(this, null, function* () {
      const prevented = !this.fireEvent("before-open", {}, true, false);
      if (prevented) {
        return;
      }
      if (this.isModal && !this.shouldHideBackdrop) {
        this.getStaticAreaItemDomRef();
        this._blockLayerHidden = false;
        Popup_1.blockPageScrolling(this);
      }
      this._zIndex = getNextZIndex();
      this.style.zIndex = this._zIndex?.toString() || "";
      this._focusedElementBeforeOpen = getFocusedElement();
      this._show();
      if (this.getDomRef()) {
        this._updateMediaRange();
      }
      this._addOpenedPopup();
      this.opened = true;
      this.open = true;
      yield renderFinished();
      if (!this._disableInitialFocus && !preventInitialFocus) {
        yield this.applyInitialFocus();
      }
      this.fireEvent("after-open", {}, false, false);
    });
  }
  _updateMediaRange() {
    this.mediaRange = MediaRange_default.getCurrentRange(MediaRange_default.RANGESETS.RANGE_4STEPS, this.getDomRef().offsetWidth);
  }
  /**
   * Adds the popup to the "opened popups registry"
   * @protected
   */
  _addOpenedPopup() {
    addOpenedPopup(this);
  }
  /**
   * Closes the popup.
   * @public
   */
  close(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
    if (!this.opened) {
      return;
    }
    const prevented = !this.fireEvent("before-close", {
      escPressed
    }, true, false);
    if (prevented) {
      return;
    }
    if (this.isModal) {
      this._blockLayerHidden = true;
      Popup_1.unblockPageScrolling(this);
    }
    this.hide();
    this.opened = false;
    this.open = false;
    if (!preventRegistryUpdate) {
      this._removeOpenedPopup();
    }
    if (!this.preventFocusRestore && !preventFocusRestore) {
      this.resetFocus();
    }
    this.fireEvent("after-close", {}, false, false);
  }
  /**
   * Removes the popup from the "opened popups registry"
   * @protected
   */
  _removeOpenedPopup() {
    removeOpenedPopup(this);
  }
  /**
   * Returns the focus to the previously focused element
   * @protected
   */
  resetFocus() {
    if (!this._focusedElementBeforeOpen) {
      return;
    }
    this._focusedElementBeforeOpen.focus();
    this._focusedElementBeforeOpen = null;
  }
  /**
   * Sets "block" display to the popup. The property can be overriden by derivatives of Popup.
   * @protected
   */
  _show() {
    this.style.display = this._displayProp;
  }
  /**
   * Sets "none" display to the popup
   * @protected
   */
  hide() {
    this.style.display = "none";
  }
  /**
   * Ensures ariaLabel is never null or empty string
   * @protected
   */
  get _ariaLabel() {
    return getEffectiveAriaLabelText(this);
  }
  get _root() {
    return this.shadowRoot.querySelector(".ui5-popup-root");
  }
  get _role() {
    return this.accessibleRole === PopupAccessibleRole_default.None ? void 0 : this.accessibleRole.toLowerCase();
  }
  get _ariaModal() {
    return this.accessibleRole === PopupAccessibleRole_default.None ? void 0 : "true";
  }
  get contentDOM() {
    return this.shadowRoot.querySelector(".ui5-popup-content");
  }
  get styles() {
    return {
      root: {},
      content: {},
      blockLayer: {
        "zIndex": this._zIndex ? this._zIndex - 1 : ""
      }
    };
  }
  get classes() {
    return {
      root: {
        "ui5-popup-root": true
      },
      content: {
        "ui5-popup-content": true
      }
    };
  }
};
__decorate([property_default()], Popup.prototype, "initialFocus", void 0);
__decorate([property_default({
  type: Boolean
})], Popup.prototype, "preventFocusRestore", void 0);
__decorate([property_default({
  type: Boolean
})], Popup.prototype, "open", void 0);
__decorate([property_default({
  type: Boolean,
  noAttribute: true
})], Popup.prototype, "opened", void 0);
__decorate([property_default({
  defaultValue: void 0
})], Popup.prototype, "accessibleName", void 0);
__decorate([property_default({
  defaultValue: ""
})], Popup.prototype, "accessibleNameRef", void 0);
__decorate([property_default({
  type: PopupAccessibleRole_default,
  defaultValue: PopupAccessibleRole_default.Dialog
})], Popup.prototype, "accessibleRole", void 0);
__decorate([property_default()], Popup.prototype, "mediaRange", void 0);
__decorate([property_default({
  type: Boolean
})], Popup.prototype, "_disableInitialFocus", void 0);
__decorate([property_default({
  type: Boolean
})], Popup.prototype, "_blockLayerHidden", void 0);
__decorate([property_default({
  type: Boolean,
  noAttribute: true
})], Popup.prototype, "isTopModalPopup", void 0);
__decorate([slot_default({
  type: HTMLElement,
  "default": true
})], Popup.prototype, "content", void 0);
Popup = Popup_1 = __decorate([
  customElement_default({
    renderer: LitRenderer_default,
    styles: Popup_css_default,
    template: PopupTemplate_lit_default,
    staticAreaTemplate: PopupBlockLayerTemplate_lit_default,
    staticAreaStyles: PopupStaticAreaStyles_css_default
  }),
  event_default("before-open"),
  event_default("after-open"),
  event_default("before-close", {
    detail: {
      /**
       * @public
       */
      escPressed: {
        type: Boolean
      }
    }
  }),
  event_default("after-close"),
  event_default("scroll")
], Popup);
var Popup_default = Popup;

// node_modules/@ui5/webcomponents/dist/types/PopoverPlacementType.js
var PopoverPlacementType;
(function(PopoverPlacementType2) {
  PopoverPlacementType2["Left"] = "Left";
  PopoverPlacementType2["Right"] = "Right";
  PopoverPlacementType2["Top"] = "Top";
  PopoverPlacementType2["Bottom"] = "Bottom";
})(PopoverPlacementType || (PopoverPlacementType = {}));
var PopoverPlacementType_default = PopoverPlacementType;

// node_modules/@ui5/webcomponents/dist/types/PopoverVerticalAlign.js
var PopoverVerticalAlign;
(function(PopoverVerticalAlign2) {
  PopoverVerticalAlign2["Center"] = "Center";
  PopoverVerticalAlign2["Top"] = "Top";
  PopoverVerticalAlign2["Bottom"] = "Bottom";
  PopoverVerticalAlign2["Stretch"] = "Stretch";
})(PopoverVerticalAlign || (PopoverVerticalAlign = {}));
var PopoverVerticalAlign_default = PopoverVerticalAlign;

// node_modules/@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js
var PopoverHorizontalAlign;
(function(PopoverHorizontalAlign2) {
  PopoverHorizontalAlign2["Center"] = "Center";
  PopoverHorizontalAlign2["Left"] = "Left";
  PopoverHorizontalAlign2["Right"] = "Right";
  PopoverHorizontalAlign2["Stretch"] = "Stretch";
})(PopoverHorizontalAlign || (PopoverHorizontalAlign = {}));
var PopoverHorizontalAlign_default = PopoverHorizontalAlign;

// node_modules/@ui5/webcomponents/dist/popup-utils/PopoverRegistry.js
var updateInterval;
var intervalTimeout = 300;
var openedRegistry = [];
var repositionPopovers = () => {
  openedRegistry.forEach((popover) => {
    popover.instance.reposition();
  });
};
var closePopoversIfLostFocus = () => {
  if (getActiveElement_default().tagName === "IFRAME") {
    getRegistry().reverse().forEach((popup) => popup.instance.close(false, false, true));
  }
};
var runUpdateInterval = () => {
  updateInterval = setInterval(() => {
    repositionPopovers();
    closePopoversIfLostFocus();
  }, intervalTimeout);
};
var stopUpdateInterval = () => {
  clearInterval(updateInterval);
};
var attachGlobalScrollHandler = () => {
  document.addEventListener("scroll", repositionPopovers, {
    capture: true
  });
};
var detachGlobalScrollHandler = () => {
  document.removeEventListener("scroll", repositionPopovers, {
    capture: true
  });
};
var attachScrollHandler = (popover) => {
  popover && popover.shadowRoot.addEventListener("scroll", repositionPopovers, {
    capture: true
  });
};
var detachScrollHandler = (popover) => {
  popover && popover.shadowRoot.removeEventListener("scroll", repositionPopovers, {
    capture: true
  });
};
var attachGlobalClickHandler = () => {
  document.addEventListener("mousedown", clickHandler);
};
var detachGlobalClickHandler = () => {
  document.removeEventListener("mousedown", clickHandler);
};
var clickHandler = (event) => {
  const openedPopups = getOpenedPopups();
  if (openedPopups.length === 0) {
    return;
  }
  const isTopPopupPopover = instanceOfPopover(openedPopups[openedPopups.length - 1].instance);
  if (!isTopPopupPopover) {
    return;
  }
  for (let i = openedPopups.length - 1; i !== -1; i--) {
    const popup = openedPopups[i].instance;
    if (popup.isModal || popup.isOpenerClicked(event)) {
      return;
    }
    if (isClickInRect(event, popup.getBoundingClientRect())) {
      break;
    }
    popup.close();
  }
};
var addOpenedPopover = (instance) => {
  const parentPopovers = getParentPopoversIfNested(instance);
  addOpenedPopup(instance, parentPopovers);
  openedRegistry.push({
    instance,
    parentPopovers
  });
  attachScrollHandler(instance);
  if (openedRegistry.length === 1) {
    attachGlobalScrollHandler();
    attachGlobalClickHandler();
    runUpdateInterval();
  }
};
var removeOpenedPopover = (instance) => {
  const popoversToClose = [instance];
  for (let i = 0; i < openedRegistry.length; i++) {
    const indexOfCurrentInstance = openedRegistry[i].parentPopovers.indexOf(instance);
    if (openedRegistry[i].parentPopovers.length > 0 && indexOfCurrentInstance > -1) {
      popoversToClose.push(openedRegistry[i].instance);
    }
  }
  for (let i = popoversToClose.length - 1; i >= 0; i--) {
    for (let j = 0; j < openedRegistry.length; j++) {
      let indexOfItemToRemove = -1;
      if (popoversToClose[i] === openedRegistry[j].instance) {
        indexOfItemToRemove = j;
      }
      if (indexOfItemToRemove >= 0) {
        removeOpenedPopup(openedRegistry[indexOfItemToRemove].instance);
        detachScrollHandler(openedRegistry[indexOfItemToRemove].instance);
        const itemToClose = openedRegistry.splice(indexOfItemToRemove, 1);
        itemToClose[0].instance.close(false, true);
      }
    }
  }
  if (!openedRegistry.length) {
    detachGlobalScrollHandler();
    detachGlobalClickHandler();
    stopUpdateInterval();
  }
};
var getRegistry = () => {
  return openedRegistry;
};
var getParentPopoversIfNested = (instance) => {
  let currentElement = instance.parentNode;
  const parentPopovers = [];
  while (currentElement && currentElement.parentNode) {
    for (let i = 0; i < openedRegistry.length; i++) {
      if (currentElement === openedRegistry[i].instance) {
        parentPopovers.push(currentElement);
      }
    }
    currentElement = currentElement.parentNode;
  }
  return parentPopovers;
};

// node_modules/@ui5/webcomponents/dist/generated/templates/PopoverTemplate.lit.js
function block03(context, tags, suffix) {
  return effectiveHtml`<section style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block1.call(this, context, tags, suffix) : void 0}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block4.call(this, context, tags, suffix) : void 0}<span class="last-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToFirst}></span></section> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</header>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<h1 class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`${this.footer.length ? block5.call(this, context, tags, suffix) : void 0}`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
}
var PopoverTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/generated/themes/PopupsCommon.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData4 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/PopupsCommon.css.ts",
  content: `:host{display:none;position:fixed;background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v1-24-29_popup_border_radius);min-height:2rem;box-sizing:border-box}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;outline:none;justify-content:space-between}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--_ui5-v1-24-29_popup_header_shadow);border-bottom:var(--_ui5-v1-24-29_popup_header_border)}.ui5-popup-content{color:var(--sapTextColor);flex:auto}.ui5-popup-content:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth));border-radius:var(--_ui5-v1-24-29_popup_border_radius)}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-header-root,.ui5-popup-footer-root,:host([header-text]) .ui5-popup-header-text{margin:0;font-size:1rem;font-family:"72override",var(--_ui5-v1-24-29_popup_header_font_family);display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v1-24-29_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{text-align:center;min-height:var(--_ui5-v1-24-29_popup_default_header_height);max-height:var(--_ui5-v1-24-29_popup_default_header_height);line-height:var(--_ui5-v1-24-29_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v1-24-29_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range="S"]) .ui5-popup-content{padding:1rem var(--_ui5-v1-24-29_popup_content_padding_s)}:host([media-range="M"]) .ui5-popup-content,:host([media-range="L"]) .ui5-popup-content{padding:1rem var(--_ui5-v1-24-29_popup_content_padding_m_l)}:host([media-range="XL"]) .ui5-popup-content{padding:1rem var(--_ui5-v1-24-29_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v1-24-29_popup_header_background)}:host([media-range="S"]) .ui5-popup-header-root,:host([media-range="S"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v1-24-29_popup_header_footer_padding_s);padding-right:var(--_ui5-v1-24-29_popup_header_footer_padding_s)}:host([media-range="M"]) .ui5-popup-header-root,:host([media-range="L"]) .ui5-popup-header-root,:host([media-range="M"]) .ui5-popup-footer-root,:host([media-range="L"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v1-24-29_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v1-24-29_popup_header_footer_padding_m_l)}:host([media-range="XL"]) .ui5-popup-header-root,:host([media-range="XL"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v1-24-29_popup_header_footer_padding_xl);padding-right:var(--_ui5-v1-24-29_popup_header_footer_padding_xl)}
`
};
var PopupsCommon_css_default = styleData4;

// node_modules/@ui5/webcomponents/dist/generated/themes/Popover.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData5 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Popover.css.ts",
  content: `:host{box-shadow:var(--_ui5-v1-24-29_popover_box_shadow);background-color:var(--_ui5-v1-24-29_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v1-24-29_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v1-24-29_popover_no_arrow_box_shadow)}:host([opened][actual-placement-type="Top"]){margin-top:var(--_ui5-v1-24-29-popover-margin-bottom)}:host([opened][actual-placement-type="Bottom"]){margin-top:var(--_ui5-v1-24-29-popover-margin-top)}:host([actual-placement-type="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5rem}:host([actual-placement-type="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-29_popover_upward_arrow_margin)}:host([actual-placement-type="Left"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement-type="Left"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-29_popover_right_arrow_margin)}:host([actual-placement-type="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement-type="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-29_popover_downward_arrow_margin)}:host(:not([actual-placement-type])) .ui5-popover-arrow,:host([actual-placement-type="Right"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement-type])) .ui5-popover-arrow:after,:host([actual-placement-type="Right"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-29_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v1-24-29_popover_background);box-shadow:var(--_ui5-v1-24-29_popover_box_shadow);transform:rotate(-45deg)}
`
};
var Popover_css_default = styleData5;

// node_modules/@ui5/webcomponents/dist/Popover.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Popover_1;
var ARROW_SIZE = 8;
var Popover = Popover_1 = class Popover2 extends Popup_default {
  static get VIEWPORT_MARGIN() {
    return 10;
  }
  constructor() {
    super();
  }
  onAfterRendering() {
    super.onAfterRendering();
    if (!this.isOpen() && this.open) {
      let opener;
      if (this.opener instanceof HTMLElement) {
        opener = this.opener;
      } else if (typeof this.opener === "string") {
        opener = this.getRootNode().getElementById(this.opener) || document.getElementById(this.opener);
      }
      if (!opener) {
        console.warn("Valid opener id is required.");
        return;
      }
      this.showAt(opener);
    } else if (this.isOpen() && !this.open) {
      this.close();
    }
  }
  isOpenerClicked(e) {
    const target = e.target;
    if (target === this._opener) {
      return true;
    }
    const ui5ElementTarget = target;
    if (ui5ElementTarget.getFocusDomRef && ui5ElementTarget.getFocusDomRef() === this._opener) {
      return true;
    }
    return e.composedPath().indexOf(this._opener) > -1;
  }
  /**
   * Shows the popover.
   * @param opener the element that the popover is shown at
   * @param [preventInitialFocus=false] prevents applying the focus inside the popover
   * @public
   * @returns Resolved when the popover is open
   */
  showAt(opener, preventInitialFocus = false) {
    return __async(this, null, function* () {
      if (!opener || this.opened) {
        return;
      }
      this._opener = opener;
      this._openerRect = opener.getBoundingClientRect();
      yield __superGet(Popover2.prototype, this, "_open").call(this, preventInitialFocus);
    });
  }
  /**
   * Override for the _addOpenedPopup hook, which would otherwise just call addOpenedPopup(this)
   * @private
   */
  _addOpenedPopup() {
    addOpenedPopover(this);
  }
  /**
   * Override for the _removeOpenedPopup hook, which would otherwise just call removeOpenedPopup(this)
   * @private
   */
  _removeOpenedPopup() {
    removeOpenedPopover(this);
  }
  shouldCloseDueToOverflow(placement, openerRect) {
    const threshold = 32;
    const limits = {
      "Right": openerRect.right,
      "Left": openerRect.left,
      "Top": openerRect.top,
      "Bottom": openerRect.bottom
    };
    const closedPopupParent = getClosedPopupParent(this._opener);
    let overflowsBottom = false;
    let overflowsTop = false;
    if (closedPopupParent.showAt) {
      const contentRect = closedPopupParent.contentDOM.getBoundingClientRect();
      overflowsBottom = openerRect.top > contentRect.top + contentRect.height;
      overflowsTop = openerRect.top + openerRect.height < contentRect.top;
    }
    return limits[placement] < 0 || limits[placement] + threshold > closedPopupParent.innerHeight || overflowsBottom || overflowsTop;
  }
  shouldCloseDueToNoOpener(openerRect) {
    return openerRect.top === 0 && openerRect.bottom === 0 && openerRect.left === 0 && openerRect.right === 0;
  }
  isOpenerOutsideViewport(openerRect) {
    return openerRect.bottom < 0 || openerRect.top > window.innerHeight || openerRect.right < 0 || openerRect.left > window.innerWidth;
  }
  /**
   * @override
   */
  _resize() {
    super._resize();
    if (this.opened) {
      this.reposition();
    }
  }
  reposition() {
    this._show();
  }
  _show() {
    if (!this.opened) {
      this._showOutsideViewport();
    }
    const popoverSize = this.getPopoverSize();
    let placement;
    if (popoverSize.width === 0 || popoverSize.height === 0) {
      return;
    }
    if (this.isOpen()) {
      this._openerRect = this._opener.getBoundingClientRect();
    }
    if (this.shouldCloseDueToNoOpener(this._openerRect) && this.isFocusWithin() && this._oldPlacement) {
      placement = this._oldPlacement;
    } else {
      placement = this.calcPlacement(this._openerRect, popoverSize);
    }
    if (this._preventRepositionAndClose || this.isOpenerOutsideViewport(this._openerRect)) {
      return this.close();
    }
    this._oldPlacement = placement;
    this.actualPlacementType = placement.placementType;
    let left = clamp_default(this._left, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientWidth - popoverSize.width - Popover_1.VIEWPORT_MARGIN);
    if (this.actualPlacementType === PopoverPlacementType_default.Right) {
      left = Math.max(left, this._left);
    }
    let top = clamp_default(this._top, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientHeight - popoverSize.height - Popover_1.VIEWPORT_MARGIN);
    if (this.actualPlacementType === PopoverPlacementType_default.Bottom) {
      top = Math.max(top, this._top);
    }
    this.arrowTranslateX = placement.arrow.x;
    this.arrowTranslateY = placement.arrow.y;
    top = this._adjustForIOSKeyboard(top);
    const containingBlockClientLocation = this._getContainingBlockClientLocation();
    left -= containingBlockClientLocation.left;
    top -= containingBlockClientLocation.top;
    Object.assign(this.style, {
      top: `${top}px`,
      left: `${left}px`
    });
    if (this.horizontalAlign === PopoverHorizontalAlign_default.Stretch && this._width) {
      this.style.width = this._width;
    }
    if (this.verticalAlign === PopoverVerticalAlign_default.Stretch && this._height) {
      this.style.height = this._height;
    }
  }
  /**
   * Adjust the desired top position to compensate for shift of the screen
   * caused by opened keyboard on iOS which affects all elements with position:fixed.
   * @private
   * @param top The target top in px.
   * @returns The adjusted top in px.
   */
  _adjustForIOSKeyboard(top) {
    if (!isIOS()) {
      return top;
    }
    const actualTop = Math.ceil(this.getBoundingClientRect().top);
    return top + (Number.parseInt(this.style.top || "0") - actualTop);
  }
  _getContainingBlockClientLocation() {
    let parentElement = getParentElement_default(this);
    while (parentElement) {
      if (isElementContainingBlock_default(parentElement)) {
        return parentElement.getBoundingClientRect();
      }
      parentElement = getParentElement_default(parentElement);
    }
    return {
      left: 0,
      top: 0
    };
  }
  getPopoverSize() {
    const rect = this.getBoundingClientRect(), width = rect.width, height = rect.height;
    return {
      width,
      height
    };
  }
  _showOutsideViewport() {
    Object.assign(this.style, {
      display: this._displayProp,
      top: "-10000px",
      left: "-10000px"
    });
  }
  get arrowDOM() {
    return this.shadowRoot.querySelector(".ui5-popover-arrow");
  }
  /**
   * @private
   */
  calcPlacement(targetRect, popoverSize) {
    let left = Popover_1.VIEWPORT_MARGIN;
    let top = 0;
    const allowTargetOverlap = this.allowTargetOverlap;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    let maxHeight = clientHeight;
    let maxWidth = clientWidth;
    const placementType = this.getActualPlacementType(targetRect, popoverSize);
    this._preventRepositionAndClose = this.shouldCloseDueToNoOpener(targetRect) || this.shouldCloseDueToOverflow(placementType, targetRect);
    const isVertical = placementType === PopoverPlacementType_default.Top || placementType === PopoverPlacementType_default.Bottom;
    if (this.horizontalAlign === PopoverHorizontalAlign_default.Stretch && isVertical) {
      popoverSize.width = targetRect.width;
      this._width = `${targetRect.width}px`;
    } else if (this.verticalAlign === PopoverVerticalAlign_default.Stretch && !isVertical) {
      popoverSize.height = targetRect.height;
      this._height = `${targetRect.height}px`;
    }
    const arrowOffset = this.hideArrow ? 0 : ARROW_SIZE;
    switch (placementType) {
      case PopoverPlacementType_default.Top:
        left = this.getVerticalLeft(targetRect, popoverSize);
        top = Math.max(targetRect.top - popoverSize.height - arrowOffset, 0);
        if (!allowTargetOverlap) {
          maxHeight = targetRect.top - arrowOffset;
        }
        break;
      case PopoverPlacementType_default.Bottom:
        left = this.getVerticalLeft(targetRect, popoverSize);
        top = targetRect.bottom + arrowOffset;
        if (allowTargetOverlap) {
          top = Math.max(Math.min(top, clientHeight - popoverSize.height), 0);
        } else {
          maxHeight = clientHeight - targetRect.bottom - arrowOffset;
        }
        break;
      case PopoverPlacementType_default.Left:
        left = Math.max(targetRect.left - popoverSize.width - arrowOffset, 0);
        top = this.getHorizontalTop(targetRect, popoverSize);
        if (!allowTargetOverlap) {
          maxWidth = targetRect.left - arrowOffset;
        }
        break;
      case PopoverPlacementType_default.Right:
        left = targetRect.left + targetRect.width + arrowOffset;
        top = this.getHorizontalTop(targetRect, popoverSize);
        if (allowTargetOverlap) {
          left = Math.max(Math.min(left, clientWidth - popoverSize.width), 0);
        } else {
          maxWidth = clientWidth - targetRect.right - arrowOffset;
        }
        break;
    }
    if (isVertical) {
      if (popoverSize.width > clientWidth || left < Popover_1.VIEWPORT_MARGIN) {
        left = Popover_1.VIEWPORT_MARGIN;
      } else if (left + popoverSize.width > clientWidth - Popover_1.VIEWPORT_MARGIN) {
        left = clientWidth - Popover_1.VIEWPORT_MARGIN - popoverSize.width;
      }
    } else {
      if (popoverSize.height > clientHeight || top < Popover_1.VIEWPORT_MARGIN) {
        top = Popover_1.VIEWPORT_MARGIN;
      } else if (top + popoverSize.height > clientHeight - Popover_1.VIEWPORT_MARGIN) {
        top = clientHeight - Popover_1.VIEWPORT_MARGIN - popoverSize.height;
      }
    }
    this._maxHeight = Math.round(maxHeight - Popover_1.VIEWPORT_MARGIN);
    this._maxWidth = Math.round(maxWidth - Popover_1.VIEWPORT_MARGIN);
    if (this._left === void 0 || Math.abs(this._left - left) > 1.5) {
      this._left = Math.round(left);
    }
    if (this._top === void 0 || Math.abs(this._top - top) > 1.5) {
      this._top = Math.round(top);
    }
    const borderRadius = Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));
    const arrowPos = this.getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius);
    return {
      arrow: arrowPos,
      top: this._top,
      left: this._left,
      placementType
    };
  }
  /**
   * Calculates the position for the arrow.
   * @private
   * @param targetRect BoundingClientRect of the target element
   * @param popoverSize Width and height of the popover
   * @param left Left offset of the popover
   * @param top Top offset of the popover
   * @param isVertical If the popover is positioned vertically to the target element
   * @param borderRadius Value of the border-radius property
   * @returns  Arrow's coordinates
   */
  getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius) {
    const horizontalAlign = this._actualHorizontalAlign;
    let arrowXCentered = horizontalAlign === PopoverHorizontalAlign_default.Center || horizontalAlign === PopoverHorizontalAlign_default.Stretch;
    if (horizontalAlign === PopoverHorizontalAlign_default.Right && left <= targetRect.left) {
      arrowXCentered = true;
    }
    if (horizontalAlign === PopoverHorizontalAlign_default.Left && left + popoverSize.width >= targetRect.left + targetRect.width) {
      arrowXCentered = true;
    }
    let arrowTranslateX = 0;
    if (isVertical && arrowXCentered) {
      arrowTranslateX = targetRect.left + targetRect.width / 2 - left - popoverSize.width / 2;
    }
    let arrowTranslateY = 0;
    if (!isVertical) {
      arrowTranslateY = targetRect.top + targetRect.height / 2 - top - popoverSize.height / 2;
    }
    const safeRangeForArrowY = popoverSize.height / 2 - borderRadius - ARROW_SIZE / 2 - 2;
    arrowTranslateY = clamp_default(arrowTranslateY, -safeRangeForArrowY, safeRangeForArrowY);
    const safeRangeForArrowX = popoverSize.width / 2 - borderRadius - ARROW_SIZE / 2 - 2;
    arrowTranslateX = clamp_default(arrowTranslateX, -safeRangeForArrowX, safeRangeForArrowX);
    return {
      x: Math.round(arrowTranslateX),
      y: Math.round(arrowTranslateY)
    };
  }
  /**
   * Fallbacks to new placement, prioritizing `Left` and `Right` placements.
   * @private
   */
  fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) {
    if (targetRect.left > popoverSize.width) {
      return PopoverPlacementType_default.Left;
    }
    if (clientWidth - targetRect.right > targetRect.left) {
      return PopoverPlacementType_default.Right;
    }
    if (clientHeight - targetRect.bottom > popoverSize.height) {
      return PopoverPlacementType_default.Bottom;
    }
    if (clientHeight - targetRect.bottom < targetRect.top) {
      return PopoverPlacementType_default.Top;
    }
  }
  getActualPlacementType(targetRect, popoverSize) {
    const placementType = this.placementType;
    let actualPlacementType = placementType;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    switch (placementType) {
      case PopoverPlacementType_default.Top:
        if (targetRect.top < popoverSize.height && targetRect.top < clientHeight - targetRect.bottom) {
          actualPlacementType = PopoverPlacementType_default.Bottom;
        }
        break;
      case PopoverPlacementType_default.Bottom:
        if (clientHeight - targetRect.bottom < popoverSize.height && clientHeight - targetRect.bottom < targetRect.top) {
          actualPlacementType = PopoverPlacementType_default.Top;
        }
        break;
      case PopoverPlacementType_default.Left:
        if (targetRect.left < popoverSize.width) {
          actualPlacementType = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placementType;
        }
        break;
      case PopoverPlacementType_default.Right:
        if (clientWidth - targetRect.right < popoverSize.width) {
          actualPlacementType = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placementType;
        }
        break;
    }
    return actualPlacementType;
  }
  getVerticalLeft(targetRect, popoverSize) {
    const horizontalAlign = this._actualHorizontalAlign;
    let left = Popover_1.VIEWPORT_MARGIN;
    switch (horizontalAlign) {
      case PopoverHorizontalAlign_default.Center:
      case PopoverHorizontalAlign_default.Stretch:
        left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
        break;
      case PopoverHorizontalAlign_default.Left:
        left = targetRect.left;
        break;
      case PopoverHorizontalAlign_default.Right:
        left = targetRect.right - popoverSize.width;
        break;
    }
    return left;
  }
  getHorizontalTop(targetRect, popoverSize) {
    let top = 0;
    switch (this.verticalAlign) {
      case PopoverVerticalAlign_default.Center:
      case PopoverVerticalAlign_default.Stretch:
        top = targetRect.top - (popoverSize.height - targetRect.height) / 2;
        break;
      case PopoverVerticalAlign_default.Top:
        top = targetRect.top;
        break;
      case PopoverVerticalAlign_default.Bottom:
        top = targetRect.bottom - popoverSize.height;
        break;
    }
    return top;
  }
  get isModal() {
    return this.modal;
  }
  get shouldHideBackdrop() {
    return this.hideBackdrop;
  }
  get _ariaLabelledBy() {
    if (!this._ariaLabel && this._displayHeader) {
      return "ui5-popup-header";
    }
    return void 0;
  }
  get styles() {
    return __spreadProps(__spreadValues({}, super.styles), {
      root: {
        "max-height": this._maxHeight ? `${this._maxHeight}px` : "",
        "max-width": this._maxWidth ? `${this._maxWidth}px` : ""
      },
      arrow: {
        transform: `translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`
      }
    });
  }
  get classes() {
    const allClasses = super.classes;
    allClasses.root["ui5-popover-root"] = true;
    return allClasses;
  }
  /**
   * Hook for descendants to hide header.
   */
  get _displayHeader() {
    return !!(this.header.length || this.headerText);
  }
  /**
   * Hook for descendants to hide footer.
   */
  get _displayFooter() {
    return true;
  }
  get _actualHorizontalAlign() {
    if (this.effectiveDir === "rtl") {
      if (this.horizontalAlign === PopoverHorizontalAlign_default.Left) {
        return PopoverHorizontalAlign_default.Right;
      }
      if (this.horizontalAlign === PopoverHorizontalAlign_default.Right) {
        return PopoverHorizontalAlign_default.Left;
      }
    }
    return this.horizontalAlign;
  }
};
__decorate2([property_default()], Popover.prototype, "headerText", void 0);
__decorate2([property_default({
  type: PopoverPlacementType_default,
  defaultValue: PopoverPlacementType_default.Right
})], Popover.prototype, "placementType", void 0);
__decorate2([property_default({
  type: PopoverHorizontalAlign_default,
  defaultValue: PopoverHorizontalAlign_default.Center
})], Popover.prototype, "horizontalAlign", void 0);
__decorate2([property_default({
  type: PopoverVerticalAlign_default,
  defaultValue: PopoverVerticalAlign_default.Center
})], Popover.prototype, "verticalAlign", void 0);
__decorate2([property_default({
  type: Boolean
})], Popover.prototype, "modal", void 0);
__decorate2([property_default({
  type: Boolean
})], Popover.prototype, "hideBackdrop", void 0);
__decorate2([property_default({
  type: Boolean
})], Popover.prototype, "hideArrow", void 0);
__decorate2([property_default({
  type: Boolean
})], Popover.prototype, "allowTargetOverlap", void 0);
__decorate2([property_default({
  validator: DOMReference_default
})], Popover.prototype, "opener", void 0);
__decorate2([property_default({
  type: Boolean
})], Popover.prototype, "disableScrolling", void 0);
__decorate2([property_default({
  validator: Integer_default,
  defaultValue: 0,
  noAttribute: true
})], Popover.prototype, "arrowTranslateX", void 0);
__decorate2([property_default({
  validator: Integer_default,
  defaultValue: 0,
  noAttribute: true
})], Popover.prototype, "arrowTranslateY", void 0);
__decorate2([property_default({
  type: PopoverPlacementType_default,
  defaultValue: PopoverPlacementType_default.Right
})], Popover.prototype, "actualPlacementType", void 0);
__decorate2([property_default({
  validator: Integer_default,
  noAttribute: true
})], Popover.prototype, "_maxHeight", void 0);
__decorate2([property_default({
  validator: Integer_default,
  noAttribute: true
})], Popover.prototype, "_maxWidth", void 0);
__decorate2([slot_default({
  type: HTMLElement
})], Popover.prototype, "header", void 0);
__decorate2([slot_default({
  type: HTMLElement
})], Popover.prototype, "footer", void 0);
Popover = Popover_1 = __decorate2([customElement_default({
  tag: "ui5-popover",
  styles: [getEffectiveScrollbarStyle_default(), PopupsCommon_css_default, Popover_css_default],
  template: PopoverTemplate_lit_default
})], Popover);
var instanceOfPopover = (object) => {
  return "showAt" in object;
};
Popover.define();
var Popover_default = Popover;

// node_modules/@ui5/webcomponents/dist/generated/themes/ValueStateMessage.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData6 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/ValueStateMessage.css.ts",
  content: `.ui5-valuestatemessage-popover{border-radius:var(--_ui5-v1-24-29_value_state_message_popover_border_radius);box-shadow:var(--_ui5-v1-24-29_value_state_message_popover_box_shadow)}.ui5-input-value-state-message-icon{width:var(--_ui5-v1-24-29_value_state_message_icon_width);height:var(--_ui5-v1-24-29_value_state_message_icon_height);display:var(--_ui5-v1-24-29_input_value_state_icon_display);position:absolute;padding-right:.375rem}.ui5-valuestatemessage-root .ui5-input-value-state-message-icon{left:var(--_ui5-v1-24-29_input_value_state_icon_offset)}.ui5-input-value-state-message-icon[name=error]{color:var(--sapNegativeElementColor)}.ui5-input-value-state-message-icon[name=alert]{color:var(--sapCriticalElementColor)}.ui5-input-value-state-message-icon[name=success]{color:var(--sapPositiveElementColor)}.ui5-input-value-state-message-icon[name=information]{color:var(--sapInformativeElementColor)}.ui5-valuestatemessage-root{box-sizing:border-box;display:inline-block;color:var(--sapTextColor);font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);height:auto;padding:var(--_ui5-v1-24-29_value_state_message_padding);overflow:hidden;text-overflow:ellipsis;min-width:6.25rem;border:var(--_ui5-v1-24-29_value_state_message_border);line-height:var(--_ui5-v1-24-29_value_state_message_line_height)}[ui5-responsive-popover] .ui5-valuestatemessage-header,[ui5-popover] .ui5-valuestatemessage-header{min-height:2rem}[ui5-responsive-popover] .ui5-valuestatemessage-header{padding:var(--_ui5-v1-24-29_value_state_header_padding);border:var(--_ui5-v1-24-29_value_state_header_border);border-bottom:var(--_ui5-v1-24-29_value_state_header_border_bottom);flex-grow:1;position:relative}.ui5-valuestatemessage--success{background:var(--sapSuccessBackground)}.ui5-valuestatemessage--warning{background:var(--sapWarningBackground)}.ui5-valuestatemessage--error{background:var(--sapErrorBackground)}.ui5-valuestatemessage--information{background:var(--sapInformationBackground)}.ui5-responsive-popover-header[focused],.ui5-responsive-popover-header:focus{outline-offset:var(--_ui5-v1-24-29_value_state_header_offset);outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(content){padding:0}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(footer){min-height:0}.ui5-valuestatemessage-popover::part(header),.ui5-popover-with-value-state-header::part(header),.ui5-popover-with-value-state-header-phone::part(header){margin-bottom:0}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-root{padding:var(--_ui5-v1-24-29_value_state_message_padding_phone);width:100%}.ui5-popover-with-value-state-header-phone .ui5-input-value-state-message-icon{left:var(--_ui5-v1-24-29_value_state_message_icon_offset_phone)}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-header{position:relative;flex:none;top:0;left:0}.ui5-popover-with-value-state-header-phone::part(content){padding:0;overflow:hidden;display:flex;flex-direction:column}.ui5-popover-with-value-state-header-phone [ui5-list]{overflow:auto}[ui5-responsive-popover] .ui5-valuestatemessage--error{box-shadow:var(--_ui5-v1-24-29_value_state_header_box_shadow_error)}[ui5-responsive-popover] .ui5-valuestatemessage--information{box-shadow:var(--_ui5-v1-24-29_value_state_header_box_shadow_information)}[ui5-responsive-popover] .ui5-valuestatemessage--success{box-shadow:var(--_ui5-v1-24-29_value_state_header_box_shadow_success)}[ui5-responsive-popover] .ui5-valuestatemessage--warning{box-shadow:var(--_ui5-v1-24-29_value_state_header_box_shadow_warning)}[ui5-responsive-popover].ui5-popover-with-value-state-header .ui5-valuestatemessage-root:has(+[ui5-list]:empty){box-shadow:none}
`
};
var ValueStateMessage_css_default = styleData6;

export {
  getActiveElement_default,
  getEffectiveScrollbarStyle_default,
  isElementHidden_default,
  getNextZIndex,
  DOMReference_default,
  clamp_default,
  PopupAccessibleRole_default,
  Popup_default,
  PopupsCommon_css_default,
  Popover_default,
  ValueStateMessage_css_default
};
//# sourceMappingURL=chunk-LXXNVKH3.js.map

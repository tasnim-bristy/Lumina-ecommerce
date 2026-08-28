import {
  Popover_default,
  PopupAccessibleRole_default,
  Popup_default,
  PopupsCommon_css_default,
  clamp_default,
  getActiveElement_default,
  getEffectiveScrollbarStyle_default,
  getNextZIndex,
  isElementHidden_default
} from "./chunk-CC5QWB52.js";
import {
  Avatar_default
} from "./chunk-6IE2SFHB.js";
import {
  ResizeHandler_default
} from "./chunk-UQ5I4VPN.js";
import {
  Button_default,
  HasPopup_default,
  getEventMark
} from "./chunk-PIZGL5NL.js";
import {
  CheckBox_default
} from "./chunk-IQXNQNRQ.js";
import {
  ValueState_default
} from "./chunk-3GUSYCCY.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-BY3NBTSA.js";
import {
  Icon_default,
  event_default
} from "./chunk-U3UACDRZ.js";
import {
  BusyIndicator_default
} from "./chunk-XDEYVX2X.js";
import {
  Integer_default
} from "./chunk-YJ42QTVF.js";
import {
  Label_default
} from "./chunk-FR3SEBRA.js";
import {
  WrappingType_default
} from "./chunk-GL7BVVNJ.js";
import {
  ARIA_LABEL_LIST_DELETABLE,
  ARIA_LABEL_LIST_ITEM_CHECKBOX,
  ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,
  ARIA_LABEL_LIST_MULTISELECTABLE,
  ARIA_LABEL_LIST_SELECTABLE,
  DELETE,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,
  DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,
  LIST_ITEM_NOT_SELECTED,
  LIST_ITEM_SELECTED,
  LOAD_MORE_TEXT,
  RADIO_BUTTON_GROUP_REQUIRED,
  RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_WARNING
} from "./chunk-MKUK4J7G.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  effectiveSvg,
  html,
  ifDefined,
  isDelete,
  isDown,
  isDownShift,
  isEnd,
  isEnter,
  isHome,
  isLeft,
  isLeftShift,
  isPageDown,
  isPageUp,
  isRight,
  isRightShift,
  isSpace,
  isTabNext,
  isTabPrevious,
  isUp,
  isUpShift,
  parameters_bundle_css_default,
  parameters_bundle_css_default2,
  scopeTag,
  styleMap,
  svg
} from "./chunk-BK2PCNJ4.js";
import {
  slot_default
} from "./chunk-SRQLSZPJ.js";
import {
  UI5Element_default,
  customElement_default,
  instanceOfUI5Element,
  property_default
} from "./chunk-2MNVO72Z.js";
import {
  registerIcon
} from "./chunk-3YXAI4SY.js";
import {
  getI18nBundle
} from "./chunk-CQWP6VSU.js";
import {
  getFeature,
  isDesktop,
  isLegacyThemeFamily,
  isPhone,
  registerFeature,
  registerThemePropertiesLoader,
  renderFinished
} from "./chunk-JASJJZVS.js";
import {
  __async,
  __spreadValues,
  __superGet
} from "./chunk-5K356HEJ.js";

// node_modules/lit-html/development/static.js
var brand = Symbol.for("");
var unwrapStaticValue = (value) => {
  if ((value === null || value === void 0 ? void 0 : value.r) !== brand) {
    return void 0;
  }
  return value === null || value === void 0 ? void 0 : value["_$litStatic$"];
};
var unsafeStatic = (value) => ({
  ["_$litStatic$"]: value,
  r: brand
});
var stringsCache = /* @__PURE__ */ new Map();
var withStatic = (coreTag) => (strings, ...values) => {
  const l = values.length;
  let staticValue;
  let dynamicValue;
  const staticStrings = [];
  const dynamicValues = [];
  let i = 0;
  let hasStatics = false;
  let s;
  while (i < l) {
    s = strings[i];
    while (i < l && (dynamicValue = values[i], staticValue = unwrapStaticValue(dynamicValue)) !== void 0) {
      s += staticValue + strings[++i];
      hasStatics = true;
    }
    if (i !== l) {
      dynamicValues.push(dynamicValue);
    }
    staticStrings.push(s);
    i++;
  }
  if (i === l) {
    staticStrings.push(strings[l]);
  }
  if (hasStatics) {
    const key = staticStrings.join("$$lit$$");
    strings = stringsCache.get(key);
    if (strings === void 0) {
      staticStrings.raw = staticStrings;
      stringsCache.set(key, strings = staticStrings);
    }
    values = dynamicValues;
  }
  return coreTag(strings, ...values);
};
var html2 = withStatic(html);
var svg2 = withStatic(svg);

// node_modules/@ui5/webcomponents-base/dist/CustomElementsScope.js
var LitStatic = class {
};
LitStatic.html = html2;
LitStatic.svg = svg2;
LitStatic.unsafeStatic = unsafeStatic;
registerFeature("LitStatic", LitStatic);

// node_modules/@ui5/webcomponents-base/dist/types/NavigationMode.js
var NavigationMode;
(function(NavigationMode2) {
  NavigationMode2["Auto"] = "Auto";
  NavigationMode2["Vertical"] = "Vertical";
  NavigationMode2["Horizontal"] = "Horizontal";
  NavigationMode2["Paging"] = "Paging";
})(NavigationMode || (NavigationMode = {}));
var NavigationMode_default = NavigationMode;

// node_modules/@ui5/webcomponents-base/dist/types/ItemNavigationBehavior.js
var ItemNavigationBehavior;
(function(ItemNavigationBehavior2) {
  ItemNavigationBehavior2["Static"] = "Static";
  ItemNavigationBehavior2["Cyclic"] = "Cyclic";
})(ItemNavigationBehavior || (ItemNavigationBehavior = {}));
var ItemNavigationBehavior_default = ItemNavigationBehavior;

// node_modules/@ui5/webcomponents-base/dist/delegate/ItemNavigation.js
var ItemNavigation = class {
  /**
   *
   * @param rootWebComponent the component to operate on (component that slots or contains within its shadow root the items the user navigates among)
   * @param {ItemNavigationOptions} options Object with configuration options:
   *  - currentIndex: the index of the item that will be initially selected (from which navigation will begin)
   *  - navigationMode (Auto|Horizontal|Vertical): whether the items are displayed horizontally (Horizontal), vertically (Vertical) or as a matrix (Auto) meaning the user can navigate in both directions (up/down and left/right)
   *  - rowSize: tells how many items per row there are when the items are not rendered as a flat list but rather as a matrix. Relevant for navigationMode=Auto
   * 	- skipItemsSize: tells how many items upon PAGE_UP and PAGE_DOWN should be skipped to applying the focus on the next item
   *  - behavior (Static|Cycling): tells what to do when trying to navigate beyond the first and last items
   *    Static means that nothing happens if the user tries to navigate beyond the first/last item.
   *    Cycling means that when the user navigates beyond the last item they go to the first and vice versa.
   *  - getItemsCallback: function that, when called, returns an array with all items the user can navigate among
   *  - affectedPropertiesNames: a list of metadata properties on the root component which, upon user navigation, will be reassigned by address thus causing the root component to invalidate
   */
  constructor(rootWebComponent, options) {
    if (!rootWebComponent.isUI5Element) {
      throw new Error("The root web component must be a UI5 Element instance");
    }
    this.rootWebComponent = rootWebComponent;
    this.rootWebComponent.addEventListener("keydown", this._onkeydown.bind(this));
    this._initBound = this._init.bind(this);
    this.rootWebComponent.attachComponentStateFinalized(this._initBound);
    if (typeof options.getItemsCallback !== "function") {
      throw new Error("getItemsCallback is required");
    }
    this._getItems = options.getItemsCallback;
    this._currentIndex = options.currentIndex || 0;
    this._rowSize = options.rowSize || 1;
    this._behavior = options.behavior || ItemNavigationBehavior_default.Static;
    this._navigationMode = options.navigationMode || NavigationMode_default.Auto;
    this._affectedPropertiesNames = options.affectedPropertiesNames || [];
    this._skipItemsSize = options.skipItemsSize || null;
  }
  /**
   * Call this method to set a new "current" (selected) item in the item navigation
   * Note: the item passed to this function must be one of the items, returned by the getItemsCallback function
   *
   * @public
   * @param current the new selected item
   */
  setCurrentItem(current) {
    const currentItemIndex = this._getItems().indexOf(current);
    if (currentItemIndex === -1) {
      console.warn(`The provided item is not managed by ItemNavigation`, current);
      return;
    }
    this._currentIndex = currentItemIndex;
    this._applyTabIndex();
  }
  /**
   * Call this method to dynamically change the row size
   *
   * @public
   * @param newRowSize
   */
  setRowSize(newRowSize) {
    this._rowSize = newRowSize;
  }
  _init() {
    this._getItems().forEach((item, idx) => {
      item.forcedTabIndex = idx === this._currentIndex ? "0" : "-1";
    });
  }
  _onkeydown(event) {
    if (!this._canNavigate()) {
      return;
    }
    const horizontalNavigationOn = this._navigationMode === NavigationMode_default.Horizontal || this._navigationMode === NavigationMode_default.Auto;
    const verticalNavigationOn = this._navigationMode === NavigationMode_default.Vertical || this._navigationMode === NavigationMode_default.Auto;
    const isRTL = this.rootWebComponent.effectiveDir === "rtl";
    if (isRTL && isLeft(event) && horizontalNavigationOn) {
      this._handleRight();
    } else if (isRTL && isRight(event) && horizontalNavigationOn) {
      this._handleLeft();
    } else if (isLeft(event) && horizontalNavigationOn) {
      this._handleLeft();
    } else if (isRight(event) && horizontalNavigationOn) {
      this._handleRight();
    } else if (isUp(event) && verticalNavigationOn) {
      this._handleUp();
    } else if (isDown(event) && verticalNavigationOn) {
      this._handleDown();
    } else if (isHome(event)) {
      this._handleHome();
    } else if (isEnd(event)) {
      this._handleEnd();
    } else if (isPageUp(event)) {
      this._handlePageUp();
    } else if (isPageDown(event)) {
      this._handlePageDown();
    } else {
      return;
    }
    event.preventDefault();
    this._applyTabIndex();
    this._focusCurrentItem();
  }
  _handleUp() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex - this._rowSize >= 0) {
      this._currentIndex -= this._rowSize;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      const firstItemInThisColumnIndex = this._currentIndex % this._rowSize;
      const firstItemInPreviousColumnIndex = firstItemInThisColumnIndex === 0 ? this._rowSize - 1 : firstItemInThisColumnIndex - 1;
      const rows = Math.ceil(itemsLength / this._rowSize);
      let lastItemInPreviousColumnIndex = firstItemInPreviousColumnIndex + (rows - 1) * this._rowSize;
      if (lastItemInPreviousColumnIndex > itemsLength - 1) {
        lastItemInPreviousColumnIndex -= this._rowSize;
      }
      this._currentIndex = lastItemInPreviousColumnIndex;
    } else {
      this._currentIndex = 0;
    }
  }
  _handleDown() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex + this._rowSize < itemsLength) {
      this._currentIndex += this._rowSize;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      const firstItemInThisColumnIndex = this._currentIndex % this._rowSize;
      const firstItemInNextColumnIndex = (firstItemInThisColumnIndex + 1) % this._rowSize;
      this._currentIndex = firstItemInNextColumnIndex;
    } else {
      this._currentIndex = itemsLength - 1;
    }
  }
  _handleLeft() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex > 0) {
      this._currentIndex -= 1;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      this._currentIndex = itemsLength - 1;
    }
  }
  _handleRight() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex < itemsLength - 1) {
      this._currentIndex += 1;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      this._currentIndex = 0;
    }
  }
  _handleHome() {
    const homeEndRange = this._rowSize > 1 ? this._rowSize : this._getItems().length;
    this._currentIndex -= this._currentIndex % homeEndRange;
  }
  _handleEnd() {
    const homeEndRange = this._rowSize > 1 ? this._rowSize : this._getItems().length;
    this._currentIndex += homeEndRange - 1 - this._currentIndex % homeEndRange;
  }
  _handlePageUp() {
    if (this._rowSize > 1) {
      return;
    }
    this._handlePageUpFlat();
  }
  _handlePageDown() {
    if (this._rowSize > 1) {
      return;
    }
    this._handlePageDownFlat();
  }
  /**
   * Handles PAGE_UP in a flat list-like structure, both vertically and horizontally.
   */
  _handlePageUpFlat() {
    if (this._skipItemsSize === null) {
      this._currentIndex -= this._currentIndex;
      return;
    }
    if (this._currentIndex + 1 > this._skipItemsSize) {
      this._currentIndex -= this._skipItemsSize;
    } else {
      this._currentIndex -= this._currentIndex;
    }
  }
  /**
   * Handles PAGE_DOWN in a flat list-like structure, both vertically and horizontally.
   */
  _handlePageDownFlat() {
    if (this._skipItemsSize === null) {
      this._currentIndex = this._getItems().length - 1;
      return;
    }
    const currentToEndRange = this._getItems().length - this._currentIndex - 1;
    if (currentToEndRange > this._skipItemsSize) {
      this._currentIndex += this._skipItemsSize;
    } else {
      this._currentIndex = this._getItems().length - 1;
    }
  }
  _applyTabIndex() {
    const items = this._getItems();
    for (let i = 0; i < items.length; i++) {
      items[i].forcedTabIndex = i === this._currentIndex ? "0" : "-1";
    }
    this._affectedPropertiesNames.forEach((propName) => {
      const prop = this.rootWebComponent[propName];
      this.rootWebComponent[propName] = Array.isArray(prop) ? [...prop] : __spreadValues({}, prop);
    });
  }
  _focusCurrentItem() {
    const currentItem = this._getCurrentItem();
    if (currentItem) {
      currentItem.focus();
    }
  }
  _canNavigate() {
    const currentItem = this._getCurrentItem();
    const activeElement = getActiveElement_default();
    return currentItem && currentItem === activeElement;
  }
  _getCurrentItem() {
    const items = this._getItems();
    if (!items.length) {
      return;
    }
    while (this._currentIndex >= items.length) {
      this._currentIndex -= this._rowSize;
    }
    if (this._currentIndex < 0) {
      this._currentIndex = 0;
    }
    const currentItem = items[this._currentIndex];
    if (!currentItem) {
      return;
    }
    if (instanceOfUI5Element(currentItem)) {
      return currentItem.getFocusDomRef();
    }
    const currentItemDOMRef = this.rootWebComponent.getDomRef();
    if (!currentItemDOMRef) {
      return;
    }
    if (currentItem.id) {
      return currentItemDOMRef.querySelector(`[id="${currentItem.id}"]`);
    }
  }
};
var ItemNavigation_default = ItemNavigation;

// node_modules/@ui5/webcomponents-base/dist/util/dragAndDrop/DragRegistry.js
var draggedElement = null;
var globalHandlersAttached = false;
var subscribers = /* @__PURE__ */ new Set();
var selfManagedDragAreas = /* @__PURE__ */ new Set();
var ondragstart = (e) => {
  if (!e.dataTransfer || !(e.target instanceof HTMLElement)) {
    return;
  }
  if (!selfManagedDragAreas.has(e.target)) {
    draggedElement = e.target;
  }
};
var ondragend = () => {
  draggedElement = null;
};
var ondrop = () => {
  draggedElement = null;
};
var setDraggedElement = (element) => {
  draggedElement = element;
};
var getDraggedElement = () => {
  return draggedElement;
};
var attachGlobalHandlers = () => {
  if (globalHandlersAttached) {
    return;
  }
  document.body.addEventListener("dragstart", ondragstart);
  document.body.addEventListener("dragend", ondragend);
  document.body.addEventListener("drop", ondrop);
};
var detachGlobalHandlers = () => {
  document.body.removeEventListener("dragstart", ondragstart);
  document.body.removeEventListener("dragend", ondragend);
  document.body.removeEventListener("drop", ondrop);
  globalHandlersAttached = false;
};
var subscribe = (subscriber) => {
  subscribers.add(subscriber);
  if (!globalHandlersAttached) {
    attachGlobalHandlers();
  }
};
var unsubscribe = (subscriber) => {
  subscribers.delete(subscriber);
  if (subscribers.size === 0 && globalHandlersAttached) {
    detachGlobalHandlers();
  }
};
var addSelfManagedArea = (area) => {
  selfManagedDragAreas.add(area);
  return setDraggedElement;
};
var removeSelfManagedArea = (area) => {
  selfManagedDragAreas.delete(area);
};
var DragRegistry = {
  subscribe,
  unsubscribe,
  addSelfManagedArea,
  removeSelfManagedArea,
  getDraggedElement
};
var DragRegistry_default = DragRegistry;

// node_modules/@ui5/webcomponents-base/dist/types/MovePlacement.js
var MovePlacement;
(function(MovePlacement2) {
  MovePlacement2["On"] = "On";
  MovePlacement2["Before"] = "Before";
  MovePlacement2["After"] = "After";
})(MovePlacement || (MovePlacement = {}));
var MovePlacement_default = MovePlacement;

// node_modules/@ui5/webcomponents-base/dist/types/Orientation.js
var Orientation;
(function(Orientation2) {
  Orientation2["Vertical"] = "Vertical";
  Orientation2["Horizontal"] = "Horizontal";
})(Orientation || (Orientation = {}));
var Orientation_default = Orientation;

// node_modules/@ui5/webcomponents-base/dist/util/dragAndDrop/findClosestPosition.js
var closestPlacement = (point, beforePoint, centerPoint, afterPoint) => {
  const distToBeforePoint = Math.abs(point - beforePoint);
  const distToCenterPoint = Math.abs(point - centerPoint);
  const distToAfterPoint = Math.abs(point - afterPoint);
  const closestPoint = Math.min(distToBeforePoint, distToCenterPoint, distToAfterPoint);
  let placements = [];
  switch (closestPoint) {
    case distToBeforePoint:
      placements = [MovePlacement_default.Before];
      break;
    case distToCenterPoint:
      placements = [MovePlacement_default.On, distToBeforePoint < distToAfterPoint ? MovePlacement_default.Before : MovePlacement_default.After];
      break;
    case distToAfterPoint:
      placements = [MovePlacement_default.After];
      break;
  }
  return placements;
};
var findClosestPosition = (elements, point, layoutOrientation) => {
  let shortestDist = Number.POSITIVE_INFINITY;
  let closestElement = null;
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const {
      left: left2,
      width: width2,
      top: top2,
      height: height2
    } = el.getBoundingClientRect();
    let elemCenter;
    if (layoutOrientation === Orientation_default.Vertical) {
      elemCenter = top2 + height2 / 2;
    } else {
      elemCenter = left2 + width2 / 2;
    }
    const distanceToCenter = Math.abs(point - elemCenter);
    if (distanceToCenter < shortestDist) {
      shortestDist = distanceToCenter;
      closestElement = el;
    }
  }
  if (!closestElement) {
    return null;
  }
  const {
    width,
    height,
    left,
    right,
    top,
    bottom
  } = closestElement.getBoundingClientRect();
  let placements;
  if (layoutOrientation === Orientation_default.Vertical) {
    placements = closestPlacement(point, top, top + height / 2, bottom);
  } else {
    placements = closestPlacement(point, left, left + width / 2, right);
  }
  return {
    element: closestElement,
    placements
  };
};
var findClosestPosition_default = findClosestPosition;

// node_modules/@ui5/webcomponents-base/dist/util/getNormalizedTarget.js
var getNormalizedTarget = (target) => {
  let element = target;
  if (target.shadowRoot && target.shadowRoot.activeElement) {
    element = target.shadowRoot.activeElement;
  }
  return element;
};
var getNormalizedTarget_default = getNormalizedTarget;

// node_modules/@ui5/webcomponents-base/dist/util/debounce.js
var debounceInterval = null;
var debounce = (fn, delay) => {
  debounceInterval && clearTimeout(debounceInterval);
  debounceInterval = setTimeout(() => {
    debounceInterval = null;
    fn();
  }, delay);
};
var debounce_default = debounce;

// node_modules/@ui5/webcomponents-base/dist/util/isElementInView.js
var isElementInView = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};
var isElementInView_default = isElementInView;

// node_modules/@ui5/webcomponents/dist/types/ListMode.js
var ListMode;
(function(ListMode2) {
  ListMode2["None"] = "None";
  ListMode2["SingleSelect"] = "SingleSelect";
  ListMode2["SingleSelectBegin"] = "SingleSelectBegin";
  ListMode2["SingleSelectEnd"] = "SingleSelectEnd";
  ListMode2["SingleSelectAuto"] = "SingleSelectAuto";
  ListMode2["MultiSelect"] = "MultiSelect";
  ListMode2["Delete"] = "Delete";
})(ListMode || (ListMode = {}));
var ListMode_default = ListMode;

// node_modules/@ui5/webcomponents/dist/types/ListGrowingMode.js
var ListGrowingMode;
(function(ListGrowingMode2) {
  ListGrowingMode2["Button"] = "Button";
  ListGrowingMode2["Scroll"] = "Scroll";
  ListGrowingMode2["None"] = "None";
})(ListGrowingMode || (ListGrowingMode = {}));
var ListGrowingMode_default = ListGrowingMode;

// node_modules/@ui5/webcomponents-base/dist/util/isElementTabbable.js
var isElementTabbable = (el) => {
  if (!el) {
    return false;
  }
  const nodeName = el.nodeName.toLowerCase();
  if (el.hasAttribute("data-sap-no-tab-ref")) {
    return false;
  }
  if (isElementHidden_default(el)) {
    return false;
  }
  const tabIndex = el.getAttribute("tabindex");
  if (tabIndex !== null && tabIndex !== void 0) {
    return parseInt(tabIndex) >= 0;
  }
  if (nodeName === "a" || /input|select|textarea|button|object/.test(nodeName)) {
    return !el.disabled;
  }
  return false;
};
var isElementTabbable_default = isElementTabbable;

// node_modules/@ui5/webcomponents-base/dist/util/TabbableElements.js
var getTabbableElements = (el) => {
  return getTabbables([...el.children]);
};
var getTabbables = (nodes, tabbables) => {
  const tabbableElements = tabbables || [];
  if (!nodes) {
    return tabbableElements;
  }
  nodes.forEach((currentNode) => {
    if (currentNode.nodeType === Node.TEXT_NODE || currentNode.nodeType === Node.COMMENT_NODE) {
      return;
    }
    let currentElement = currentNode;
    if (currentElement.hasAttribute("data-sap-no-tab-ref")) {
      return;
    }
    if (currentElement.shadowRoot) {
      const children = currentElement.shadowRoot.children;
      currentElement = Array.from(children).find((node) => node.tagName !== "STYLE");
    }
    if (!currentElement) {
      return;
    }
    if (isElementTabbable_default(currentElement)) {
      tabbableElements.push(currentElement);
    }
    if (currentElement.tagName === "SLOT") {
      getTabbables(currentElement.assignedNodes(), tabbableElements);
    } else {
      getTabbables([...currentElement.children], tabbableElements);
    }
  });
  return tabbableElements;
};

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItemBase.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/ListItemBase.css.ts",
  content: `:host(:not([hidden])){display:block}:host{height:var(--_ui5-v1-24-29_list_item_base_height);background:var(--ui5-v1-24-29-listitem-background-color);box-sizing:border-box;border-bottom:1px solid transparent}:host([selected]){background:var(--sapList_SelectionBackgroundColor);.ui5-li-additional-text{text-shadow:var(--sapContent_TextShadow)}}:host([has-border]){border-bottom:var(--ui5-v1-24-29-listitem-border-bottom)}:host([selected]){border-bottom:var(--ui5-v1-24-29-listitem-selected-border-bottom)}:host(:not([focused])[selected][has-border]){border-bottom:var(--ui5-v1-24-29-listitem-selected-border-bottom)}:host([focused][selected]){border-bottom:var(--ui5-v1-24-29-listitem-focused-selected-border-bottom)}.ui5-li-root{position:relative;display:flex;align-items:center;width:100%;height:100%;padding:0 1rem;box-sizing:border-box;background:inherit}:host([focused]) .ui5-li-root.ui5-li--focusable{outline:none}:host([focused]:not([data-moving])) .ui5-li-root.ui5-li--focusable:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;border-radius:0;inset:.125rem;pointer-events:none}:host([focused]:not(data-moving)) .ui5-li-root .ui5-li-content:focus:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([active][focused]) .ui5-li-root.ui5-li--focusable:after{border-color:var(--ui5-v1-24-29-listitem-active-border-color)}:host([disabled]){opacity:var(--_ui5-v1-24-29-listitembase_disabled_opacity);pointer-events:none}.ui5-li-content{max-width:100%;font-family:"72override",var(--sapFontFamily);color:var(--sapList_TextColor)}
`
};
var ListItemBase_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/DraggableElement.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/DraggableElement.css.ts",
  content: `[draggable=true]{cursor:grab!important}[draggable=true][data-moving]{cursor:grabbing!important;opacity:var(--sapContent_DisabledOpacity)}
`
};
var DraggableElement_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/ListItemBase.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItemBase = class ListItemBase2 extends UI5Element_default {
  _onfocusin(e) {
    this.fireEvent("_request-tabindex-change", e);
    if (e.target !== this.getFocusDomRef()) {
      return;
    }
    this.focused = true;
    this.fireEvent("_focused", e);
  }
  _onfocusout() {
    this.focused = false;
  }
  _onkeydown(e) {
    if (isTabNext(e)) {
      return this._handleTabNext(e);
    }
    if (isTabPrevious(e)) {
      return this._handleTabPrevious(e);
    }
  }
  _onkeyup(e) {
  }
  // eslint-disable-line
  _handleTabNext(e) {
    if (this.shouldForwardTabAfter()) {
      if (!this.fireEvent("_forward-after", {}, true)) {
        e.preventDefault();
      }
    }
  }
  _handleTabPrevious(e) {
    const target = e.target;
    if (this.shouldForwardTabBefore(target)) {
      this.fireEvent("_forward-before");
    }
  }
  /*
  * Determines if th current list item either has no tabbable content or
  * [Tab] is performed onto the last tabbale content item.
  */
  shouldForwardTabAfter() {
    const aContent = getTabbableElements(this.getFocusDomRef());
    return aContent.length === 0 || aContent[aContent.length - 1] === getActiveElement_default();
  }
  /*
  * Determines if the current list item is target of [SHIFT+TAB].
  */
  shouldForwardTabBefore(target) {
    return this.getFocusDomRef() === target;
  }
  get classes() {
    return {
      main: {
        "ui5-li-root": true,
        "ui5-li--focusable": this._focusable
      }
    };
  }
  get _ariaDisabled() {
    return this.disabled ? true : void 0;
  }
  get _focusable() {
    return !this.disabled;
  }
  get hasConfigurableMode() {
    return false;
  }
  get _effectiveTabIndex() {
    if (!this._focusable) {
      return -1;
    }
    if (this.selected) {
      return 0;
    }
    return this.forcedTabIndex;
  }
};
__decorate([property_default({
  type: Boolean
})], ListItemBase.prototype, "selected", void 0);
__decorate([property_default({
  type: Boolean
})], ListItemBase.prototype, "movable", void 0);
__decorate([property_default({
  type: Boolean
})], ListItemBase.prototype, "hasBorder", void 0);
__decorate([property_default({
  defaultValue: "-1",
  noAttribute: true
})], ListItemBase.prototype, "forcedTabIndex", void 0);
__decorate([property_default({
  type: Boolean
})], ListItemBase.prototype, "disabled", void 0);
__decorate([property_default({
  type: Boolean
})], ListItemBase.prototype, "focused", void 0);
ListItemBase = __decorate([customElement_default({
  renderer: LitRenderer_default,
  styles: [ListItemBase_css_default, DraggableElement_css_default]
}), event_default("_request-tabindex-change"), event_default("_focused"), event_default("_forward-after"), event_default("_forward-before")], ListItemBase);
var ListItemBase_default = ListItemBase;

// node_modules/@ui5/webcomponents/dist/generated/templates/DropIndicatorTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}"></div>`;
}
var DropIndicatorTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/DropIndicator.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/DropIndicator.css.ts",
  content: `:host{position:absolute;pointer-events:none;z-index:99}:host([orientation="Vertical"]) .ui5-di-needle{width:.125rem;height:100%;inset-block:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Horizontal"]) .ui5-di-needle{height:.125rem;width:100%;inset-inline:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Vertical"]) .ui5-di-needle:before{left:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host([orientation="Horizontal"]) .ui5-di-needle:before{top:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host .ui5-di-rect{border:.125rem solid var(--sapContent_DragAndDropActiveColor);position:absolute;inset:0}:host .ui5-di-rect:before{content:" ";position:absolute;inset:0;background:var(--sapContent_DragAndDropActiveColor);opacity:.05}
`
};
var DropIndicator_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/DropIndicator.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DropIndicator = class DropIndicator2 extends UI5Element_default {
  get _positionProperty() {
    if (this.orientation === Orientation_default.Vertical) {
      return "left";
    }
    return "top";
  }
  constructor() {
    super();
  }
  onAfterRendering() {
    if (!this.targetReference || !this.ownerReference) {
      Object.assign(this.style, {
        display: "none"
      });
      return;
    }
    const {
      left,
      width,
      right,
      top,
      bottom,
      height
    } = this.targetReference.getBoundingClientRect();
    const {
      top: containerTop
    } = this.ownerReference.getBoundingClientRect();
    const style = {
      display: "",
      [this._positionProperty]: "",
      width: "",
      height: ""
    };
    let position = 0;
    if (this.orientation === Orientation_default.Vertical) {
      switch (this.placement) {
        case MovePlacement_default.Before:
          position = left - this._needle.offsetWidth / 2;
          break;
        case MovePlacement_default.On:
          style.width = `${width}px`;
          position = left;
          break;
        case MovePlacement_default.After:
          position = right - this._needle.offsetWidth / 2;
          break;
      }
      style.height = `${height}px`;
    }
    if (this.orientation === Orientation_default.Horizontal) {
      switch (this.placement) {
        case MovePlacement_default.Before:
          position = top;
          break;
        case MovePlacement_default.On:
          style.height = `${height}px`;
          position = top;
          break;
        case MovePlacement_default.After:
          position = bottom;
          break;
      }
      style.width = `${width}px`;
      position -= containerTop;
    }
    style[this._positionProperty] = `${position}px`;
    Object.assign(this.style, style);
  }
  get classes() {
    return {
      root: {
        "ui5-di-rect": this.placement === MovePlacement_default.On,
        "ui5-di-needle": this.placement !== MovePlacement_default.On
      }
    };
  }
  get _needle() {
    return this.shadowRoot.querySelector(".ui5-di-needle");
  }
};
__decorate2([property_default({
  type: Object,
  defaultValue: null
})], DropIndicator.prototype, "targetReference", void 0);
__decorate2([property_default({
  type: Object,
  defaultValue: null
})], DropIndicator.prototype, "ownerReference", void 0);
__decorate2([property_default({
  type: MovePlacement_default,
  defaultValue: MovePlacement_default.Before
})], DropIndicator.prototype, "placement", void 0);
__decorate2([property_default({
  type: Orientation_default,
  defaultValue: Orientation_default.Vertical
})], DropIndicator.prototype, "orientation", void 0);
DropIndicator = __decorate2([customElement_default({
  tag: "ui5-drop-indicator",
  renderer: LitRenderer_default,
  styles: DropIndicator_css_default,
  template: DropIndicatorTemplate_lit_default,
  dependencies: []
})], DropIndicator);
DropIndicator.define();
var DropIndicator_default = DropIndicator;

// node_modules/@ui5/webcomponents/dist/types/ListSeparators.js
var ListSeparators;
(function(ListSeparators2) {
  ListSeparators2["All"] = "All";
  ListSeparators2["Inner"] = "Inner";
  ListSeparators2["None"] = "None";
})(ListSeparators || (ListSeparators = {}));
var ListSeparators_default = ListSeparators;

// node_modules/@ui5/webcomponents/dist/generated/templates/ListTemplate.lit.js
function block02(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${ifDefined(this.onItemPress)} @ui5-close=${ifDefined(this.onItemClose)} @ui5-toggle=${ifDefined(this.onItemToggle)} @ui5-_request-tabindex-change=${ifDefined(this.onItemTabIndexChange)} @ui5-_focused=${ifDefined(this.onItemFocused)} @ui5-_forward-after=${ifDefined(this.onForwardAfter)} @ui5-_forward-before=${ifDefined(this.onForwardBefore)} @ui5-_selection-requested=${ifDefined(this.onSelectionRequested)} @ui5-_focus-requested=${ifDefined(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length ? block1.call(this, context, tags, suffix) : void 0}${this.shouldRenderH1 ? block2.call(this, context, tags, suffix) : void 0}${this.hasData ? block3.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-modeLabel" class="ui5-hidden-text">${ifDefined(this.ariaLabelModeText)}</span><ul id="${ifDefined(this._id)}-listUl" class="ui5-list-ul" role="${ifDefined(this.accessibleRole)}" aria-label="${ifDefined(this.ariaLabelTxt)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}" aria-roledescription="${ifDefined(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText ? block4.call(this, context, tags, suffix) : void 0}</ul>${this.growsWithButton ? block5.call(this, context, tags, suffix) : void 0}${this.footerText ? block6.call(this, context, tags, suffix) : void 0}${this.hasData ? block7.call(this, context, tags, suffix) : void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy ? block8.call(this, context, tags, suffix) : void 0}<${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Horizontal" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}></div> ` : effectiveHtml`<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${ifDefined(this.onItemPress)} @ui5-close=${ifDefined(this.onItemClose)} @ui5-toggle=${ifDefined(this.onItemToggle)} @ui5-_request-tabindex-change=${ifDefined(this.onItemTabIndexChange)} @ui5-_focused=${ifDefined(this.onItemFocused)} @ui5-_forward-after=${ifDefined(this.onForwardAfter)} @ui5-_forward-before=${ifDefined(this.onForwardBefore)} @ui5-_selection-requested=${ifDefined(this.onSelectionRequested)} @ui5-_focus-requested=${ifDefined(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length ? block1.call(this, context, tags, suffix) : void 0}${this.shouldRenderH1 ? block2.call(this, context, tags, suffix) : void 0}${this.hasData ? block3.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-modeLabel" class="ui5-hidden-text">${ifDefined(this.ariaLabelModeText)}</span><ul id="${ifDefined(this._id)}-listUl" class="ui5-list-ul" role="${ifDefined(this.accessibleRole)}" aria-label="${ifDefined(this.ariaLabelTxt)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}" aria-roledescription="${ifDefined(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText ? block4.call(this, context, tags, suffix) : void 0}</ul>${this.growsWithButton ? block5.call(this, context, tags, suffix) : void 0}${this.footerText ? block6.call(this, context, tags, suffix) : void 0}${this.hasData ? block7.call(this, context, tags, suffix) : void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy ? block8.call(this, context, tags, suffix) : void 0}<ui5-drop-indicator orientation="Horizontal" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator></div> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<slot name="header" />`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<header id="${ifDefined(this.headerID)}" class="ui5-list-header">${ifDefined(this.headerText)}</header>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<li id="${ifDefined(this._id)}-nodata" class="ui5-list-nodata"><div id="${ifDefined(this._id)}-nodata-text" class="ui5-list-nodata-text">${ifDefined(this.noDataText)}</div></li>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<div growing-button><div tabindex="0" role="button" id="${ifDefined(this._id)}-growing-btn" aria-labelledby="${ifDefined(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${ifDefined(this._id)}-growingButton-text" growing-button-text>${ifDefined(this._growingButtonText)}</span></div></div>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<footer id="${ifDefined(this._id)}-footer" class="ui5-list-footer">${ifDefined(this.footerText)}</footer>`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`;
}
function block8(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-list-busy-row"><${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${styleMap(this.styles.busyInd)}" data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${ifDefined(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${styleMap(this.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`;
}
var ListTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/List.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData4 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/List.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v1-24-29_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v1-24-29_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v1-24-29_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v1-24-29_load_more_border);border-radius:var(--_ui5-v1-24-29_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus{outline:var(--_ui5-v1-24-29_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v1-24-29_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v1-24-29_load_more_text_font_size);font-weight:700}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v1-24-29_load_more_desc_padding)}:host(:not([hidden])){display:block;max-width:100%;width:100%;-webkit-tap-highlight-color:transparent}:host([indent]) .ui5-list-root{padding:2rem}:host([separators="None"]) .ui5-list-nodata{border-bottom:0}:host([busy]){opacity:.72}:host([busy]) .ui5-list-busy-row{position:absolute;inset:0;outline:none}:host([busy]) .ui5-list-busy-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.ui5-list-root{width:100%;height:100%;position:relative;box-sizing:border-box}.ui5-list-scroll-container{overflow:auto;height:100%}.ui5-list-ul{list-style-type:none;padding:0;margin:0}.ui5-list-ul:focus{outline:none}.ui5-list-focusarea{position:fixed}.ui5-list-header{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;font-size:var(--sapFontHeader4Size);font-family:"72override",var(--sapFontFamily);color:var(--sapGroup_TitleTextColor);height:3rem;line-height:3rem;padding:0 1rem;background-color:var(--sapGroup_TitleBackground);border-bottom:1px solid var(--sapGroup_TitleBorderColor)}.ui5-list-footer{height:2rem;box-sizing:border-box;-webkit-text-size-adjust:none;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);line-height:2rem;background-color:var(--sapList_FooterBackground);color:var(--ui5-v1-24-29_list_footer_text_color);padding:0 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-list-nodata{list-style-type:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--sapTextColor);background-color:var(--sapList_Background);border-bottom:1px solid var(--sapList_BorderColor);padding:0 1rem!important;height:var(--_ui5-v1-24-29_list_no_data_height);font-size:var(--_ui5-v1-24-29_list_no_data_font_size);font-family:"72override",var(--sapFontFamily)}.ui5-list-nodata-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([growing="Scroll"]) .ui5-list-end-marker{display:inline-block}
`
};
var List_css_default = styleData4;

// node_modules/@ui5/webcomponents/dist/RadioButtonGroup.js
var RadioButtonGroup = class {
  static hasGroup(groupName) {
    return this.groups.has(groupName);
  }
  static getGroup(groupName) {
    return this.groups.get(groupName);
  }
  static getCheckedRadioFromGroup(groupName) {
    return this.checkedRadios.get(groupName);
  }
  static removeGroup(groupName) {
    this.checkedRadios.delete(groupName);
    return this.groups.delete(groupName);
  }
  static addToGroup(radioBtn, groupName) {
    if (this.hasGroup(groupName)) {
      this.enforceSingleSelection(radioBtn, groupName);
      if (this.getGroup(groupName)) {
        this.getGroup(groupName).push(radioBtn);
      }
    } else {
      this.createGroup(radioBtn, groupName);
    }
    this.updateTabOrder(groupName);
  }
  static removeFromGroup(radioBtn, groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const checkedRadio = this.getCheckedRadioFromGroup(groupName);
    group.forEach((_radioBtn, idx, arr) => {
      if (radioBtn._id === _radioBtn._id) {
        return arr.splice(idx, 1);
      }
    });
    if (checkedRadio === radioBtn) {
      this.checkedRadios.set(groupName, null);
    }
    if (!group.length) {
      this.removeGroup(groupName);
    }
    this.updateTabOrder(groupName);
  }
  static createGroup(radioBtn, groupName) {
    if (radioBtn.checked) {
      this.checkedRadios.set(groupName, radioBtn);
    }
    this.groups.set(groupName, [radioBtn]);
  }
  static selectNextItem(item, groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const groupLength = group.length, currentItemPosition = group.indexOf(item);
    if (groupLength <= 1) {
      return;
    }
    const nextItemToFocus = this._nextFocusable(currentItemPosition, group);
    if (!nextItemToFocus) {
      return;
    }
    this.updateSelectionInGroup(nextItemToFocus, groupName);
  }
  static updateFormValidity(groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    group.forEach((r) => r._resetFormValidity());
    const groupRequiresValue = group.some((r) => r.required) && group.every((r) => !r.checked);
    if (groupRequiresValue) {
      group[0]._invalidateForm();
    }
  }
  static updateTabOrder(groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const hasCheckedRadio = group.some((radioBtn) => radioBtn.checked);
    group.filter((radioBtn) => !radioBtn.disabled).forEach((radioBtn, idx) => {
      let activeElement = getActiveElement_default();
      if (activeElement.classList.contains("ui5-radio-root")) {
        activeElement = activeElement.getRootNode();
        if (activeElement instanceof ShadowRoot) {
          activeElement = activeElement.host;
        }
      }
      if (hasCheckedRadio) {
        if (activeElement.hasAttribute("ui5-radio-button") && activeElement.readonly) {
          radioBtn._tabIndex = activeElement === radioBtn && radioBtn.readonly ? "0" : "-1";
        } else {
          radioBtn._tabIndex = radioBtn.checked ? "0" : "-1";
        }
      } else {
        radioBtn._tabIndex = idx === 0 ? "0" : "-1";
      }
    });
  }
  static selectPreviousItem(item, groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const groupLength = group.length, currentItemPosition = group.indexOf(item);
    if (groupLength <= 1) {
      return;
    }
    const previousItemToFocus = this._previousFocusable(currentItemPosition, group);
    if (!previousItemToFocus) {
      return;
    }
    this.updateSelectionInGroup(previousItemToFocus, groupName);
  }
  static selectItem(item, groupName) {
    this.updateSelectionInGroup(item, groupName);
    this.updateTabOrder(groupName);
  }
  static updateSelectionInGroup(radioBtnToSelect, groupName) {
    const checkedRadio = this.getCheckedRadioFromGroup(groupName);
    if (checkedRadio && !radioBtnToSelect.readonly) {
      this._deselectRadio(checkedRadio);
      this.checkedRadios.set(groupName, radioBtnToSelect);
    }
    if (radioBtnToSelect) {
      radioBtnToSelect.focus();
      if (!radioBtnToSelect.readonly) {
        this._selectRadio(radioBtnToSelect);
      } else {
        setTimeout(() => {
          this.updateTabOrder(groupName);
        }, 0);
      }
    }
  }
  static _deselectRadio(radioBtn) {
    if (radioBtn) {
      radioBtn.checked = false;
    }
  }
  static _selectRadio(radioBtn) {
    radioBtn.checked = true;
    radioBtn._checked = true;
    radioBtn.fireEvent("change");
  }
  static _nextFocusable(pos, group) {
    if (!group) {
      return null;
    }
    const groupLength = group.length;
    let nextRadioToFocus = null;
    if (pos === groupLength - 1) {
      if (group[0].disabled) {
        return this._nextFocusable(1, group);
      }
      nextRadioToFocus = group[0];
    } else if (group[pos + 1].disabled) {
      return this._nextFocusable(pos + 1, group);
    } else {
      nextRadioToFocus = group[pos + 1];
    }
    return nextRadioToFocus;
  }
  static _previousFocusable(pos, group) {
    const groupLength = group.length;
    let previousRadioToFocus = null;
    if (pos === 0) {
      if (group[groupLength - 1].disabled) {
        return this._previousFocusable(groupLength - 1, group);
      }
      previousRadioToFocus = group[groupLength - 1];
    } else if (group[pos - 1].disabled) {
      return this._previousFocusable(pos - 1, group);
    } else {
      previousRadioToFocus = group[pos - 1];
    }
    return previousRadioToFocus;
  }
  static enforceSingleSelection(radioBtn, groupName) {
    const checkedRadio = this.getCheckedRadioFromGroup(groupName);
    if (radioBtn.checked) {
      if (!checkedRadio) {
        this.checkedRadios.set(groupName, radioBtn);
      } else if (radioBtn !== checkedRadio) {
        this._deselectRadio(checkedRadio);
        this.checkedRadios.set(groupName, radioBtn);
      }
    } else if (radioBtn === checkedRadio) {
      this.checkedRadios.set(groupName, null);
    }
    this.updateTabOrder(groupName);
    this.updateFormValidity(groupName);
  }
  static get groups() {
    if (!this._groups) {
      this._groups = /* @__PURE__ */ new Map();
    }
    return this._groups;
  }
  static get checkedRadios() {
    if (!this._checkedRadios) {
      this._checkedRadios = /* @__PURE__ */ new Map();
    }
    return this._checkedRadios;
  }
};
var RadioButtonGroup_default = RadioButtonGroup;

// node_modules/@ui5/webcomponents/dist/generated/templates/RadioButtonTemplate.lit.js
function block03(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-radio-root" role="radio" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-describedby="${ifDefined(this.effectiveAriaDescribedBy)}" aria-label="${ifDefined(this.ariaLabelText)}" tabindex="${ifDefined(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${classMap(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${blockSVG1.call(this, context, tags, suffix)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" name="${ifDefined(this.name)}"  data-sap-no-tab-ref/></div>${this.text ? block12.call(this, context, tags, suffix) : void 0}${this.hasValueState ? block22.call(this, context, tags, suffix) : void 0}<slot name="formSupport"></slot></div>`;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-label", tags, suffix)} id="${ifDefined(this._id)}-label" class="ui5-radio-label" for="${ifDefined(this._id)}" wrapping-type="${ifDefined(this.wrappingType)}">${ifDefined(this.text)}</${scopeTag("ui5-label", tags, suffix)}>` : effectiveHtml`<ui5-label id="${ifDefined(this._id)}-label" class="ui5-radio-label" for="${ifDefined(this._id)}" wrapping-type="${ifDefined(this.wrappingType)}">${ifDefined(this.text)}</ui5-label>`;
}
function block22(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" class="ui5-hidden-text">${ifDefined(this.valueStateText)}</span>`;
}
function blockSVG1(context, tags, suffix) {
  return effectiveSvg`<circle part="outer-ring" class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle part="inner-ring" class="ui5-radio-svg-inner" cx="50%" cy="50%" />`;
}
var RadioButtonTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/generated/themes/RadioButton.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData5 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/RadioButton.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v1-24-29_radio_button_min_width);max-width:100%;text-overflow:ellipsis;overflow:hidden;color:var(--_ui5-v1-24-29_radio_button_color);border-radius:var(--_ui5-v1-24-29_radio_button_border_radius)}:host(:not([disabled])) .ui5-radio-root{cursor:pointer}:host([checked]){color:var(--_ui5-v1-24-29_radio_button_checked_fill)}:host([checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-29_radio_button_inner_ring_color)}:host([checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-29_radio_button_outer_ring_color)}:host([disabled]) .ui5-radio-root{color:var(--_ui5-v1-24-29_radio_button_color);opacity:var(--sapContent_DisabledOpacity)}:host([disabled][checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-29_radio_button_color)}:host(:not([disabled])) .ui5-radio-root:focus:before{content:"";display:var(--_ui5-v1-24-29_radio_button_focus_outline);position:absolute;inset:var(--_ui5-v1-24-29_radio_button_focus_dist);pointer-events:none;border:var(--_ui5-v1-24-29_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-29_radio_button_border_radius)}:host(:not([disabled])) .ui5-radio-root:focus{border-radius:var(--_ui5-v1-24-29_radio_button_border_radius);border:var(--_ui5-v1-24-29_radio_button_focus_border)}:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-29_radio_button_outer_ring_hover_color)}:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-29_radio_button_outer_ring_checked_hover_color)}.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-29_radio_button_hover_fill)}:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-29_radio_button_outer_ring_checked_hover_color)}:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-29_radio_button_outer_ring_active_color)}:host([text]) .ui5-radio-root{padding-inline-end:var(--_ui5-v1-24-29_radio_button_border_width)}:host([text]) .ui5-radio-root:focus:before{inset-inline-end:0px}:host([text]) .ui5-radio-inner{padding:var(--_ui5-v1-24-29_radio_button_outer_ring_padding_with_label)}:host([checked][readonly]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-29_radio_button_read_only_inner_ring_color)}:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer{fill:var(--sapField_ReadOnly_Background);stroke:var(--sapField_ReadOnly_BorderColor);stroke-dasharray:var(--_ui5-v1-24-29_radio_button_read_only_border_type);stroke-width:var(--_ui5-v1-24-29_radio_button_read_only_border_width)}:host([value-state="Error"]) .ui5-radio-svg-outer,:host([value-state="Warning"]) .ui5-radio-svg-outer{stroke-width:var(--sapField_InvalidBorderWidth)}:host([value-state="Information"]) .ui5-radio-svg-outer{stroke-width:var(--_ui5-v1-24-29_radio_button_information_border_width)}:host([value-state="Error"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-29_radio_button_checked_error_fill)}:host([value-state="Error"]) .ui5-radio-svg-outer,:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InvalidColor);fill:var(--sapField_InvalidBackground)}:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-29_radio_button_hover_fill_error)}:host([value-state="Warning"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-29_radio_button_checked_warning_fill)}:host([value-state="Warning"]) .ui5-radio-svg-outer,:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_WarningColor);fill:var(--sapField_WarningBackground)}:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-29_radio_button_hover_fill_warning)}:host([value-state="Success"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-29_radio_button_checked_success_fill)}:host([value-state="Success"]) .ui5-radio-svg-outer,:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_SuccessColor);fill:var(--sapField_SuccessBackground)}:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-29_radio_button_hover_fill_success)}:host([value-state="Information"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-29_radio_button_checked_information_fill)}:host([value-state="Information"]) .ui5-radio-svg-outer,:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InformationColor);fill:var(--sapField_InformationBackground)}:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-29_radio_button_hover_fill_information)}:host([value-state="Error"]) .ui5-radio-root,:host([value-state="Warning"]) .ui5-radio-root,:host([value-state="Information"]) .ui5-radio-root{stroke-dasharray:var(--_ui5-v1-24-29_radio_button_warning_error_border_dash)}.ui5-radio-root{height:var(--_ui5-v1-24-29_radio_button_height);position:relative;display:inline-flex;flex-wrap:nowrap;outline:none;max-width:100%;box-sizing:border-box;border:var(--_ui5-v1-24-29_radio_button_border);border-radius:var(--_ui5-v1-24-29_radio_button_border_radius)}.ui5-radio-inner{display:flex;align-items:center;padding:var(--_ui5-v1-24-29_radio_button_outer_ring_padding);flex-shrink:0;height:var(--_ui5-v1-24-29_radio_button_inner_size);font-size:1rem;pointer-events:none;vertical-align:top}.ui5-radio-inner{outline:none}.ui5-radio-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}[ui5-label].ui5-radio-label{display:flex;align-items:center;padding-inline-end:var(--_ui5-v1-24-29_radio_button_label_offset);vertical-align:top;max-width:100%;text-overflow:ellipsis;overflow:hidden;pointer-events:none;color:var(--_ui5-v1-24-29_radio_button_label_color)}:host([wrapping-type="Normal"][text]) .ui5-radio-root{height:auto}:host([wrapping-type="Normal"][text]) [ui5-label].ui5-radio-label{padding:var(--_ui5-v1-24-29_radio_button_label_side_padding) 0;overflow-wrap:break-word}.ui5-radio-svg{height:var(--_ui5-v1-24-29_radio_button_svg_size);width:var(--_ui5-v1-24-29_radio_button_svg_size);overflow:visible;pointer-events:none}.ui5-radio-svg-outer{fill:var(--_ui5-v1-24-29_radio_button_outer_ring_bg);stroke:currentColor;stroke-width:var(--_ui5-v1-24-29_radio_button_outer_ring_width)}.ui5-radio-svg-inner{fill:none;r:var(--_ui5-v1-24-29_radio_button_inner_ring_radius)}.ui5-radio-svg-outer,.ui5-radio-svg-inner{flex-shrink:0}:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer{fill:var(--sapList_Background)}
`
};
var RadioButton_css_default = styleData5;

// node_modules/@ui5/webcomponents/dist/RadioButton.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RadioButton_1;
var isGlobalHandlerAttached = false;
var activeRadio;
var RadioButton = RadioButton_1 = class RadioButton2 extends UI5Element_default {
  static get formAssociated() {
    return true;
  }
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._deactivate = () => {
      if (activeRadio) {
        activeRadio.active = false;
      }
    };
    if (!isGlobalHandlerAttached) {
      document.addEventListener("mouseup", this._deactivate);
      isGlobalHandlerAttached = true;
    }
  }
  static onDefine() {
    return __async(this, null, function* () {
      RadioButton_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  onBeforeRendering() {
    this.syncGroup();
    this._enableFormSupport();
  }
  onExitDOM() {
    this.syncGroup(true);
  }
  syncGroup(forceRemove) {
    const oldGroup = this._name;
    const currentGroup = this.name;
    const oldChecked = this._checked;
    const currentChecked = this.checked;
    if (forceRemove) {
      RadioButtonGroup_default.removeFromGroup(this, oldGroup);
    }
    if (currentGroup !== oldGroup) {
      if (oldGroup) {
        RadioButtonGroup_default.removeFromGroup(this, oldGroup);
      }
      if (currentGroup) {
        RadioButtonGroup_default.addToGroup(this, currentGroup);
      }
    } else if (currentGroup) {
      RadioButtonGroup_default.enforceSingleSelection(this, currentGroup);
    }
    if (this.name && currentChecked !== oldChecked) {
      RadioButtonGroup_default.updateTabOrder(this.name);
    }
    this._name = this.name;
    this._checked = this.checked;
  }
  _enableFormSupport() {
    const formSupport = getFeature("FormSupport");
    if (formSupport) {
      this._setFormValue();
    } else if (this.value) {
      console.warn(`In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
    }
  }
  _setFormValue() {
    this._internals.setFormValue(this.checked ? this.value : null);
  }
  _resetFormValidity() {
    this._internals.setValidity({});
  }
  _invalidateForm() {
    this._internals.setValidity({
      valueMissing: true
    }, this.radioButtonGroupRequiredText, this.shadowRoot.firstElementChild);
  }
  _onclick() {
    return this.toggle();
  }
  _handleDown(e) {
    const currentGroup = this.name;
    if (!currentGroup) {
      return;
    }
    e.preventDefault();
    RadioButtonGroup_default.selectNextItem(this, currentGroup);
  }
  _handleUp(e) {
    const currentGroup = this.name;
    if (!currentGroup) {
      return;
    }
    e.preventDefault();
    RadioButtonGroup_default.selectPreviousItem(this, currentGroup);
  }
  _onkeydown(e) {
    if (isSpace(e)) {
      this.active = true;
      return e.preventDefault();
    }
    if (isEnter(e)) {
      this.active = true;
      return this.toggle();
    }
    const isRTL = this.effectiveDir === "rtl";
    if (isDown(e) || !isRTL && isRight(e) || isRTL && isLeft(e)) {
      this._handleDown(e);
    }
    if (isUp(e) || !isRTL && isLeft(e) || isRTL && isRight(e)) {
      this._handleUp(e);
    }
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      this.toggle();
    }
    this.active = false;
  }
  _onmousedown() {
    this.active = true;
    activeRadio = this;
  }
  _onmouseup() {
    this.active = false;
  }
  _onfocusout() {
    this.active = false;
  }
  toggle() {
    if (!this.canToggle()) {
      return this;
    }
    if (!this.name) {
      this.checked = !this.checked;
      this.fireEvent("change");
      return this;
    }
    RadioButtonGroup_default.selectItem(this, this.name);
    return this;
  }
  canToggle() {
    return !(this.disabled || this.readonly || this.checked);
  }
  get classes() {
    return {
      inner: {
        "ui5-radio-inner--hoverable": !this.disabled && !this.readonly && isDesktop()
      }
    };
  }
  get effectiveAriaDisabled() {
    return this.disabled || this.readonly ? "true" : null;
  }
  get ariaLabelText() {
    return [getEffectiveAriaLabelText(this), this.text].filter(Boolean).join(" ");
  }
  get effectiveAriaDescribedBy() {
    return this.hasValueState ? `${this._id}-descr` : void 0;
  }
  get hasValueState() {
    return this.valueState !== ValueState_default.None;
  }
  get valueStateText() {
    switch (this.valueState) {
      case ValueState_default.Error:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_ERROR);
      case ValueState_default.Warning:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_WARNING);
      case ValueState_default.Success:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_SUCCESS);
      case ValueState_default.Information:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_INFORMATION);
      default:
        return "";
    }
  }
  get radioButtonGroupRequiredText() {
    return RadioButton_1.i18nBundle.getText(RADIO_BUTTON_GROUP_REQUIRED);
  }
  get effectiveTabIndex() {
    const tabindex = this.getAttribute("tabindex");
    if (this.disabled) {
      return "-1";
    }
    if (this.name) {
      return this._tabIndex;
    }
    return tabindex || "0";
  }
};
__decorate3([property_default({
  type: Boolean
})], RadioButton.prototype, "disabled", void 0);
__decorate3([property_default({
  type: Boolean
})], RadioButton.prototype, "readonly", void 0);
__decorate3([property_default({
  type: Boolean
})], RadioButton.prototype, "required", void 0);
__decorate3([property_default({
  type: Boolean
})], RadioButton.prototype, "checked", void 0);
__decorate3([property_default()], RadioButton.prototype, "text", void 0);
__decorate3([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], RadioButton.prototype, "valueState", void 0);
__decorate3([property_default()], RadioButton.prototype, "name", void 0);
__decorate3([property_default()], RadioButton.prototype, "value", void 0);
__decorate3([property_default({
  type: WrappingType_default,
  defaultValue: WrappingType_default.None
})], RadioButton.prototype, "wrappingType", void 0);
__decorate3([property_default()], RadioButton.prototype, "accessibleName", void 0);
__decorate3([property_default()], RadioButton.prototype, "accessibleNameRef", void 0);
__decorate3([property_default({
  defaultValue: "-1",
  noAttribute: true
})], RadioButton.prototype, "_tabIndex", void 0);
__decorate3([property_default({
  type: Boolean
})], RadioButton.prototype, "active", void 0);
__decorate3([slot_default()], RadioButton.prototype, "formSupport", void 0);
RadioButton = RadioButton_1 = __decorate3([
  customElement_default({
    tag: "ui5-radio-button",
    languageAware: true,
    renderer: LitRenderer_default,
    template: RadioButtonTemplate_lit_default,
    styles: RadioButton_css_default,
    dependencies: [Label_default]
  }),
  event_default("change")
], RadioButton);
RadioButton.define();
var RadioButton_default = RadioButton;

// node_modules/@ui5/webcomponents/dist/List.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var List_1;
var INFINITE_SCROLL_DEBOUNCE_RATE = 250;
var PAGE_UP_DOWN_SIZE = 10;
var List = List_1 = class List2 extends UI5Element_default {
  static onDefine() {
    return __async(this, null, function* () {
      List_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  constructor() {
    super();
    this._previouslyFocusedItem = null;
    this._forwardingFocus = false;
    this.resizeListenerAttached = false;
    this.listEndObserved = false;
    this._itemNavigation = new ItemNavigation_default(this, {
      skipItemsSize: PAGE_UP_DOWN_SIZE,
      navigationMode: NavigationMode_default.Vertical,
      getItemsCallback: () => this.getEnabledItems()
    });
    this._handleResize = this.checkListInViewport.bind(this);
    this._handleResize = this.checkListInViewport.bind(this);
    this.initialIntersection = true;
  }
  onEnterDOM() {
    DragRegistry_default.subscribe(this);
  }
  onExitDOM() {
    this.unobserveListEnd();
    this.resizeListenerAttached = false;
    ResizeHandler_default.deregister(this.getDomRef(), this._handleResize);
    DragRegistry_default.unsubscribe(this);
  }
  onBeforeRendering() {
    this.prepareListItems();
  }
  onAfterRendering() {
    if (this.growsOnScroll) {
      this.observeListEnd();
    } else if (this.listEndObserved) {
      this.unobserveListEnd();
    }
    if (this.grows) {
      this.checkListInViewport();
      this.attachForResize();
    }
  }
  attachForResize() {
    if (!this.resizeListenerAttached) {
      this.resizeListenerAttached = true;
      ResizeHandler_default.register(this.getDomRef(), this._handleResize);
    }
  }
  get shouldRenderH1() {
    return !this.header.length && this.headerText;
  }
  get headerID() {
    return `${this._id}-header`;
  }
  get modeLabelID() {
    return `${this._id}-modeLabel`;
  }
  get listEndDOM() {
    return this.shadowRoot.querySelector(".ui5-list-end-marker");
  }
  get dropIndicatorDOM() {
    return this.shadowRoot.querySelector("[ui5-drop-indicator]");
  }
  get hasData() {
    return this.getItems().length !== 0;
  }
  get showNoDataText() {
    return !this.hasData && this.noDataText;
  }
  get isDelete() {
    return this.mode === ListMode_default.Delete;
  }
  get isSingleSelect() {
    return [ListMode_default.SingleSelect, ListMode_default.SingleSelectBegin, ListMode_default.SingleSelectEnd, ListMode_default.SingleSelectAuto].includes(this.mode);
  }
  get isMultiSelect() {
    return this.mode === ListMode_default.MultiSelect;
  }
  get ariaLabelledBy() {
    if (this.accessibleNameRef || this.accessibleName) {
      return void 0;
    }
    const ids = [];
    if (this.isMultiSelect || this.isSingleSelect || this.isDelete) {
      ids.push(this.modeLabelID);
    }
    if (this.shouldRenderH1) {
      ids.push(this.headerID);
    }
    return ids.length ? ids.join(" ") : void 0;
  }
  get ariaLabelTxt() {
    return getEffectiveAriaLabelText(this);
  }
  get ariaLabelModeText() {
    if (this.hasData) {
      if (this.isMultiSelect) {
        return List_1.i18nBundle.getText(ARIA_LABEL_LIST_MULTISELECTABLE);
      }
      if (this.isSingleSelect) {
        return List_1.i18nBundle.getText(ARIA_LABEL_LIST_SELECTABLE);
      }
      if (this.isDelete) {
        return List_1.i18nBundle.getText(ARIA_LABEL_LIST_DELETABLE);
      }
    }
    return "";
  }
  get grows() {
    return this.growing !== ListGrowingMode_default.None;
  }
  get growsOnScroll() {
    return this.growing === ListGrowingMode_default.Scroll;
  }
  get growsWithButton() {
    return this.growing === ListGrowingMode_default.Button;
  }
  get _growingButtonText() {
    return this.growingButtonText || List_1.i18nBundle.getText(LOAD_MORE_TEXT);
  }
  get busyIndPosition() {
    if (!this.grows) {
      return "absolute";
    }
    return this._inViewport ? "absolute" : "sticky";
  }
  get styles() {
    return {
      busyInd: {
        position: this.busyIndPosition
      }
    };
  }
  get classes() {
    return {
      root: {
        "ui5-list-root": true
      }
    };
  }
  prepareListItems() {
    const slottedItems = this.getItemsForProcessing();
    slottedItems.forEach((item, key) => {
      const isLastChild = key === slottedItems.length - 1;
      const showBottomBorder = this.separators === ListSeparators_default.All || this.separators === ListSeparators_default.Inner && !isLastChild;
      if (item.hasConfigurableMode) {
        item._mode = this.mode;
      }
      item.hasBorder = showBottomBorder;
    });
  }
  observeListEnd() {
    return __async(this, null, function* () {
      if (!this.listEndObserved) {
        yield renderFinished();
        this.getIntersectionObserver().observe(this.listEndDOM);
        this.listEndObserved = true;
      }
    });
  }
  unobserveListEnd() {
    if (this.growingIntersectionObserver) {
      this.growingIntersectionObserver.disconnect();
      this.growingIntersectionObserver = null;
      this.listEndObserved = false;
    }
  }
  onInteresection(entries) {
    if (this.initialIntersection) {
      this.initialIntersection = false;
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        debounce_default(this.loadMore.bind(this), INFINITE_SCROLL_DEBOUNCE_RATE);
      }
    });
  }
  /*
  * ITEM SELECTION BASED ON THE CURRENT MODE
  */
  onSelectionRequested(e) {
    const previouslySelectedItems = this.getSelectedItems();
    let selectionChange = false;
    this._selectionRequested = true;
    if (this.mode !== ListMode_default.None && this[`handle${this.mode}`]) {
      selectionChange = this[`handle${this.mode}`](e.detail.item, !!e.detail.selected);
    }
    if (selectionChange) {
      const changePrevented = !this.fireEvent("selection-change", {
        selectedItems: this.getSelectedItems(),
        previouslySelectedItems,
        selectionComponentPressed: e.detail.selectionComponentPressed,
        targetItem: e.detail.item,
        key: e.detail.key
      }, true);
      if (changePrevented) {
        this._revertSelection(previouslySelectedItems);
      }
    }
  }
  handleSingleSelect(item) {
    if (item.selected) {
      return false;
    }
    this.deselectSelectedItems();
    item.selected = true;
    return true;
  }
  handleSingleSelectBegin(item) {
    return this.handleSingleSelect(item);
  }
  handleSingleSelectEnd(item) {
    return this.handleSingleSelect(item);
  }
  handleSingleSelectAuto(item) {
    return this.handleSingleSelect(item);
  }
  handleMultiSelect(item, selected) {
    item.selected = selected;
    return true;
  }
  handleDelete(item) {
    this.fireEvent("item-delete", {
      item
    });
    return true;
  }
  deselectSelectedItems() {
    this.getSelectedItems().forEach((item) => {
      item.selected = false;
    });
  }
  getSelectedItems() {
    return this.getItems().filter((item) => item.selected);
  }
  getEnabledItems() {
    return this.getItems().filter((item) => item._focusable);
  }
  getItems() {
    return this.getSlottedNodes("items");
  }
  getItemsForProcessing() {
    return this.getItems();
  }
  _revertSelection(previouslySelectedItems) {
    this.getItems().forEach((item) => {
      const oldSelection = previouslySelectedItems.indexOf(item) !== -1;
      const multiSelectCheckBox = item.shadowRoot.querySelector(".ui5-li-multisel-cb");
      const singleSelectRadioButton = item.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");
      item.selected = oldSelection;
      if (multiSelectCheckBox) {
        multiSelectCheckBox.checked = oldSelection;
      } else if (singleSelectRadioButton) {
        singleSelectRadioButton.checked = oldSelection;
      }
    });
  }
  _onkeydown(e) {
    if (isTabNext(e)) {
      this._handleTabNext(e);
    }
  }
  _onLoadMoreKeydown(e) {
    if (isSpace(e)) {
      e.preventDefault();
      this._loadMoreActive = true;
    }
    if (isEnter(e)) {
      this._onLoadMoreClick();
      this._loadMoreActive = true;
    }
    if (isTabNext(e)) {
      this.focusAfterElement();
    }
    if (isTabPrevious(e)) {
      if (this.getPreviouslyFocusedItem()) {
        this.focusPreviouslyFocusedItem();
      } else {
        this.focusFirstItem();
      }
      e.preventDefault();
    }
  }
  _onLoadMoreKeyup(e) {
    if (isSpace(e)) {
      this._onLoadMoreClick();
    }
    this._loadMoreActive = false;
  }
  _onLoadMoreMousedown() {
    this._loadMoreActive = true;
  }
  _onLoadMoreMouseup() {
    this._loadMoreActive = false;
  }
  _onLoadMoreClick() {
    this.loadMore();
  }
  checkListInViewport() {
    this._inViewport = isElementInView_default(this.getDomRef());
  }
  loadMore() {
    this.fireEvent("load-more");
  }
  /*
  * KEYBOARD SUPPORT
  */
  _handleTabNext(e) {
    let lastTabbableEl;
    const target = getNormalizedTarget_default(e.target);
    if (!lastTabbableEl) {
      return;
    }
    if (lastTabbableEl === target) {
      if (this.getFirstItem((x) => x.selected && x._focusable)) {
        this.focusFirstSelectedItem();
      } else if (this.getPreviouslyFocusedItem()) {
        this.focusPreviouslyFocusedItem();
      } else {
        this.focusFirstItem();
      }
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }
  _onfocusin(e) {
    const target = getNormalizedTarget_default(e.target);
    if (!this.isForwardElement(target)) {
      e.stopImmediatePropagation();
      return;
    }
    if (!this.getPreviouslyFocusedItem()) {
      if (this.growsWithButton && this.isForwardAfterElement(target)) {
        this.focusGrowingButton();
      } else {
        this.focusFirstItem();
      }
      e.stopImmediatePropagation();
      return;
    }
    if (!this.getForwardingFocus()) {
      if (this.growsWithButton && this.isForwardAfterElement(target)) {
        this.focusGrowingButton();
        e.stopImmediatePropagation();
        return;
      }
      this.focusPreviouslyFocusedItem();
      e.stopImmediatePropagation();
    }
    this.setForwardingFocus(false);
  }
  _ondragenter(e) {
    e.preventDefault();
  }
  _ondragleave(e) {
    if (e.relatedTarget instanceof Node && this.shadowRoot.contains(e.relatedTarget)) {
      return;
    }
    this.dropIndicatorDOM.targetReference = null;
  }
  _ondragover(e) {
    const draggedElement2 = DragRegistry_default.getDraggedElement();
    if (!(e.target instanceof HTMLElement) || !draggedElement2) {
      return;
    }
    const closestPosition = findClosestPosition_default(this.items, e.clientY, Orientation_default.Vertical);
    if (!closestPosition) {
      this.dropIndicatorDOM.targetReference = null;
      return;
    }
    let placements = closestPosition.placements;
    if (closestPosition.element === draggedElement2) {
      placements = placements.filter((placement) => placement !== MovePlacement_default.On);
    }
    const placementAccepted = placements.some((placement) => {
      const beforeItemMovePrevented = !this.fireEvent("move-over", {
        source: {
          element: draggedElement2
        },
        destination: {
          element: closestPosition.element,
          placement
        }
      }, true);
      if (beforeItemMovePrevented) {
        e.preventDefault();
        this.dropIndicatorDOM.targetReference = closestPosition.element;
        this.dropIndicatorDOM.placement = placement;
        return true;
      }
      return false;
    });
    if (!placementAccepted) {
      this.dropIndicatorDOM.targetReference = null;
    }
  }
  _ondrop(e) {
    e.preventDefault();
    const draggedElement2 = DragRegistry_default.getDraggedElement();
    this.fireEvent("move", {
      source: {
        element: draggedElement2
      },
      destination: {
        element: this.dropIndicatorDOM.targetReference,
        placement: this.dropIndicatorDOM.placement
      }
    });
    this.dropIndicatorDOM.targetReference = null;
    draggedElement2.focus();
  }
  isForwardElement(element) {
    const elementId = element.id;
    const beforeElement = this.getBeforeElement();
    if (this._id === elementId || beforeElement && beforeElement.id === elementId) {
      return true;
    }
    return this.isForwardAfterElement(element);
  }
  isForwardAfterElement(element) {
    const elementId = element.id;
    const afterElement = this.getAfterElement();
    return afterElement && afterElement.id === elementId;
  }
  onItemTabIndexChange(e) {
    const target = e.target;
    this._itemNavigation.setCurrentItem(target);
  }
  onItemFocused(e) {
    const target = e.target;
    e.stopPropagation();
    this._itemNavigation.setCurrentItem(target);
    this.fireEvent("item-focused", {
      item: target
    });
    if (this.mode === ListMode_default.SingleSelectAuto) {
      const detail = {
        item: target,
        selectionComponentPressed: false,
        selected: true,
        key: e.detail.key
      };
      this.onSelectionRequested({
        detail
      });
    }
  }
  onItemPress(e) {
    const pressedItem = e.detail.item;
    if (!this.fireEvent("item-click", {
      item: pressedItem
    }, true)) {
      return;
    }
    if (!this._selectionRequested && this.mode !== ListMode_default.Delete) {
      this._selectionRequested = true;
      const detail = {
        item: pressedItem,
        selectionComponentPressed: false,
        selected: !pressedItem.selected,
        key: e.detail.key
      };
      this.onSelectionRequested({
        detail
      });
    }
    this._selectionRequested = false;
  }
  // This is applicable to NotificationListItem
  onItemClose(e) {
    const target = e.target;
    const shouldFireItemClose = target?.hasAttribute("ui5-li-notification") || target?.hasAttribute("ui5-li-notification-group");
    if (shouldFireItemClose) {
      this.fireEvent("item-close", {
        item: e.detail?.item
      });
    }
  }
  onItemToggle(e) {
    const item = e.detail?.item;
    if (!item) {
      return;
    }
    this.fireEvent("item-toggle", {
      item
    });
  }
  onForwardBefore(e) {
    this.setPreviouslyFocusedItem(e.target);
    this.focusBeforeElement();
    e.stopPropagation();
  }
  onForwardAfter(e) {
    this.setPreviouslyFocusedItem(e.target);
    if (!this.growsWithButton) {
      this.focusAfterElement();
    } else {
      this.focusGrowingButton();
      e.preventDefault();
    }
    e.stopPropagation();
  }
  focusBeforeElement() {
    this.setForwardingFocus(true);
    this.getBeforeElement().focus();
  }
  focusAfterElement() {
    this.setForwardingFocus(true);
    this.getAfterElement().focus();
  }
  focusGrowingButton() {
    const growingBtn = this.getGrowingButton();
    if (growingBtn) {
      growingBtn.focus();
    }
  }
  getGrowingButton() {
    return this.shadowRoot.querySelector(`[id="${this._id}-growing-btn"]`);
  }
  /**
   * Focuses the first list item and sets its tabindex to "0" via the ItemNavigation
   * @protected
   */
  focusFirstItem() {
    const firstItem = this.getFirstItem((x) => x._focusable);
    if (firstItem) {
      firstItem.focus();
    }
  }
  focusPreviouslyFocusedItem() {
    const previouslyFocusedItem = this.getPreviouslyFocusedItem();
    if (previouslyFocusedItem) {
      previouslyFocusedItem.focus();
    }
  }
  focusFirstSelectedItem() {
    const firstSelectedItem = this.getFirstItem((x) => x.selected && x._focusable);
    if (firstSelectedItem) {
      firstSelectedItem.focus();
    }
  }
  /**
   * Focuses a list item and sets its tabindex to "0" via the ItemNavigation
   * @protected
   * @param item
   */
  focusItem(item) {
    this._itemNavigation.setCurrentItem(item);
    item.focus();
  }
  onFocusRequested(e) {
    setTimeout(() => {
      this.setPreviouslyFocusedItem(e.target);
      this.focusPreviouslyFocusedItem();
    }, 0);
  }
  setForwardingFocus(forwardingFocus) {
    this._forwardingFocus = forwardingFocus;
  }
  getForwardingFocus() {
    return this._forwardingFocus;
  }
  setPreviouslyFocusedItem(item) {
    this._previouslyFocusedItem = item;
  }
  getPreviouslyFocusedItem() {
    return this._previouslyFocusedItem;
  }
  getFirstItem(filter) {
    const slottedItems = this.getItems();
    let firstItem = null;
    if (!filter) {
      return slottedItems.length ? slottedItems[0] : null;
    }
    for (let i = 0; i < slottedItems.length; i++) {
      if (filter(slottedItems[i])) {
        firstItem = slottedItems[i];
        break;
      }
    }
    return firstItem;
  }
  getAfterElement() {
    if (!this._afterElement) {
      this._afterElement = this.shadowRoot.querySelector(`[id="${this._id}-after"]`);
    }
    return this._afterElement;
  }
  getBeforeElement() {
    if (!this._beforeElement) {
      this._beforeElement = this.shadowRoot.querySelector(`[id="${this._id}-before"]`);
    }
    return this._beforeElement;
  }
  getIntersectionObserver() {
    if (!this.growingIntersectionObserver) {
      this.growingIntersectionObserver = new IntersectionObserver(this.onInteresection.bind(this), {
        root: null,
        rootMargin: "0px",
        threshold: 1
      });
    }
    return this.growingIntersectionObserver;
  }
};
__decorate4([property_default()], List.prototype, "headerText", void 0);
__decorate4([property_default()], List.prototype, "footerText", void 0);
__decorate4([property_default({
  type: Boolean
})], List.prototype, "indent", void 0);
__decorate4([property_default({
  type: ListMode_default,
  defaultValue: ListMode_default.None
})], List.prototype, "mode", void 0);
__decorate4([property_default()], List.prototype, "noDataText", void 0);
__decorate4([property_default({
  type: ListSeparators_default,
  defaultValue: ListSeparators_default.All
})], List.prototype, "separators", void 0);
__decorate4([property_default({
  type: ListGrowingMode_default,
  defaultValue: ListGrowingMode_default.None
})], List.prototype, "growing", void 0);
__decorate4([property_default()], List.prototype, "growingButtonText", void 0);
__decorate4([property_default({
  type: Boolean
})], List.prototype, "busy", void 0);
__decorate4([property_default({
  validator: Integer_default,
  defaultValue: 1e3
})], List.prototype, "busyDelay", void 0);
__decorate4([property_default()], List.prototype, "accessibleName", void 0);
__decorate4([property_default({
  defaultValue: ""
})], List.prototype, "accessibleNameRef", void 0);
__decorate4([property_default({
  defaultValue: "list"
})], List.prototype, "accessibleRole", void 0);
__decorate4([property_default({
  defaultValue: void 0,
  noAttribute: true
})], List.prototype, "accessibleRoleDescription", void 0);
__decorate4([property_default({
  type: Boolean
})], List.prototype, "_inViewport", void 0);
__decorate4([property_default({
  type: Boolean
})], List.prototype, "_loadMoreActive", void 0);
__decorate4([slot_default({
  type: HTMLElement,
  "default": true
})], List.prototype, "items", void 0);
__decorate4([slot_default()], List.prototype, "header", void 0);
List = List_1 = __decorate4([
  customElement_default({
    tag: "ui5-list",
    fastNavigation: true,
    renderer: LitRenderer_default,
    template: ListTemplate_lit_default,
    styles: [getEffectiveScrollbarStyle_default(), List_css_default],
    dependencies: [BusyIndicator_default, DropIndicator_default]
  }),
  event_default("item-click", {
    detail: {
      /**
       * @public
       */
      item: {
        type: HTMLElement
      }
    }
  }),
  event_default("item-close", {
    detail: {
      /**
       * @public
       */
      item: {
        type: HTMLElement
      }
    }
  }),
  event_default("item-toggle", {
    detail: {
      /**
       * @public
       */
      item: {
        type: HTMLElement
      }
    }
  }),
  event_default("item-delete", {
    detail: {
      /**
       * @public
       */
      item: {
        type: HTMLElement
      }
    }
  }),
  event_default("selection-change", {
    detail: {
      /**
       * @public
       */
      selectedItems: {
        type: Array
      },
      /**
       * @public
       */
      previouslySelectedItems: {
        type: Array
      },
      /**
       * protected, holds the event target item
       * @protected
       */
      targetItem: {
        type: HTMLElement
      },
      /**
       * protected, indicates if the user used the selection components to change the selection
       * @protected
       */
      selectionComponentPressed: {
        type: Boolean
      },
      /**
       * @private
       */
      key: {
        type: String
      }
    }
  }),
  event_default("load-more"),
  event_default("item-focused", {
    detail: {
      item: {
        type: HTMLElement
      }
    }
  })
], List);
List.define();
var List_default = List;

// node_modules/@ui5/webcomponents/dist/generated/templates/ResponsivePopoverTemplate.lit.js
function block04(context, tags, suffix) {
  return effectiveHtml`${this._isPhone ? block13.call(this, context, tags, suffix) : block72.call(this, context, tags, suffix)}`;
}
function block13(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-dialog", tags, suffix)} accessible-name=${ifDefined(this.accessibleName)} accessible-name-ref=${ifDefined(this.accessibleNameRef)} accessible-role=${ifDefined(this.accessibleRole)} stretch ?_disable-initial-focus="${ifDefined(this._disableInitialFocus)}" initial-focus="${ifDefined(this.initialFocus)}" @ui5-before-open="${ifDefined(this._beforeDialogOpen)}" @ui5-after-open="${ifDefined(this._propagateDialogEvent)}" @ui5-before-close="${ifDefined(this._propagateDialogEvent)}" @ui5-after-close="${ifDefined(this._afterDialogClose)}" exportparts="content, header, footer">${!this._hideHeader ? block23.call(this, context, tags, suffix) : void 0}<slot></slot><slot slot="footer" name="footer"></slot></${scopeTag("ui5-dialog", tags, suffix)}>` : effectiveHtml`<ui5-dialog accessible-name=${ifDefined(this.accessibleName)} accessible-name-ref=${ifDefined(this.accessibleNameRef)} accessible-role=${ifDefined(this.accessibleRole)} stretch ?_disable-initial-focus="${ifDefined(this._disableInitialFocus)}" initial-focus="${ifDefined(this.initialFocus)}" @ui5-before-open="${ifDefined(this._beforeDialogOpen)}" @ui5-after-open="${ifDefined(this._propagateDialogEvent)}" @ui5-before-close="${ifDefined(this._propagateDialogEvent)}" @ui5-after-close="${ifDefined(this._afterDialogClose)}" exportparts="content, header, footer">${!this._hideHeader ? block23.call(this, context, tags, suffix) : void 0}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`;
}
function block23(context, tags, suffix) {
  return effectiveHtml`${this.header.length ? block32.call(this, context, tags, suffix) : block42.call(this, context, tags, suffix)}`;
}
function block32(context, tags, suffix) {
  return effectiveHtml`<slot slot="header" name="header"></slot>`;
}
function block42(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.header)}" slot="header">${this.headerText ? block52.call(this, context, tags, suffix) : void 0}${!this._hideCloseButton ? block62.call(this, context, tags, suffix) : void 0}</div>`;
}
function block52(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-title", tags, suffix)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(this.headerText)}</${scopeTag("ui5-title", tags, suffix)}>` : effectiveHtml`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(this.headerText)}</ui5-title>`;
}
function block62(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${ifDefined(this._closeDialogAriaLabel)}" @click="${this.close}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(this._closeDialogAriaLabel)}" @click="${this.close}"></ui5-button>`;
}
function block72(context, tags, suffix) {
  return effectiveHtml`<section style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block82.call(this, context, tags, suffix) : void 0}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block11.call(this, context, tags, suffix) : void 0}<span class="last-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToFirst}></span></section>`;
}
function block82(context, tags, suffix) {
  return effectiveHtml`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</header>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<h1 class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`;
}
function block11(context, tags, suffix) {
  return effectiveHtml`${this.footer.length ? block122.call(this, context, tags, suffix) : void 0}`;
}
function block122(context, tags, suffix) {
  return effectiveHtml`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
}
var ResponsivePopoverTemplate_lit_default = block04;

// node_modules/@ui5/webcomponents-icons/dist/v4/resize-corner.js
var name = "resize-corner";
var pathData = "M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, {
  pathData,
  ltr,
  collection,
  packageName
});

// node_modules/@ui5/webcomponents-icons/dist/v5/resize-corner.js
var name2 = "resize-corner";
var pathData2 = "M202 512q-11 0-18.5-7.5T176 486q0-10 8-18l204-205q7-7 18-7t18.5 7.5T432 282t-7 18L220 505q-7 7-18 7zm128 0q-11 0-18.5-7.5T304 486q0-10 8-18l76-77q7-7 18-7t18.5 7.5T432 410t-7 18l-77 77q-7 7-18 7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, {
  pathData: pathData2,
  ltr: ltr2,
  collection: collection2,
  packageName: packageName2
});

// node_modules/@ui5/webcomponents-icons/dist/resize-corner.js
var pathData3 = isLegacyThemeFamily() ? pathData : pathData2;

// node_modules/@ui5/webcomponents/dist/generated/templates/DialogTemplate.lit.js
function block05(context, tags, suffix) {
  return effectiveHtml`<section style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader ? block14.call(this, context, tags, suffix) : void 0}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length ? block102.call(this, context, tags, suffix) : void 0}${this._showResizeHandle ? block112.call(this, context, tags, suffix) : void 0}<span class="last-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToFirst}></span></section> `;
}
function block14(context, tags, suffix) {
  return effectiveHtml`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${ifDefined(this.effectiveAriaDescribedBy)} aria-roledescription=${ifDefined(this.ariaRoleDescriptionHeaderText)} tabindex="${ifDefined(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${ifDefined(this.state)}">${this.hasValueState ? block24.call(this, context, tags, suffix) : void 0}${this.header.length ? block33.call(this, context, tags, suffix) : block43.call(this, context, tags, suffix)}${this.resizable ? block53.call(this, context, tags, suffix) : block83.call(this, context, tags, suffix)}</div></header>`;
}
function block24(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-dialog-value-state-icon" name="${ifDefined(this._dialogStateIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-dialog-value-state-icon" name="${ifDefined(this._dialogStateIcon)}"></ui5-icon>`;
}
function block33(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block43(context, tags, suffix) {
  return effectiveHtml`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`;
}
function block53(context, tags, suffix) {
  return effectiveHtml`${this.draggable ? block63.call(this, context, tags, suffix) : block73.call(this, context, tags, suffix)}`;
}
function block63(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`;
}
function block73(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextResizable)}</span>`;
}
function block83(context, tags, suffix) {
  return effectiveHtml`${this.draggable ? block92.call(this, context, tags, suffix) : void 0}`;
}
function block92(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextDraggable)}</span>`;
}
function block102(context, tags, suffix) {
  return effectiveHtml`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
}
function block112(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`;
}
var DialogTemplate_lit_default = block05;

// node_modules/@ui5/webcomponents/dist/generated/themes/Dialog.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData6 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Dialog.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0;min-width:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v1-24-29_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Error"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Success"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Warning"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Error"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-24-29_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-24-29_dialog_header_information_state_icon_color)}:host([state="Success"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-24-29_dialog_header_success_state_icon_color)}:host([state="Warning"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-24-29_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}.ui5-popup-header-root:focus:after{content:"";position:absolute;left:var(--_ui5-v1-24-29_dialog_header_focus_left_offset);bottom:var(--_ui5-v1-24-29_dialog_header_focus_bottom_offset);right:var(--_ui5-v1-24-29_dialog_header_focus_right_offset);top:var(--_ui5-v1-24-29_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-29_dialog_header_border_radius) var(--_ui5-v1-24-29_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v1-24-29_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:var(--_ui5-v1-24-29_dialog_resize_handle_bottom);inset-inline-end:var(--_ui5-v1-24-29_dialog_resize_handle_right);cursor:var(--_ui5-v1-24-29_dialog_resize_cursor);color:var(--_ui5-v1-24-29_dialog_resize_handle_color)}::slotted([slot="footer"]){height:var(--_ui5-v1-24-29_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}
`
};
var Dialog_css_default = styleData6;

// node_modules/@ui5/webcomponents/dist/Dialog.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Dialog_1;
var STEP_SIZE = 16;
var ICON_PER_STATE = {
  [ValueState_default.Error]: "error",
  [ValueState_default.Warning]: "alert",
  [ValueState_default.Success]: "sys-enter-2",
  [ValueState_default.Information]: "information"
};
var Dialog = Dialog_1 = class Dialog2 extends Popup_default {
  constructor() {
    super();
    this._draggedOrResized = false;
    this._revertSize = () => {
      Object.assign(this.style, {
        top: "",
        left: "",
        width: "",
        height: ""
      });
    };
    this._screenResizeHandler = this._screenResize.bind(this);
    this._dragMouseMoveHandler = this._onDragMouseMove.bind(this);
    this._dragMouseUpHandler = this._onDragMouseUp.bind(this);
    this._resizeMouseMoveHandler = this._onResizeMouseMove.bind(this);
    this._resizeMouseUpHandler = this._onResizeMouseUp.bind(this);
    this._dragStartHandler = this._handleDragStart.bind(this);
  }
  static onDefine() {
    return __async(this, null, function* () {
      Dialog_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  static _isHeader(element) {
    return element.classList.contains("ui5-popup-header-root") || element.getAttribute("slot") === "header";
  }
  /**
   * Shows the dialog.
   * @param [preventInitialFocus=false] Prevents applying the focus inside the popup
   * @public
   * @returns Resolves when the dialog is open
   */
  show(preventInitialFocus = false) {
    return __async(this, null, function* () {
      yield __superGet(Dialog2.prototype, this, "_open").call(this, preventInitialFocus);
    });
  }
  get isModal() {
    return true;
  }
  get shouldHideBackdrop() {
    return false;
  }
  get _ariaLabelledBy() {
    let ariaLabelledById;
    if (this.headerText !== "" && !this._ariaLabel) {
      ariaLabelledById = "ui5-popup-header-text";
    }
    return ariaLabelledById;
  }
  get ariaRoleDescriptionHeaderText() {
    return this.resizable || this.draggable ? Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_ROLE_DESCRIPTION) : void 0;
  }
  get effectiveAriaDescribedBy() {
    return this.resizable || this.draggable ? `${this._id}-descr` : void 0;
  }
  get ariaDescribedByHeaderTextResizable() {
    return Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE);
  }
  get ariaDescribedByHeaderTextDraggable() {
    return Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE);
  }
  get ariaDescribedByHeaderTextDraggableAndResizable() {
    return Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE);
  }
  get _displayProp() {
    return "flex";
  }
  /**
   * Determines if the header should be shown.
   */
  get _displayHeader() {
    return this.header.length || this.headerText || this.draggable || this.resizable;
  }
  get _movable() {
    return !this.stretch && this.onDesktop && (this.draggable || this.resizable);
  }
  get _headerTabIndex() {
    return this._movable ? "0" : void 0;
  }
  get _showResizeHandle() {
    return this.resizable && this.onDesktop;
  }
  get _minHeight() {
    let minHeight = Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);
    const header = this._root.querySelector(".ui5-popup-header-root");
    if (header) {
      minHeight += header.offsetHeight;
    }
    const footer = this._root.querySelector(".ui5-popup-footer-root");
    if (footer) {
      minHeight += footer.offsetHeight;
    }
    return minHeight;
  }
  get hasValueState() {
    return this.state !== ValueState_default.None;
  }
  get _dialogStateIcon() {
    return ICON_PER_STATE[this.state];
  }
  get _role() {
    if (this.accessibleRole === PopupAccessibleRole_default.None) {
      return void 0;
    }
    if (this.state === ValueState_default.Error || this.state === ValueState_default.Warning) {
      return PopupAccessibleRole_default.AlertDialog.toLowerCase();
    }
    return this.accessibleRole.toLowerCase();
  }
  _show() {
    super._show();
    this._center();
  }
  onBeforeRendering() {
    super.onBeforeRendering();
    this._isRTL = this.effectiveDir === "rtl";
    this.onPhone = isPhone();
    this.onDesktop = isDesktop();
  }
  onAfterRendering() {
    super.onAfterRendering();
    if (!this.isOpen() && this.open) {
      this.show();
    } else if (this.isOpen() && !this.open) {
      this.close();
    }
  }
  onEnterDOM() {
    super.onEnterDOM();
    this._attachScreenResizeHandler();
    this.addEventListener("dragstart", this._dragStartHandler);
  }
  onExitDOM() {
    super.onExitDOM();
    this._detachScreenResizeHandler();
    this.removeEventListener("dragstart", this._dragStartHandler);
  }
  /**
   * @override
   */
  _resize() {
    super._resize();
    if (!this._draggedOrResized) {
      this._center();
    }
  }
  _screenResize() {
    this._center();
  }
  _attachScreenResizeHandler() {
    if (!this._screenResizeHandlerAttached) {
      window.addEventListener("resize", this._screenResizeHandler);
      this._screenResizeHandlerAttached = true;
    }
  }
  _detachScreenResizeHandler() {
    if (this._screenResizeHandlerAttached) {
      window.removeEventListener("resize", this._screenResizeHandler);
      this._screenResizeHandlerAttached = false;
    }
  }
  _center() {
    const height = window.innerHeight - this.offsetHeight, width = window.innerWidth - this.offsetWidth;
    Object.assign(this.style, {
      top: `${Math.round(height / 2)}px`,
      left: `${Math.round(width / 2)}px`
    });
  }
  /**
   * Event handlers
   */
  _onDragMouseDown(e) {
    if (!this._movable || !this.draggable || !Dialog_1._isHeader(e.target)) {
      return;
    }
    e.preventDefault();
    const {
      top,
      left
    } = this.getBoundingClientRect();
    const {
      width,
      height
    } = window.getComputedStyle(this);
    Object.assign(this.style, {
      top: `${top}px`,
      left: `${left}px`,
      width: `${Math.round(Number.parseFloat(width) * 100) / 100}px`,
      height: `${Math.round(Number.parseFloat(height) * 100) / 100}px`
    });
    this._x = e.clientX;
    this._y = e.clientY;
    this._draggedOrResized = true;
    this._attachMouseDragHandlers();
  }
  _onDragMouseMove(e) {
    e.preventDefault();
    const {
      clientX,
      clientY
    } = e;
    const calcX = this._x - clientX;
    const calcY = this._y - clientY;
    const {
      left,
      top
    } = this.getBoundingClientRect();
    Object.assign(this.style, {
      left: `${Math.floor(left - calcX)}px`,
      top: `${Math.floor(top - calcY)}px`
    });
    this._x = clientX;
    this._y = clientY;
  }
  _onDragMouseUp() {
    delete this._x;
    delete this._y;
    this._detachMouseDragHandlers();
  }
  _onDragOrResizeKeyDown(e) {
    if (!this._movable || !Dialog_1._isHeader(e.target)) {
      return;
    }
    if (this.draggable && [isUp, isDown, isLeft, isRight].some((key) => key(e))) {
      this._dragWithEvent(e);
      return;
    }
    if (this.resizable && [isUpShift, isDownShift, isLeftShift, isRightShift].some((key) => key(e))) {
      this._resizeWithEvent(e);
    }
  }
  _dragWithEvent(e) {
    const {
      top,
      left,
      width,
      height
    } = this.getBoundingClientRect();
    let newPos = 0;
    let posDirection = "top";
    switch (true) {
      case isUp(e):
        newPos = top - STEP_SIZE;
        posDirection = "top";
        break;
      case isDown(e):
        newPos = top + STEP_SIZE;
        posDirection = "top";
        break;
      case isLeft(e):
        newPos = left - STEP_SIZE;
        posDirection = "left";
        break;
      case isRight(e):
        newPos = left + STEP_SIZE;
        posDirection = "left";
        break;
    }
    newPos = clamp_default(newPos, 0, posDirection === "left" ? window.innerWidth - width : window.innerHeight - height);
    this.style[posDirection] = `${newPos}px`;
  }
  _resizeWithEvent(e) {
    this._draggedOrResized = true;
    this.addEventListener("ui5-before-close", this._revertSize, {
      once: true
    });
    const {
      top,
      left
    } = this.getBoundingClientRect(), style = window.getComputedStyle(this), minWidth = Number.parseFloat(style.minWidth), maxWidth = window.innerWidth - left, maxHeight = window.innerHeight - top;
    let width = Number.parseFloat(style.width), height = Number.parseFloat(style.height);
    switch (true) {
      case isUpShift(e):
        height -= STEP_SIZE;
        break;
      case isDownShift(e):
        height += STEP_SIZE;
        break;
      case isLeftShift(e):
        width -= STEP_SIZE;
        break;
      case isRightShift(e):
        width += STEP_SIZE;
        break;
    }
    width = clamp_default(width, minWidth, maxWidth);
    height = clamp_default(height, this._minHeight, maxHeight);
    Object.assign(this.style, {
      width: `${width}px`,
      height: `${height}px`
    });
  }
  _attachMouseDragHandlers() {
    window.addEventListener("mousemove", this._dragMouseMoveHandler);
    window.addEventListener("mouseup", this._dragMouseUpHandler);
  }
  _detachMouseDragHandlers() {
    window.removeEventListener("mousemove", this._dragMouseMoveHandler);
    window.removeEventListener("mouseup", this._dragMouseUpHandler);
  }
  _onResizeMouseDown(e) {
    if (!this._movable || !this.resizable) {
      return;
    }
    e.preventDefault();
    const {
      top,
      left
    } = this.getBoundingClientRect();
    const {
      width,
      height,
      minWidth
    } = window.getComputedStyle(this);
    this._initialX = e.clientX;
    this._initialY = e.clientY;
    this._initialWidth = Number.parseFloat(width);
    this._initialHeight = Number.parseFloat(height);
    this._initialTop = top;
    this._initialLeft = left;
    this._minWidth = Number.parseFloat(minWidth);
    this._cachedMinHeight = this._minHeight;
    Object.assign(this.style, {
      top: `${top}px`,
      left: `${left}px`
    });
    this._draggedOrResized = true;
    this._attachMouseResizeHandlers();
  }
  _onResizeMouseMove(e) {
    const {
      clientX,
      clientY
    } = e;
    let newWidth, newLeft;
    if (this._isRTL) {
      newWidth = clamp_default(this._initialWidth - (clientX - this._initialX), this._minWidth, this._initialLeft + this._initialWidth);
      newLeft = clamp_default(this._initialLeft + (clientX - this._initialX), 0, this._initialX + this._initialWidth - this._minWidth);
    } else {
      newWidth = clamp_default(this._initialWidth + (clientX - this._initialX), this._minWidth, window.innerWidth - this._initialLeft);
    }
    const newHeight = clamp_default(this._initialHeight + (clientY - this._initialY), this._cachedMinHeight, window.innerHeight - this._initialTop);
    Object.assign(this.style, {
      height: `${newHeight}px`,
      width: `${newWidth}px`,
      left: newLeft ? `${newLeft}px` : void 0
    });
  }
  _onResizeMouseUp() {
    delete this._initialX;
    delete this._initialY;
    delete this._initialWidth;
    delete this._initialHeight;
    delete this._initialTop;
    delete this._initialLeft;
    delete this._minWidth;
    delete this._cachedMinHeight;
    this._detachMouseResizeHandlers();
  }
  _handleDragStart(e) {
    if (this.draggable && e.target instanceof HTMLElement && Dialog_1._isHeader(e.target)) {
      e.preventDefault();
    }
  }
  _attachMouseResizeHandlers() {
    window.addEventListener("mousemove", this._resizeMouseMoveHandler);
    window.addEventListener("mouseup", this._resizeMouseUpHandler);
    this.addEventListener("ui5-before-close", this._revertSize, {
      once: true
    });
  }
  _detachMouseResizeHandlers() {
    window.removeEventListener("mousemove", this._resizeMouseMoveHandler);
    window.removeEventListener("mouseup", this._resizeMouseUpHandler);
  }
};
__decorate5([property_default()], Dialog.prototype, "headerText", void 0);
__decorate5([property_default({
  type: Boolean
})], Dialog.prototype, "stretch", void 0);
__decorate5([property_default({
  type: Boolean
})], Dialog.prototype, "draggable", void 0);
__decorate5([property_default({
  type: Boolean
})], Dialog.prototype, "resizable", void 0);
__decorate5([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], Dialog.prototype, "state", void 0);
__decorate5([property_default({
  type: Boolean
})], Dialog.prototype, "onPhone", void 0);
__decorate5([property_default({
  type: Boolean
})], Dialog.prototype, "onDesktop", void 0);
__decorate5([slot_default()], Dialog.prototype, "header", void 0);
__decorate5([slot_default()], Dialog.prototype, "footer", void 0);
Dialog = Dialog_1 = __decorate5([customElement_default({
  tag: "ui5-dialog",
  template: DialogTemplate_lit_default,
  styles: [getEffectiveScrollbarStyle_default(), PopupsCommon_css_default, Dialog_css_default],
  dependencies: [Icon_default]
})], Dialog);
Dialog.define();
var Dialog_default = Dialog;

// node_modules/@ui5/webcomponents/dist/types/TitleLevel.js
var TitleLevel;
(function(TitleLevel2) {
  TitleLevel2["H1"] = "H1";
  TitleLevel2["H2"] = "H2";
  TitleLevel2["H3"] = "H3";
  TitleLevel2["H4"] = "H4";
  TitleLevel2["H5"] = "H5";
  TitleLevel2["H6"] = "H6";
})(TitleLevel || (TitleLevel = {}));
var TitleLevel_default = TitleLevel;

// node_modules/@ui5/webcomponents/dist/generated/templates/TitleTemplate.lit.js
function block06(context, tags, suffix) {
  return effectiveHtml`${this.h1 ? block15.call(this, context, tags, suffix) : void 0}${this.h2 ? block25.call(this, context, tags, suffix) : void 0}${this.h3 ? block34.call(this, context, tags, suffix) : void 0}${this.h4 ? block44.call(this, context, tags, suffix) : void 0}${this.h5 ? block54.call(this, context, tags, suffix) : void 0}${this.h6 ? block64.call(this, context, tags, suffix) : void 0}`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`<h1 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h1>`;
}
function block25(context, tags, suffix) {
  return effectiveHtml`<h2 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h2>`;
}
function block34(context, tags, suffix) {
  return effectiveHtml`<h3 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h3>`;
}
function block44(context, tags, suffix) {
  return effectiveHtml`<h4 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h4>`;
}
function block54(context, tags, suffix) {
  return effectiveHtml`<h5 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h5>`;
}
function block64(context, tags, suffix) {
  return effectiveHtml`<h6 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h6>`;
}
var TitleTemplate_lit_default = block06;

// node_modules/@ui5/webcomponents/dist/generated/themes/Title.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData7 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/Title.css.ts",
  content: `:host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader2Size);font-family:"72override",var(--sapFontHeaderFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host([wrapping-type="Normal"]) .ui5-title-root,:host([wrapping-type="Normal"]) ::slotted(*){white-space:pre-line}::slotted(*){font-size:inherit;font-family:inherit;text-shadow:inherit}:host([level="H1"]){font-size:var(--sapFontHeader1Size)}:host([level="H2"]){font-size:var(--sapFontHeader2Size)}:host([level="H3"]){font-size:var(--sapFontHeader3Size)}:host([level="H4"]){font-size:var(--sapFontHeader4Size)}:host([level="H5"]){font-size:var(--sapFontHeader5Size)}:host([level="H6"]){font-size:var(--sapFontHeader6Size)}
`
};
var Title_css_default = styleData7;

// node_modules/@ui5/webcomponents/dist/Title.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Title = class Title2 extends UI5Element_default {
  get normalizedLevel() {
    return this.level.toLowerCase();
  }
  get h1() {
    return this.normalizedLevel === "h1";
  }
  get h2() {
    return this.normalizedLevel === "h2";
  }
  get h3() {
    return this.normalizedLevel === "h3";
  }
  get h4() {
    return this.normalizedLevel === "h4";
  }
  get h5() {
    return this.normalizedLevel === "h5";
  }
  get h6() {
    return this.normalizedLevel === "h6";
  }
};
__decorate6([property_default({
  type: WrappingType_default,
  defaultValue: WrappingType_default.None
})], Title.prototype, "wrappingType", void 0);
__decorate6([property_default({
  type: TitleLevel_default,
  defaultValue: TitleLevel_default.H2
})], Title.prototype, "level", void 0);
Title = __decorate6([customElement_default({
  tag: "ui5-title",
  renderer: LitRenderer_default,
  template: TitleTemplate_lit_default,
  styles: Title_css_default
})], Title);
Title.define();
var Title_default = Title;

// node_modules/@ui5/webcomponents/dist/generated/themes/ResponsivePopover.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData8 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/ResponsivePopover.css.ts",
  content: `:host{--_ui5-v1-24-29_input_width: 100%;min-width:6.25rem;min-height:2rem}:host([opened]){display:inline-block}.ui5-responsive-popover-header{height:var(--_ui5-v1-24-29-responsive_popover_header_height);display:flex;justify-content:space-between;align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v1-24-29_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}
`
};
var ResponsivePopover_css_default = styleData8;

// node_modules/@ui5/webcomponents/dist/ResponsivePopover.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ResponsivePopover_1;
var ResponsivePopover = ResponsivePopover_1 = class ResponsivePopover2 extends Popover_default {
  constructor() {
    super();
  }
  /**
   * Shows popover on desktop and dialog on mobile.
   * @param opener the element that the popover is shown at
   * @param [preventInitialFocus=false] Prevents applying the focus inside the popup
   * @public
   * @returns Resolves when the responsive popover is open
   */
  showAt(opener, preventInitialFocus = false) {
    return __async(this, null, function* () {
      if (!isPhone()) {
        yield __superGet(ResponsivePopover2.prototype, this, "showAt").call(this, opener, preventInitialFocus);
      } else {
        this.style.display = "contents";
        const nextZIndex = getNextZIndex();
        if (!nextZIndex) {
          return;
        }
        this.style.zIndex = nextZIndex.toString();
        yield this._dialog.show(preventInitialFocus);
      }
    });
  }
  /**
   * Closes the popover/dialog.
   * @public
   */
  close(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
    if (!isPhone()) {
      super.close(escPressed, preventRegistryUpdate, preventFocusRestore);
    } else {
      this._dialog.close(escPressed, preventRegistryUpdate, preventFocusRestore);
    }
  }
  toggle(opener) {
    if (this.isOpen()) {
      return this.close();
    }
    this.showAt(opener);
  }
  /**
   * Tells if the responsive popover is open.
   * @public
   */
  isOpen() {
    return isPhone() && this._dialog ? this._dialog.isOpen() : super.isOpen();
  }
  get classes() {
    const allClasses = super.classes;
    allClasses.header = {
      "ui5-responsive-popover-header": true,
      "ui5-responsive-popover-header-no-title": !this.headerText
    };
    return allClasses;
  }
  get _dialog() {
    return this.shadowRoot.querySelector("[ui5-dialog]");
  }
  get contentDOM() {
    return isPhone() ? this._dialog.contentDOM : super.contentDOM;
  }
  get _isPhone() {
    return isPhone();
  }
  get _displayHeader() {
    return (isPhone() || !this.contentOnlyOnDesktop) && super._displayHeader;
  }
  get _displayFooter() {
    return isPhone() || !this.contentOnlyOnDesktop;
  }
  get _closeDialogAriaLabel() {
    return ResponsivePopover_1.i18nBundle.getText(RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON);
  }
  _beforeDialogOpen(e) {
    this.open = true;
    this.opened = true;
    this._propagateDialogEvent(e);
  }
  _afterDialogClose(e) {
    this.open = false;
    this.opened = false;
    this._propagateDialogEvent(e);
  }
  _propagateDialogEvent(e) {
    const type = e.type.replace("ui5-", "");
    this.fireEvent(type, e.detail);
  }
  get isModal() {
    if (!isPhone()) {
      return super.isModal;
    }
    return this._dialog.isModal;
  }
  static onDefine() {
    return __async(this, null, function* () {
      ResponsivePopover_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate7([property_default({
  type: Boolean
})], ResponsivePopover.prototype, "contentOnlyOnDesktop", void 0);
__decorate7([property_default({
  type: Boolean
})], ResponsivePopover.prototype, "_hideHeader", void 0);
__decorate7([property_default({
  type: Boolean
})], ResponsivePopover.prototype, "_hideCloseButton", void 0);
ResponsivePopover = ResponsivePopover_1 = __decorate7([customElement_default({
  tag: "ui5-responsive-popover",
  styles: [Popover_default.styles, ResponsivePopover_css_default],
  template: ResponsivePopoverTemplate_lit_default,
  dependencies: [...Popover_default.dependencies, Button_default, Dialog_default, Title_default]
})], ResponsivePopover);
ResponsivePopover.define();
var ResponsivePopover_default = ResponsivePopover;

// node_modules/@ui5/webcomponents-icons/dist/v4/edit.js
var name3 = "edit";
var pathData4 = "M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, {
  pathData: pathData4,
  ltr: ltr3,
  collection: collection3,
  packageName: packageName3
});

// node_modules/@ui5/webcomponents-icons/dist/v5/edit.js
var name4 = "edit";
var pathData5 = "M505 94q7 7 7 18t-6 17L130 505q-7 7-18 7H26q-11 0-18.5-7.5T0 486v-86q1-10 6-16L382 7q7-7 18-7t18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, {
  pathData: pathData5,
  ltr: ltr4,
  collection: collection4,
  packageName: packageName4
});

// node_modules/@ui5/webcomponents-icons/dist/edit.js
var pathData6 = isLegacyThemeFamily() ? pathData4 : pathData5;

// node_modules/@ui5/webcomponents/dist/types/HighlightTypes.js
var HighlightTypes;
(function(HighlightTypes2) {
  HighlightTypes2["None"] = "None";
  HighlightTypes2["Success"] = "Success";
  HighlightTypes2["Warning"] = "Warning";
  HighlightTypes2["Error"] = "Error";
  HighlightTypes2["Information"] = "Information";
})(HighlightTypes || (HighlightTypes = {}));
var HighlightTypes_default = HighlightTypes;

// node_modules/@ui5/webcomponents/dist/types/ListItemType.js
var ListItemType;
(function(ListItemType2) {
  ListItemType2["Inactive"] = "Inactive";
  ListItemType2["Active"] = "Active";
  ListItemType2["Detail"] = "Detail";
  ListItemType2["Navigation"] = "Navigation";
})(ListItemType || (ListItemType = {}));
var ListItemType_default = ListItemType;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItem.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData9 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/ListItem.css.ts",
  content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([actionable]:not([disabled])){cursor:pointer}:host([selected][actionable]:not([active]):not([data-moving]):hover){background:var(--sapList_Hover_SelectionBackground)}:host([active][actionable]:not([data-moving])),:host([selected][active][actionable]:not([data-moving])){background:var(--sapList_Active_Background)}:host([actionable]:not([active]):not([selected]):hover){background:var(--sapList_Hover_Background);.ui5-li-additional-text{text-shadow:var(--sapContent_TextShadow)}}:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus,:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus{outline-color:var(--sapContent_ContrastFocusColor)}:host([navigated]) .ui5-li-root .ui5-li-navigated{width:.1875rem;position:absolute;right:0;top:0;bottom:0;background-color:var(--sapList_SelectionBorderColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-title,:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-additional-text{text-shadow:none}:host([additional-text-state="Warning"]) .ui5-li-additional-text{color:var(--sapCriticalTextColor)}:host([additional-text-state="Success"]) .ui5-li-additional-text{color:var(--sapPositiveTextColor)}:host([additional-text-state="Error"]) .ui5-li-additional-text{color:var(--sapNegativeTextColor)}:host([additional-text-state="Information"]) .ui5-li-additional-text{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([_has-image-content]){height:5rem}:host([image]) .ui5-li-content{height:3rem}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{display:flex;flex-direction:column;flex:auto;min-width:1px;line-height:normal}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-title{color:var(--sapList_TextColor);font-size:var(--_ui5-v1-24-29_list_item_title_size)}.ui5-li-additional-text,:host(:not([wrapping-type="Normal"])) .ui5-li-title,.ui5-li-desc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([wrapping-type="Normal"]){height:auto}:host([wrapping-type="Normal"]) .ui5-li-content{margin:var(--_ui5-v1-24-29_list_item_content_vertical_offset) 0}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}.ui5-li-additional-text{margin:0 .25rem;color:var(--sapNeutralTextColor);font-size:var(--sapFontSize);min-width:3.75rem;text-align:end}:host([description]) .ui5-li-additional-text{align-self:flex-end}.ui5-li-img{width:var(--_ui5-v1-24-29_list_item_img_size);height:var(--_ui5-v1-24-29_list_item_img_size);border-radius:var(--ui5-v1-24-29-avatar-border-radius)}.ui5-li-img,.ui5-li-imgContent{min-width:var(--_ui5-v1-24-29_list_item_img_size);min-height:var(--_ui5-v1-24-29_list_item_img_size);margin-top:var(--_ui5-v1-24-29_list_item_img_top_margin);margin-bottom:var(--_ui5-v1-24-29_list_item_img_bottom_margin);margin-inline-end:var(--_ui5-v1-24-29_list_item_img_hn_margin)}.ui5-li-img-inner{object-fit:contain}.ui5-li-icon{min-width:var(--_ui5-v1-24-29_list_item_icon_size);min-height:var(--_ui5-v1-24-29_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-inline-end:var(--_ui5-v1-24-29_list_item_icon_padding-inline-end)}.ui5-li-content{display:flex;align-items:center;flex:auto;overflow:hidden}.ui5-li-detailbtn,.ui5-li-deletebtn{display:flex;align-items:center;margin-left:var(--_ui5-v1-24-29_list_buttons_left_space)}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5-v1-24-29_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5-v1-24-29_list_item_selection_btn_margin_top)}:host([_mode="SingleSelectBegin"]) .ui5-li-root{padding-inline:0 1rem}:host([_mode="MultiSelect"]) .ui5-li-root{padding-inline:0 1rem}:host([_mode="SingleSelectEnd"]) .ui5-li-root{padding-inline:1rem 0}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5-v1-24-29_list_item_cb_margin_right)}.ui5-li-highlight{position:absolute;width:.375rem;bottom:0;left:0;top:0;border-inline-end:.0625rem solid var(--ui5-v1-24-29-listitem-background-color);box-sizing:border-box}:host([highlight="Error"]) .ui5-li-highlight{background:var(--sapNegativeTextColor)}:host([highlight="Warning"]) .ui5-li-highlight{background:var(--sapCriticalTextColor)}:host([highlight="Success"]) .ui5-li-highlight{background:var(--sapPositiveTextColor)}:host([highlight="Information"]) .ui5-li-highlight{background:var(--sapInformativeTextColor)}
`
};
var ListItem_css_default = styleData9;

// node_modules/@ui5/webcomponents-icons/dist/v4/slim-arrow-right.js
var name5 = "slim-arrow-right";
var pathData7 = "M357.5 233q10 10 10 23t-10 23l-165 165q-12 11-23 0t0-23l160-159q6-6 0-12l-159-159q-5-5-5-11t5-11 11-5 11 5z";
var ltr5 = false;
var collection5 = "SAP-icons-v4";
var packageName5 = "@ui5/webcomponents-icons";
registerIcon(name5, {
  pathData: pathData7,
  ltr: ltr5,
  collection: collection5,
  packageName: packageName5
});

// node_modules/@ui5/webcomponents-icons/dist/v5/slim-arrow-right.js
var name6 = "slim-arrow-right";
var pathData8 = "M186 416q-11 0-18.5-7.5T160 390q0-10 8-18l121-116-121-116q-8-8-8-18 0-11 7.5-18.5T186 96q10 0 17 7l141 134q8 8 8 19 0 12-8 18L203 409q-7 7-17 7z";
var ltr6 = false;
var collection6 = "SAP-icons-v5";
var packageName6 = "@ui5/webcomponents-icons";
registerIcon(name6, {
  pathData: pathData8,
  ltr: ltr6,
  collection: collection6,
  packageName: packageName6
});

// node_modules/@ui5/webcomponents-icons/dist/slim-arrow-right.js
var pathData9 = isLegacyThemeFamily() ? pathData7 : pathData8;

// node_modules/@ui5/webcomponents/dist/ListItem.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItem_1;
var ListItem = ListItem_1 = class ListItem2 extends ListItemBase_default {
  constructor() {
    super();
    this.deactivateByKey = (e) => {
      if (isEnter(e)) {
        this.deactivate();
      }
    };
    this.deactivate = () => {
      if (this.active) {
        this.active = false;
      }
    };
    const handleTouchStartEvent = (e) => {
      this._onmousedown(e);
    };
    this._ontouchstart = {
      handleEvent: handleTouchStartEvent,
      passive: true
    };
  }
  onBeforeRendering() {
    this.actionable = (this.type === ListItemType_default.Active || this.type === ListItemType_default.Navigation) && this._mode !== ListMode_default.Delete;
  }
  onEnterDOM() {
    document.addEventListener("mouseup", this.deactivate);
    document.addEventListener("touchend", this.deactivate);
    document.addEventListener("keyup", this.deactivateByKey);
  }
  onExitDOM() {
    document.removeEventListener("mouseup", this.deactivate);
    document.removeEventListener("keyup", this.deactivateByKey);
    document.removeEventListener("touchend", this.deactivate);
  }
  _onkeydown(e) {
    super._onkeydown(e);
    const itemActive = this.type === ListItemType_default.Active, itemNavigated = this.typeNavigation;
    if (isSpace(e)) {
      e.preventDefault();
    }
    if ((isSpace(e) || isEnter(e)) && (itemActive || itemNavigated)) {
      this.activate();
    }
    if (isEnter(e)) {
      this.fireItemPress(e);
    }
  }
  _onkeyup(e) {
    if (isSpace(e) || isEnter(e)) {
      this.deactivate();
    }
    if (isSpace(e)) {
      this.fireItemPress(e);
    }
    if (this.modeDelete && isDelete(e)) {
      this.onDelete();
    }
  }
  _onmousedown(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    this.activate();
  }
  _onmouseup(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    this.deactivate();
  }
  _ontouchend(e) {
    this._onmouseup(e);
  }
  _onfocusout() {
    super._onfocusout();
    this.deactivate();
  }
  _onclick(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    this.fireItemPress(e);
  }
  _ondragstart(e) {
    if (!e.dataTransfer) {
      return;
    }
    if (e.target === this._listItem) {
      this.setAttribute("data-moving", "");
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
    }
  }
  _ondragend(e) {
    if (e.target === this._listItem) {
      this.removeAttribute("data-moving");
    }
  }
  /*
   * Called when selection components in Single (ui5-radio-button)
   * and Multi (ui5-checkbox) selection modes are used.
   */
  onMultiSelectionComponentPress(e) {
    if (this.isInactive) {
      return;
    }
    this.fireEvent("_selection-requested", {
      item: this,
      selected: e.target.checked,
      selectionComponentPressed: true
    });
  }
  onSingleSelectionComponentPress(e) {
    if (this.isInactive) {
      return;
    }
    this.fireEvent("_selection-requested", {
      item: this,
      selected: !e.target.checked,
      selectionComponentPressed: true
    });
  }
  activate() {
    if (this.type === ListItemType_default.Active || this.type === ListItemType_default.Navigation) {
      this.active = true;
    }
  }
  onDelete() {
    this.fireEvent("_selection-requested", {
      item: this,
      selectionComponentPressed: false
    });
  }
  onDetailClick() {
    this.fireEvent("detail-click", {
      item: this,
      selected: this.selected
    });
  }
  fireItemPress(e) {
    if (this.isInactive || this.disabled) {
      return;
    }
    if (isEnter(e)) {
      e.preventDefault();
    }
    this.fireEvent("_press", {
      item: this,
      selected: this.selected,
      key: e.key
    });
  }
  get isInactive() {
    return this.type === ListItemType_default.Inactive || this.type === ListItemType_default.Detail;
  }
  get placeSelectionElementBefore() {
    return this._mode === ListMode_default.MultiSelect || this._mode === ListMode_default.SingleSelectBegin;
  }
  get placeSelectionElementAfter() {
    return !this.placeSelectionElementBefore && (this._mode === ListMode_default.SingleSelectEnd || this._mode === ListMode_default.Delete);
  }
  get modeSingleSelect() {
    return [ListMode_default.SingleSelectBegin, ListMode_default.SingleSelectEnd, ListMode_default.SingleSelect].includes(this._mode);
  }
  get modeMultiSelect() {
    return this._mode === ListMode_default.MultiSelect;
  }
  get modeDelete() {
    return this._mode === ListMode_default.Delete;
  }
  /**
   * Used in UploadCollectionItem
   */
  get renderDeleteButton() {
    return this.modeDelete;
  }
  /**
   * End
   */
  get typeDetail() {
    return this.type === ListItemType_default.Detail;
  }
  get typeNavigation() {
    return this.type === ListItemType_default.Navigation;
  }
  get typeActive() {
    return this.type === ListItemType_default.Active;
  }
  get _ariaSelected() {
    if (this.modeMultiSelect || this.modeSingleSelect) {
      return this.selected;
    }
    return void 0;
  }
  get ariaSelectedText() {
    let ariaSelectedText;
    if (this._ariaSelected !== void 0) {
      ariaSelectedText = this._ariaSelected ? ListItem_1.i18nBundle.getText(LIST_ITEM_SELECTED) : ListItem_1.i18nBundle.getText(LIST_ITEM_NOT_SELECTED);
    }
    return ariaSelectedText;
  }
  get deleteText() {
    return ListItem_1.i18nBundle.getText(DELETE);
  }
  get hasDeleteButtonSlot() {
    return !!this.deleteButton.length;
  }
  get _accessibleNameRef() {
    if (this.accessibleName) {
      return `${this._id}-invisibleText`;
    }
    return `${this._id}-content ${this._id}-invisibleText`;
  }
  get _accInfo() {
    return {
      role: this.accessibleRole || this.role,
      ariaExpanded: void 0,
      ariaLevel: void 0,
      ariaLabel: ListItem_1.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_CHECKBOX),
      ariaLabelRadioButton: ListItem_1.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_RADIO_BUTTON),
      ariaSelectedText: this.ariaSelectedText,
      ariaHaspopup: this.ariaHaspopup?.toLowerCase() || void 0,
      setsize: this.accessibilityAttributes.ariaSetsize,
      posinset: this.accessibilityAttributes.ariaPosinset,
      tooltip: this.tooltip || this.title
    };
  }
  get _hasHighlightColor() {
    return this.highlight !== HighlightTypes_default.None;
  }
  get hasConfigurableMode() {
    return true;
  }
  get _listItem() {
    return this.shadowRoot.querySelector("li");
  }
  static onDefine() {
    return __async(this, null, function* () {
      ListItem_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate8([property_default({
  type: ListItemType_default,
  defaultValue: ListItemType_default.Active
})], ListItem.prototype, "type", void 0);
__decorate8([property_default({
  type: Object
})], ListItem.prototype, "accessibilityAttributes", void 0);
__decorate8([property_default({
  type: Boolean
})], ListItem.prototype, "navigated", void 0);
__decorate8([property_default({
  type: String,
  defaultValue: ""
})], ListItem.prototype, "tooltip", void 0);
__decorate8([property_default({
  type: Boolean
})], ListItem.prototype, "active", void 0);
__decorate8([property_default()], ListItem.prototype, "title", void 0);
__decorate8([property_default({
  type: HighlightTypes_default,
  defaultValue: HighlightTypes_default.None
})], ListItem.prototype, "highlight", void 0);
__decorate8([property_default({
  type: Boolean
})], ListItem.prototype, "actionable", void 0);
__decorate8([property_default({
  defaultValue: "listitem"
})], ListItem.prototype, "role", void 0);
__decorate8([property_default({
  defaultValue: void 0,
  noAttribute: true
})], ListItem.prototype, "accessibleRoleDescription", void 0);
__decorate8([property_default()], ListItem.prototype, "accessibleRole", void 0);
__decorate8([property_default({
  type: ListMode_default,
  defaultValue: ListMode_default.None
})], ListItem.prototype, "_mode", void 0);
__decorate8([property_default({
  type: HasPopup_default,
  noAttribute: true
})], ListItem.prototype, "ariaHaspopup", void 0);
__decorate8([slot_default()], ListItem.prototype, "deleteButton", void 0);
ListItem = ListItem_1 = __decorate8([
  customElement_default({
    languageAware: true,
    styles: [ListItemBase_default.styles, ListItem_css_default],
    dependencies: [Button_default, RadioButton_default, CheckBox_default]
  }),
  event_default("detail-click"),
  event_default("_press"),
  event_default("_focused"),
  event_default("_selection-requested")
], ListItem);
var ListItem_default = ListItem;

// node_modules/@ui5/webcomponents/dist/generated/templates/StandardListItemTemplate.lit.js
function block07(context, tags, suffix) {
  return effectiveHtml`<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-roledescription="${ifDefined(this.accessibleRoleDescription)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block16.call(this, context, tags, suffix) : void 0}${this._hasHighlightColor ? block74.call(this, context, tags, suffix) : void 0}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content">${this.hasImageContent ? block84.call(this, context, tags, suffix) : block93.call(this, context, tags, suffix)}${this.displayIconBegin ? block113.call(this, context, tags, suffix) : void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${this.description ? block123.call(this, context, tags, suffix) : void 0}${!this.typeActive ? block142.call(this, context, tags, suffix) : void 0}</div>${!this.description ? block152.call(this, context, tags, suffix) : void 0}</div>${this.displayIconEnd ? block17.call(this, context, tags, suffix) : void 0}${this.typeDetail ? block18.call(this, context, tags, suffix) : void 0}${this.typeNavigation ? block19.call(this, context, tags, suffix) : void 0}${this.navigated ? block20.call(this, context, tags, suffix) : void 0}${this.placeSelectionElementAfter ? block21.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li> `;
}
function block16(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block26.call(this, context, tags, suffix) : void 0}${this.modeMultiSelect ? block35.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block45.call(this, context, tags, suffix) : void 0}`;
}
function block26(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block35(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block45(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block55.call(this, context, tags, suffix) : block65.call(this, context, tags, suffix)}</div>`;
}
function block55(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block65(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
function block74(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-highlight"></div>`;
}
function block84(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`;
}
function block93(context, tags, suffix) {
  return effectiveHtml`${this.displayImage ? block103.call(this, context, tags, suffix) : void 0}`;
}
function block103(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-avatar", tags, suffix)} shape="Square" class="ui5-li-img"><img src="${ifDefined(this.image)}" class="ui5-li-img-inner" /></${scopeTag("ui5-avatar", tags, suffix)}>` : effectiveHtml`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${ifDefined(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`;
}
function block113(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`;
}
function block123(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${ifDefined(this.description)}</span>${this.additionalText ? block132.call(this, context, tags, suffix) : void 0}</div>`;
}
function block132(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block142(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-hidden-text">${ifDefined(this.type)}</span>`;
}
function block152(context, tags, suffix) {
  return effectiveHtml`${this.additionalText ? block162.call(this, context, tags, suffix) : void 0}`;
}
function block162(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block17(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`;
}
function block18(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`;
}
function block19(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name ="slim-arrow-right"></ui5-icon>`;
}
function block20(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-navigated"></div>`;
}
function block21(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block222.call(this, context, tags, suffix) : void 0}${this.modeMultiSelect ? block232.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block242.call(this, context, tags, suffix) : void 0}`;
}
function block222(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block232(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block242(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block252.call(this, context, tags, suffix) : block262.call(this, context, tags, suffix)}</div>`;
}
function block252(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block262(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
var StandardListItemTemplate_lit_default = block07;

// node_modules/@ui5/webcomponents/dist/StandardListItem.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StandardListItem = class StandardListItem2 extends ListItem_default {
  onBeforeRendering() {
    super.onBeforeRendering();
    this.hasTitle = !!this.textContent;
    this._hasImageContent = this.hasImageContent;
  }
  get displayImage() {
    return !!this.image;
  }
  get displayIconBegin() {
    return !!(this.icon && !this.iconEnd);
  }
  get displayIconEnd() {
    return !!(this.icon && this.iconEnd);
  }
  get hasImageContent() {
    return !!this.imageContent.length;
  }
};
__decorate9([property_default()], StandardListItem.prototype, "description", void 0);
__decorate9([property_default()], StandardListItem.prototype, "icon", void 0);
__decorate9([property_default({
  type: Boolean
})], StandardListItem.prototype, "iconEnd", void 0);
__decorate9([property_default()], StandardListItem.prototype, "image", void 0);
__decorate9([property_default()], StandardListItem.prototype, "additionalText", void 0);
__decorate9([property_default({
  type: ValueState_default,
  defaultValue: ValueState_default.None
})], StandardListItem.prototype, "additionalTextState", void 0);
__decorate9([property_default()], StandardListItem.prototype, "accessibleName", void 0);
__decorate9([property_default({
  type: WrappingType_default,
  defaultValue: WrappingType_default.None
})], StandardListItem.prototype, "wrappingType", void 0);
__decorate9([property_default({
  type: Boolean
})], StandardListItem.prototype, "hasTitle", void 0);
__decorate9([property_default({
  type: Boolean
})], StandardListItem.prototype, "_hasImageContent", void 0);
__decorate9([slot_default()], StandardListItem.prototype, "imageContent", void 0);
StandardListItem = __decorate9([customElement_default({
  tag: "ui5-li",
  template: StandardListItemTemplate_lit_default,
  dependencies: [...ListItem_default.dependencies, Icon_default, Avatar_default]
})], StandardListItem);
StandardListItem.define();
var StandardListItem_default = StandardListItem;

// node_modules/@ui5/webcomponents/dist/generated/themes/ResponsivePopoverCommon.css.js
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData10 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/ResponsivePopoverCommon.css.ts",
  content: `.input-root-phone{flex:1;position:relative;height:var(--_ui5-v1-24-29_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v1-24-29_input_background_color);border:var(--_ui5-v1-24-29-input-border);border-radius:var(--_ui5-v1-24-29_input_border_radius);box-sizing:border-box}.input-root-phone [inner-input]{padding:0 .5rem;width:100%;height:100%}.input-root-phone [inner-input]:focus{background-color:var(--sapField_Focus_Background)}.input-root-phone:focus-within:before{content:"";position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-29_input_focus_border_radius);top:var(--_ui5-v1-24-29_input_focus_offset);bottom:var(--_ui5-v1-24-29_input_focus_offset);left:var(--_ui5-v1-24-29_input_focus_offset);right:var(--_ui5-v1-24-29_input_focus_offset)}.input-root-phone [value-state=Error] [input-icon][data-ui5-compact-size],.input-root-phone [value-state=Success] [input-icon][data-ui5-compact-size],.input-root-phone [value-state=Warning] [input-icon][data-ui5-compact-size]{padding:.1875rem .5rem}[inner-input]{background:transparent;color:inherit;border:none;font-style:normal;-webkit-appearance:none;-moz-appearance:textfield;line-height:normal;padding:var(--_ui5-v1-24-29_input_inner_padding);box-sizing:border-box;min-width:3rem;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;border-radius:var(--_ui5-v1-24-29_input_border_radius)}[inner-input]::selection,[inner-input]::-moz-selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}[inner-input]::-webkit-input-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor)}[inner-input]::-moz-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor)}.input-root-phone[value-state]:not([value-state=None]){border-width:var(--_ui5-v1-24-29_input_state_border_width)}.input-root-phone[value-state=Error] [inner-input],.input-root-phone[value-state=Warning] [inner-input]{font-style:var(--_ui5-v1-24-29_input_error_warning_font_style)}.input-root-phone[value-state=Error] [inner-input]{font-weight:var(--_ui5-v1-24-29_input_error_font_weight)}.input-root-phone[value-state=Error]:not([readonly]){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v1-24-29_input_value_state_error_border_color)}.input-root-phone[value-state=Error]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v1-24-29_input_focused_value_state_error_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_error_border_color)}.input-root-phone[value-state=Error]:not([readonly]):focus-within:before{border-color:var(--_ui5-v1-24-29_input_focused_value_state_error_focus_outline_color)}.input-root-phone[value-state=Error]:not([readonly]):not([disabled]),.input-root-phone[value-state=Warning]:not([readonly]):not([disabled]),.input-root-phone[value-state=Information]:not([readonly]):not([disabled]){border-style:var(--_ui5-v1-24-29_input_error_warning_border_style)}.input-root-phone[value-state=Warning]:not([readonly]){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v1-24-29_input_value_state_warning_border_color)}.input-root-phone[value-state=Warning]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_border_color)}.input-root-phone[value-state=Warning]:not([readonly]):focus-within:before{border-color:var(--_ui5-v1-24-29_input_focused_value_state_warning_focus_outline_color)}.input-root-phone[value-state=Success]:not([readonly]){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v1-24-29_input_value_state_success_border_color);border-width:var(--_ui5-v1-24-29_input_value_state_success_border_width)}.input-root-phone[value-state=Success]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v1-24-29_input_focused_value_state_success_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_success_border_color)}.input-root-phone[value-state=Success]:not([readonly]):focus-within:before{border-color:var(--_ui5-v1-24-29_input_focused_value_state_success_focus_outline_color)}.input-root-phone[value-state=Information]:not([readonly]){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v1-24-29_input_value_state_information_border_color);border-width:var(--_ui5-v1-24-29_input_information_border_width)}.input-root-phone[value-state=Information]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v1-24-29_input_focused_value_state_information_background);border-color:var(--_ui5-v1-24-29_input_focused_value_state_information_border_color)}.ui5-multi-combobox-toggle-button{margin-left:.5rem}.ui5-responsive-popover-header{width:100%;min-height:2.5rem;display:flex;flex-direction:column}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v1-24-29_button_base_min_width))}.ui5-responsive-popover-header .row{box-sizing:border-box;padding:.25rem 1rem;min-height:2.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontHeader5Size)}.ui5-responsive-popover-footer{display:flex;justify-content:flex-end;padding:.25rem 0;width:100%}.ui5-responsive-popover-close-btn{position:absolute;right:1rem}
`
};
var ResponsivePopoverCommon_css_default = styleData10;

export {
  ListItemBase_default,
  List_default,
  ResponsivePopover_default,
  ListItemType_default,
  StandardListItem_default,
  ResponsivePopoverCommon_css_default
};
/*! Bundled license information:

lit-html/development/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-YDGTSUXY.js.map

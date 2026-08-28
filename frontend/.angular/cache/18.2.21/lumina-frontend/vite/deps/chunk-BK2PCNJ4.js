import {
  getFeature
} from "./chunk-JASJJZVS.js";

// node_modules/lit-html/development/lit-html.js
var _a;
var _b;
var _c;
var _d;
var DEV_MODE = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE = false;
var global = NODE_MODE ? globalThis : window;
var debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var debugLogRenderId = 0;
var issueWarning;
if (DEV_MODE) {
  (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : global.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
}
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true ? global.ShadyDOM.wrap : (node) => node;
var trustedTypes = global.trustedTypes;
var policy = trustedTypes ? trustedTypes.createPolicy("lit-html", {
  createHTML: (s) => s
}) : void 0;
var identityFunction = (value) => value;
var noopSanitizer = (_node, _name, _type) => identityFunction;
var setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
var boundAttributeSuffix = "$lit$";
var marker = `lit$${String(Math.random()).slice(9)}$`;
var markerMatch = "?" + marker;
var nodeMarker = `<${markerMatch}>`;
var d = NODE_MODE && global.document === void 0 ? {
  createTreeWalker() {
    return {};
  }
} : document;
var createMarker = () => d.createComment("");
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isArray = Array.isArray;
var isIterable = (value) => isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === "function";
var SPACE_CHAR = `[ 	
\f\r]`;
var ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
var NAME_CHAR = `[^\\s"'>=/]`;
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
var comment2EndRegex = />/g;
var tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
var rawTextElement = /^(?:script|style|textarea|title)$/i;
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
var tag = (type) => (strings, ...values) => {
  if (DEV_MODE && strings.some((s) => s === void 0)) {
    console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences.");
  }
  return {
    // This property needs to remain unminified.
    ["_$litType$"]: type,
    strings,
    values
  };
};
var html = tag(HTML_RESULT);
var svg = tag(SVG_RESULT);
var noChange = Symbol.for("lit-noChange");
var nothing = Symbol.for("lit-nothing");
var templateCache = /* @__PURE__ */ new WeakMap();
var walker = d.createTreeWalker(d, 129, null, false);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!Array.isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, "\n");
    }
    throw new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  const l = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i = 0; i < l; i++) {
    const s = strings[i];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== void 0) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== void 0) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          if (DEV_MODE) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === void 0) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = void 0;
      }
    }
    if (DEV_MODE) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? (attrNames.push(void 0), i) : end);
  }
  const htmlResult = html2 + (strings[l] || "<?>") + (type === SVG_RESULT ? "</svg>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = class _Template {
  constructor({
    strings,
    ["_$litType$"]: type
  }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = _Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT) {
      const content = this.el.content;
      const svgElement = content.firstChild;
      svgElement.remove();
      content.append(...svgElement.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m = `Expressions are not supported inside \`${tag2}\` elements. See https://lit.dev/msg/expression-in-${tag2} for more information.`;
            if (tag2 === "template") {
              throw new Error(m);
            } else issueWarning("", m);
          }
        }
        if (node.hasAttributes()) {
          const attrsToRemove = [];
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix) || name.startsWith(marker)) {
              const realName = attrNames[attrNameIndex++];
              attrsToRemove.push(name);
              if (realName !== void 0) {
                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                const statics = value.split(marker);
                const m = /([.?@])?(.*)/.exec(realName);
                parts.push({
                  type: ATTRIBUTE_PART,
                  index: nodeIndex,
                  name: m[2],
                  strings: statics,
                  ctor: m[1] === "." ? PropertyPart : m[1] === "?" ? BooleanAttributePart : m[1] === "@" ? EventPart : AttributePart
                });
              } else {
                parts.push({
                  type: ELEMENT_PART,
                  index: nodeIndex
                });
              }
            }
          }
          for (const name of attrsToRemove) {
            node.removeAttribute(name);
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : "";
            for (let i = 0; i < lastIndex; i++) {
              node.append(strings2[i], createMarker());
              walker.nextNode();
              parts.push({
                type: CHILD_PART,
                index: ++nodeIndex
              });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({
            type: CHILD_PART,
            index: nodeIndex
          });
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            parts.push({
              type: COMMENT_PART,
              index: nodeIndex
            });
            i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
};
function resolveDirective(part, value, parent = part, attributeIndex) {
  var _a3, _b3, _c2;
  var _d2;
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? (_a3 = parent.__directives) === null || _a3 === void 0 ? void 0 : _a3[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
    (_b3 = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective["_$notifyDirectiveConnectionChanged"]) === null || _b3 === void 0 ? void 0 : _b3.call(currentDirective, false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      ((_c2 = (_d2 = parent).__directives) !== null && _c2 !== void 0 ? _c2 : _d2.__directives = [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== void 0) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
var TemplateInstance = class {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = void 0;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    var _a3;
    const {
      el: {
        content
      },
      parts
    } = this._$template;
    const fragment = ((_a3 = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a3 !== void 0 ? _a3 : d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== void 0) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (const part of this._$parts) {
      if (part !== void 0) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "set part",
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });
        if (part.strings !== void 0) {
          part._$setValue(values, part, i);
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  }
};
var ChildPart = class _ChildPart {
  constructor(startNode, endNode, parent, options) {
    var _a3;
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = (_a3 = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a3 !== void 0 ? _a3 : true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    var _a3, _b3;
    return (_b3 = (_a3 = this._$parent) === null || _a3 === void 0 ? void 0 : _a3._$isConnected) !== null && _b3 !== void 0 ? _b3 : this.__isConnected;
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== void 0 && (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    var _a3;
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== void 0) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== void 0) {
      if (DEV_MODE && ((_a3 = this.options) === null || _a3 === void 0 ? void 0 : _a3.host) === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself (commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    var _a3;
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = (_a3 = this._$startNode.parentNode) === null || _a3 === void 0 ? void 0 : _a3.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css\`...\` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a3;
    const {
      values,
      ["_$litType$"]: type
    } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_a3 = this._$committedValue) === null || _a3 === void 0 ? void 0 : _a3._$template) === template) {
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === void 0) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new _ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    var _a3;
    (_a3 = this._$notifyConnectionChanged) === null || _a3 === void 0 ? void 0 : _a3.call(this, false, true, from);
    while (start && start !== this._$endNode) {
      const n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this metod
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    var _a3;
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      (_a3 = this._$notifyConnectionChanged) === null || _a3 === void 0 ? void 0 : _a3.call(this, isConnected);
    } else if (DEV_MODE) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
};
var AttributePart = class {
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = void 0;
    }
  }
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === void 0) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v === noChange) {
          v = this._$committedValue[i];
        }
        change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v !== null && v !== void 0 ? v : "") + strings[i + 1];
        }
        this._$committedValue[i] = v;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === void 0) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value !== null && value !== void 0 ? value : "");
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value !== null && value !== void 0 ? value : "");
    }
  }
};
var PropertyPart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === void 0) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? void 0 : value;
  }
};
var emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
var BooleanAttributePart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    if (value && value !== nothing) {
      wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
    } else {
      wrap(this.element).removeAttribute(this.name);
    }
  }
};
var EventPart = class extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE && this.strings !== void 0) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    var _a3;
    newListener = (_a3 = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a3 !== void 0 ? _a3 : nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a3, _b3;
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call((_b3 = (_a3 = this.options) === null || _a3 === void 0 ? void 0 : _a3.host) !== null && _b3 !== void 0 ? _b3 : this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
};
var ElementPart = class {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = void 0;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
};
var _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in tests and private-ssr-support
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
};
var polyfillSupport = DEV_MODE ? global.litHtmlPolyfillSupportDevMode : global.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : global.litHtmlVersions = []).push("2.8.0");
if (DEV_MODE && global.litHtmlVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}
var render = (value, container, options) => {
  var _a3, _b3;
  if (DEV_MODE && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = (_a3 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a3 !== void 0 ? _a3 : container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = (_b3 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b3 !== void 0 ? _b3 : null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options !== null && options !== void 0 ? options : {});
  }
  part._$setValue(value);
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

// node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c,
  values
});
var Directive = class {
  constructor(_partInfo) {
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
};

// node_modules/lit-html/development/directive-helpers.js
var _a2;
var _b2;
var {
  _ChildPart: ChildPart2
} = _$LH;
var ENABLE_SHADYDOM_NOPATCH2 = true;
var wrap2 = ENABLE_SHADYDOM_NOPATCH2 && ((_a2 = window.ShadyDOM) === null || _a2 === void 0 ? void 0 : _a2.inUse) && ((_b2 = window.ShadyDOM) === null || _b2 === void 0 ? void 0 : _b2.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
var createMarker2 = () => document.createComment("");
var insertPart = (containerPart, refPart, part) => {
  var _a3;
  const container = wrap2(containerPart._$startNode).parentNode;
  const refNode = refPart === void 0 ? containerPart._$endNode : refPart._$startNode;
  if (part === void 0) {
    const startNode = wrap2(container).insertBefore(createMarker2(), refNode);
    const endNode = wrap2(container).insertBefore(createMarker2(), refNode);
    part = new ChildPart2(startNode, endNode, containerPart, containerPart.options);
  } else {
    const endNode = wrap2(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      (_a3 = part._$reparentDisconnectables) === null || _a3 === void 0 ? void 0 : _a3.call(part, containerPart);
      part._$parent = containerPart;
      let newConnectionState;
      if (part._$notifyConnectionChanged !== void 0 && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;
      while (start !== endNode) {
        const n = wrap2(start).nextSibling;
        wrap2(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
var setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);
  return part;
};
var RESET_VALUE = {};
var setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
var getCommittedValue = (part) => part._$committedValue;
var removePart = (part) => {
  var _a3;
  (_a3 = part._$notifyConnectionChanged) === null || _a3 === void 0 ? void 0 : _a3.call(part, false, true);
  let start = part._$startNode;
  const end = wrap2(part._$endNode).nextSibling;
  while (start !== end) {
    const n = wrap2(start).nextSibling;
    wrap2(start).remove();
    start = n;
  }
};

// node_modules/lit-html/development/directives/repeat.js
var generateMap = (list, start, end) => {
  const map = /* @__PURE__ */ new Map();
  for (let i = start; i <= end; i++) {
    map.set(list[i], i);
  }
  return map;
};
var RepeatDirective = class extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error("repeat() can only be used in text expressions");
    }
  }
  _getValuesAndKeys(items, keyFnOrTemplate, template) {
    let keyFn;
    if (template === void 0) {
      template = keyFnOrTemplate;
    } else if (keyFnOrTemplate !== void 0) {
      keyFn = keyFnOrTemplate;
    }
    const keys = [];
    const values = [];
    let index = 0;
    for (const item of items) {
      keys[index] = keyFn ? keyFn(item, index) : index;
      values[index] = template(item, index);
      index++;
    }
    return {
      values,
      keys
    };
  }
  render(items, keyFnOrTemplate, template) {
    return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
  }
  update(containerPart, [items, keyFnOrTemplate, template]) {
    var _a3;
    const oldParts = getCommittedValue(containerPart);
    const {
      values: newValues,
      keys: newKeys
    } = this._getValuesAndKeys(items, keyFnOrTemplate, template);
    if (!Array.isArray(oldParts)) {
      this._itemKeys = newKeys;
      return newValues;
    }
    const oldKeys = (_a3 = this._itemKeys) !== null && _a3 !== void 0 ? _a3 : this._itemKeys = [];
    const newParts = [];
    let newKeyToIndexMap;
    let oldKeyToIndexMap;
    let oldHead = 0;
    let oldTail = oldParts.length - 1;
    let newHead = 0;
    let newTail = newValues.length - 1;
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        newParts[newHead] = setChildPartValue(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        newParts[newTail] = setChildPartValue(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        newParts[newTail] = setChildPartValue(oldParts[oldHead], newValues[newTail]);
        insertPart(containerPart, newParts[newTail + 1], oldParts[oldHead]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        newParts[newHead] = setChildPartValue(oldParts[oldTail], newValues[newHead]);
        insertPart(containerPart, oldParts[oldHead], oldParts[oldTail]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === void 0) {
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }
        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          const oldPart = oldIndex !== void 0 ? oldParts[oldIndex] : null;
          if (oldPart === null) {
            const newPart = insertPart(containerPart, oldParts[oldHead]);
            setChildPartValue(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            newParts[newHead] = setChildPartValue(oldPart, newValues[newHead]);
            insertPart(containerPart, oldParts[oldHead], oldPart);
            oldParts[oldIndex] = null;
          }
          newHead++;
        }
      }
    }
    while (newHead <= newTail) {
      const newPart = insertPart(containerPart, newParts[newTail + 1]);
      setChildPartValue(newPart, newValues[newHead]);
      newParts[newHead++] = newPart;
    }
    while (oldHead <= oldTail) {
      const oldPart = oldParts[oldHead++];
      if (oldPart !== null) {
        removePart(oldPart);
      }
    }
    this._itemKeys = newKeys;
    setCommittedValue(containerPart, newParts);
    return noChange;
  }
};
var repeat = directive(RepeatDirective);

// node_modules/lit-html/development/directives/class-map.js
var ClassMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a3;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "class" || ((_a3 = partInfo.strings) === null || _a3 === void 0 ? void 0 : _a3.length) > 2) {
      throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
  }
  render(classInfo) {
    return " " + Object.keys(classInfo).filter((key) => classInfo[key]).join(" ") + " ";
  }
  update(part, [classInfo]) {
    var _a3, _b3;
    if (this._previousClasses === void 0) {
      this._previousClasses = /* @__PURE__ */ new Set();
      if (part.strings !== void 0) {
        this._staticClasses = new Set(part.strings.join(" ").split(/\s/).filter((s) => s !== ""));
      }
      for (const name in classInfo) {
        if (classInfo[name] && !((_a3 = this._staticClasses) === null || _a3 === void 0 ? void 0 : _a3.has(name))) {
          this._previousClasses.add(name);
        }
      }
      return this.render(classInfo);
    }
    const classList = part.element.classList;
    this._previousClasses.forEach((name) => {
      if (!(name in classInfo)) {
        classList.remove(name);
        this._previousClasses.delete(name);
      }
    });
    for (const name in classInfo) {
      const value = !!classInfo[name];
      if (value !== this._previousClasses.has(name) && !((_b3 = this._staticClasses) === null || _b3 === void 0 ? void 0 : _b3.has(name))) {
        if (value) {
          classList.add(name);
          this._previousClasses.add(name);
        } else {
          classList.remove(name);
          this._previousClasses.delete(name);
        }
      }
    }
    return noChange;
  }
};
var classMap = directive(ClassMapDirective);

// node_modules/@ui5/webcomponents-base/dist/renderer/directives/style-map.js
var StyleMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a3;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "style" || ((_a3 = partInfo.strings) === null || _a3 === void 0 ? void 0 : _a3.length) > 2) {
      throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
  }
  render(styleInfo) {
    return "";
  }
  update(part, [styleInfo]) {
    const {
      style
    } = part.element;
    if (this._previousStyleProperties === void 0) {
      this._previousStyleProperties = /* @__PURE__ */ new Set();
      for (const name in styleInfo) {
        this._previousStyleProperties.add(name);
      }
    }
    this._previousStyleProperties.forEach((name) => {
      if (styleInfo[name] == null) {
        this._previousStyleProperties.delete(name);
        if (name.includes("-")) {
          style.removeProperty(name);
        } else {
          style[name] = "";
        }
      }
    });
    for (const name in styleInfo) {
      const value = styleInfo[name];
      if (value != null) {
        this._previousStyleProperties.add(name);
        if (name.includes("-")) {
          style.setProperty(name, value);
        } else {
          style[name] = value;
        }
      }
    }
    return noChange;
  }
};
var styleMap = directive(StyleMapDirective);

// node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value !== null && value !== void 0 ? value : nothing;

// node_modules/lit-html/development/directives/unsafe-html.js
var HTML_RESULT2 = 1;
var UnsafeHTMLDirective = class extends Directive {
  constructor(partInfo) {
    super(partInfo);
    this._value = nothing;
    if (partInfo.type !== PartType.CHILD) {
      throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
    }
  }
  render(value) {
    if (value === nothing || value == null) {
      this._templateResult = void 0;
      return this._value = value;
    }
    if (value === noChange) {
      return value;
    }
    if (typeof value != "string") {
      throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
    }
    if (value === this._value) {
      return this._templateResult;
    }
    this._value = value;
    const strings = [value];
    strings.raw = strings;
    return this._templateResult = {
      // Cast to a known set of integers that satisfy ResultType so that we
      // don't have to export ResultType and possibly encourage this pattern.
      // This property needs to remain unminified.
      ["_$litType$"]: this.constructor.resultType,
      strings,
      values: []
    };
  }
};
UnsafeHTMLDirective.directiveName = "unsafeHTML";
UnsafeHTMLDirective.resultType = HTML_RESULT2;
var unsafeHTML = directive(UnsafeHTMLDirective);

// node_modules/@ui5/webcomponents-base/dist/renderer/LitRenderer.js
var effectiveHtml = (strings, ...values) => {
  const litStatic = getFeature("LitStatic");
  const fn = litStatic ? litStatic.html : html;
  return fn(strings, ...values);
};
var effectiveSvg = (strings, ...values) => {
  const litStatic = getFeature("LitStatic");
  const fn = litStatic ? litStatic.svg : svg;
  return fn(strings, ...values);
};
var litRender = (templateResult, container, styleStrOrHrefsArr, forStaticArea, options) => {
  const openUI5Enablement = getFeature("OpenUI5Enablement");
  if (openUI5Enablement && !forStaticArea) {
    templateResult = openUI5Enablement.wrapTemplateResultInBusyMarkup(effectiveHtml, options.host, templateResult);
  }
  if (typeof styleStrOrHrefsArr === "string") {
    templateResult = effectiveHtml`<style>${styleStrOrHrefsArr}</style>${templateResult}`;
  } else if (Array.isArray(styleStrOrHrefsArr) && styleStrOrHrefsArr.length) {
    templateResult = effectiveHtml`${styleStrOrHrefsArr.map((href) => effectiveHtml`<link type="text/css" rel="stylesheet" href="${href}">`)}${templateResult}`;
  }
  render(templateResult, container, options);
};
var scopeTag = (tag2, tags, suffix) => {
  const litStatic = getFeature("LitStatic");
  if (litStatic) {
    return litStatic.unsafeStatic((tags || []).includes(tag2) ? `${tag2}-${suffix}` : tag2);
  }
};
var LitRenderer_default = litRender;

// node_modules/@ui5/webcomponents-base/dist/Keys.js
var KeyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CONTROL: 17,
  ALT: 18,
  BREAK: 19,
  CAPS_LOCK: 20,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  PRINT: 44,
  INSERT: 45,
  DELETE: 46,
  DIGIT_0: 48,
  DIGIT_1: 49,
  DIGIT_2: 50,
  DIGIT_3: 51,
  DIGIT_4: 52,
  DIGIT_5: 53,
  DIGIT_6: 54,
  DIGIT_7: 55,
  DIGIT_8: 56,
  DIGIT_9: 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  WINDOWS: 91,
  CONTEXT_MENU: 93,
  TURN_OFF: 94,
  SLEEP: 95,
  NUMPAD_0: 96,
  NUMPAD_1: 97,
  NUMPAD_2: 98,
  NUMPAD_3: 99,
  NUMPAD_4: 100,
  NUMPAD_5: 101,
  NUMPAD_6: 102,
  NUMPAD_7: 103,
  NUMPAD_8: 104,
  NUMPAD_9: 105,
  NUMPAD_ASTERISK: 106,
  NUMPAD_PLUS: 107,
  NUMPAD_MINUS: 109,
  NUMPAD_COMMA: 110,
  NUMPAD_SLASH: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUM_LOCK: 144,
  SCROLL_LOCK: 145,
  COLON: 186,
  PLUS: 187,
  COMMA: 188,
  SLASH: 189,
  DOT: 190,
  PIPE: 191,
  SEMICOLON: 192,
  MINUS: 219,
  GREAT_ACCENT: 220,
  EQUALS: 221,
  SINGLE_QUOTE: 222,
  BACKSLASH: 226
};
var isEnter = (event) => (event.key ? event.key === "Enter" : event.keyCode === KeyCodes.ENTER) && !hasModifierKeys(event);
var isSpace = (event) => (event.key ? event.key === "Spacebar" || event.key === " " : event.keyCode === KeyCodes.SPACE) && !hasModifierKeys(event);
var isLeft = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && !hasModifierKeys(event);
var isRight = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && !hasModifierKeys(event);
var isUp = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && !hasModifierKeys(event);
var isDown = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && !hasModifierKeys(event);
var isLeftCtrl = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && checkModifierKeys(event, true, false, false);
var isRightCtrl = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && checkModifierKeys(event, true, false, false);
var isUpCtrl = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, true, false, false);
var isDownCtrl = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, true, false, false);
var isUpShift = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, false, false, true);
var isDownShift = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, false, false, true);
var isLeftShift = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && checkModifierKeys(event, false, false, true);
var isRightShift = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && checkModifierKeys(event, false, false, true);
var isHome = (event) => (event.key ? event.key === "Home" : event.keyCode === KeyCodes.HOME) && !hasModifierKeys(event);
var isEnd = (event) => (event.key ? event.key === "End" : event.keyCode === KeyCodes.END) && !hasModifierKeys(event);
var isEscape = (event) => (event.key ? event.key === "Escape" || event.key === "Esc" : event.keyCode === KeyCodes.ESCAPE) && !hasModifierKeys(event);
var isTabNext = (event) => (event.key ? event.key === "Tab" : event.keyCode === KeyCodes.TAB) && !hasModifierKeys(event);
var isTabPrevious = (event) => (event.key ? event.key === "Tab" : event.keyCode === KeyCodes.TAB) && checkModifierKeys(
  event,
  /* Ctrl */
  false,
  /* Alt */
  false,
  /* Shift */
  true
);
var isBackSpace = (event) => (event.key ? event.key === "Backspace" : event.keyCode === KeyCodes.BACKSPACE) && !hasModifierKeys(event);
var isDelete = (event) => (event.key ? event.key === "Delete" : event.keyCode === KeyCodes.DELETE) && !hasModifierKeys(event);
var isPageUp = (event) => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && !hasModifierKeys(event);
var isPageDown = (event) => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && !hasModifierKeys(event);
var isPlus = (event) => (event.key ? event.key === "+" : event.keyCode === KeyCodes.PLUS) || event.keyCode === KeyCodes.NUMPAD_PLUS && !hasModifierKeys(event);
var isMinus = (event) => (event.key ? event.key === "-" : event.keyCode === KeyCodes.MINUS) || event.keyCode === KeyCodes.NUMPAD_MINUS && !hasModifierKeys(event);
var isShow = (event) => {
  if (event.key) {
    return isF4(event) || isShowByArrows(event);
  }
  return event.keyCode === KeyCodes.F4 && !hasModifierKeys(event) || event.keyCode === KeyCodes.ARROW_DOWN && checkModifierKeys(
    event,
    /* Ctrl */
    false,
    /* Alt */
    true,
    /* Shift */
    false
  );
};
var isF4 = (event) => {
  return event.key === "F4" && !hasModifierKeys(event);
};
var isShowByArrows = (event) => {
  return (event.key === "ArrowDown" || event.key === "Down" || event.key === "ArrowUp" || event.key === "Up") && checkModifierKeys(
    event,
    /* Ctrl */
    false,
    /* Alt */
    true,
    /* Shift */
    false
  );
};
var isShift = (event) => event.key === "Shift" || event.keyCode === KeyCodes.SHIFT;
var hasModifierKeys = (event) => event.shiftKey || event.altKey || getCtrlKey(event);
var getCtrlKey = (event) => !!(event.metaKey || event.ctrlKey);
var checkModifierKeys = (event, bCtrlKey, bAltKey, bShiftKey) => event.shiftKey === bShiftKey && event.altKey === bAltKey && getCtrlKey(event) === bCtrlKey;

// node_modules/@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js
var styleData = {
  packageName: "@ui5/webcomponents-theming",
  fileName: "themes/sap_horizon/parameters-bundle.css.ts",
  content: `:root{--sapThemeMetaData-Base-baseLib:{"Path": "Base.baseLib.sap_horizon.css_variables","PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css","Extends": ["baseTheme"],"Tags": ["Fiori_3","LightColorScheme"],"FallbackThemeId": "sap_fiori_3","Engine":{"Name": "theming-engine","Version": "15.0.8"},"Version":{"Build": "11.29.3.20250417070835","Source": "11.29.3"}};--sapBrandColor: #0070f2;--sapHighlightColor: #0064d9;--sapBaseColor: #fff;--sapShellColor: #fff;--sapBackgroundColor: #f5f6f7;--sapFontFamily: "72", "72full", Arial, Helvetica, sans-serif;--sapFontSize: .875rem;--sapTextColor: #131e29;--sapLinkColor: #0064d9;--sapCompanyLogo: none;--sapFavicon: none;--sapBackgroundImage: none;--sapBackgroundImageOpacity: 1;--sapBackgroundImageRepeat: false;--sapSelectedColor: #0064d9;--sapHoverColor: #eaecee;--sapActiveColor: #dee2e5;--sapHighlightTextColor: #fff;--sapTitleColor: #131e29;--sapNegativeColor: #aa0808;--sapCriticalColor: #e76500;--sapPositiveColor: #256f3a;--sapInformativeColor: #0070f2;--sapNeutralColor: #788fa6;--sapNegativeElementColor: #f53232;--sapCriticalElementColor: #e76500;--sapPositiveElementColor: #30914c;--sapInformativeElementColor: #0070f2;--sapNeutralElementColor: #788fa6;--sapNegativeTextColor: #aa0808;--sapCriticalTextColor: #b44f00;--sapPositiveTextColor: #256f3a;--sapInformativeTextColor: #0064d9;--sapNeutralTextColor: #131e29;--sapErrorColor: #aa0808;--sapWarningColor: #e76500;--sapSuccessColor: #256f3a;--sapInformationColor: #0070f2;--sapErrorBackground: #ffeaf4;--sapWarningBackground: #fff8d6;--sapSuccessBackground: #f5fae5;--sapInformationBackground: #e1f4ff;--sapNeutralBackground: #eff1f2;--sapErrorBorderColor: #e90b0b;--sapWarningBorderColor: #dd6100;--sapSuccessBorderColor: #30914c;--sapInformationBorderColor: #0070f2;--sapNeutralBorderColor: #788fa6;--sapElement_LineHeight: 2.75rem;--sapElement_Height: 2.25rem;--sapElement_BorderWidth: .0625rem;--sapElement_BorderCornerRadius: .75rem;--sapElement_Compact_LineHeight: 2rem;--sapElement_Compact_Height: 1.625rem;--sapElement_Condensed_LineHeight: 1.5rem;--sapElement_Condensed_Height: 1.375rem;--sapContent_LineHeight: 1.5;--sapContent_IconHeight: 1rem;--sapContent_IconColor: #131e29;--sapContent_ContrastIconColor: #fff;--sapContent_NonInteractiveIconColor: #758ca4;--sapContent_MarkerIconColor: #5d36ff;--sapContent_MarkerTextColor: #046c7a;--sapContent_MeasureIndicatorColor: #556b81;--sapContent_Selected_MeasureIndicatorColor: #0064d9;--sapContent_Placeholderloading_Background: #ccc;--sapContent_Placeholderloading_Gradient: linear-gradient(to right, #ccc 0%, #ccc 20%, #999 50%, #ccc 80%, #ccc 100%);--sapContent_ImagePlaceholderBackground: #eaecee;--sapContent_ImagePlaceholderForegroundColor: #5b738b;--sapContent_RatedColor: #d27700;--sapContent_UnratedColor: #758ca4;--sapContent_BusyColor: #0064d9;--sapContent_FocusColor: #0032a5;--sapContent_FocusStyle: solid;--sapContent_FocusWidth: .125rem;--sapContent_ContrastFocusColor: #fff;--sapContent_ShadowColor: #223548;--sapContent_ContrastShadowColor: #fff;--sapContent_Shadow0: 0 0 .125rem 0 rgba(34,53,72,.2), 0 .125rem .25rem 0 rgba(34,53,72,.2);--sapContent_Shadow1: 0 0 0 .0625rem rgba(34,53,72,.48), 0 .125rem .5rem 0 rgba(34,53,72,.3);--sapContent_Shadow2: 0 0 0 .0625rem rgba(34,53,72,.48), 0 .625rem 1.875rem 0 rgba(34,53,72,.25);--sapContent_Shadow3: 0 0 0 .0625rem rgba(34,53,72,.48), 0 1.25rem 5rem 0 rgba(34,53,72,.25);--sapContent_TextShadow: 0 0 .125rem #fff;--sapContent_ContrastTextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapContent_HeaderShadow: 0 .125rem .125rem 0 rgba(34,53,72,.05), inset 0 -.0625rem 0 0 #d9d9d9;--sapContent_Interaction_Shadow: inset 0 0 0 .0625rem rgba(85,107,129,.25);--sapContent_Selected_Shadow: inset 0 0 0 .0625rem rgba(79,160,255,.5);--sapContent_Negative_Shadow: inset 0 0 0 .0625rem rgba(255,142,196,.45);--sapContent_Critical_Shadow: inset 0 0 0 .0625rem rgba(255,213,10,.4);--sapContent_Positive_Shadow: inset 0 0 0 .0625rem rgba(48,145,76,.18);--sapContent_Informative_Shadow: inset 0 0 0 .0625rem rgba(104,174,255,.5);--sapContent_Neutral_Shadow: inset 0 0 0 .0625rem rgba(120,143,166,.3);--sapContent_SearchHighlightColor: #dafdf5;--sapContent_HelpColor: #188918;--sapContent_LabelColor: #556b82;--sapContent_MonospaceFontFamily: "72Mono", "72Monofull", lucida console, monospace;--sapContent_MonospaceBoldFontFamily: "72Mono-Bold", "72Mono-Boldfull", lucida console, monospace;--sapContent_IconFontFamily: "SAP-icons";--sapContent_DisabledTextColor: rgba(19,30,41,.6);--sapContent_DisabledOpacity: .4;--sapContent_ContrastTextThreshold: .65;--sapContent_ContrastTextColor: #fff;--sapContent_ForegroundColor: #efefef;--sapContent_ForegroundBorderColor: #758ca4;--sapContent_ForegroundTextColor: #131e29;--sapContent_BadgeBackground: #aa0808;--sapContent_BadgeTextColor: #fff;--sapContent_BadgeBorderColor: #fff;--sapContent_DragAndDropActiveColor: #0064d9;--sapContent_Selected_TextColor: #0064d9;--sapContent_Selected_Background: #fff;--sapContent_Selected_Hover_Background: #e3f0ff;--sapContent_Selected_ForegroundColor: #0064d9;--sapContent_ForcedColorAdjust: none;--sapContent_Lite_Shadow: None;--sapContent_Illustrative_Color1: #9b015d;--sapContent_Illustrative_Color2: #56bdff;--sapContent_Illustrative_Color3: #ff7f4c;--sapContent_Illustrative_Color4: #00144a;--sapContent_Illustrative_Color5: #a9b4be;--sapContent_Illustrative_Color6: #d5dadd;--sapContent_Illustrative_Color7: #dbf1ff;--sapContent_Illustrative_Color8: #fff;--sapContent_Illustrative_Color9: #0899a7;--sapContent_Illustrative_Color10: #dbf1ff;--sapContent_Illustrative_Color11: #df1278;--sapContent_Illustrative_Color12: #00a800;--sapContent_Illustrative_Color13: #0070f2;--sapContent_Illustrative_Color14: #0040b0;--sapContent_Illustrative_Color15: #c35500;--sapContent_Illustrative_Color16: #8d2a00;--sapContent_Illustrative_Color17: #046c7c;--sapContent_Illustrative_Color18: #bce5ff;--sapContent_Illustrative_Color19: #a3dbff;--sapContent_Illustrative_Color20: #89d1ff;--sapContent_Illustrative_Color21: #1b90ff;--sapContent_Illustrative_Color22: #00144a;--sapContent_Illustrative_Color23: #d20a0a;--sapContent_Illustrative_Color24: #ffb2d2;--sapContent_Illustrative_Color25: #ffeaf4;--sapContent_Illustrative_Color26: #ffdf72;--sapContent_Illustrative_Color27: #fff8d6;--sapContent_Illustrative_Color28: #a93e00;--sapContent_Illustrative_Color29: #450b00;--sapContent_Illustrative_Color30: #340800;--sapContent_Illustrative_Color31: #ffab92;--sapContent_Space_S: 1rem;--sapContent_Space_M: 2rem;--sapContent_Space_L: 2rem;--sapContent_Space_XL: 3rem;--sapContent_Space_Tiny: .5rem;--sapContent_Space_Small: 1rem;--sapContent_Space_Medium: 2rem;--sapContent_Space_Large: 3rem;--sapContent_Margin_Tiny: 0 0 1rem;--sapContent_Margin_Small: 1rem;--sapContent_Margin_Medium: 1rem 2rem;--sapContent_Margin_Large: 1rem;--sapContent_Padding_S: 0rem;--sapContent_Padding_M: 2rem;--sapContent_Padding_L: 2rem;--sapContent_Padding_XL: 3rem;--sapContent_Gap: 1rem;--sapContent_Success_HeaderShadow: 0 .125rem .125rem 0 rgba(34,53,72,.05), inset 0 -.0625rem 0 0 #30914c;--sapContent_Warning_HeaderShadow: 0 .125rem .125rem 0 rgba(34,53,72,.05), inset 0 -.0625rem 0 0 #dd6100;--sapContent_Error_HeaderShadow: 0 .125rem .125rem 0 rgba(34,53,72,.05), inset 0 -.0625rem 0 0 #e90b0b;--sapContent_Information_HeaderShadow: 0 .125rem .125rem 0 rgba(34,53,72,.05), inset 0 -.0625rem 0 0 #0070f2;--sapFontLightFamily: "72-Light", "72-Lightfull", "72", "72full", Arial, Helvetica, sans-serif;--sapFontBoldFamily: "72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif;--sapFontSemiboldFamily: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;--sapFontSemiboldDuplexFamily: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif;--sapFontBlackFamily: "72Black", "72Blackfull","72", "72full", Arial, Helvetica, sans-serif;--sapFontHeaderFamily: "72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif;--sapFontSmallSize: .75rem;--sapFontLargeSize: 1rem;--sapFontHeader1Size: 3rem;--sapFontHeader2Size: 2rem;--sapFontHeader3Size: 1.5rem;--sapFontHeader4Size: 1.25rem;--sapFontHeader5Size: 1rem;--sapFontHeader6Size: .875rem;--sapLink_TextDecoration: none;--sapLink_Hover_Color: #0064d9;--sapLink_Hover_TextDecoration: underline;--sapLink_Active_Color: #0064d9;--sapLink_Active_TextDecoration: none;--sapLink_Visited_Color: #0064d9;--sapLink_InvertedColor: #a6cfff;--sapLink_SubtleColor: #131e29;--sapShell_Background: #eff1f2;--sapShell_BackgroundImage: linear-gradient(to bottom, #eff1f2, #eff1f2);--sapShell_BackgroundImageOpacity: 1;--sapShell_BackgroundImageRepeat: false;--sapShell_BorderColor: #fff;--sapShell_TextColor: #131e29;--sapShell_InteractiveBackground: #eff1f2;--sapShell_InteractiveTextColor: #131e29;--sapShell_InteractiveBorderColor: #556b81;--sapShell_GroupTitleTextColor: #131e29;--sapShell_GroupTitleTextShadow: 0 0 .125rem #fff;--sapShell_Hover_Background: #fff;--sapShell_Active_Background: #fff;--sapShell_Active_TextColor: #0070f2;--sapShell_Selected_Background: #fff;--sapShell_Selected_TextColor: #0070f2;--sapShell_Selected_Hover_Background: #fff;--sapShell_Favicon: none;--sapShell_Navigation_Background: #fff;--sapShell_Navigation_Hover_Background: #fff;--sapShell_Navigation_SelectedColor: #0064d9;--sapShell_Navigation_Selected_TextColor: #0064d9;--sapShell_Navigation_TextColor: #131e29;--sapShell_Navigation_Active_TextColor: #0064d9;--sapShell_Navigation_Active_Background: #fff;--sapShell_Shadow: 0 .125rem .125rem 0 rgba(34,53,72,.15), inset 0 -.0625rem 0 0 rgba(34,53,72,.2);--sapShell_NegativeColor: #aa0808;--sapShell_CriticalColor: #b44f00;--sapShell_PositiveColor: #256f3a;--sapShell_InformativeColor: #0064d9;--sapShell_NeutralColor: #131e29;--sapShell_Assistant_ForegroundColor: #5d36ff;--sapShell_SubBrand_TextColor: #003e87;--sapShell_Category_1_Background: #0057d2;--sapShell_Category_1_BorderColor: #0057d2;--sapShell_Category_1_TextColor: #fff;--sapShell_Category_1_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_2_Background: #df1278;--sapShell_Category_2_BorderColor: #df1278;--sapShell_Category_2_TextColor: #fff;--sapShell_Category_2_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_3_Background: #e76500;--sapShell_Category_3_BorderColor: #e76500;--sapShell_Category_3_TextColor: #fff;--sapShell_Category_3_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_4_Background: #7800a4;--sapShell_Category_4_BorderColor: #7800a4;--sapShell_Category_4_TextColor: #fff;--sapShell_Category_4_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_5_Background: #aa2608;--sapShell_Category_5_BorderColor: #aa2608;--sapShell_Category_5_TextColor: #fff;--sapShell_Category_5_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_6_Background: #07838f;--sapShell_Category_6_BorderColor: #07838f;--sapShell_Category_6_TextColor: #fff;--sapShell_Category_6_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_7_Background: #f31ded;--sapShell_Category_7_BorderColor: #f31ded;--sapShell_Category_7_TextColor: #fff;--sapShell_Category_7_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_8_Background: #188918;--sapShell_Category_8_BorderColor: #188918;--sapShell_Category_8_TextColor: #fff;--sapShell_Category_8_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_9_Background: #002a86;--sapShell_Category_9_BorderColor: #002a86;--sapShell_Category_9_TextColor: #fff;--sapShell_Category_9_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_10_Background: #5b738b;--sapShell_Category_10_BorderColor: #5b738b;--sapShell_Category_10_TextColor: #fff;--sapShell_Category_10_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_11_Background: #d20a0a;--sapShell_Category_11_BorderColor: #d20a0a;--sapShell_Category_11_TextColor: #fff;--sapShell_Category_11_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_12_Background: #7858ff;--sapShell_Category_12_BorderColor: #7858ff;--sapShell_Category_12_TextColor: #fff;--sapShell_Category_12_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_13_Background: #a00875;--sapShell_Category_13_BorderColor: #a00875;--sapShell_Category_13_TextColor: #fff;--sapShell_Category_13_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_14_Background: #14565b;--sapShell_Category_14_BorderColor: #14565b;--sapShell_Category_14_TextColor: #fff;--sapShell_Category_14_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_15_Background: #223548;--sapShell_Category_15_BorderColor: #223548;--sapShell_Category_15_TextColor: #fff;--sapShell_Category_15_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Category_16_Background: #1e592f;--sapShell_Category_16_BorderColor: #1e592f;--sapShell_Category_16_TextColor: #fff;--sapShell_Category_16_TextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapShell_Space_S: .5rem;--sapShell_Space_M: 2rem;--sapShell_Space_L: 2rem;--sapShell_Space_XL: 3rem;--sapShell_Gap_S: .5rem;--sapShell_Gap_M: 1rem;--sapShell_Gap_L: 1rem;--sapShell_Gap_XL: 1rem;--sapShell_GroupGap_S: 2rem;--sapShell_GroupGap_M: 3rem;--sapShell_GroupGap_L: 3rem;--sapShell_GroupGap_XL: 3rem;--sapAssistant_Color1: #5d36ff;--sapAssistant_Color2: #a100c2;--sapAssistant_BackgroundGradient: linear-gradient(#5d36ff, #a100c2);--sapAssistant_Background: #5d36ff;--sapAssistant_BorderColor: #5d36ff;--sapAssistant_TextColor: #fff;--sapAssistant_Hover_Background: #2800cf;--sapAssistant_Hover_BorderColor: #2800cf;--sapAssistant_Hover_TextColor: #fff;--sapAssistant_Active_Background: #fff;--sapAssistant_Active_BorderColor: #5d36ff;--sapAssistant_Active_TextColor: #5d36ff;--sapAssistant_Question_Background: #eae5ff;--sapAssistant_Question_BorderColor: #eae5ff;--sapAssistant_Question_TextColor: #131e29;--sapAssistant_Answer_Background: #eff1f2;--sapAssistant_Answer_BorderColor: #eff1f2;--sapAssistant_Answer_TextColor: #131e29;--sapAvatar_1_Background: #fff3b8;--sapAvatar_1_BorderColor: #fff3b8;--sapAvatar_1_TextColor: #a45d00;--sapAvatar_1_Hover_Background: #fff3b8;--sapAvatar_2_Background: #ffd0e7;--sapAvatar_2_BorderColor: #ffd0e7;--sapAvatar_2_TextColor: #aa0808;--sapAvatar_2_Hover_Background: #ffd0e7;--sapAvatar_3_Background: #ffdbe7;--sapAvatar_3_BorderColor: #ffdbe7;--sapAvatar_3_TextColor: #ba066c;--sapAvatar_3_Hover_Background: #ffdbe7;--sapAvatar_4_Background: #ffdcf3;--sapAvatar_4_BorderColor: #ffdcf3;--sapAvatar_4_TextColor: #a100c2;--sapAvatar_4_Hover_Background: #ffdcf3;--sapAvatar_5_Background: #ded3ff;--sapAvatar_5_BorderColor: #ded3ff;--sapAvatar_5_TextColor: #552cff;--sapAvatar_5_Hover_Background: #ded3ff;--sapAvatar_6_Background: #d1efff;--sapAvatar_6_BorderColor: #d1efff;--sapAvatar_6_TextColor: #0057d2;--sapAvatar_6_Hover_Background: #d1efff;--sapAvatar_7_Background: #c2fcee;--sapAvatar_7_BorderColor: #c2fcee;--sapAvatar_7_TextColor: #046c7a;--sapAvatar_7_Hover_Background: #c2fcee;--sapAvatar_8_Background: #ebf5cb;--sapAvatar_8_BorderColor: #ebf5cb;--sapAvatar_8_TextColor: #256f3a;--sapAvatar_8_Hover_Background: #ebf5cb;--sapAvatar_9_Background: #ddccf0;--sapAvatar_9_BorderColor: #ddccf0;--sapAvatar_9_TextColor: #6c32a9;--sapAvatar_9_Hover_Background: #ddccf0;--sapAvatar_10_Background: #eaecee;--sapAvatar_10_BorderColor: #eaecee;--sapAvatar_10_TextColor: #556b82;--sapAvatar_10_Hover_Background: #eaecee;--sapAvatar_Lite_BorderColor: transparent;--sapAvatar_Lite_Background: transparent;--sapAvatar_Hover_BorderColor: rgba(85,107,129,.25);--sapButton_Background: #fff;--sapButton_BorderColor: #bcc3ca;--sapButton_BorderWidth: .0625rem;--sapButton_BorderCornerRadius: .5rem;--sapButton_TextColor: #0064d9;--sapButton_FontFamily: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif;--sapButton_Hover_Background: #eaecee;--sapButton_Hover_BorderColor: #bcc3ca;--sapButton_Hover_TextColor: #0064d9;--sapButton_IconColor: #0064d9;--sapButton_Active_Background: #fff;--sapButton_Active_BorderColor: #0064d9;--sapButton_Active_TextColor: #0064d9;--sapButton_Emphasized_Background: #0070f2;--sapButton_Emphasized_BorderColor: #0070f2;--sapButton_Emphasized_BorderWidth: .0625rem;--sapButton_Emphasized_TextColor: #fff;--sapButton_Emphasized_FontFamily: "72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif;--sapButton_Emphasized_Hover_Background: #0064d9;--sapButton_Emphasized_Hover_BorderColor: #0064d9;--sapButton_Emphasized_Hover_TextColor: #fff;--sapButton_Emphasized_Active_Background: #fff;--sapButton_Emphasized_Active_BorderColor: #0064d9;--sapButton_Emphasized_Active_TextColor: #0064d9;--sapButton_Emphasized_TextShadow: transparent;--sapButton_Emphasized_FontWeight: bold;--sapButton_Reject_Background: #ffd6e9;--sapButton_Reject_BorderColor: #ffc2de;--sapButton_Reject_TextColor: #aa0808;--sapButton_Reject_Hover_Background: #ffbddb;--sapButton_Reject_Hover_BorderColor: #ffbddb;--sapButton_Reject_Hover_TextColor: #aa0808;--sapButton_Reject_Active_Background: #fff;--sapButton_Reject_Active_BorderColor: #e90b0b;--sapButton_Reject_Active_TextColor: #aa0808;--sapButton_Reject_Selected_Background: #fff;--sapButton_Reject_Selected_BorderColor: #e90b0b;--sapButton_Reject_Selected_TextColor: #aa0808;--sapButton_Reject_Selected_Hover_Background: #ffbddb;--sapButton_Reject_Selected_Hover_BorderColor: #e90b0b;--sapButton_Accept_Background: #ebf5cb;--sapButton_Accept_BorderColor: #dbeda0;--sapButton_Accept_TextColor: #256f3a;--sapButton_Accept_Hover_Background: #e3f1b6;--sapButton_Accept_Hover_BorderColor: #e3f1b6;--sapButton_Accept_Hover_TextColor: #256f3a;--sapButton_Accept_Active_Background: #fff;--sapButton_Accept_Active_BorderColor: #30914c;--sapButton_Accept_Active_TextColor: #256f3a;--sapButton_Accept_Selected_Background: #fff;--sapButton_Accept_Selected_BorderColor: #30914c;--sapButton_Accept_Selected_TextColor: #256f3a;--sapButton_Accept_Selected_Hover_Background: #e3f1b6;--sapButton_Accept_Selected_Hover_BorderColor: #30914c;--sapButton_Lite_Background: transparent;--sapButton_Lite_BorderColor: transparent;--sapButton_Lite_TextColor: #0064d9;--sapButton_Lite_Hover_Background: #eaecee;--sapButton_Lite_Hover_BorderColor: #bcc3ca;--sapButton_Lite_Hover_TextColor: #0064d9;--sapButton_Lite_Active_Background: #fff;--sapButton_Lite_Active_BorderColor: #0064d9;--sapButton_Selected_Background: #edf6ff;--sapButton_Selected_BorderColor: #0064d9;--sapButton_Selected_TextColor: #0064d9;--sapButton_Selected_Hover_Background: #d9ecff;--sapButton_Selected_Hover_BorderColor: #0064d9;--sapButton_Attention_Background: #fff3b7;--sapButton_Attention_BorderColor: #ffeb84;--sapButton_Attention_TextColor: #b44f00;--sapButton_Attention_Hover_Background: #ffef9e;--sapButton_Attention_Hover_BorderColor: #ffef9e;--sapButton_Attention_Hover_TextColor: #b44f00;--sapButton_Attention_Active_Background: #fff;--sapButton_Attention_Active_BorderColor: #dd6100;--sapButton_Attention_Active_TextColor: #b44f00;--sapButton_Attention_Selected_Background: #fff;--sapButton_Attention_Selected_BorderColor: #dd6100;--sapButton_Attention_Selected_TextColor: #b44f00;--sapButton_Attention_Selected_Hover_Background: #ffef9e;--sapButton_Attention_Selected_Hover_BorderColor: #dd6100;--sapButton_Negative_Background: #f53232;--sapButton_Negative_BorderColor: #f53232;--sapButton_Negative_TextColor: #fff;--sapButton_Negative_Hover_Background: #e90b0b;--sapButton_Negative_Hover_BorderColor: #e90b0b;--sapButton_Negative_Hover_TextColor: #fff;--sapButton_Negative_Active_Background: #fff;--sapButton_Negative_Active_BorderColor: #f53232;--sapButton_Negative_Active_TextColor: #aa0808;--sapButton_Critical_Background: #e76500;--sapButton_Critical_BorderColor: #e76500;--sapButton_Critical_TextColor: #fff;--sapButton_Critical_Hover_Background: #dd6100;--sapButton_Critical_Hover_BorderColor: #dd6100;--sapButton_Critical_Hover_TextColor: #fff;--sapButton_Critical_Active_Background: #fff;--sapButton_Critical_Active_BorderColor: #dd6100;--sapButton_Critical_Active_TextColor: #b44f00;--sapButton_Success_Background: #30914c;--sapButton_Success_BorderColor: #30914c;--sapButton_Success_TextColor: #fff;--sapButton_Success_Hover_Background: #2c8646;--sapButton_Success_Hover_BorderColor: #2c8646;--sapButton_Success_Hover_TextColor: #fff;--sapButton_Success_Active_Background: #fff;--sapButton_Success_Active_BorderColor: #30914c;--sapButton_Success_Active_TextColor: #256f3a;--sapButton_Information_Background: #e8f3ff;--sapButton_Information_BorderColor: #b5d8ff;--sapButton_Information_TextColor: #0064d9;--sapButton_Information_Hover_Background: #d4e8ff;--sapButton_Information_Hover_BorderColor: #b5d8ff;--sapButton_Information_Hover_TextColor: #0064d9;--sapButton_Information_Active_Background: #fff;--sapButton_Information_Active_BorderColor: #0064d9;--sapButton_Information_Active_TextColor: #0064d9;--sapButton_Neutral_Background: #e8f3ff;--sapButton_Neutral_BorderColor: #b5d8ff;--sapButton_Neutral_TextColor: #0064d9;--sapButton_Neutral_Hover_Background: #d4e8ff;--sapButton_Neutral_Hover_BorderColor: #b5d8ff;--sapButton_Neutral_Hover_TextColor: #0064d9;--sapButton_Neutral_Active_Background: #fff;--sapButton_Neutral_Active_BorderColor: #0064d9;--sapButton_Neutral_Active_TextColor: #0064d9;--sapButton_Track_Background: #788fa6;--sapButton_Track_BorderColor: #788fa6;--sapButton_Track_TextColor: #fff;--sapButton_Track_Hover_Background: #637d97;--sapButton_Track_Hover_BorderColor: #637d97;--sapButton_Track_Selected_Background: #0064d9;--sapButton_Track_Selected_BorderColor: #0064d9;--sapButton_Track_Selected_TextColor: #fff;--sapButton_Track_Selected_Hover_Background: #0058c0;--sapButton_Track_Selected_Hover_BorderColor: #0058c0;--sapButton_Handle_Background: #fff;--sapButton_Handle_BorderColor: #fff;--sapButton_Handle_TextColor: #131e29;--sapButton_Handle_Hover_Background: #fff;--sapButton_Handle_Hover_BorderColor: rgba(255,255,255,.5);--sapButton_Handle_Selected_Background: #edf6ff;--sapButton_Handle_Selected_BorderColor: #edf6ff;--sapButton_Handle_Selected_TextColor: #0064d9;--sapButton_Handle_Selected_Hover_Background: #edf6ff;--sapButton_Handle_Selected_Hover_BorderColor: rgba(237,246,255,.5);--sapButton_Track_Negative_Background: #f53232;--sapButton_Track_Negative_BorderColor: #f53232;--sapButton_Track_Negative_TextColor: #fff;--sapButton_Track_Negative_Hover_Background: #e90b0b;--sapButton_Track_Negative_Hover_BorderColor: #e90b0b;--sapButton_Handle_Negative_Background: #fff;--sapButton_Handle_Negative_BorderColor: #fff;--sapButton_Handle_Negative_TextColor: #aa0808;--sapButton_Handle_Negative_Hover_Background: #fff;--sapButton_Handle_Negative_Hover_BorderColor: rgba(255,255,255,.5);--sapButton_Track_Positive_Background: #30914c;--sapButton_Track_Positive_BorderColor: #30914c;--sapButton_Track_Positive_TextColor: #fff;--sapButton_Track_Positive_Hover_Background: #2c8646;--sapButton_Track_Positive_Hover_BorderColor: #2c8646;--sapButton_Handle_Positive_Background: #fff;--sapButton_Handle_Positive_BorderColor: #fff;--sapButton_Handle_Positive_TextColor: #256f3a;--sapButton_Handle_Positive_Hover_Background: #fff;--sapButton_Handle_Positive_Hover_BorderColor: rgba(255,255,255,.5);--sapButton_TokenBackground: #fff;--sapButton_TokenBorderColor: #bcc3ca;--sapButton_TokenBorderCornerRadius: .375rem;--sapButton_Selected_TokenBorderWidth: .125rem;--sapButton_ReadOnly_TokenBackground: #fff;--sapButton_Segment_BorderCornerRadius: .5rem;--sapField_Background: #fff;--sapField_BackgroundStyle: 0 100% / 100% .0625rem no-repeat linear-gradient(0deg, #556b81, #556b81) border-box;--sapField_TextColor: #131e29;--sapField_PlaceholderTextColor: #556b82;--sapField_BorderColor: #556b81;--sapField_HelpBackground: #fff;--sapField_BorderWidth: .0625rem;--sapField_BorderStyle: none;--sapField_BorderCornerRadius: .25rem;--sapField_Shadow: inset 0 0 0 .0625rem rgba(85,107,129,.25);--sapField_Hover_Background: #fff;--sapField_Hover_BackgroundStyle: 0 100% / 100% .0625rem no-repeat linear-gradient(0deg, #0064d9, #0064d9) border-box;--sapField_Hover_BorderColor: #0064d9;--sapField_Hover_HelpBackground: #fff;--sapField_Hover_Shadow: inset 0 0 0 .0625rem rgba(79,160,255,.5);--sapField_Hover_InvalidShadow: inset 0 0 0 .0625rem rgba(255,142,196,.45);--sapField_Hover_WarningShadow: inset 0 0 0 .0625rem rgba(255,213,10,.4);--sapField_Hover_SuccessShadow: inset 0 0 0 .0625rem rgba(48,145,76,.18);--sapField_Hover_InformationShadow: inset 0 0 0 .0625rem rgba(104,174,255,.5);--sapField_Active_BorderColor: #0064d9;--sapField_Focus_Background: #fff;--sapField_Focus_BorderColor: #0032a5;--sapField_Focus_HelpBackground: #fff;--sapField_ReadOnly_Background: #eaecee;--sapField_ReadOnly_BackgroundStyle: 0 100% / .375rem .0625rem repeat-x linear-gradient(90deg, #556b81 0, #556b81 .25rem, transparent .25rem) border-box;--sapField_ReadOnly_BorderColor: #556b81;--sapField_ReadOnly_BorderStyle: none;--sapField_ReadOnly_HelpBackground: #eaecee;--sapField_RequiredColor: #ba066c;--sapField_InvalidColor: #e90b0b;--sapField_InvalidBackground: #ffeaf4;--sapField_InvalidBackgroundStyle: 0 100% / 100% .125rem no-repeat linear-gradient(0deg, #e90b0b, #e90b0b) border-box;--sapField_InvalidBorderWidth: .125rem;--sapField_InvalidBorderStyle: none;--sapField_InvalidShadow: inset 0 0 0 .0625rem rgba(255,142,196,.45);--sapField_WarningColor: #dd6100;--sapField_WarningBackground: #fff8d6;--sapField_WarningBackgroundStyle: 0 100% / 100% .125rem no-repeat linear-gradient(0deg, #dd6100, #dd6100) border-box;--sapField_WarningBorderWidth: .125rem;--sapField_WarningBorderStyle: none;--sapField_WarningShadow: inset 0 0 0 .0625rem rgba(255,213,10,.4);--sapField_SuccessColor: #30914c;--sapField_SuccessBackground: #f5fae5;--sapField_SuccessBackgroundStyle: 0 100% / 100% .0625rem no-repeat linear-gradient(0deg, #30914c, #30914c) border-box;--sapField_SuccessBorderWidth: .0625rem;--sapField_SuccessBorderStyle: none;--sapField_SuccessShadow: inset 0 0 0 .0625rem rgba(48,145,76,.18);--sapField_InformationColor: #0070f2;--sapField_InformationBackground: #e1f4ff;--sapField_InformationBackgroundStyle: 0 100% / 100% .125rem no-repeat linear-gradient(0deg, #0070f2, #0070f2) border-box;--sapField_InformationBorderWidth: .125rem;--sapField_InformationBorderStyle: none;--sapField_InformationShadow: inset 0 0 0 .0625rem rgba(104,174,255,.5);--sapField_Selector_Hover_Background: #e3f0ff;--sapField_Selector_Hover_InvalidBackground: #fff;--sapField_Selector_Hover_WarningBackground: #fff;--sapField_Selector_Hover_SuccessBackground: #fff;--sapField_Selector_Hover_InformationBackground: #fff;--sapField_Picker_BorderColor: #556b81;--sapField_Picker_BorderWidth: .0625rem;--sapField_Selector_BorderStyle: solid;--sapField_Selector_ReadOnly_BorderStyle: dashed;--sapField_Selector_InvalidBorderStyle: solid;--sapField_Selector_WarningBorderStyle: solid;--sapField_Selector_SuccessBorderStyle: solid;--sapField_Selector_InformationBorderStyle: solid;--sapGroup_TitleBorderWidth: .0625rem;--sapGroup_TitleBackground: #fff;--sapGroup_TitleBorderColor: #a8b2bd;--sapGroup_TitleTextColor: #131e29;--sapGroup_Title_FontSize: 1rem;--sapGroup_ContentBackground: #fff;--sapGroup_ContentBorderColor: #d9d9d9;--sapGroup_BorderWidth: .0625rem;--sapGroup_BorderCornerRadius: .75rem;--sapGroup_FooterBackground: transparent;--sapToolbar_Background: #fff;--sapToolbar_SeparatorColor: #d9d9d9;--sapList_HeaderBackground: #fff;--sapList_HeaderBorderColor: #a8b2bd;--sapList_HeaderTextColor: #131e29;--sapList_BorderColor: #e5e5e5;--sapList_BorderWidth: .0625rem;--sapList_TextColor: #131e29;--sapList_Active_TextColor: #131e29;--sapList_Active_Background: #dee2e5;--sapList_SelectionBackgroundColor: #ebf8ff;--sapList_SelectionBorderColor: #0064d9;--sapList_Hover_SelectionBackground: #dcf3ff;--sapList_Background: #fff;--sapList_Hover_Background: #eaecee;--sapList_AlternatingBackground: #f5f6f7;--sapList_GroupHeaderBackground: #fff;--sapList_GroupHeaderBorderColor: #a8b2bd;--sapList_GroupHeaderTextColor: #131e29;--sapList_TableGroupHeaderBackground: #eff1f2;--sapList_TableGroupHeaderBorderColor: #a8b2bd;--sapList_TableGroupHeaderTextColor: #131e29;--sapList_FooterBackground: #fff;--sapList_FooterTextColor: #131e29;--sapList_TableFooterBorder: #a8b2bd;--sapList_TableFixedBorderColor: #8c8c8c;--sapList_TableFixedColumnBorderWidth: .0625rem;--sapList_TableFixedRowBorderWidth: .125rem;--sapMessage_BorderWidth: .0625rem;--sapMessage_ErrorBorderColor: #ff8ec4;--sapMessage_WarningBorderColor: #ffe770;--sapMessage_SuccessBorderColor: #cee67e;--sapMessage_InformationBorderColor: #7bcfff;--sapMessage_Button_Hover_Background: rgba(234,236,238,.2);--sapPopover_BorderCornerRadius: .5rem;--sapProgress_Background: #d5dadd;--sapProgress_BorderColor: #d5dadd;--sapProgress_TextColor: #131e29;--sapProgress_FontSize: .875rem;--sapProgress_NegativeBackground: #ffdbec;--sapProgress_NegativeBorderColor: #ffdbec;--sapProgress_NegativeTextColor: #131e29;--sapProgress_CriticalBackground: #fff4bd;--sapProgress_CriticalBorderColor: #fff4bd;--sapProgress_CriticalTextColor: #131e29;--sapProgress_PositiveBackground: #e5f2ba;--sapProgress_PositiveBorderColor: #e5f2ba;--sapProgress_PositiveTextColor: #131e29;--sapProgress_InformationBackground: #cdedff;--sapProgress_InformationBorderColor: #cdedff;--sapProgress_InformationTextColor: #131e29;--sapProgress_Value_Background: #617b94;--sapProgress_Value_BorderColor: #617b94;--sapProgress_Value_TextColor: #788fa6;--sapProgress_Value_NegativeBackground: #f53232;--sapProgress_Value_NegativeBorderColor: #f53232;--sapProgress_Value_NegativeTextColor: #f53232;--sapProgress_Value_CriticalBackground: #e76500;--sapProgress_Value_CriticalBorderColor: #e76500;--sapProgress_Value_CriticalTextColor: #e76500;--sapProgress_Value_PositiveBackground: #30914c;--sapProgress_Value_PositiveBorderColor: #30914c;--sapProgress_Value_PositiveTextColor: #30914c;--sapProgress_Value_InformationBackground: #0070f2;--sapProgress_Value_InformationBorderColor: #0070f2;--sapProgress_Value_InformationTextColor: #0070f2;--sapScrollBar_FaceColor: #7b91a8;--sapScrollBar_TrackColor: #fff;--sapScrollBar_BorderColor: #7b91a8;--sapScrollBar_SymbolColor: #0064d9;--sapScrollBar_Dimension: .75rem;--sapScrollBar_Hover_FaceColor: #5b728b;--sapSlider_Background: #d5dadd;--sapSlider_BorderColor: #d5dadd;--sapSlider_Selected_Background: #0064d9;--sapSlider_Selected_BorderColor: #0064d9;--sapSlider_Selected_Dimension: 111px;--sapSlider_HandleBackground: #fff;--sapSlider_HandleBorderColor: #b0d5ff;--sapSlider_RangeHandleBackground: #fff;--sapSlider_Hover_HandleBackground: #d9ecff;--sapSlider_Hover_HandleBorderColor: #b0d5ff;--sapSlider_Hover_RangeHandleBackground: #d9ecff;--sapSlider_Active_HandleBackground: #fff;--sapSlider_Active_HandleBorderColor: #0064d9;--sapSlider_Active_RangeHandleBackground: transparent;--sapPageHeader_Background: #fff;--sapPageHeader_BorderColor: #d9d9d9;--sapPageHeader_TextColor: #131e29;--sapPageFooter_Background: #fff;--sapPageFooter_BorderColor: #d9d9d9;--sapPageFooter_TextColor: #131e29;--sapInfobar_Background: #c2fcee;--sapInfobar_Hover_Background: #fff;--sapInfobar_Active_Background: #fff;--sapInfobar_NonInteractive_Background: #f5f6f7;--sapInfobar_TextColor: #046c7a;--sapObjectHeader_Background: #fff;--sapObjectHeader_Hover_Background: #eaecee;--sapObjectHeader_BorderColor: #d9d9d9;--sapObjectHeader_Title_TextColor: #131e29;--sapObjectHeader_Title_FontSize: 1.5rem;--sapObjectHeader_Title_SnappedFontSize: 1.25rem;--sapObjectHeader_Title_FontFamily: "72Black", "72Blackfull","72", "72full", Arial, Helvetica, sans-serif;--sapObjectHeader_Subtitle_TextColor: #556b82;--sapBlockLayer_Background: #000;--sapBlockLayer_Opacity: .2;--sapTab_TextColor: #131e29;--sapTab_ForegroundColor: #0064d9;--sapTab_IconColor: #0064d9;--sapTab_Background: #fff;--sapTab_Selected_TextColor: #0064d9;--sapTab_Selected_IconColor: #fff;--sapTab_Selected_Background: #0064d9;--sapTab_Selected_Indicator_Dimension: .1875rem;--sapTab_Positive_TextColor: #256f3a;--sapTab_Positive_ForegroundColor: #30914c;--sapTab_Positive_IconColor: #30914c;--sapTab_Positive_Selected_TextColor: #256f3a;--sapTab_Positive_Selected_IconColor: #fff;--sapTab_Positive_Selected_Background: #30914c;--sapTab_Negative_TextColor: #aa0808;--sapTab_Negative_ForegroundColor: #f53232;--sapTab_Negative_IconColor: #f53232;--sapTab_Negative_Selected_TextColor: #aa0808;--sapTab_Negative_Selected_IconColor: #fff;--sapTab_Negative_Selected_Background: #f53232;--sapTab_Critical_TextColor: #b44f00;--sapTab_Critical_ForegroundColor: #e76500;--sapTab_Critical_IconColor: #e76500;--sapTab_Critical_Selected_TextColor: #b44f00;--sapTab_Critical_Selected_IconColor: #fff;--sapTab_Critical_Selected_Background: #e76500;--sapTab_Neutral_TextColor: #131e29;--sapTab_Neutral_ForegroundColor: #788fa6;--sapTab_Neutral_IconColor: #788fa6;--sapTab_Neutral_Selected_TextColor: #131e29;--sapTab_Neutral_Selected_IconColor: #fff;--sapTab_Neutral_Selected_Background: #788fa6;--sapTile_Background: #fff;--sapTile_Hover_Background: #eaecee;--sapTile_Active_Background: #dee2e5;--sapTile_BorderColor: transparent;--sapTile_BorderCornerRadius: 1rem;--sapTile_TitleTextColor: #131e29;--sapTile_TextColor: #556b82;--sapTile_IconColor: #556b82;--sapTile_SeparatorColor: #ccc;--sapTile_Interactive_BorderColor: #b3b3b3;--sapTile_OverlayBackground: #fff;--sapTile_OverlayForegroundColor: #131e29;--sapTile_Hover_ContentBackground: #fff;--sapTile_Active_ContentBackground: #fff;--sapAccentColor1: #d27700;--sapAccentColor2: #aa0808;--sapAccentColor3: #ba066c;--sapAccentColor4: #a100c2;--sapAccentColor5: #5d36ff;--sapAccentColor6: #0057d2;--sapAccentColor7: #046c7a;--sapAccentColor8: #256f3a;--sapAccentColor9: #6c32a9;--sapAccentColor10: #5b738b;--sapAccentBackgroundColor1: #fff3b8;--sapAccentBackgroundColor2: #ffd0e7;--sapAccentBackgroundColor3: #ffdbe7;--sapAccentBackgroundColor4: #ffdcf3;--sapAccentBackgroundColor5: #ded3ff;--sapAccentBackgroundColor6: #d1efff;--sapAccentBackgroundColor7: #c2fcee;--sapAccentBackgroundColor8: #ebf5cb;--sapAccentBackgroundColor9: #ddccf0;--sapAccentBackgroundColor10: #eaecee;--sapIndicationColor_1: #840606;--sapIndicationColor_1_Background: #840606;--sapIndicationColor_1_BorderColor: #840606;--sapIndicationColor_1_TextColor: #fff;--sapIndicationColor_1_Hover_Background: #6c0505;--sapIndicationColor_1_Active_Background: #fff;--sapIndicationColor_1_Active_BorderColor: #fb9d9d;--sapIndicationColor_1_Active_TextColor: #840606;--sapIndicationColor_1_Selected_Background: #fff;--sapIndicationColor_1_Selected_BorderColor: #fb9d9d;--sapIndicationColor_1_Selected_TextColor: #840606;--sapIndicationColor_1b: #fb9d9d;--sapIndicationColor_1b_TextColor: #830707;--sapIndicationColor_1b_Background: #fb9d9d;--sapIndicationColor_1b_BorderColor: #fb9d9d;--sapIndicationColor_1b_Hover_Background: #fa8585;--sapIndicationColor_2: #aa0808;--sapIndicationColor_2_Background: #aa0808;--sapIndicationColor_2_BorderColor: #aa0808;--sapIndicationColor_2_TextColor: #fff;--sapIndicationColor_2_Hover_Background: #920707;--sapIndicationColor_2_Active_Background: #fff;--sapIndicationColor_2_Active_BorderColor: #fcc4c4;--sapIndicationColor_2_Active_TextColor: #aa0808;--sapIndicationColor_2_Selected_Background: #fff;--sapIndicationColor_2_Selected_BorderColor: #fcc4c4;--sapIndicationColor_2_Selected_TextColor: #aa0808;--sapIndicationColor_2b: #fcc4c4;--sapIndicationColor_2b_TextColor: #a90909;--sapIndicationColor_2b_Background: #fcc4c4;--sapIndicationColor_2b_BorderColor: #fcc4c4;--sapIndicationColor_2b_Hover_Background: #fbacac;--sapIndicationColor_3: #b95100;--sapIndicationColor_3_Background: #e76500;--sapIndicationColor_3_BorderColor: #e76500;--sapIndicationColor_3_TextColor: #fff;--sapIndicationColor_3_Hover_Background: #d85e00;--sapIndicationColor_3_Active_Background: #fff;--sapIndicationColor_3_Active_BorderColor: #ffdfc3;--sapIndicationColor_3_Active_TextColor: #b95100;--sapIndicationColor_3_Selected_Background: #fff;--sapIndicationColor_3_Selected_BorderColor: #ffdfc3;--sapIndicationColor_3_Selected_TextColor: #b95100;--sapIndicationColor_3b: #ffdfc3;--sapIndicationColor_3b_TextColor: #a44d00;--sapIndicationColor_3b_Background: #ffdfc3;--sapIndicationColor_3b_BorderColor: #ffdfc3;--sapIndicationColor_3b_Hover_Background: #ffd1a9;--sapIndicationColor_4: #256f3a;--sapIndicationColor_4_Background: #256f3a;--sapIndicationColor_4_BorderColor: #256f3a;--sapIndicationColor_4_TextColor: #fff;--sapIndicationColor_4_Hover_Background: #1f5c30;--sapIndicationColor_4_Active_Background: #fff;--sapIndicationColor_4_Active_BorderColor: #bae8bc;--sapIndicationColor_4_Active_TextColor: #256f3a;--sapIndicationColor_4_Selected_Background: #fff;--sapIndicationColor_4_Selected_BorderColor: #bae8bc;--sapIndicationColor_4_Selected_TextColor: #256f3a;--sapIndicationColor_4b: #bae8bc;--sapIndicationColor_4b_TextColor: #256f28;--sapIndicationColor_4b_Background: #bae8bc;--sapIndicationColor_4b_BorderColor: #bae8bc;--sapIndicationColor_4b_Hover_Background: #a7e2a9;--sapIndicationColor_5: #0070f2;--sapIndicationColor_5_Background: #0070f2;--sapIndicationColor_5_BorderColor: #0070f2;--sapIndicationColor_5_TextColor: #fff;--sapIndicationColor_5_Hover_Background: #0064d9;--sapIndicationColor_5_Active_Background: #fff;--sapIndicationColor_5_Active_BorderColor: #d9ebff;--sapIndicationColor_5_Active_TextColor: #0070f2;--sapIndicationColor_5_Selected_Background: #fff;--sapIndicationColor_5_Selected_BorderColor: #d9ebff;--sapIndicationColor_5_Selected_TextColor: #0070f2;--sapIndicationColor_5b: #d9ebff;--sapIndicationColor_5b_TextColor: #0067d9;--sapIndicationColor_5b_Background: #d9ebff;--sapIndicationColor_5b_BorderColor: #d9ebff;--sapIndicationColor_5b_Hover_Background: #c0deff;--sapIndicationColor_6: #046c7a;--sapIndicationColor_6_Background: #046c7a;--sapIndicationColor_6_BorderColor: #046c7a;--sapIndicationColor_6_TextColor: #fff;--sapIndicationColor_6_Hover_Background: #035661;--sapIndicationColor_6_Active_Background: #fff;--sapIndicationColor_6_Active_BorderColor: #cdf5ec;--sapIndicationColor_6_Active_TextColor: #046c7a;--sapIndicationColor_6_Selected_Background: #fff;--sapIndicationColor_6_Selected_BorderColor: #cdf5ec;--sapIndicationColor_6_Selected_TextColor: #046c7a;--sapIndicationColor_6b: #cdf5ec;--sapIndicationColor_6b_TextColor: #156b58;--sapIndicationColor_6b_Background: #cdf5ec;--sapIndicationColor_6b_BorderColor: #cdf5ec;--sapIndicationColor_6b_Hover_Background: #b8f1e4;--sapIndicationColor_7: #5d36ff;--sapIndicationColor_7_Background: #5d36ff;--sapIndicationColor_7_BorderColor: #5d36ff;--sapIndicationColor_7_TextColor: #fff;--sapIndicationColor_7_Hover_Background: #481cff;--sapIndicationColor_7_Active_Background: #fff;--sapIndicationColor_7_Active_BorderColor: #e2dbff;--sapIndicationColor_7_Active_TextColor: #5d36ff;--sapIndicationColor_7_Selected_Background: #fff;--sapIndicationColor_7_Selected_BorderColor: #e2dbff;--sapIndicationColor_7_Selected_TextColor: #5d36ff;--sapIndicationColor_7b: #e2dbff;--sapIndicationColor_7b_TextColor: #5f38ff;--sapIndicationColor_7b_Background: #e2dbff;--sapIndicationColor_7b_BorderColor: #e2dbff;--sapIndicationColor_7b_Hover_Background: #cdc2ff;--sapIndicationColor_8: #a100c2;--sapIndicationColor_8_Background: #a100c2;--sapIndicationColor_8_BorderColor: #a100c2;--sapIndicationColor_8_TextColor: #fff;--sapIndicationColor_8_Hover_Background: #8c00a9;--sapIndicationColor_8_Active_Background: #fff;--sapIndicationColor_8_Active_BorderColor: #f8d6ff;--sapIndicationColor_8_Active_TextColor: #a100c2;--sapIndicationColor_8_Selected_Background: #fff;--sapIndicationColor_8_Selected_BorderColor: #f8d6ff;--sapIndicationColor_8_Selected_TextColor: #a100c2;--sapIndicationColor_8b: #f8d6ff;--sapIndicationColor_8b_TextColor: #a100c2;--sapIndicationColor_8b_Background: #f8d6ff;--sapIndicationColor_8b_BorderColor: #f8d6ff;--sapIndicationColor_8b_Hover_Background: #f4bdff;--sapIndicationColor_9: #1d2d3e;--sapIndicationColor_9_Background: #1d2d3e;--sapIndicationColor_9_BorderColor: #1d2d3e;--sapIndicationColor_9_TextColor: #fff;--sapIndicationColor_9_Hover_Background: #15202d;--sapIndicationColor_9_Active_Background: #fff;--sapIndicationColor_9_Active_BorderColor: #d9d9d9;--sapIndicationColor_9_Active_TextColor: #1d2d3e;--sapIndicationColor_9_Selected_Background: #fff;--sapIndicationColor_9_Selected_BorderColor: #d9d9d9;--sapIndicationColor_9_Selected_TextColor: #1d2d3e;--sapIndicationColor_9b: #fff;--sapIndicationColor_9b_TextColor: #2e2e2e;--sapIndicationColor_9b_Background: #fff;--sapIndicationColor_9b_BorderColor: #d9d9d9;--sapIndicationColor_9b_Hover_Background: #f2f2f2;--sapIndicationColor_10: #45484a;--sapIndicationColor_10_Background: #83888b;--sapIndicationColor_10_BorderColor: #83888b;--sapIndicationColor_10_TextColor: #fff;--sapIndicationColor_10_Hover_Background: #767b7e;--sapIndicationColor_10_Active_Background: #fff;--sapIndicationColor_10_Active_BorderColor: #eaecee;--sapIndicationColor_10_Active_TextColor: #45484a;--sapIndicationColor_10_Selected_Background: #fff;--sapIndicationColor_10_Selected_BorderColor: #eaecee;--sapIndicationColor_10_Selected_TextColor: #45484a;--sapIndicationColor_10b: #eaecee;--sapIndicationColor_10b_TextColor: #464646;--sapIndicationColor_10b_Background: #eaecee;--sapIndicationColor_10b_BorderColor: #eaecee;--sapIndicationColor_10b_Hover_Background: #dcdfe3;--sapLegend_WorkingBackground: #fff;--sapLegend_NonWorkingBackground: #ebebeb;--sapLegend_CurrentDateTime: #a100c2;--sapLegendColor1: #c35500;--sapLegendColor2: #d23a0a;--sapLegendColor3: #df1278;--sapLegendColor4: #840606;--sapLegendColor5: #cc00dc;--sapLegendColor6: #0057d2;--sapLegendColor7: #07838f;--sapLegendColor8: #188918;--sapLegendColor9: #5b738b;--sapLegendColor10: #7800a4;--sapLegendColor11: #a93e00;--sapLegendColor12: #aa2608;--sapLegendColor13: #ba066c;--sapLegendColor14: #8d2a00;--sapLegendColor15: #4e247a;--sapLegendColor16: #002a86;--sapLegendColor17: #035663;--sapLegendColor18: #1e592f;--sapLegendColor19: #1a4796;--sapLegendColor20: #470ced;--sapLegendBackgroundColor1: #ffef9f;--sapLegendBackgroundColor2: #feeae1;--sapLegendBackgroundColor3: #fbf6f8;--sapLegendBackgroundColor4: #fbebeb;--sapLegendBackgroundColor5: #ffe5fe;--sapLegendBackgroundColor6: #d1efff;--sapLegendBackgroundColor7: #c2fcee;--sapLegendBackgroundColor8: #f5fae5;--sapLegendBackgroundColor9: #f5f6f7;--sapLegendBackgroundColor10: #fff0fa;--sapLegendBackgroundColor11: #fff8d6;--sapLegendBackgroundColor12: #fff6f6;--sapLegendBackgroundColor13: #f7ebef;--sapLegendBackgroundColor14: #f1ecd5;--sapLegendBackgroundColor15: #f0e7f8;--sapLegendBackgroundColor16: #ebf8ff;--sapLegendBackgroundColor17: #dafdf5;--sapLegendBackgroundColor18: #ebf5cb;--sapLegendBackgroundColor19: #fafdff;--sapLegendBackgroundColor20: #eceeff;--sapChart_Background: #fff;--sapChart_ContrastTextShadow: 0 0 .0625rem rgba(0,0,0,.7);--sapChart_ContrastShadowColor: #fff;--sapChart_ContrastLineColor: #fff;--sapChart_LineColor_1: #e1e6eb;--sapChart_LineColor_2: #768da4;--sapChart_LineColor_3: #000001;--sapChart_Choropleth_Background: #edf0f3;--sapChart_ChoroplethRegion_Background: #758ca4;--sapChart_ChoroplethRegion_BorderColor: #edf0f3;--sapChart_Data_TextColor: #000;--sapChart_Data_ContrastTextColor: #fff;--sapChart_Data_InteractiveColor: #000001;--sapChart_Data_Active_Background: #dee2e5;--sapChart_OrderedColor_1: #168eff;--sapChart_OrderedColor_2: #c87b00;--sapChart_OrderedColor_3: #75980b;--sapChart_OrderedColor_4: #df1278;--sapChart_OrderedColor_5: #8b47d7;--sapChart_OrderedColor_6: #049f9a;--sapChart_OrderedColor_7: #0070f2;--sapChart_OrderedColor_8: #cc00dc;--sapChart_OrderedColor_9: #798c77;--sapChart_OrderedColor_10: #da6c6c;--sapChart_OrderedColor_11: #5d36ff;--sapChart_OrderedColor_12: #a68a5b;--sapChart_Bad: #f53232;--sapChart_Critical: #e26300;--sapChart_Good: #30914c;--sapChart_Neutral: #758ca4;--sapChart_Sequence_1_Plus3: #96ccff;--sapChart_Sequence_1_Plus3_TextColor: #000;--sapChart_Sequence_1_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_1_Plus2: #3b9ffe;--sapChart_Sequence_1_Plus2_TextColor: #000;--sapChart_Sequence_1_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_1_Plus1: #3fa2ff;--sapChart_Sequence_1_Plus1_TextColor: #000;--sapChart_Sequence_1_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_1: #168eff;--sapChart_Sequence_1_TextColor: #000;--sapChart_Sequence_1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_1_BorderColor: #168eff;--sapChart_Sequence_1_Minus1: #077cea;--sapChart_Sequence_1_Minus1_TextColor: #fff;--sapChart_Sequence_1_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_1_Minus2: #077cea;--sapChart_Sequence_1_Minus2_TextColor: #fff;--sapChart_Sequence_1_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_1_Minus3: #06559e;--sapChart_Sequence_1_Minus3_TextColor: #fff;--sapChart_Sequence_1_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_1_Minus4: #054887;--sapChart_Sequence_1_Minus4_TextColor: #fff;--sapChart_Sequence_1_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_1_Minus5: #043b6e;--sapChart_Sequence_1_Minus5_TextColor: #fff;--sapChart_Sequence_1_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_2_Plus3: #efbf72;--sapChart_Sequence_2_Plus3_TextColor: #000;--sapChart_Sequence_2_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_2_Plus2: #eaaa44;--sapChart_Sequence_2_Plus2_TextColor: #000;--sapChart_Sequence_2_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_2_Plus1: #e29419;--sapChart_Sequence_2_Plus1_TextColor: #000;--sapChart_Sequence_2_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_2: #c87b00;--sapChart_Sequence_2_TextColor: #000;--sapChart_Sequence_2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_2_BorderColor: #9f6200;--sapChart_Sequence_2_Minus1: #9f6200;--sapChart_Sequence_2_Minus1_TextColor: #fff;--sapChart_Sequence_2_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_2_Minus2: #7c4c00;--sapChart_Sequence_2_Minus2_TextColor: #fff;--sapChart_Sequence_2_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_2_Minus3: #623c00;--sapChart_Sequence_2_Minus3_TextColor: #fff;--sapChart_Sequence_2_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_2_Minus4: #623c00;--sapChart_Sequence_2_Minus4_TextColor: #fff;--sapChart_Sequence_2_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_2_Minus5: #2f1d00;--sapChart_Sequence_2_Minus5_TextColor: #fff;--sapChart_Sequence_2_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_3_Plus3: #b9d369;--sapChart_Sequence_3_Plus3_TextColor: #000;--sapChart_Sequence_3_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_3_Plus2: #a6c742;--sapChart_Sequence_3_Plus2_TextColor: #000;--sapChart_Sequence_3_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_3_Plus1: #8fad33;--sapChart_Sequence_3_Plus1_TextColor: #000;--sapChart_Sequence_3_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_3: #75980b;--sapChart_Sequence_3_TextColor: #000;--sapChart_Sequence_3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_3_BorderColor: #587208;--sapChart_Sequence_3_Minus1: #587208;--sapChart_Sequence_3_Minus1_TextColor: #fff;--sapChart_Sequence_3_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_3_Minus2: #3e5106;--sapChart_Sequence_3_Minus2_TextColor: #fff;--sapChart_Sequence_3_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_3_Minus3: #2c3904;--sapChart_Sequence_3_Minus3_TextColor: #fff;--sapChart_Sequence_3_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_3_Minus4: #212b03;--sapChart_Sequence_3_Minus4_TextColor: #fff;--sapChart_Sequence_3_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_3_Minus5: #161c02;--sapChart_Sequence_3_Minus5_TextColor: #fff;--sapChart_Sequence_3_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_4_Plus3: #f473b3;--sapChart_Sequence_4_Plus3_TextColor: #000;--sapChart_Sequence_4_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_4_Plus2: #f14d9e;--sapChart_Sequence_4_Plus2_TextColor: #000;--sapChart_Sequence_4_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_4_Plus1: #ee278a;--sapChart_Sequence_4_Plus1_TextColor: #000;--sapChart_Sequence_4_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_4: #df1278;--sapChart_Sequence_4_TextColor: #fff;--sapChart_Sequence_4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_4_BorderColor: #df1278;--sapChart_Sequence_4_Minus1: #b90f64;--sapChart_Sequence_4_Minus1_TextColor: #fff;--sapChart_Sequence_4_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_4_Minus2: #930c4f;--sapChart_Sequence_4_Minus2_TextColor: #fff;--sapChart_Sequence_4_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_4_Minus3: #770a40;--sapChart_Sequence_4_Minus3_TextColor: #fff;--sapChart_Sequence_4_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_4_Minus4: #51072c;--sapChart_Sequence_4_Minus4_TextColor: #fff;--sapChart_Sequence_4_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_4_Minus5: #3a051f;--sapChart_Sequence_4_Minus5_TextColor: #fff;--sapChart_Sequence_4_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_5_Plus3: #d5bcf0;--sapChart_Sequence_5_Plus3_TextColor: #000;--sapChart_Sequence_5_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_5_Plus2: #b994e0;--sapChart_Sequence_5_Plus2_TextColor: #000;--sapChart_Sequence_5_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_5_Plus1: #a679d8;--sapChart_Sequence_5_Plus1_TextColor: #000;--sapChart_Sequence_5_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_5: #8b47d7;--sapChart_Sequence_5_TextColor: #fff;--sapChart_Sequence_5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_5_BorderColor: #8b47d7;--sapChart_Sequence_5_Minus1: #7236b5;--sapChart_Sequence_5_Minus1_TextColor: #fff;--sapChart_Sequence_5_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_5_Minus2: #5e2c96;--sapChart_Sequence_5_Minus2_TextColor: #fff;--sapChart_Sequence_5_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_5_Minus3: #522682;--sapChart_Sequence_5_Minus3_TextColor: #fff;--sapChart_Sequence_5_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_5_Minus4: #46216f;--sapChart_Sequence_5_Minus4_TextColor: #fff;--sapChart_Sequence_5_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_5_Minus5: #341358;--sapChart_Sequence_5_Minus5_TextColor: #fff;--sapChart_Sequence_5_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_6_Plus3: #64ede9;--sapChart_Sequence_6_Plus3_TextColor: #000;--sapChart_Sequence_6_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_6_Plus2: #2ee0da;--sapChart_Sequence_6_Plus2_TextColor: #000;--sapChart_Sequence_6_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_6_Plus1: #05c7c1;--sapChart_Sequence_6_Plus1_TextColor: #000;--sapChart_Sequence_6_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_6: #049f9a;--sapChart_Sequence_6_TextColor: #000;--sapChart_Sequence_6_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_6_BorderColor: #05c7c1;--sapChart_Sequence_6_Minus1: #02837f;--sapChart_Sequence_6_Minus1_TextColor: #fff;--sapChart_Sequence_6_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_6_Minus2: #006663;--sapChart_Sequence_6_Minus2_TextColor: #fff;--sapChart_Sequence_6_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_6_Minus3: #00514f;--sapChart_Sequence_6_Minus3_TextColor: #fff;--sapChart_Sequence_6_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_6_Minus4: #003d3b;--sapChart_Sequence_6_Minus4_TextColor: #fff;--sapChart_Sequence_6_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_6_Minus5: #002322;--sapChart_Sequence_6_Minus5_TextColor: #fff;--sapChart_Sequence_6_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_7_Plus3: #68aeff;--sapChart_Sequence_7_Plus3_TextColor: #000;--sapChart_Sequence_7_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_7_Plus2: #4098ff;--sapChart_Sequence_7_Plus2_TextColor: #000;--sapChart_Sequence_7_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_7_Plus1: #1c85ff;--sapChart_Sequence_7_Plus1_TextColor: #000;--sapChart_Sequence_7_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_7: #0070f2;--sapChart_Sequence_7_TextColor: #fff;--sapChart_Sequence_7_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_7_BorderColor: #0070f2;--sapChart_Sequence_7_Minus1: #0062d3;--sapChart_Sequence_7_Minus1_TextColor: #fff;--sapChart_Sequence_7_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_7_Minus2: #0054b5;--sapChart_Sequence_7_Minus2_TextColor: #fff;--sapChart_Sequence_7_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_7_Minus3: #00418c;--sapChart_Sequence_7_Minus3_TextColor: #fff;--sapChart_Sequence_7_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_7_Minus4: #00244f;--sapChart_Sequence_7_Minus4_TextColor: #fff;--sapChart_Sequence_7_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_7_Minus5: #001b3a;--sapChart_Sequence_7_Minus5_TextColor: #fff;--sapChart_Sequence_7_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_8_Plus3: #f462ff;--sapChart_Sequence_8_Plus3_TextColor: #000;--sapChart_Sequence_8_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_8_Plus2: #f034ff;--sapChart_Sequence_8_Plus2_TextColor: #000;--sapChart_Sequence_8_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_8_Plus1: #ed0bff;--sapChart_Sequence_8_Plus1_TextColor: #000;--sapChart_Sequence_8_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_8: #cc00dc;--sapChart_Sequence_8_TextColor: #fff;--sapChart_Sequence_8_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_8_BorderColor: #cc00dc;--sapChart_Sequence_8_Minus1: #a600b3;--sapChart_Sequence_8_Minus1_TextColor: #fff;--sapChart_Sequence_8_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_8_Minus2: #80008a;--sapChart_Sequence_8_Minus2_TextColor: #fff;--sapChart_Sequence_8_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_8_Minus3: #6d0076;--sapChart_Sequence_8_Minus3_TextColor: #fff;--sapChart_Sequence_8_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_8_Minus4: #56005d;--sapChart_Sequence_8_Minus4_TextColor: #fff;--sapChart_Sequence_8_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_8_Minus5: #350039;--sapChart_Sequence_8_Minus5_TextColor: #fff;--sapChart_Sequence_8_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_9_Plus3: #bdc6bc;--sapChart_Sequence_9_Plus3_TextColor: #000;--sapChart_Sequence_9_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_9_Plus2: #b5bfb4;--sapChart_Sequence_9_Plus2_TextColor: #000;--sapChart_Sequence_9_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_9_Plus1: #97a695;--sapChart_Sequence_9_Plus1_TextColor: #000;--sapChart_Sequence_9_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_9: #798c77;--sapChart_Sequence_9_TextColor: #000;--sapChart_Sequence_9_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_9_BorderColor: #798c77;--sapChart_Sequence_9_Minus1: #667664;--sapChart_Sequence_9_Minus1_TextColor: #fff;--sapChart_Sequence_9_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_9_Minus2: #536051;--sapChart_Sequence_9_Minus2_TextColor: #fff;--sapChart_Sequence_9_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_9_Minus3: #404a3f;--sapChart_Sequence_9_Minus3_TextColor: #fff;--sapChart_Sequence_9_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_9_Minus4: #2d342c;--sapChart_Sequence_9_Minus4_TextColor: #fff;--sapChart_Sequence_9_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_9_Minus5: #1e231e;--sapChart_Sequence_9_Minus5_TextColor: #fff;--sapChart_Sequence_9_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_10_Plus3: #f1c6c6;--sapChart_Sequence_10_Plus3_TextColor: #000;--sapChart_Sequence_10_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_10_Plus2: #eaadad;--sapChart_Sequence_10_Plus2_TextColor: #000;--sapChart_Sequence_10_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_10_Plus1: #e28d8d;--sapChart_Sequence_10_Plus1_TextColor: #000;--sapChart_Sequence_10_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_10: #da6c6c;--sapChart_Sequence_10_TextColor: #000;--sapChart_Sequence_10_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_10_BorderColor: #b75757;--sapChart_Sequence_10_Minus1: #b75757;--sapChart_Sequence_10_Minus1_TextColor: #000;--sapChart_Sequence_10_Minus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_10_Minus2: #9d4343;--sapChart_Sequence_10_Minus2_TextColor: #fff;--sapChart_Sequence_10_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_10_Minus3: #803737;--sapChart_Sequence_10_Minus3_TextColor: #fff;--sapChart_Sequence_10_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_10_Minus4: #672c2c;--sapChart_Sequence_10_Minus4_TextColor: #fff;--sapChart_Sequence_10_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_10_Minus5: #562424;--sapChart_Sequence_10_Minus5_TextColor: #fff;--sapChart_Sequence_10_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_11_Plus3: #c0b0ff;--sapChart_Sequence_11_Plus3_TextColor: #000;--sapChart_Sequence_11_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_11_Plus2: #9b83ff;--sapChart_Sequence_11_Plus2_TextColor: #000;--sapChart_Sequence_11_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_11_Plus1: #8669ff;--sapChart_Sequence_11_Plus1_TextColor: #000;--sapChart_Sequence_11_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_11: #5d36ff;--sapChart_Sequence_11_TextColor: #fff;--sapChart_Sequence_11_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_11_BorderColor: #5d36ff;--sapChart_Sequence_11_Minus1: #4b25e7;--sapChart_Sequence_11_Minus1_TextColor: #fff;--sapChart_Sequence_11_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_11_Minus2: #3a17cd;--sapChart_Sequence_11_Minus2_TextColor: #fff;--sapChart_Sequence_11_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_11_Minus3: #2f13a8;--sapChart_Sequence_11_Minus3_TextColor: #fff;--sapChart_Sequence_11_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_11_Minus4: #250f83;--sapChart_Sequence_11_Minus4_TextColor: #fff;--sapChart_Sequence_11_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_11_Minus5: #2f13a8;--sapChart_Sequence_11_Minus5_TextColor: #fff;--sapChart_Sequence_11_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_12_Plus3: #e4ddcf;--sapChart_Sequence_12_Plus3_TextColor: #000;--sapChart_Sequence_12_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_12_Plus2: #dacebb;--sapChart_Sequence_12_Plus2_TextColor: #000;--sapChart_Sequence_12_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_12_Plus1: #c4b293;--sapChart_Sequence_12_Plus1_TextColor: #000;--sapChart_Sequence_12_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_12: #a68a5b;--sapChart_Sequence_12_TextColor: #000;--sapChart_Sequence_12_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_12_BorderColor: #a68a5b;--sapChart_Sequence_12_Minus1: #8c744c;--sapChart_Sequence_12_Minus1_TextColor: #fff;--sapChart_Sequence_12_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_12_Minus2: #786441;--sapChart_Sequence_12_Minus2_TextColor: #fff;--sapChart_Sequence_12_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_12_Minus3: #5e4e33;--sapChart_Sequence_12_Minus3_TextColor: #fff;--sapChart_Sequence_12_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_12_Minus4: #433825;--sapChart_Sequence_12_Minus4_TextColor: #fff;--sapChart_Sequence_12_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_12_Minus5: #30271a;--sapChart_Sequence_12_Minus5_TextColor: #fff;--sapChart_Sequence_12_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Bad_Plus3: #fdcece;--sapChart_Sequence_Bad_Plus3_TextColor: #000;--sapChart_Sequence_Bad_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Bad_Plus2: #fa9d9d;--sapChart_Sequence_Bad_Plus2_TextColor: #000;--sapChart_Sequence_Bad_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Bad_Plus1: #f86c6c;--sapChart_Sequence_Bad_Plus1_TextColor: #000;--sapChart_Sequence_Bad_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Bad: #f53232;--sapChart_Sequence_Bad_TextColor: #000;--sapChart_Sequence_Bad_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Bad_BorderColor: #f53232;--sapChart_Sequence_Bad_Minus1: #d00a0a;--sapChart_Sequence_Bad_Minus1_TextColor: #fff;--sapChart_Sequence_Bad_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Bad_Minus2: #a90808;--sapChart_Sequence_Bad_Minus2_TextColor: #fff;--sapChart_Sequence_Bad_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Bad_Minus3: #830606;--sapChart_Sequence_Bad_Minus3_TextColor: #fff;--sapChart_Sequence_Bad_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Bad_Minus4: #570404;--sapChart_Sequence_Bad_Minus4_TextColor: #fff;--sapChart_Sequence_Bad_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Bad_Minus5: #320000;--sapChart_Sequence_Bad_Minus5_TextColor: #fff;--sapChart_Sequence_Bad_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Critical_Plus3: #ffb881;--sapChart_Sequence_Critical_Plus3_TextColor: #000;--sapChart_Sequence_Critical_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Critical_Plus2: #ff933f;--sapChart_Sequence_Critical_Plus2_TextColor: #000;--sapChart_Sequence_Critical_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Critical_Plus1: #ff760c;--sapChart_Sequence_Critical_Plus1_TextColor: #000;--sapChart_Sequence_Critical_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Critical: #e26300;--sapChart_Sequence_Critical_TextColor: #000;--sapChart_Sequence_Critical_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Critical_BorderColor: #e26300;--sapChart_Sequence_Critical_Minus1: #c35600;--sapChart_Sequence_Critical_Minus1_TextColor: #fff;--sapChart_Sequence_Critical_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Critical_Minus2: #aa4a00;--sapChart_Sequence_Critical_Minus2_TextColor: #fff;--sapChart_Sequence_Critical_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Critical_Minus3: #903f00;--sapChart_Sequence_Critical_Minus3_TextColor: #fff;--sapChart_Sequence_Critical_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Critical_Minus4: #6d3000;--sapChart_Sequence_Critical_Minus4_TextColor: #fff;--sapChart_Sequence_Critical_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Critical_Minus5: #492000;--sapChart_Sequence_Critical_Minus5_TextColor: #fff;--sapChart_Sequence_Critical_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Good_Plus3: #88d79f;--sapChart_Sequence_Good_Plus3_TextColor: #000;--sapChart_Sequence_Good_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Good_Plus2: #56c776;--sapChart_Sequence_Good_Plus2_TextColor: #000;--sapChart_Sequence_Good_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Good_Plus1: #3ab05c;--sapChart_Sequence_Good_Plus1_TextColor: #000;--sapChart_Sequence_Good_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Good: #30914c;--sapChart_Sequence_Good_TextColor: #000;--sapChart_Sequence_Good_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Good_BorderColor: #30914c;--sapChart_Sequence_Good_Minus1: #287a40;--sapChart_Sequence_Good_Minus1_TextColor: #fff;--sapChart_Sequence_Good_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Good_Minus2: #226736;--sapChart_Sequence_Good_Minus2_TextColor: #fff;--sapChart_Sequence_Good_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Good_Minus3: #1c542c;--sapChart_Sequence_Good_Minus3_TextColor: #fff;--sapChart_Sequence_Good_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Good_Minus4: #13391e;--sapChart_Sequence_Good_Minus4_TextColor: #fff;--sapChart_Sequence_Good_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Good_Minus5: #0a1e10;--sapChart_Sequence_Good_Minus5_TextColor: #fff;--sapChart_Sequence_Good_Minus5_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Neutral_Plus3: #edf0f3;--sapChart_Sequence_Neutral_Plus3_TextColor: #000;--sapChart_Sequence_Neutral_Plus3_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Neutral_Plus2: #c2ccd7;--sapChart_Sequence_Neutral_Plus2_TextColor: #000;--sapChart_Sequence_Neutral_Plus2_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Neutral_Plus1: #9aabbc;--sapChart_Sequence_Neutral_Plus1_TextColor: #000;--sapChart_Sequence_Neutral_Plus1_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Neutral: #758ca4;--sapChart_Sequence_Neutral_TextColor: #000;--sapChart_Sequence_Neutral_TextShadow: 0 0 .125rem #fff;--sapChart_Sequence_Neutral_BorderColor: #758ca4;--sapChart_Sequence_Neutral_Minus1: #5b728b;--sapChart_Sequence_Neutral_Minus1_TextColor: #fff;--sapChart_Sequence_Neutral_Minus1_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Neutral_Minus2: #495e74;--sapChart_Sequence_Neutral_Minus2_TextColor: #fff;--sapChart_Sequence_Neutral_Minus2_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Neutral_Minus3: #364a5f;--sapChart_Sequence_Neutral_Minus3_TextColor: #fff;--sapChart_Sequence_Neutral_Minus3_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Neutral_Minus4: #233649;--sapChart_Sequence_Neutral_Minus4_TextColor: #fff;--sapChart_Sequence_Neutral_Minus4_TextShadow: 0 0 .125rem #223548;--sapChart_Sequence_Neutral_Minus5: #1a2633;--sapChart_Sequence_Neutral_Minus5_TextColor: #fff;--sapChart_Sequence_Neutral_Minus5_TextShadow: 0 0 .125rem #223548;}
`
};
var parameters_bundle_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/sap_horizon/parameters-bundle.css.js
var styleData2 = {
  packageName: "@ui5/webcomponents",
  fileName: "themes/sap_horizon/parameters-bundle.css.ts",
  content: `:root{--ui5-v1-24-29-avatar-hover-box-shadow-offset: 0px 0px 0px .0625rem;--ui5-v1-24-29-avatar-initials-color: var(--sapContent_ImagePlaceholderForegroundColor);--ui5-v1-24-29-avatar-border-radius-img-deduction: .0625rem;--_ui5-v1-24-29_avatar_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5-v1-24-29_avatar_focus_width: .0625rem;--_ui5-v1-24-29_avatar_focus_color: var(--sapContent_FocusColor);--_ui5-v1-24-29_avatar_focus_offset: .1875rem;--ui5-v1-24-29-avatar-initials-border: .0625rem solid var(--sapAvatar_1_BorderColor);--ui5-v1-24-29-avatar-border-radius: var(--sapElement_BorderCornerRadius);--_ui5-v1-24-29_avatar_fontsize_XS: 1rem;--_ui5-v1-24-29_avatar_fontsize_S: 1.125rem;--_ui5-v1-24-29_avatar_fontsize_M: 1.5rem;--_ui5-v1-24-29_avatar_fontsize_L: 2.25rem;--_ui5-v1-24-29_avatar_fontsize_XL: 3rem;--ui5-v1-24-29-avatar-accent1: var(--sapAvatar_1_Background);--ui5-v1-24-29-avatar-accent2: var(--sapAvatar_2_Background);--ui5-v1-24-29-avatar-accent3: var(--sapAvatar_3_Background);--ui5-v1-24-29-avatar-accent4: var(--sapAvatar_4_Background);--ui5-v1-24-29-avatar-accent5: var(--sapAvatar_5_Background);--ui5-v1-24-29-avatar-accent6: var(--sapAvatar_6_Background);--ui5-v1-24-29-avatar-accent7: var(--sapAvatar_7_Background);--ui5-v1-24-29-avatar-accent8: var(--sapAvatar_8_Background);--ui5-v1-24-29-avatar-accent9: var(--sapAvatar_9_Background);--ui5-v1-24-29-avatar-accent10: var(--sapAvatar_10_Background);--ui5-v1-24-29-avatar-placeholder: var(--sapContent_ImagePlaceholderBackground);--ui5-v1-24-29-avatar-accent1-color: var(--sapAvatar_1_TextColor);--ui5-v1-24-29-avatar-accent2-color: var(--sapAvatar_2_TextColor);--ui5-v1-24-29-avatar-accent3-color: var(--sapAvatar_3_TextColor);--ui5-v1-24-29-avatar-accent4-color: var(--sapAvatar_4_TextColor);--ui5-v1-24-29-avatar-accent5-color: var(--sapAvatar_5_TextColor);--ui5-v1-24-29-avatar-accent6-color: var(--sapAvatar_6_TextColor);--ui5-v1-24-29-avatar-accent7-color: var(--sapAvatar_7_TextColor);--ui5-v1-24-29-avatar-accent8-color: var(--sapAvatar_8_TextColor);--ui5-v1-24-29-avatar-accent9-color: var(--sapAvatar_9_TextColor);--ui5-v1-24-29-avatar-accent10-color: var(--sapAvatar_10_TextColor);--ui5-v1-24-29-avatar-placeholder-color: var(--sapContent_ImagePlaceholderForegroundColor);--ui5-v1-24-29-avatar-accent1-border-color: var(--sapAvatar_1_BorderColor);--ui5-v1-24-29-avatar-accent2-border-color: var(--sapAvatar_2_BorderColor);--ui5-v1-24-29-avatar-accent3-border-color: var(--sapAvatar_3_BorderColor);--ui5-v1-24-29-avatar-accent4-border-color: var(--sapAvatar_4_BorderColor);--ui5-v1-24-29-avatar-accent5-border-color: var(--sapAvatar_5_BorderColor);--ui5-v1-24-29-avatar-accent6-border-color: var(--sapAvatar_6_BorderColor);--ui5-v1-24-29-avatar-accent7-border-color: var(--sapAvatar_7_BorderColor);--ui5-v1-24-29-avatar-accent8-border-color: var(--sapAvatar_8_BorderColor);--ui5-v1-24-29-avatar-accent9-border-color: var(--sapAvatar_9_BorderColor);--ui5-v1-24-29-avatar-accent10-border-color: var(--sapAvatar_10_BorderColor);--ui5-v1-24-29-avatar-placeholder-border-color: var(--sapContent_ImagePlaceholderBackground);--_ui5-v1-24-29_avatar_icon_XS: var(--_ui5-v1-24-29_avatar_fontsize_XS);--_ui5-v1-24-29_avatar_icon_S: var(--_ui5-v1-24-29_avatar_fontsize_S);--_ui5-v1-24-29_avatar_icon_M: var(--_ui5-v1-24-29_avatar_fontsize_M);--_ui5-v1-24-29_avatar_icon_L: var(--_ui5-v1-24-29_avatar_fontsize_L);--_ui5-v1-24-29_avatar_icon_XL: var(--_ui5-v1-24-29_avatar_fontsize_XL);--_ui5-v1-24-29_avatar_group_button_focus_border: none;--_ui5-v1-24-29_avatar_group_focus_border_radius: .375rem;--_ui5-v1-24-29-badge-icon-width: .75rem;--ui5-v1-24-29-badge-text-shadow: var(--sapContent_TextShadow);--ui5-v1-24-29-badge-contrast-text-shadow: var(--sapContent_ContrastTextShadow);--ui5-v1-24-29-badge-color-scheme-1-border: var(--sapAccentColor1);--ui5-v1-24-29-badge-color-scheme-2-border: var(--sapAccentColor2);--ui5-v1-24-29-badge-color-scheme-3-border: var(--sapAccentColor3);--ui5-v1-24-29-badge-color-scheme-4-border: var(--sapAccentColor4);--ui5-v1-24-29-badge-color-scheme-5-border: var(--sapAccentColor5);--ui5-v1-24-29-badge-color-scheme-6-border: var(--sapAccentColor6);--ui5-v1-24-29-badge-color-scheme-7-border: var(--sapAccentColor7);--ui5-v1-24-29-badge-color-scheme-8-border: var(--sapLegendColor18);--ui5-v1-24-29-badge-color-scheme-9-border: var(--sapAccentColor10);--ui5-v1-24-29-badge-color-scheme-10-border: var(--sapAccentColor9);--ui5-v1-24-29-badge-set2-color-scheme-1-color: var(--sapIndicationColor_1);--ui5-v1-24-29-badge-set2-color-scheme-1-background: var(--sapIndicationColor_1b);--ui5-v1-24-29-badge-set2-color-scheme-1-border: var(--sapIndicationColor_1b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-1-hover-background: var(--sapIndicationColor_1b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-1-active-color: var(--sapIndicationColor_1_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-1-active-background: var(--sapIndicationColor_1_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-1-active-border: var(--sapIndicationColor_1_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-2-color: var(--sapIndicationColor_2);--ui5-v1-24-29-badge-set2-color-scheme-2-background: var(--sapIndicationColor_2b);--ui5-v1-24-29-badge-set2-color-scheme-2-border: var(--sapIndicationColor_2b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-2-hover-background: var(--sapIndicationColor_2b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-2-active-color: var(--sapIndicationColor_2_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-2-active-background: var(--sapIndicationColor_2_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-2-active-border: var(--sapIndicationColor_2_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-3-color: var(--sapIndicationColor_3);--ui5-v1-24-29-badge-set2-color-scheme-3-background: var(--sapIndicationColor_3b);--ui5-v1-24-29-badge-set2-color-scheme-3-border: var(--sapIndicationColor_3b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-3-hover-background: var(--sapIndicationColor_3b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-3-active-color: var(--sapIndicationColor_3_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-3-active-background: var(--sapIndicationColor_3_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-3-active-border: var(--sapIndicationColor_3_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-4-color: var(--sapIndicationColor_4);--ui5-v1-24-29-badge-set2-color-scheme-4-background: var(--sapIndicationColor_4b);--ui5-v1-24-29-badge-set2-color-scheme-4-border: var(--sapIndicationColor_4b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-4-hover-background: var(--sapIndicationColor_4b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-4-active-color: var(--sapIndicationColor_4_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-4-active-background: var(--sapIndicationColor_4_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-4-active-border: var(--sapIndicationColor_4_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-5-color: var(--sapIndicationColor_5);--ui5-v1-24-29-badge-set2-color-scheme-5-background: var(--sapIndicationColor_5b);--ui5-v1-24-29-badge-set2-color-scheme-5-border: var(--sapIndicationColor_5b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-5-hover-background: var(--sapIndicationColor_5b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-5-active-color: var(--sapIndicationColor_5_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-5-active-background: var(--sapIndicationColor_5_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-5-active-border: var(--sapIndicationColor_5_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-6-color: var(--sapIndicationColor_6);--ui5-v1-24-29-badge-set2-color-scheme-6-background: var(--sapIndicationColor_6b);--ui5-v1-24-29-badge-set2-color-scheme-6-border: var(--sapIndicationColor_6b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-6-hover-background: var(--sapIndicationColor_6b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-6-active-color: var(--sapIndicationColor_6_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-6-active-background: var(--sapIndicationColor_6_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-6-active-border: var(--sapIndicationColor_6_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-7-color: var(--sapIndicationColor_7);--ui5-v1-24-29-badge-set2-color-scheme-7-background: var(--sapIndicationColor_7b);--ui5-v1-24-29-badge-set2-color-scheme-7-border: var(--sapIndicationColor_7b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-7-hover-background: var(--sapIndicationColor_7b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-7-active-color: var(--sapIndicationColor_7_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-7-active-background: var(--sapIndicationColor_7_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-7-active-border: var(--sapIndicationColor_7_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-8-color: var(--sapIndicationColor_8);--ui5-v1-24-29-badge-set2-color-scheme-8-background: var(--sapIndicationColor_8b);--ui5-v1-24-29-badge-set2-color-scheme-8-border: var(--sapIndicationColor_8b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-8-hover-background: var(--sapIndicationColor_8b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-8-active-color: var(--sapIndicationColor_8_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-8-active-background: var(--sapIndicationColor_8_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-8-active-border: var(--sapIndicationColor_8_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-9-color: var(--sapIndicationColor_9);--ui5-v1-24-29-badge-set2-color-scheme-9-background: var(--sapIndicationColor_9b);--ui5-v1-24-29-badge-set2-color-scheme-9-border: var(--sapIndicationColor_9b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-9-hover-background: var(--sapIndicationColor_9b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-9-active-color: var(--sapIndicationColor_9_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-9-active-background: var(--sapIndicationColor_9_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-9-active-border: var(--sapIndicationColor_9_Active_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-10-color: var(--sapIndicationColor_10);--ui5-v1-24-29-badge-set2-color-scheme-10-background: var(--sapIndicationColor_10b);--ui5-v1-24-29-badge-set2-color-scheme-10-border: var(--sapIndicationColor_10b_BorderColor);--ui5-v1-24-29-badge-set2-color-scheme-10-hover-background: var(--sapIndicationColor_10b_Hover_Background);--ui5-v1-24-29-badge-set2-color-scheme-10-active-color: var(--sapIndicationColor_10_Active_TextColor);--ui5-v1-24-29-badge-set2-color-scheme-10-active-background: var(--sapIndicationColor_10_Active_Background);--ui5-v1-24-29-badge-set2-color-scheme-10-active-border: var(--sapIndicationColor_10_Active_BorderColor);--_ui5-v1-24-29-badge-height: 1.375rem;--_ui5-v1-24-29-badge-border: none;--_ui5-v1-24-29-badge-border-radius: .25rem;--_ui5-v1-24-29-badge-padding-inline: .375em;--_ui5-v1-24-29-badge-padding-inline-icon-only: .313rem;--_ui5-v1-24-29-badge-text-transform: none;--_ui5-v1-24-29-badge-icon-height: 1rem;--_ui5-v1-24-29-badge-icon-gap: .25rem;--_ui5-v1-24-29-badge-font-size: var(--sapFontSize);--_ui5-v1-24-29-badge-font: var(--sapFontSemiboldDuplexFamily);--_ui5-v1-24-29-badge-font-weight: normal;--_ui5-v1-24-29-badge-letter-spacing: normal;--ui5-v1-24-29-badge-color-scheme-1-background: var(--sapAvatar_1_Background);--ui5-v1-24-29-badge-color-scheme-1-color: var(--sapAvatar_1_TextColor);--ui5-v1-24-29-badge-color-scheme-2-background: var(--sapAvatar_2_Background);--ui5-v1-24-29-badge-color-scheme-2-color: var(--sapAvatar_2_TextColor);--ui5-v1-24-29-badge-color-scheme-3-background: var(--sapAvatar_3_Background);--ui5-v1-24-29-badge-color-scheme-3-color: var(--sapAvatar_3_TextColor);--ui5-v1-24-29-badge-color-scheme-4-background: var(--sapAvatar_4_Background);--ui5-v1-24-29-badge-color-scheme-4-color: var(--sapAvatar_4_TextColor);--ui5-v1-24-29-badge-color-scheme-5-background: var(--sapAvatar_5_Background);--ui5-v1-24-29-badge-color-scheme-5-color: var(--sapAvatar_5_TextColor);--ui5-v1-24-29-badge-color-scheme-6-background: var(--sapAvatar_6_Background);--ui5-v1-24-29-badge-color-scheme-6-color: var(--sapAvatar_6_TextColor);--ui5-v1-24-29-badge-color-scheme-7-background: var(--sapAvatar_7_Background);--ui5-v1-24-29-badge-color-scheme-7-color: var(--sapAvatar_7_TextColor);--ui5-v1-24-29-badge-color-scheme-8-background: var(--sapAvatar_8_Background);--ui5-v1-24-29-badge-color-scheme-8-color: var(--sapAvatar_8_TextColor);--ui5-v1-24-29-badge-color-scheme-9-background: var(--sapAvatar_9_Background);--ui5-v1-24-29-badge-color-scheme-9-color: var(--sapAvatar_9_TextColor);--ui5-v1-24-29-badge-color-scheme-10-background: var(--sapAvatar_10_Background);--ui5-v1-24-29-badge-color-scheme-10-color: var(--sapAvatar_10_TextColor);--_ui5-v1-24-29_breadcrumbs_margin: 0 0 .5rem 0;--_ui5-v1-24-29_busy_indicator_block_layer: color-mix(in oklch, transparent, var(--sapBlockLayer_Background) 20%);--_ui5-v1-24-29_busy_indicator_color: var(--sapContent_BusyColor);--_ui5-v1-24-29_busy_indicator_focus_border_radius: .75rem;--_ui5-v1-24-29_busy_indicator_focus_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5-v1-24-29_button_base_min_compact_width: 2rem;--_ui5-v1-24-29_button_base_height: var(--sapElement_Height);--_ui5-v1-24-29_button_compact_height: 1.625rem;--_ui5-v1-24-29_button_border_radius: var(--sapButton_BorderCornerRadius);--_ui5-v1-24-29_button_compact_padding: .4375rem;--_ui5-v1-24-29_button_emphasized_outline: 1px dotted var(--sapContent_FocusColor);--_ui5-v1-24-29_button_focus_offset: 1px;--_ui5-v1-24-29_button_focus_width: 1px;--_ui5-v1-24-29_button_emphasized_focused_border_before: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_button_emphasized_focused_active_border_color: transparent;--_ui5-v1-24-29_button_focused_border: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_button_focused_border_radius: .375rem;--_ui5-v1-24-29_button_focused_inner_border_radius: .375rem;--_ui5-v1-24-29_button_base_min_width: 2.25rem;--_ui5-v1-24-29_button_base_padding: .5625rem;--_ui5-v1-24-29_button_base_icon_only_padding: .5625rem;--_ui5-v1-24-29_button_base_icon_margin: .375rem;--_ui5-v1-24-29_button_icon_font_size: 1rem;--_ui5-v1-24-29_button_text_shadow: none;--_ui5-v1-24-29_button_emphasized_border_width: .0625rem;--_ui5-v1-24-29_button_pressed_focused_border_color: var(--sapContent_FocusColor);--_ui5-v1-24-29_button_fontFamily: var(--sapFontSemiboldDuplexFamily);--_ui5-v1-24-29_button_emphasized_focused_border_color: var(--sapContent_ContrastFocusColor);--_ui5-v1-24-29-calendar-legend-root-padding: .75rem;--_ui5-v1-24-29-calendar-legend-root-width: 18.5rem;--_ui5-v1-24-29-calendar-legend-item-box-margin: .25rem .5rem .25rem .25rem;--_ui5-v1-24-29-calendar-legend-item-root-focus-margin: 0;--_ui5-v1-24-29-calendar-legend-item-root-width: 7.75rem;--_ui5-v1-24-29-calendar-legend-item-root-focus-border: var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5-v1-24-29-calendar-legend-item-root-focus-border-radius: .125rem;--_ui5-v1-24-29_card_box_shadow: var(--sapContent_Shadow0);--_ui5-v1-24-29_card_header_border_color: var(--sapTile_SeparatorColor);--_ui5-v1-24-29_card_header_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5-v1-24-29_card_header_focus_bottom_radius: 0px;--_ui5-v1-24-29_card_header_title_font_weight: normal;--_ui5-v1-24-29_card_header_subtitle_margin_top: .25rem;--_ui5-v1-24-29_card_hover_box_shadow: var(--sapContent_Shadow2);--_ui5-v1-24-29_card_header_focus_offset: 0px;--_ui5-v1-24-29_card_header_focus_radius: var(--_ui5-v1-24-29_card_border-radius);--_ui5-v1-24-29_card_header_title_font_family: var(--sapFontHeaderFamily);--_ui5-v1-24-29_card_header_title_font_size: var(--sapFontHeader6Size);--_ui5-v1-24-29_card_header_hover_bg: var(--sapTile_Hover_Background);--_ui5-v1-24-29_card_header_active_bg: var(--sapTile_Active_Background);--_ui5-v1-24-29_card_header_border: none;--_ui5-v1-24-29_card_border-radius: var(--sapTile_BorderCornerRadius);--_ui5-v1-24-29_card_header_padding: 1rem 1rem .75rem 1rem;--_ui5-v1-24-29_card_border: none;--ui5-v1-24-29_carousel_background_color_solid: var(--sapGroup_ContentBackground);--ui5-v1-24-29_carousel_background_color_translucent: var(--sapBackgroundColor);--ui5-v1-24-29_carousel_button_size: 2.5rem;--ui5-v1-24-29_carousel_inactive_dot_size: .25rem;--ui5-v1-24-29_carousel_inactive_dot_margin: 0 .375rem;--ui5-v1-24-29_carousel_inactive_dot_border: 1px solid var(--sapContent_ForegroundBorderColor);--ui5-v1-24-29_carousel_inactive_dot_background: var(--sapContent_ForegroundBorderColor);--ui5-v1-24-29_carousel_active_dot_border: 1px solid var(--sapContent_Selected_ForegroundColor);--ui5-v1-24-29_carousel_active_dot_background: var(--sapContent_Selected_ForegroundColor);--ui5-v1-24-29_carousel_navigation_button_active_box_shadow: none;--_ui5-v1-24-29_checkbox_box_shadow: none;--_ui5-v1-24-29_checkbox_transition: unset;--_ui5-v1-24-29_checkbox_focus_border: none;--_ui5-v1-24-29_checkbox_border_radius: 0;--_ui5-v1-24-29_checkbox_focus_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5-v1-24-29_checkbox_outer_hover_background: transparent;--_ui5-v1-24-29_checkbox_inner_width_height: 1.375rem;--_ui5-v1-24-29_checkbox_inner_disabled_border_color: var(--sapField_BorderColor);--_ui5-v1-24-29_checkbox_inner_information_box_shadow: none;--_ui5-v1-24-29_checkbox_inner_warning_box_shadow: none;--_ui5-v1-24-29_checkbox_inner_error_box_shadow: none;--_ui5-v1-24-29_checkbox_inner_success_box_shadow: none;--_ui5-v1-24-29_checkbox_inner_default_box_shadow: none;--_ui5-v1-24-29_checkbox_inner_background: var(--sapField_Background);--_ui5-v1-24-29_checkbox_wrapped_focus_padding: .375rem;--_ui5-v1-24-29_checkbox_compact_wrapper_padding: .5rem;--_ui5-v1-24-29_checkbox_compact_width_height: 2rem;--_ui5-v1-24-29_checkbox_compact_inner_size: 1rem;--_ui5-v1-24-29_checkbox_compact_focus_position: .375rem;--_ui5-v1-24-29_checkbox_label_offset: var(--_ui5-v1-24-29_checkbox_wrapper_padding);--_ui5-v1-24-29_checkbox_disabled_label_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_checkbox_default_focus_border: none;--_ui5-v1-24-29_checkbox_focus_outline_display: block;--_ui5-v1-24-29_checkbox_wrapper_padding: .6875rem;--_ui5-v1-24-29_checkbox_width_height: 2.75rem;--_ui5-v1-24-29_checkbox_label_color: var(--sapField_TextColor);--_ui5-v1-24-29_checkbox_inner_border: solid var(--sapField_BorderWidth) var(--sapField_BorderColor);--_ui5-v1-24-29_checkbox_inner_border_radius: var(--sapField_BorderCornerRadius);--_ui5-v1-24-29_checkbox_checkmark_color: var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_checkbox_hover_background: var(--sapContent_Selected_Hover_Background);--_ui5-v1-24-29_checkbox_inner_hover_border_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_checkbox_inner_hover_checked_border_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_checkbox_inner_selected_border_color: var(--sapField_BorderColor);--_ui5-v1-24-29_checkbox_inner_active_border_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_checkbox_active_background: var(--sapContent_Selected_Hover_Background);--_ui5-v1-24-29_checkbox_inner_readonly_border: var(--sapElement_BorderWidth) var(--sapField_ReadOnly_BorderColor) dashed;--_ui5-v1-24-29_checkbox_inner_error_border: var(--sapField_InvalidBorderWidth) solid var(--sapField_InvalidColor);--_ui5-v1-24-29_checkbox_inner_error_background_hover: var(--sapField_Hover_Background);--_ui5-v1-24-29_checkbox_inner_warning_border: var(--sapField_WarningBorderWidth) solid var(--sapField_WarningColor);--_ui5-v1-24-29_checkbox_inner_warning_color: var(--sapField_WarningColor);--_ui5-v1-24-29_checkbox_inner_warning_background_hover: var(--sapField_Hover_Background);--_ui5-v1-24-29_checkbox_checkmark_warning_color: var(--sapField_WarningColor);--_ui5-v1-24-29_checkbox_inner_success_border: var(--sapField_SuccessBorderWidth) solid var(--sapField_SuccessColor);--_ui5-v1-24-29_checkbox_inner_success_background_hover: var(--sapField_Hover_Background);--_ui5-v1-24-29_checkbox_inner_information_color: var(--sapField_InformationColor);--_ui5-v1-24-29_checkbox_inner_information_border: var(--sapField_InformationBorderWidth) solid var(--sapField_InformationColor);--_ui5-v1-24-29_checkbox_inner_information_background_hover: var(--sapField_Hover_Background);--_ui5-v1-24-29_checkbox_disabled_opacity: var(--sapContent_DisabledOpacity);--_ui5-v1-24-29_checkbox_focus_position: .3125rem;--_ui5-v1-24-29_checkbox_focus_border_radius: .5rem;--_ui5-v1-24-29_checkbox_right_focus_distance: var(--_ui5-v1-24-29_checkbox_focus_position);--_ui5-v1-24-29_checkbox_wrapped_focus_inset_block_end: var(--_ui5-v1-24-29_checkbox_focus_position);--_ui5-v1-24-29_checkbox_wrapped_content_margin_top: 0;--_ui5-v1-24-29_color-palette-item-outer-border-radius: .25rem;--_ui5-v1-24-29_color-palette-item-inner-border-radius: .1875rem;--_ui5-v1-24-29_color-palette-item-container-sides-padding: .3125rem;--_ui5-v1-24-29_color-palette-item-container-rows-padding: .6875rem;--_ui5-v1-24-29_color-palette-item-focus-height: 1.5rem;--_ui5-v1-24-29_color-palette-item-container-padding: var(--_ui5-v1-24-29_color-palette-item-container-sides-padding) var(--_ui5-v1-24-29_color-palette-item-container-rows-padding);--_ui5-v1-24-29_color-palette-item-hover-margin: .0625rem;--_ui5-v1-24-29_color-palette-row-height: 9.5rem;--_ui5-v1-24-29_color-palette-button-height: 3rem;--_ui5-v1-24-29_color-palette-item-before-focus-color: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_color-palette-item-before-focus-offset: -.3125rem;--_ui5-v1-24-29_color-palette-item-before-focus-hover-offset: -.0625rem;--_ui5-v1-24-29_color-palette-item-after-focus-color: .0625rem solid var(--sapContent_ContrastFocusColor);--_ui5-v1-24-29_color-palette-item-after-focus-offset: -.1875rem;--_ui5-v1-24-29_color-palette-item-after-focus-hover-offset: .0625rem;--_ui5-v1-24-29_color-palette-item-before-focus-border-radius: .4375rem;--_ui5-v1-24-29_color-palette-item-after-focus-border-radius: .3125rem;--_ui5-v1-24-29_color-palette-item-hover-outer-border-radius: .4375rem;--_ui5-v1-24-29_color-palette-item-hover-inner-border-radius: .375rem;--_ui5-v1-24-29_color_picker_circle_outer_border: .0625rem solid var(--sapContent_ContrastShadowColor);--_ui5-v1-24-29_color_picker_circle_inner_border: .0625rem solid var(--sapField_BorderColor);--_ui5-v1-24-29_color_picker_circle_inner_circle_size: .5625rem;--_ui5-v1-24-29_color_picker_slider_handle_box_shadow: .125rem solid var(--sapField_BorderColor);--_ui5-v1-24-29_color_picker_slider_handle_border: .125rem solid var(--sapField_BorderColor);--_ui5-v1-24-29_color_picker_slider_handle_outline_hover: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_color_picker_slider_handle_outline_focus: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_color_picker_slider_handle_margin_top: -.1875rem;--_ui5-v1-24-29_color_picker_slider_handle_focus_margin_top: var(--_ui5-v1-24-29_color_picker_slider_handle_margin_top);--_ui5-v1-24-29_color_picker_slider_container_margin_top: -11px;--_ui5-v1-24-29_color_picker_slider_handle_inline_focus: 1px solid var(--sapContent_ContrastFocusColor);--_ui5-v1-24-29_datepicker_icon_border: none;--_ui5-v1-24-29-datepicker-hover-background: var(--sapField_Hover_Background);--_ui5-v1-24-29-datepicker_border_radius: .25rem;--_ui5-v1-24-29-datepicker_icon_border_radius: .125rem;--_ui5-v1-24-29_daypicker_item_box_shadow: inset 0 0 0 .0625rem var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_daypicker_item_margin: 2px;--_ui5-v1-24-29_daypicker_item_border: none;--_ui5-v1-24-29_daypicker_item_selected_border_color: var(--sapList_Background);--_ui5-v1-24-29_daypicker_daynames_container_height: 2rem;--_ui5-v1-24-29_daypicker_weeknumbers_container_padding_top: 2rem;--_ui5-v1-24-29_daypicker_item_othermonth_background_color: var(--sapList_Background);--_ui5-v1-24-29_daypicker_item_othermonth_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_daypicker_item_othermonth_hover_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_daypicker_item_now_inner_border_radius: 0;--_ui5-v1-24-29_daypicker_item_outline_width: 1px;--_ui5-v1-24-29_daypicker_item_outline_offset: 1px;--_ui5-v1-24-29_daypicker_item_now_focus_after_width: calc(100% - .25rem) ;--_ui5-v1-24-29_daypicker_item_now_focus_after_height: calc(100% - .25rem) ;--_ui5-v1-24-29_daypicker_item_now_selected_focus_after_width: calc(100% - .375rem) ;--_ui5-v1-24-29_daypicker_item_now_selected_focus_after_height: calc(100% - .375rem) ;--_ui5-v1-24-29_daypicker_item_selected_background: transparent;--_ui5-v1-24-29_daypicker_item_outline_focus_after: none;--_ui5-v1-24-29_daypicker_item_border_focus_after: var(--_ui5-v1-24-29_daypicker_item_outline_width) dotted var(--sapContent_FocusColor);--_ui5-v1-24-29_daypicker_item_width_focus_after: calc(100% - .25rem) ;--_ui5-v1-24-29_daypicker_item_height_focus_after: calc(100% - .25rem) ;--_ui5-v1-24-29_daypicker_item_now_outline: none;--_ui5-v1-24-29_daypicker_item_now_outline_offset: none;--_ui5-v1-24-29_daypicker_item_now_outline_offset_focus_after: var(--_ui5-v1-24-29_daypicker_item_now_outline_offset);--_ui5-v1-24-29_daypicker_item_selected_between_hover_background: var(--sapList_Hover_SelectionBackground);--_ui5-v1-24-29_daypicker_item_now_not_selected_inset: 0;--_ui5-v1-24-29_daypicker_item_now_border_color: var(--sapLegend_CurrentDateTime);--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_border_radios: .25rem;--_ui5-v1-24-29_daypicker_special_day_top: 2.5rem;--_ui5-v1-24-29_daypicker_special_day_before_border_color: var(--sapList_Background);--_ui5-v1-24-29_daypicker_selected_item_now_special_day_border_bottom_radius: 0;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_after_border_width: .125rem;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_dot: .375rem;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_top: 2rem;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_right: 1.4375rem;--_ui5-v1-24-29_daypicker_item_border_radius: .4375rem;--_ui5-v1-24-29_daypicker_item_focus_border: .0625rem dotted var(--sapContent_FocusColor);--_ui5-v1-24-29_daypicker_item_selected_border: .0625rem solid var(--sapList_SelectionBorderColor);--_ui5-v1-24-29_daypicker_item_not_selected_focus_border: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_daypicker_item_selected_focus_color: var(--sapContent_FocusColor);--_ui5-v1-24-29_daypicker_item_selected_focus_width: .125rem;--_ui5-v1-24-29_daypicker_item_no_selected_inset: .375rem;--_ui5-v1-24-29_daypicker_item_now_border_focus_after: .125rem solid var(--sapList_SelectionBorderColor);--_ui5-v1-24-29_daypicker_item_now_border_radius_focus_after: .3125rem;--_ui5-v1-24-29_day_picker_item_selected_now_border_focus: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_day_picker_item_selected_now_border_radius_focus: .1875rem;--ui5-v1-24-29-dp-item_withsecondtype_border: .375rem;--_ui5-v1-24-29_daypicker_item_now_border: .125rem solid var(--sapLegend_CurrentDateTime);--_ui5-v1-24-29_daypicker_dayname_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_daypicker_weekname_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_daypicker_item_selected_box_shadow: inset 0 0 0 .0625rem var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_daypicker_item_selected_daytext_hover_background: transparent;--_ui5-v1-24-29_daypicker_item_border_radius_item: .5rem;--_ui5-v1-24-29_daypicker_item_border_radius_focus_after: .1875rem;--_ui5-v1-24-29_daypicker_item_selected_between_border: .5rem;--_ui5-v1-24-29_daypicker_item_selected_between_background: var(--sapList_SelectionBackgroundColor);--_ui5-v1-24-29_daypicker_item_selected_between_text_background: transparent;--_ui5-v1-24-29_daypicker_item_selected_between_text_font: var(--sapFontFamily);--_ui5-v1-24-29_daypicker_item_selected_text_font: var(--sapFontBoldFamily);--_ui5-v1-24-29_daypicker_item_now_box_shadow: inset 0 0 0 .35rem var(--sapList_Background);--_ui5-v1-24-29_daypicker_item_selected_text_outline: .0625rem solid var(--sapSelectedColor);--_ui5-v1-24-29_daypicker_item_now_selected_outline_offset: -.25rem;--_ui5-v1-24-29_daypicker_item_now_selected_between_inset: .25rem;--_ui5-v1-24-29_daypicker_item_now_selected_between_border: .0625rem solid var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_daypicker_item_now_selected_between_border_radius: .1875rem;--_ui5-v1-24-29_daypicker_item_select_between_border: 1px solid var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_daypicker_item_weeekend_filter: brightness(105%);--_ui5-v1-24-29_daypicker_item_selected_hover: var(--sapList_Hover_Background);--_ui5-v1-24-29_daypicker_item_now_inset: .3125rem;--_ui5-v1-24-29-dp-item_withsecondtype_border: .25rem;--_ui5-v1-24-29_daypicker_item_selected__secondary_type_text_outline: .0625rem solid var(--sapSelectedColor);--_ui5-v1-24-29_daypicker_two_calendar_item_now_day_text_content: "";--_ui5-v1-24-29_daypicker_two_calendar_item_now_selected_border_width: .125rem;--_ui5-v1-24-29_daypicker_two_calendar_item_border_radius: .5rem;--_ui5-v1-24-29_daypicker_two_calendar_item_border_focus_border_radius: .375rem;--_ui5-v1-24-29_daypicker_two_calendar_item_no_selected_inset: 0;--_ui5-v1-24-29_daypicker_two_calendar_item_selected_now_border_radius_focus: .1875rem;--_ui5-v1-24-29_daypicker_two_calendar_item_no_selected_focus_inset: .1875rem;--_ui5-v1-24-29_daypicker_two_calendar_item_no_select_focus_border_radius: .3125rem;--_ui5-v1-24-29_daypicker_two_calendar_item_now_inset: .3125rem;--_ui5-v1-24-29_daypicker_two_calendar_item_now_selected_border_inset: .125rem;--_ui5-v1-24-29_daypicker_selected_item_special_day_width: calc(100% - .125rem) ;--_ui5-v1-24-29_daypicker_special_day_border_bottom_radius: .5rem;--_ui5-v1-24-29-daypicker_item_selected_now_border_radius: .5rem;--_ui5-v1-24-29_daypicker_selected_item_now_special_day_width: calc(100% - .1875rem) ;--_ui5-v1-24-29_daypicker_selected_item_now_special_day_border_bottom_radius_alternate: .5rem;--_ui5-v1-24-29_daypicker_selected_item_now_special_day_top: 2.4375rem;--_ui5-v1-24-29_daypicker_two_calendar_item_margin_bottom: 0;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_now_inset: .3125rem;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_now_border_radius: .25rem;--_ui5-v1-24-29_daypicker_item_now_focus_margin: 0;--_ui5-v1-24-29_daypicker_special_day_border_top: none;--_ui5-v1-24-29_daypicker_special_day_selected_border_radius_bottom: .25rem;--_ui5-v1-24-29_daypicker_specialday_focused_top: 2.125rem;--_ui5-v1-24-29_daypicker_specialday_focused_width: calc(100% - .75rem) ;--_ui5-v1-24-29_daypicker_specialday_focused_border_bottom: 0;--_ui5-v1-24-29_daypicker_item_now_specialday_top: 2.3125rem;--_ui5-v1-24-29_daypicker_item_now_specialday_width: calc(100% - .5rem) ;--_ui5-v1-24-29_dialog_resize_handle_color: var(--sapButton_Lite_TextColor);--_ui5-v1-24-29_dialog_header_error_state_icon_color: var(--sapNegativeElementColor);--_ui5-v1-24-29_dialog_header_information_state_icon_color: var(--sapInformativeElementColor);--_ui5-v1-24-29_dialog_header_success_state_icon_color: var(--sapPositiveElementColor);--_ui5-v1-24-29_dialog_header_warning_state_icon_color: var(--sapCriticalElementColor);--_ui5-v1-24-29_dialog_header_state_line_height: .0625rem;--_ui5-v1-24-29_dialog_header_focus_bottom_offset: 2px;--_ui5-v1-24-29_dialog_header_focus_top_offset: 1px;--_ui5-v1-24-29_dialog_header_focus_left_offset: 1px;--_ui5-v1-24-29_dialog_header_focus_right_offset: 1px;--_ui5-v1-24-29_dialog_resize_handle_right: 0;--_ui5-v1-24-29_dialog_resize_handle_bottom: 3px;--_ui5-v1-24-29_dialog_header_border_radius: var(--sapElement_BorderCornerRadius);--_ui5-v1-24-29_file_uploader_value_state_error_hover_background_color: var(--sapField_Hover_Background);--_ui5-v1-24-29_file_uploader_hover_border: none;--ui5-v1-24-29-group-header-listitem-background-color: var(--sapList_GroupHeaderBackground);--ui5-v1-24-29-icon-focus-border-radius: .25rem;--_ui5-v1-24-29_input_width: 13.125rem;--_ui5-v1-24-29_input_min_width: 2.75rem;--_ui5-v1-24-29_input_height: var(--sapElement_Height);--_ui5-v1-24-29_input_compact_height: 1.625rem;--_ui5-v1-24-29_input_value_state_error_hover_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_input_background_color: var(--sapField_Background);--_ui5-v1-24-29_input_border_radius: var(--sapField_BorderCornerRadius);--_ui5-v1-24-29_input_placeholder_style: italic;--_ui5-v1-24-29_input_placeholder_color: var(--sapField_PlaceholderTextColor);--_ui5-v1-24-29_input_bottom_border_height: 0;--_ui5-v1-24-29_input_bottom_border_color: transparent;--_ui5-v1-24-29_input_focused_border_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_input_state_border_width: .125rem;--_ui5-v1-24-29_input_information_border_width: .125rem;--_ui5-v1-24-29_input_error_font_weight: normal;--_ui5-v1-24-29_input_warning_font_weight: normal;--_ui5-v1-24-29_input_focus_border_width: 1px;--_ui5-v1-24-29_input_error_warning_font_style: inherit;--_ui5-v1-24-29_input_error_warning_text_indent: 0;--_ui5-v1-24-29_input_disabled_color: var(--sapContent_DisabledTextColor);--_ui5-v1-24-29_input_disabled_font_weight: normal;--_ui5-v1-24-29_input_disabled_border_color: var(--sapField_BorderColor);--_ui5-v1-24-29-input_disabled_background: var(--sapField_Background);--_ui5-v1-24-29_input_readonly_border_color: var(--sapField_ReadOnly_BorderColor);--_ui5-v1-24-29_input_readonly_background: var(--sapField_ReadOnly_Background);--_ui5-v1-24-29_input_disabled_opacity: var(--sapContent_DisabledOpacity);--_ui5-v1-24-29_input_icon_min_width: 2.25rem;--_ui5-v1-24-29_input_compact_min_width: 2rem;--_ui5-v1-24-29_input_transition: none;--_ui5-v1-24-29-input-value-state-icon-display: none;--_ui5-v1-24-29_input_value_state_error_border_color: var(--sapField_InvalidColor);--_ui5-v1-24-29_input_focused_value_state_error_border_color: var(--sapField_InvalidColor);--_ui5-v1-24-29_input_value_state_warning_border_color: var(--sapField_WarningColor);--_ui5-v1-24-29_input_focused_value_state_warning_border_color: var(--sapField_WarningColor);--_ui5-v1-24-29_input_value_state_success_border_color: var(--sapField_SuccessColor);--_ui5-v1-24-29_input_focused_value_state_success_border_color: var(--sapField_SuccessColor);--_ui5-v1-24-29_input_value_state_success_border_width: 1px;--_ui5-v1-24-29_input_value_state_information_border_color: var(--sapField_InformationColor);--_ui5-v1-24-29_input_focused_value_state_information_border_color: var(--sapField_InformationColor);--_ui5-v1-24-29-input-value-state-information-border-width: 1px;--_ui5-v1-24-29-input-background-image: none;--ui5-v1-24-29_input_focus_pseudo_element_content: "";--_ui5-v1-24-29_input_value_state_error_warning_placeholder_font_weight: normal;--_ui5-v1-24-29-input_error_placeholder_color: var(--sapField_PlaceholderTextColor);--_ui5-v1-24-29_input_icon_width: 2.25rem;--_ui5-v1-24-29-input-icons-count: 0;--_ui5-v1-24-29_input_margin_top_bottom: .1875rem;--_ui5-v1-24-29_input_tokenizer_min_width: 3.25rem;--_ui5-v1-24-29-input-border: none;--_ui5-v1-24-29_input_hover_border: none;--_ui5-v1-24-29_input_focus_border_radius: .25rem;--_ui5-v1-24-29_input_readonly_focus_border_radius: .125rem;--_ui5-v1-24-29_input_error_warning_border_style: none;--_ui5-v1-24-29_input_focused_value_state_error_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_input_focused_value_state_warning_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_input_focused_value_state_success_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_input_focused_value_state_information_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_input_focused_value_state_error_focus_outline_color: var(--sapField_InvalidColor);--_ui5-v1-24-29_input_focused_value_state_warning_focus_outline_color: var(--sapField_WarningColor);--_ui5-v1-24-29_input_focused_value_state_success_focus_outline_color: var(--sapField_SuccessColor);--_ui5-v1-24-29_input_focus_offset: 0;--_ui5-v1-24-29_input_readonly_focus_offset: .125rem;--_ui5-v1-24-29_input_information_icon_padding: .625rem .625rem .5rem .625rem;--_ui5-v1-24-29_input_information_focused_icon_padding: .625rem .625rem .5625rem .625rem;--_ui5-v1-24-29_input_error_warning_icon_padding: .625rem .625rem .5rem .625rem;--_ui5-v1-24-29_input_error_warning_focused_icon_padding: .625rem .625rem .5625rem .625rem;--_ui5-v1-24-29_input_custom_icon_padding: .625rem .625rem .5625rem .625rem;--_ui5-v1-24-29_input_error_warning_custom_icon_padding: .625rem .625rem .5rem .625rem;--_ui5-v1-24-29_input_error_warning_custom_focused_icon_padding: .625rem .625rem .5625rem .625rem;--_ui5-v1-24-29_input_information_custom_icon_padding: .625rem .625rem .5rem .625rem;--_ui5-v1-24-29_input_information_custom_focused_icon_padding: .625rem .625rem .5625rem .625rem;--_ui5-v1-24-29_input_focus_outline_color: var(--sapField_Active_BorderColor);--_ui5-v1-24-29_input_icon_wrapper_height: calc(100% - 1px) ;--_ui5-v1-24-29_input_icon_wrapper_state_height: calc(100% - 2px) ;--_ui5-v1-24-29_input_icon_wrapper_success_state_height: calc(100% - var(--_ui5-v1-24-29_input_value_state_success_border_width));--_ui5-v1-24-29_input_icon_color: var(--sapContent_IconColor);--_ui5-v1-24-29_input_icon_pressed_bg: var(--sapButton_Selected_Background);--_ui5-v1-24-29_input_icon_padding: .625rem .625rem .5625rem .625rem;--_ui5-v1-24-29_input_icon_hover_bg: var(--sapField_Focus_Background);--_ui5-v1-24-29_input_icon_pressed_color: var(--sapButton_Active_TextColor);--_ui5-v1-24-29_input_icon_border_radius: .25rem;--_ui5-v1-24-29_input_icon_box_shadow: var(--sapField_Hover_Shadow);--_ui5-v1-24-29_input_icon_border: none;--_ui5-v1-24-29_input_error_icon_box_shadow: var(--sapContent_Negative_Shadow);--_ui5-v1-24-29_input_warning_icon_box_shadow: var(--sapContent_Critical_Shadow);--_ui5-v1-24-29_input_information_icon_box_shadow: var(--sapContent_Informative_Shadow);--_ui5-v1-24-29_input_success_icon_box_shadow: var(--sapContent_Positive_Shadow);--_ui5-v1-24-29_input_icon_error_pressed_color: var(--sapButton_Reject_Selected_TextColor);--_ui5-v1-24-29_input_icon_warning_pressed_color: var(--sapButton_Attention_Selected_TextColor);--_ui5-v1-24-29_input_icon_information_pressed_color: var(--sapButton_Selected_TextColor);--_ui5-v1-24-29_input_icon_success_pressed_color: var(--sapButton_Accept_Selected_TextColor);--_ui5-v1-24-29_link_focus_text_decoration: underline;--_ui5-v1-24-29_link_text_decoration: var(--sapLink_TextDecoration);--_ui5-v1-24-29_link_hover_text_decoration: var(--sapLink_Hover_TextDecoration);--_ui5-v1-24-29_link_focused_hover_text_decoration: none;--_ui5-v1-24-29_link_focused_hover_text_color: var(--sapContent_ContrastTextColor);--_ui5-v1-24-29_link_active_text_decoration: var(--sapLink_Active_TextDecoration);--_ui5-v1-24-29_link_outline: none;--_ui5-v1-24-29_link_focus_border-radius: .125rem;--_ui5-v1-24-29_link_focus_background_color: var(--sapContent_FocusColor);--_ui5-v1-24-29_link_focus_color: var(--sapContent_ContrastTextColor);--_ui5-v1-24-29_link_subtle_text_decoration: underline;--_ui5-v1-24-29_link_subtle_text_decoration_hover: none;--ui5-v1-24-29_list_footer_text_color: var(--sapList_FooterTextColor);--ui5-v1-24-29-listitem-background-color: var(--sapList_Background);--ui5-v1-24-29-listitem-border-bottom: var(--sapList_BorderWidth) solid var(--sapList_BorderColor);--ui5-v1-24-29-listitem-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);--ui5-v1-24-29-listitem-focused-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);--_ui5-v1-24-29_listitembase_focus_width: 1px;--_ui5-v1-24-29-listitembase_disabled_opacity: .5;--_ui5-v1-24-29_product_switch_item_border: none;--ui5-v1-24-29-listitem-active-border-color: var(--sapContent_FocusColor);--_ui5-v1-24-29_menu_item_padding: 0 1rem 0 .75rem;--_ui5-v1-24-29_menu_item_submenu_icon_right: 1rem;--_ui5-v1-24-29_menu_item_additional_text_start_margin: 1rem;--_ui5-v1-24-29_menu_popover_border_radius: var(--sapPopover_BorderCornerRadius);--_ui5-v1-24-29_monthpicker_item_border: none;--_ui5-v1-24-29_monthpicker_item_margin: 1px;--_ui5-v1-24-29_monthpicker_item_border_radius: .5rem;--_ui5-v1-24-29_monthpicker_item_focus_after_border: var(--_ui5-v1-24-29_button_focused_border);--_ui5-v1-24-29_monthpicker_item_focus_after_border_radius: .5rem;--_ui5-v1-24-29_monthpicker_item_focus_after_width: calc(100% - .5rem) ;--_ui5-v1-24-29_monthpicker_item_focus_after_height: calc(100% - .5rem) ;--_ui5-v1-24-29_monthpicker_item_focus_after_offset: .25rem;--_ui5-v1-24-29_monthpicker_item_selected_text_color: var(--sapContent_Selected_TextColor);--_ui5-v1-24-29_monthpicker_item_selected_background_color:var(--sapLegend_WorkingBackground);--_ui5-v1-24-29_monthpicker_item_selected_hover_color: var(--sapList_Hover_Background);--_ui5-v1-24-29_monthpicker_item_selected_box_shadow: none;--_ui5-v1-24-29_monthpicker_item_focus_after_outline: .125rem solid var(--sapSelectedColor);--_ui5-v1-24-29_monthpicker_item_selected_font_wieght: bold;--_ui5-v1-24-29_message_strip_icon_width: 2.5rem;--_ui5-v1-24-29_message_strip_button_border_width: 0;--_ui5-v1-24-29_message_strip_button_border_style: none;--_ui5-v1-24-29_message_strip_button_border_color: transparent;--_ui5-v1-24-29_message_strip_button_border_radius: 0;--_ui5-v1-24-29_message_strip_padding: .4375rem 2.5rem .4375rem 2.5rem;--_ui5-v1-24-29_message_strip_padding_block_no_icon: .4375rem .4375rem;--_ui5-v1-24-29_message_strip_padding_inline_no_icon: 1rem 2.5rem;--_ui5-v1-24-29_message_strip_button_height: 1.625rem;--_ui5-v1-24-29_message_strip_border_width: 1px;--_ui5-v1-24-29_message_strip_close_button_border: none;--_ui5-v1-24-29_message_strip_icon_top: .4375rem;--_ui5-v1-24-29_message_strip_focus_width: 1px;--_ui5-v1-24-29_message_strip_focus_offset: -2px;--_ui5-v1-24-29_message_strip_close_button_top: .125rem;--_ui5-v1-24-29_message_strip_close_button_right: .1875rem;--_ui5-v1-24-29_panel_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5-v1-24-29_panel_header_height: 2.75rem;--_ui5-v1-24-29_panel_button_root_width: 2.75rem;--_ui5-v1-24-29_panel_button_root_height: 2.75rem;--_ui5-v1-24-29_panel_header_padding_right: .5rem;--_ui5-v1-24-29_panel_header_button_wrapper_padding: .25rem;--_ui5-v1-24-29_panel_border_radius: var(--sapElement_BorderCornerRadius);--_ui5-v1-24-29_panel_border_bottom: none;--_ui5-v1-24-29_panel_default_header_border: .0625rem solid var(--sapGroup_TitleBorderColor);--_ui5-v1-24-29_panel_outline_offset: -.125rem;--_ui5-v1-24-29_panel_border_radius_expanded: var(--sapElement_BorderCornerRadius) var(--sapElement_BorderCornerRadius) 0 0;--_ui5-v1-24-29_panel_icon_color: var(--sapButton_Lite_TextColor);--_ui5-v1-24-29_panel_focus_offset: 0px;--_ui5-v1-24-29_panel_focus_bottom_offset: -1px;--_ui5-v1-24-29_panel_content_padding: .625rem 1rem;--_ui5-v1-24-29_panel_header_background_color: var(--sapGroup_TitleBackground);--_ui5-v1-24-29_popover_background: var(--sapGroup_ContentBackground);--_ui5-v1-24-29_popover_box_shadow: var(--sapContent_Shadow2);--_ui5-v1-24-29_popover_no_arrow_box_shadow: var(--sapContent_Shadow1);--_ui5-v1-24-29_popup_content_padding_s: 1rem;--_ui5-v1-24-29_popup_content_padding_m_l: 2rem;--_ui5-v1-24-29_popup_content_padding_xl: 3rem;--_ui5-v1-24-29_popup_header_footer_padding_s: 1rem;--_ui5-v1-24-29_popup_header_footer_padding_m_l: 2rem;--_ui5-v1-24-29_popup_header_footer_padding_xl: 3rem;--_ui5-v1-24-29_popup_viewport_margin: 10px;--_ui5-v1-24-29_popup_header_font_weight: 400;--_ui5-v1-24-29_popup_header_prop_header_text_alignment: flex-start;--_ui5-v1-24-29_popup_header_background: var(--sapPageHeader_Background);--_ui5-v1-24-29_popup_header_shadow: var(--sapContent_HeaderShadow);--_ui5-v1-24-29_popup_header_border: none;--_ui5-v1-24-29_popup_header_font_family: var(--sapFontHeaderFamily);--_ui5-v1-24-29_popup_border_radius: .5rem;--_ui5-v1-24-29_popup_block_layer_background: color-mix(in oklch, transparent, var(--sapBlockLayer_Background) 60%);--_ui5-v1-24-29_progress_indicator_bar_border_max: none;--_ui5-v1-24-29_progress_indicator_icon_visibility: inline-block;--_ui5-v1-24-29_progress_indicator_side_points_visibility: block;--_ui5-v1-24-29_progress_indicator_padding: 1.25rem 0 .75rem 0;--_ui5-v1-24-29_progress_indicator_padding_end: 1.25rem;--_ui5-v1-24-29_progress_indicator_host_height: unset;--_ui5-v1-24-29_progress_indicator_host_min_height: unset;--_ui5-v1-24-29_progress_indicator_host_box_sizing: border-box;--_ui5-v1-24-29_progress_indicator_root_position: relative;--_ui5-v1-24-29_progress_indicator_root_border_radius: .25rem;--_ui5-v1-24-29_progress_indicator_root_height: .375rem;--_ui5-v1-24-29_progress_indicator_root_min_height: .375rem;--_ui5-v1-24-29_progress_indicator_root_overflow: visible;--_ui5-v1-24-29_progress_indicator_bar_height: .625rem;--_ui5-v1-24-29_progress_indicator_bar_border_radius: .5rem;--_ui5-v1-24-29_progress_indicator_remaining_bar_border_radius: .25rem;--_ui5-v1-24-29_progress_indicator_remaining_bar_position: absolute;--_ui5-v1-24-29_progress_indicator_remaining_bar_width: 100%;--_ui5-v1-24-29_progress_indicator_remaining_bar_overflow: visible;--_ui5-v1-24-29_progress_indicator_icon_position: absolute;--_ui5-v1-24-29_progress_indicator_icon_right_position: -1.25rem;--_ui5-v1-24-29_progress_indicator_value_margin: 0 0 .1875rem 0;--_ui5-v1-24-29_progress_indicator_value_position: absolute;--_ui5-v1-24-29_progress_indicator_value_top_position: -1.3125rem;--_ui5-v1-24-29_progress_indicator_value_left_position: 0;--_ui5-v1-24-29_progress_indicator_background_none: var(--sapProgress_Background);--_ui5-v1-24-29_progress_indicator_background_error: var(--sapProgress_NegativeBackground);--_ui5-v1-24-29_progress_indicator_background_warning: var(--sapProgress_CriticalBackground);--_ui5-v1-24-29_progress_indicator_background_success: var(--sapProgress_PositiveBackground);--_ui5-v1-24-29_progress_indicator_background_information: var(--sapProgress_InformationBackground);--_ui5-v1-24-29_progress_indicator_value_state_none: var(--sapProgress_Value_Background);--_ui5-v1-24-29_progress_indicator_value_state_error: var(--sapProgress_Value_NegativeBackground);--_ui5-v1-24-29_progress_indicator_value_state_warning: var(--sapProgress_Value_CriticalBackground);--_ui5-v1-24-29_progress_indicator_value_state_success: var(--sapProgress_Value_PositiveBackground);--_ui5-v1-24-29_progress_indicator_value_state_information: var(--sapProgress_Value_InformationBackground);--_ui5-v1-24-29_progress_indicator_value_state_error_icon_color: var(--sapProgress_Value_NegativeTextColor);--_ui5-v1-24-29_progress_indicator_value_state_warning_icon_color: var(--sapProgress_Value_CriticalTextColor);--_ui5-v1-24-29_progress_indicator_value_state_success_icon_color: var(--sapProgress_Value_PositiveTextColor);--_ui5-v1-24-29_progress_indicator_value_state_information_icon_color: var(--sapProgress_Value_InformationTextColor);--_ui5-v1-24-29_progress_indicator_border: none;--_ui5-v1-24-29_progress_indicator_border_color_error: var(--sapErrorBorderColor);--_ui5-v1-24-29_progress_indicator_border_color_warning: var(--sapWarningBorderColor);--_ui5-v1-24-29_progress_indicator_border_color_success: var(--sapSuccessBorderColor);--_ui5-v1-24-29_progress_indicator_border_color_information: var(--sapInformationBorderColor);--_ui5-v1-24-29_progress_indicator_color: var(--sapField_TextColor);--_ui5-v1-24-29_progress_indicator_bar_color: var(--sapProgress_TextColor);--_ui5-v1-24-29_progress_indicator_icon_size: var(--sapFontLargeSize);--_ui5-v1-24-29_rating_indicator_item_height: 1em;--_ui5-v1-24-29_rating_indicator_item_width: 1em;--_ui5-v1-24-29_rating_indicator_component_spacing: .5rem 0px;--_ui5-v1-24-29_rating_indicator_border_radius: .25rem;--_ui5-v1-24-29_rating_indicator_outline_offset: .125rem;--_ui5-v1-24-29_rating_indicator_readonly_item_height: .75em;--_ui5-v1-24-29_rating_indicator_readonly_item_width: .75em;--_ui5-v1-24-29_rating_indicator_readonly_item_spacing: .1875rem .1875rem;--_ui5-v1-24-29_segmented_btn_inner_border: .0625rem solid transparent;--_ui5-v1-24-29_segmented_btn_inner_border_odd_child: .0625rem solid transparent;--_ui5-v1-24-29_segmented_btn_inner_pressed_border_odd_child: .0625rem solid var(--sapButton_Selected_BorderColor);--_ui5-v1-24-29_segmented_btn_inner_border_radius: var(--sapButton_BorderCornerRadius);--_ui5-v1-24-29_segmented_btn_background_color: var(--sapButton_Lite_Background);--_ui5-v1-24-29_segmented_btn_border_color: var(--sapButton_Lite_BorderColor);--_ui5-v1-24-29_segmented_btn_hover_box_shadow: none;--_ui5-v1-24-29_segmented_btn_item_border_left: .0625rem;--_ui5-v1-24-29_segmented_btn_item_border_right: .0625rem;--_ui5-v1-24-29_radio_button_min_width: 2.75rem;--_ui5-v1-24-29_radio_button_hover_fill_error: var(--sapField_Hover_Background);--_ui5-v1-24-29_radio_button_hover_fill_warning: var(--sapField_Hover_Background);--_ui5-v1-24-29_radio_button_hover_fill_success: var(--sapField_Hover_Background);--_ui5-v1-24-29_radio_button_hover_fill_information: var(--sapField_Hover_Background);--_ui5-v1-24-29_radio_button_checked_fill: var(--sapSelectedColor);--_ui5-v1-24-29_radio_button_checked_error_fill: var(--sapField_InvalidColor);--_ui5-v1-24-29_radio_button_checked_success_fill: var(--sapField_SuccessColor);--_ui5-v1-24-29_radio_button_checked_information_fill: var(--sapField_InformationColor);--_ui5-v1-24-29_radio_button_warning_error_border_dash: 0;--_ui5-v1-24-29_radio_button_outer_ring_color: var(--sapField_BorderColor);--_ui5-v1-24-29_radio_button_outer_ring_width: var(--sapField_BorderWidth);--_ui5-v1-24-29_radio_button_outer_ring_bg: var(--sapField_Background);--_ui5-v1-24-29_radio_button_outer_ring_hover_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_radio_button_outer_ring_active_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_radio_button_outer_ring_checked_hover_color: var(--sapField_Hover_BorderColor);--_ui5-v1-24-29_radio_button_outer_ring_padding_with_label: 0 .6875rem;--_ui5-v1-24-29_radio_button_border: none;--_ui5-v1-24-29_radio_button_focus_border: none;--_ui5-v1-24-29_radio_button_focus_outline: block;--_ui5-v1-24-29_radio_button_color: var(--sapField_BorderColor);--_ui5-v1-24-29_radio_button_label_offset: 1px;--_ui5-v1-24-29_radio_button_items_align: unset;--_ui5-v1-24-29_radio_button_information_border_width: var(--sapField_InformationBorderWidth);--_ui5-v1-24-29_radio_button_border_width: var(--sapContent_FocusWidth);--_ui5-v1-24-29_radio_button_border_radius: .5rem;--_ui5-v1-24-29_radio_button_label_color: var(--sapField_TextColor);--_ui5-v1-24-29_radio_button_inner_ring_radius: 27.5%;--_ui5-v1-24-29_radio_button_outer_ring_padding: 0 .6875rem;--_ui5-v1-24-29_radio_button_read_only_border_type: 4,2;--_ui5-v1-24-29_radio_button_inner_ring_color: var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_radio_button_checked_warning_fill: var(--sapField_WarningColor);--_ui5-v1-24-29_radio_button_read_only_inner_ring_color: var(--sapField_TextColor);--_ui5-v1-24-29_radio_button_read_only_border_width: var(--sapElement_BorderWidth);--_ui5-v1-24-29_radio_button_hover_fill: var(--sapContent_Selected_Hover_Background);--_ui5-v1-24-29_radio_button_focus_dist: .375rem;--_ui5-v1-24-29_switch_height: 2.75rem;--_ui5-v1-24-29_switch_foucs_border_size: 1px;--_ui5-v1-24-29-switch-root-border-radius: 0;--_ui5-v1-24-29-switch-root-box-shadow: none;--_ui5-v1-24-29-switch-focus: "";--_ui5-v1-24-29_switch_track_border_radius: .75rem;--_ui5-v1-24-29-switch-track-border: 1px solid;--_ui5-v1-24-29_switch_track_transition: none;--_ui5-v1-24-29_switch_handle_border_radius: 1rem;--_ui5-v1-24-29-switch-handle-icon-display: none;--_ui5-v1-24-29-switch-slider-texts-display: inline;--_ui5-v1-24-29_switch_width: 3.5rem;--_ui5-v1-24-29_switch_min_width: none;--_ui5-v1-24-29_switch_with_label_width: 3.875rem;--_ui5-v1-24-29_switch_focus_outline: none;--_ui5-v1-24-29_switch_root_after_outline: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_switch_root_after_boreder: none;--_ui5-v1-24-29_switch_root_after_boreder_radius: 1rem;--_ui5-v1-24-29_switch_root_outline_top: .5rem;--_ui5-v1-24-29_switch_root_outline_bottom: .5rem;--_ui5-v1-24-29_switch_root_outline_left: .375rem;--_ui5-v1-24-29_switch_root_outline_right: .375rem;--_ui5-v1-24-29_switch_disabled_opacity: var(--sapContent_DisabledOpacity);--_ui5-v1-24-29_switch_transform: translateX(100%) translateX(-1.625rem);--_ui5-v1-24-29_switch_transform_with_label: translateX(100%) translateX(-1.875rem);--_ui5-v1-24-29_switch_rtl_transform: translateX(-100%) translateX(1.625rem);--_ui5-v1-24-29_switch_rtl_transform_with_label: translateX(-100%) translateX(1.875rem);--_ui5-v1-24-29_switch_track_width: 2.5rem;--_ui5-v1-24-29_switch_track_height: 1.5rem;--_ui5-v1-24-29_switch_track_with_label_width: 2.875rem;--_ui5-v1-24-29_switch_track_with_label_height: 1.5rem;--_ui5-v1-24-29_switch_track_active_background_color: var(--sapButton_Track_Selected_Background);--_ui5-v1-24-29_switch_track_inactive_background_color: var(--sapButton_Track_Background);--_ui5-v1-24-29_switch_track_hover_active_background_color: var(--sapButton_Track_Selected_Hover_Background);--_ui5-v1-24-29_switch_track_hover_inactive_background_color: var(--sapButton_Track_Hover_Background);--_ui5-v1-24-29_switch_track_active_border_color: var(--sapButton_Track_Selected_BorderColor);--_ui5-v1-24-29_switch_track_inactive_border_color: var(--sapButton_Track_BorderColor);--_ui5-v1-24-29_switch_track_hover_active_border_color: var(--sapButton_Track_Selected_Hover_BorderColor);--_ui5-v1-24-29_switch_track_hover_inactive_border_color: var(--sapButton_Track_Hover_BorderColor);--_ui5-v1-24-29_switch_track_semantic_accept_background_color: var(--sapButton_Track_Positive_Background);--_ui5-v1-24-29_switch_track_semantic_reject_background_color: var(--sapButton_Track_Negative_Background);--_ui5-v1-24-29_switch_track_semantic_hover_accept_background_color: var(--sapButton_Track_Positive_Hover_Background);--_ui5-v1-24-29_switch_track_semantic_hover_reject_background_color: var(--sapButton_Track_Negative_Hover_Background);--_ui5-v1-24-29_switch_track_semantic_accept_border_color: var(--sapButton_Track_Positive_BorderColor);--_ui5-v1-24-29_switch_track_semantic_reject_border_color: var(--sapButton_Track_Negative_BorderColor);--_ui5-v1-24-29_switch_track_semantic_hover_accept_border_color: var(--sapButton_Track_Positive_Hover_BorderColor);--_ui5-v1-24-29_switch_track_semantic_hover_reject_border_color: var(--sapButton_Track_Negative_Hover_BorderColor);--_ui5-v1-24-29_switch_track_icon_display: inline-block;--_ui5-v1-24-29_switch_handle_width: 1.5rem;--_ui5-v1-24-29_switch_handle_height: 1.25rem;--_ui5-v1-24-29_switch_handle_with_label_width: 1.75rem;--_ui5-v1-24-29_switch_handle_with_label_height: 1.25rem;--_ui5-v1-24-29_switch_handle_border: var(--_ui5-v1-24-29_switch_handle_border_width) solid var(--sapButton_Handle_BorderColor);--_ui5-v1-24-29_switch_handle_border_width: .125rem;--_ui5-v1-24-29_switch_handle_active_background_color: var(--sapButton_Handle_Selected_Background);--_ui5-v1-24-29_switch_handle_inactive_background_color: var(--sapButton_Handle_Background);--_ui5-v1-24-29_switch_handle_hover_active_background_color: var(--sapButton_Handle_Selected_Hover_Background);--_ui5-v1-24-29_switch_handle_hover_inactive_background_color: var(--sapButton_Handle_Hover_Background);--_ui5-v1-24-29_switch_handle_active_border_color: var(--sapButton_Handle_Selected_BorderColor);--_ui5-v1-24-29_switch_handle_inactive_border_color: var(--sapButton_Handle_BorderColor);--_ui5-v1-24-29_switch_handle_hover_active_border_color: var(--sapButton_Handle_Selected_BorderColor);--_ui5-v1-24-29_switch_handle_hover_inactive_border_color: var(--sapButton_Handle_BorderColor);--_ui5-v1-24-29_switch_handle_semantic_accept_background_color: var(--sapButton_Handle_Positive_Background);--_ui5-v1-24-29_switch_handle_semantic_reject_background_color: var(--sapButton_Handle_Negative_Background);--_ui5-v1-24-29_switch_handle_semantic_hover_accept_background_color: var(--sapButton_Handle_Positive_Hover_Background);--_ui5-v1-24-29_switch_handle_semantic_hover_reject_background_color: var(--sapButton_Handle_Negative_Hover_Background);--_ui5-v1-24-29_switch_handle_semantic_accept_border_color: var(--sapButton_Handle_Positive_BorderColor);--_ui5-v1-24-29_switch_handle_semantic_reject_border_color: var(--sapButton_Handle_Negative_BorderColor);--_ui5-v1-24-29_switch_handle_semantic_hover_accept_border_color: var(--sapButton_Handle_Positive_BorderColor);--_ui5-v1-24-29_switch_handle_semantic_hover_reject_border_color: var(--sapButton_Handle_Negative_BorderColor);--_ui5-v1-24-29_switch_handle_on_hover_box_shadow: 0 0 0 .125rem var(--sapButton_Handle_Selected_Hover_BorderColor);--_ui5-v1-24-29_switch_handle_off_hover_box_shadow: 0 0 0 .125rem var(--sapButton_Handle_Hover_BorderColor);--_ui5-v1-24-29_switch_handle_semantic_on_hover_box_shadow: 0 0 0 .125rem var(--sapButton_Handle_Positive_Hover_BorderColor);--_ui5-v1-24-29_switch_handle_semantic_off_hover_box_shadow: 0 0 0 .125rem var(--sapButton_Handle_Negative_Hover_BorderColor);--_ui5-v1-24-29_switch_handle_left: .0625rem;--_ui5-v1-24-29_switch_text_font_family: var(--sapContent_IconFontFamily);--_ui5-v1-24-29_switch_text_font_size: var(--sapFontLargeSize);--_ui5-v1-24-29_switch_text_width: 1.25rem;--_ui5-v1-24-29_switch_text_with_label_font_family: "72-Condensed-Bold" , "72" , "72full" , Arial, Helvetica, sans-serif;--_ui5-v1-24-29_switch_text_with_label_font_size: var(--sapFontSmallSize);--_ui5-v1-24-29_switch_text_with_label_width: 1.75rem;--_ui5-v1-24-29_switch_text_inactive_left: .1875rem;--_ui5-v1-24-29_switch_text_inactive_left_alternate: .0625rem;--_ui5-v1-24-29_switch_text_inactive_right: auto;--_ui5-v1-24-29_switch_text_inactive_right_alternate: 0;--_ui5-v1-24-29_switch_text_active_left: .1875rem;--_ui5-v1-24-29_switch_text_active_left_alternate: .0625rem;--_ui5-v1-24-29_switch_text_active_right: auto;--_ui5-v1-24-29_switch_text_active_color: var(--sapButton_Handle_Selected_TextColor);--_ui5-v1-24-29_switch_text_inactive_color: var(--sapButton_Handle_TextColor);--_ui5-v1-24-29_switch_text_semantic_accept_color: var(--sapButton_Handle_Positive_TextColor);--_ui5-v1-24-29_switch_text_semantic_reject_color: var(--sapButton_Handle_Negative_TextColor);--_ui5-v1-24-29_switch_text_overflow: hidden;--_ui5-v1-24-29_switch_text_z_index: 1;--_ui5-v1-24-29_switch_text_hidden: hidden;--_ui5-v1-24-29_switch_text_min_width: none;--_ui5-v1-24-29_switch_icon_width: 1rem;--_ui5-v1-24-29_switch_icon_height: 1rem;--_ui5-v1-24-29_select_disabled_background: var(--sapField_Background);--_ui5-v1-24-29_select_disabled_border_color: var(--sapField_BorderColor);--_ui5-v1-24-29_select_state_error_warning_border_style: solid;--_ui5-v1-24-29_select_state_error_warning_border_width: .125rem;--_ui5-v1-24-29_select_focus_width: 1px;--_ui5-v1-24-29_select_label_color: var(--sapField_TextColor);--_ui5-v1-24-29_select_hover_icon_left_border: none;--_ui5-v1-24-29_select_option_focus_border_radius: var(--sapElement_BorderCornerRadius);--_ui5-v1-24-29_split_button_host_transparent_hover_background: transparent;--_ui5-v1-24-29_split_button_transparent_disabled_background: transparent;--_ui5-v1-24-29_split_button_host_default_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_BorderColor);--_ui5-v1-24-29_split_button_host_attention_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_Attention_BorderColor);--_ui5-v1-24-29_split_button_host_emphasized_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_Emphasized_BorderColor);--_ui5-v1-24-29_split_button_host_positive_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_Accept_BorderColor);--_ui5-v1-24-29_split_button_host_negative_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_Reject_BorderColor);--_ui5-v1-24-29_split_button_host_transparent_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_Lite_BorderColor);--_ui5-v1-24-29_split_text_button_border_color: transparent;--_ui5-v1-24-29_split_text_button_background_color: transparent;--_ui5-v1-24-29_split_text_button_emphasized_border: var(--sapButton_BorderWidth) solid var(--sapButton_Emphasized_BorderColor);--_ui5-v1-24-29_split_text_button_emphasized_border_width: .0625rem;--_ui5-v1-24-29_split_text_button_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_text_button_emphasized_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Emphasized_BorderColor);--_ui5-v1-24-29_split_text_button_positive_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Accept_BorderColor);--_ui5-v1-24-29_split_text_button_negative_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Reject_BorderColor);--_ui5-v1-24-29_split_text_button_attention_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Attention_BorderColor);--_ui5-v1-24-29_split_text_button_transparent_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_arrow_button_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_arrow_button_emphasized_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Emphasized_BorderColor);--_ui5-v1-24-29_split_arrow_button_emphasized_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_Emphasized_BorderColor);--_ui5-v1-24-29_split_arrow_button_positive_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Accept_BorderColor);--_ui5-v1-24-29_split_arrow_button_negative_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Reject_BorderColor);--_ui5-v1-24-29_split_arrow_button_attention_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_Attention_BorderColor);--_ui5-v1-24-29_split_arrow_button_transparent_hover_border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_text_button_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_text_button_emphasized_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_Emphasized_BorderColor);--_ui5-v1-24-29_split_text_button_positive_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_Accept_BorderColor);--_ui5-v1-24-29_split_text_button_negative_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_Reject_BorderColor);--_ui5-v1-24-29_split_text_button_attention_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_Attention_BorderColor);--_ui5-v1-24-29_split_text_button_transparent_hover_border_left: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_button_focused_border: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_split_button_focused_border_radius: .375rem;--_ui5-v1-24-29_split_button_hover_border_radius: var(--_ui5-v1-24-29_button_border_radius);--_ui5-v1-24-29_split_button_middle_separator_width: 0;--_ui5-v1-24-29_split_button_middle_separator_left: -.0625rem;--_ui5-v1-24-29_split_button_middle_separator_hover_display: none;--_ui5-v1-24-29_split_button_text_button_width: 2.375rem;--_ui5-v1-24-29_split_button_text_button_right_border_width: .0625rem;--_ui5-v1-24-29_split_button_transparent_hover_background: var(--sapButton_Lite_Hover_Background);--_ui5-v1-24-29_split_button_transparent_hover_color: var(--sapButton_TextColor);--_ui5-v1-24-29_split_button_host_transparent_hover_box_shadow: inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_BorderColor);--_ui5-v1-24-29_split_button_inner_focused_border_radius_outer: .375rem;--_ui5-v1-24-29_split_button_inner_focused_border_radius_inner: .375rem;--_ui5-v1-24-29_split_button_emphasized_separator_color: transparent;--_ui5-v1-24-29_split_button_positive_separator_color: transparent;--_ui5-v1-24-29_split_button_negative_separator_color: transparent;--_ui5-v1-24-29_split_button_attention_separator_color: transparent;--_ui5-v1-24-29_split_button_attention_separator_color_default: var(--sapButton_Attention_TextColor);--_ui5-v1-24-29_split_text_button_hover_border_right: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_text_button_emphasized_hover_border_right: none;--_ui5-v1-24-29_split_text_button_positive_hover_border_right: var(--sapButton_BorderWidth) solid var(--sapButton_Accept_BorderColor);--_ui5-v1-24-29_split_text_button_negative_hover_border_right: var(--sapButton_BorderWidth) solid var(--sapButton_Reject_BorderColor);--_ui5-v1-24-29_split_text_button_attention_hover_border_right: var(--sapButton_BorderWidth) solid var(--sapButton_Attention_BorderColor);--_ui5-v1-24-29_split_text_button_transparent_hover_border_right: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);--_ui5-v1-24-29_split_button_middle_separator_hover_display_emphasized: none;--_ui5-v1-24-29_tc_header_height: var(--_ui5-v1-24-29_tc_item_height);--_ui5-v1-24-29_tc_header_height_text_only: var(--_ui5-v1-24-29_tc_item_text_only_height);--_ui5-v1-24-29_tc_header_height_text_with_additional_text: var(--_ui5-v1-24-29_tc_item_text_only_with_additional_text_height);--_ui5-v1-24-29_tc_header_box_shadow: var(--sapContent_HeaderShadow);--_ui5-v1-24-29_tc_header_background: var(--sapObjectHeader_Background);--_ui5-v1-24-29_tc_header_background_translucent: var(--sapObjectHeader_Background);--_ui5-v1-24-29_tc_content_background: var(--sapBackgroundColor);--_ui5-v1-24-29_tc_content_background_translucent: var(--sapGroup_ContentBackground);--_ui5-v1-24-29_tc_headeritem_padding: 1rem;--_ui5-v1-24-29_tc_headerItem_additional_text_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_tc_headerItem_text_selected_color: var(--sapSelectedColor);--_ui5-v1-24-29_tc_headerItem_text_selected_hover_color: var(--sapSelectedColor);--_ui5-v1-24-29_tc_headerItem_additional_text_font_weight: normal;--_ui5-v1-24-29_tc_headerItem_neutral_color: var(--sapNeutralTextColor);--_ui5-v1-24-29_tc_headerItem_positive_color: var(--sapPositiveTextColor);--_ui5-v1-24-29_tc_headerItem_negative_color: var(--sapNegativeTextColor);--_ui5-v1-24-29_tc_headerItem_critical_color: var(--sapCriticalTextColor);--_ui5-v1-24-29_tc_headerItem_neutral_border_color: var(--sapNeutralElementColor);--_ui5-v1-24-29_tc_headerItem_positive_border_color: var(--sapPositiveElementColor);--_ui5-v1-24-29_tc_headerItem_negative_border_color: var(--sapNegativeElementColor);--_ui5-v1-24-29_tc_headerItem_critical_border_color: var(--sapCriticalElementColor);--_ui5-v1-24-29_tc_headerItem_neutral_selected_border_color: var(--_ui5-v1-24-29_tc_headerItem_neutral_color);--_ui5-v1-24-29_tc_headerItem_positive_selected_border_color: var(--_ui5-v1-24-29_tc_headerItem_positive_color);--_ui5-v1-24-29_tc_headerItem_negative_selected_border_color: var(--_ui5-v1-24-29_tc_headerItem_negative_color);--_ui5-v1-24-29_tc_headerItem_critical_selected_border_color: var(--_ui5-v1-24-29_tc_headerItem_critical_color);--_ui5-v1-24-29_tc_headerItem_transition: none;--_ui5-v1-24-29_tc_headerItem_hover_border_visibility: hidden;--_ui5-v1-24-29_tc_headerItemContent_border_radius: .125rem .125rem 0 0;--_ui5-v1-24-29_tc_headerItemContent_border_bg: transparent;--_ui5-v1-24-29_tc_headerItem_neutral_border_bg: transparent;--_ui5-v1-24-29_tc_headerItem_positive_border_bg: transparent;--_ui5-v1-24-29_tc_headerItem_negative_border_bg: transparent;--_ui5-v1-24-29_tc_headerItem_critical_border_bg: transparent;--_ui5-v1-24-29_tc_headerItemContent_border_height: 0;--_ui5-v1-24-29_tc_headerItemContent_focus_offset: 1rem;--_ui5-v1-24-29_tc_headerItem_text_focus_border_offset_left: 0px;--_ui5-v1-24-29_tc_headerItem_text_focus_border_offset_right: 0px;--_ui5-v1-24-29_tc_headerItem_text_focus_border_offset_top: 0px;--_ui5-v1-24-29_tc_headerItem_text_focus_border_offset_bottom: 0px;--_ui5-v1-24-29_tc_headerItem_mixed_mode_focus_border_offset_left: .75rem;--_ui5-v1-24-29_tc_headerItem_mixed_mode_focus_border_offset_right: .625rem;--_ui5-v1-24-29_tc_headerItem_mixed_mode_focus_border_offset_top: .75rem;--_ui5-v1-24-29_tc_headerItem_mixed_mode_focus_border_offset_bottom: .75rem;--_ui5-v1-24-29_tc_headerItemContent_focus_border: none;--_ui5-v1-24-29_tc_headerItemContent_default_focus_border: none;--_ui5-v1-24-29_tc_headerItemContent_focus_border_radius: 0;--_ui5-v1-24-29_tc_headerItemSemanticIcon_display: none;--_ui5-v1-24-29_tc_headerItemSemanticIcon_size: .75rem;--_ui5-v1-24-29_tc_mixedMode_itemText_font_family: var(--sapFontFamily);--_ui5-v1-24-29_tc_mixedMode_itemText_font_size: var(--sapFontSmallSize);--_ui5-v1-24-29_tc_mixedMode_itemText_font_weight: normal;--_ui5-v1-24-29_tc_overflowItem_positive_color: var(--sapPositiveColor);--_ui5-v1-24-29_tc_overflowItem_negative_color: var(--sapNegativeColor);--_ui5-v1-24-29_tc_overflowItem_critical_color: var(--sapCriticalColor);--_ui5-v1-24-29_tc_overflowItem_focus_offset: .125rem;--_ui5-v1-24-29_tc_overflowItem_extraIndent: 0rem;--_ui5-v1-24-29_tc_headerItemIcon_positive_selected_background: var(--sapPositiveColor);--_ui5-v1-24-29_tc_headerItemIcon_negative_selected_background: var(--sapNegativeColor);--_ui5-v1-24-29_tc_headerItemIcon_critical_selected_background: var(--sapCriticalColor);--_ui5-v1-24-29_tc_headerItemIcon_neutral_selected_background: var(--sapNeutralColor);--_ui5-v1-24-29_tc_headerItemIcon_semantic_selected_color: var(--sapGroup_ContentBackground);--_ui5-v1-24-29_tc_header_border_bottom: .0625rem solid var(--sapObjectHeader_Background);--_ui5-v1-24-29_tc_headerItemContent_border_bottom: .1875rem solid var(--sapSelectedColor);--_ui5-v1-24-29_tc_headerItem_color: var(--sapTextColor);--_ui5-v1-24-29_tc_overflowItem_default_color: var(--sapTextColor);--_ui5-v1-24-29_tc_overflowItem_current_color: CurrentColor;--_ui5-v1-24-29_tc_content_border_bottom: .0625rem solid var(--sapObjectHeader_BorderColor);--_ui5-v1-24-29_tc_headerItem_expand_button_margin_inline_start: 0rem;--_ui5-v1-24-29_tc_headerItem_single_click_expand_button_margin_inline_start: .25rem;--_ui5-v1-24-29_tc_headerItem_expand_button_border_radius: .25rem;--_ui5-v1-24-29_tc_headerItem_expand_button_separator_display: inline-block;--_ui5-v1-24-29_tc_headerItem_focus_border: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_tc_headerItem_focus_border_offset: -5px;--_ui5-v1-24-29_tc_headerItemIcon_focus_border_radius: 50%;--_ui5-v1-24-29_tc_headerItem_focus_border_radius: .375rem;--_ui5-v1-24-29_tc_headeritem_text_font_weight: bold;--_ui5-v1-24-29_tc_headerItem_focus_offset: 1px;--_ui5-v1-24-29_tc_headerItem_text_hover_color: var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_tc_headerItemIcon_border: .125rem solid var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_tc_headerItemIcon_color: var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_tc_headerItemIcon_selected_background: var(--sapContent_Selected_ForegroundColor);--_ui5-v1-24-29_tc_headerItemIcon_background_color: var(--sapContent_Selected_Background);--_ui5-v1-24-29_tc_headerItemIcon_selected_color: var(--sapContent_ContrastIconColor);--_ui5-v1-24-29_tc_mixedMode_itemText_color: var(--sapTextColor);--_ui5-v1-24-29_tc_overflow_text_color: var(--sapTextColor);--_ui5-v1-24-29_textarea_state_border_width: .125rem;--_ui5-v1-24-29_textarea_information_border_width: .125rem;--_ui5-v1-24-29_textarea_placeholder_font_style: italic;--_ui5-v1-24-29_textarea_value_state_error_warning_placeholder_font_weight: normal;--_ui5-v1-24-29_textarea_error_placeholder_font_style: italic;--_ui5-v1-24-29_textarea_error_placeholder_color: var(--sapField_PlaceholderTextColor);--_ui5-v1-24-29_textarea_error_hover_background_color: var(--sapField_Hover_Background);--_ui5-v1-24-29_textarea_disabled_opacity: .4;--_ui5-v1-24-29_textarea_focus_pseudo_element_content: "";--_ui5-v1-24-29_textarea_min_height: 2.25rem;--_ui5-v1-24-29_textarea_padding_right_and_left_readonly: .5625rem;--_ui5-v1-24-29_textarea_padding_top_readonly: .4375rem;--_ui5-v1-24-29_textarea_exceeded_text_height: 1rem;--_ui5-v1-24-29_textarea_hover_border: none;--_ui5-v1-24-29_textarea_focus_border_radius: .25rem;--_ui5-v1-24-29_textarea_error_warning_border_style: none;--_ui5-v1-24-29_textarea_line_height: 1.5;--_ui5-v1-24-29_textarea_focused_value_state_error_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_textarea_focused_value_state_warning_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_textarea_focused_value_state_success_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_textarea_focused_value_state_information_background: var(--sapField_Hover_Background);--_ui5-v1-24-29_textarea_focused_value_state_error_focus_outline_color: var(--sapField_InvalidColor);--_ui5-v1-24-29_textarea_focused_value_state_warning_focus_outline_color: var(--sapField_WarningColor);--_ui5-v1-24-29_textarea_focused_value_state_success_focus_outline_color: var(--sapField_SuccessColor);--_ui5-v1-24-29_textarea_focus_offset: 0;--_ui5-v1-24-29_textarea_readonly_focus_offset: 1px;--_ui5-v1-24-29_textarea_focus_outline_color: var(--sapField_Active_BorderColor);--_ui5-v1-24-29_textarea_value_state_focus_offset: 0;--_ui5-v1-24-29_textarea_wrapper_padding: .0625rem;--_ui5-v1-24-29_textarea_success_wrapper_padding: .0625rem;--_ui5-v1-24-29_textarea_warning_error_wrapper_padding: .0625rem .0625rem .125rem .0625rem;--_ui5-v1-24-29_textarea_information_wrapper_padding: .0625rem .0625rem .125rem .0625rem;--_ui5-v1-24-29_textarea_padding_bottom_readonly: .375rem;--_ui5-v1-24-29_textarea_padding_top_error_warning: .5rem;--_ui5-v1-24-29_textarea_padding_bottom_error_warning: .4375rem;--_ui5-v1-24-29_textarea_padding_top_information: .5rem;--_ui5-v1-24-29_textarea_padding_bottom_information: .4375rem;--_ui5-v1-24-29_textarea_padding_right_and_left: .625rem;--_ui5-v1-24-29_textarea_padding_right_and_left_error_warning: .625rem;--_ui5-v1-24-29_textarea_padding_right_and_left_information: .625rem;--_ui5-v1-24-29_textarea_readonly_border_style: dashed;--_ui5-v1-24-29_time_picker_border: .0625rem solid transparent;--_ui5-v1-24-29-time_picker_border_radius: .25rem;--_ui5-v1-24-29_toast_vertical_offset: 3rem;--_ui5-v1-24-29_toast_horizontal_offset: 2rem;--_ui5-v1-24-29_toast_background: var(--sapList_Background);--_ui5-v1-24-29_toast_shadow: var(--sapContent_Shadow2);--_ui5-v1-24-29_toast_offset_width: -.1875rem;--_ui5-v1-24-29_wheelslider_item_text_size: var(--sapFontSize);--_ui5-v1-24-29_wheelslider_label_text_size: var(--sapFontSmallSize);--_ui5-v1-24-29_wheelslider_selection_frame_margin_top: calc(var(--_ui5-v1-24-29_wheelslider_item_height) * 2);--_ui5-v1-24-29_wheelslider_mobile_selection_frame_margin_top: calc(var(--_ui5-v1-24-29_wheelslider_item_height) * 4);--_ui5-v1-24-29_wheelslider_label_text_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_wheelslider_height: 240px;--_ui5-v1-24-29_wheelslider_mobile_height: 432px;--_ui5-v1-24-29_wheelslider_item_width: 48px;--_ui5-v1-24-29_wheelslider_item_height: 46px;--_ui5-v1-24-29_wheelslider_arrows_visibility: hidden;--_ui5-v1-24-29_wheelslider_item_background_color: var(--sapLegend_WorkingBackground);--_ui5-v1-24-29_wheelslider_item_text_color: var(--sapTextColor);--_ui_wheelslider_item_hover_color: var(--sapList_AlternatingBackground);--_ui_wheelslider_item_expanded_hover_color: var(--sapList_AlternatingBackground);--_ui_wheelslider_item_exanded_hover_color: var(--sapList_AlternatingBackground);--_ui5-v1-24-29_wheelslider_item_border_color: var(--sapList_SelectionBorderColor);--_ui5-v1-24-29_wheelslider_item_expanded_border_color: transparent;--_ui5-v1-24-29_wheelslider_item_hovered_border_color: transparent;--_ui5-v1-24-29_wheelslider_collapsed_item_text_color: var(--sapList_SelectionBorderColor);--_ui5-v1-24-29_wheelslider_selected_item_background_color: var(--sapContent_Selected_Background);--_ui5-v1-24-29_wheelslider_selected_item_hover_background_color: var(--sapButton_Emphasized_Hover_BorderColor);--_ui5-v1-24-29_wheelslider_active_item_background_color:var(--sapContent_Selected_Background);--_ui5-v1-24-29_wheelslider_active_item_text_color: var(--sapContent_Selected_TextColor);--_ui5-v1-24-29_wheelslider_selection_frame_color: var(--sapList_SelectionBorderColor);--_ui_wheelslider_item_border_radius: var(--_ui5-v1-24-29_button_border_radius);--_ui5-v1-24-29_toggle_button_pressed_focussed: var(--sapButton_Selected_BorderColor);--_ui5-v1-24-29_toggle_button_pressed_focussed_hovered: var(--sapButton_Selected_BorderColor);--_ui5-v1-24-29_toggle_button_selected_positive_text_color: var(--sapButton_Selected_TextColor);--_ui5-v1-24-29_toggle_button_selected_negative_text_color: var(--sapButton_Selected_TextColor);--_ui5-v1-24-29_toggle_button_selected_attention_text_color: var(--sapButton_Selected_TextColor);--_ui5-v1-24-29_toggle_button_emphasized_pressed_focussed_hovered: var(--sapContent_FocusColor);--_ui5-v1-24-29_toggle_button_emphasized_text_shadow: none;--_ui5-v1-24-29_yearpicker_item_selected_focus: var(--sapContent_Selected_Background);--_ui5-v1-24-29_yearpicker_item_border: none;--_ui5-v1-24-29_yearpicker_item_margin: 1px;--_ui5-v1-24-29_yearpicker_item_border_radius: .5rem;--_ui5-v1-24-29_yearpicker_item_focus_after_offset: .25rem;--_ui5-v1-24-29_yearpicker_item_focus_after_border: var(--_ui5-v1-24-29_button_focused_border);--_ui5-v1-24-29_yearpicker_item_focus_after_border_radius: .5rem;--_ui5-v1-24-29_yearpicker_item_focus_after_width: calc(100% - .5rem) ;--_ui5-v1-24-29_yearpicker_item_focus_after_height: calc(100% - .5rem) ;--_ui5-v1-24-29_yearpicker_item_selected_background_color: transparent;--_ui5-v1-24-29_yearpicker_item_selected_text_color: var(--sapContent_Selected_TextColor);--_ui5-v1-24-29_yearpicker_item_selected_box_shadow: none;--_ui5-v1-24-29_yearpicker_item_selected_hover_color: var(--sapList_Hover_Background);--_ui5-v1-24-29_yearpicker_item_focus_after_outline: none;--_ui5-v1-24-29_calendar_header_middle_button_width: 6.25rem;--_ui5-v1-24-29_calendar_header_middle_button_flex: 1 1 auto;--_ui5-v1-24-29_calendar_header_middle_button_focus_after_display: block;--_ui5-v1-24-29_calendar_header_middle_button_focus_after_width: calc(100% - .375rem) ;--_ui5-v1-24-29_calendar_header_middle_button_focus_after_height: calc(100% - .375rem) ;--_ui5-v1-24-29_calendar_header_middle_button_focus_after_top_offset: .125rem;--_ui5-v1-24-29_calendar_header_middle_button_focus_after_left_offset: .125rem;--_ui5-v1-24-29_calendar_header_arrow_button_border: none;--_ui5-v1-24-29_calendar_header_arrow_button_border_radius: .5rem;--_ui5-v1-24-29_calendar_header_button_background_color: var(--sapButton_Lite_Background);--_ui5-v1-24-29_calendar_header_arrow_button_box_shadow: 0 0 .125rem 0 rgb(85 107 130 / 72%);--_ui5-v1-24-29_calendar_header_middle_button_focus_border_radius: .5rem;--_ui5-v1-24-29_calendar_header_middle_button_focus_border: none;--_ui5-v1-24-29_calendar_header_middle_button_focus_after_border: none;--_ui5-v1-24-29_calendar_header_middle_button_focus_background: transparent;--_ui5-v1-24-29_calendar_header_middle_button_focus_outline: .125rem solid var(--sapSelectedColor);--_ui5-v1-24-29_calendar_header_middle_button_focus_active_outline: .0625rem solid var(--sapSelectedColor);--_ui5-v1-24-29_calendar_header_middle_button_focus_active_background: transparent;--_ui5-v1-24-29_token_background: var(--sapButton_TokenBackground);--_ui5-v1-24-29_token_readonly_background: var(--sapButton_TokenBackground);--_ui5-v1-24-29_token_readonly_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_token_right_margin: .3125rem;--_ui5-v1-24-29_token_padding: .25rem 0;--_ui5-v1-24-29_token_left_padding: .3125rem;--_ui5-v1-24-29_token_focused_selected_border: 1px solid var(--sapButton_Selected_BorderColor);--_ui5-v1-24-29_token_focus_offset: -.25rem;--_ui5-v1-24-29_token_focus_outline_width: .0625rem;--_ui5-v1-24-29_token_hover_border_color: var(--sapButton_TokenBorderColor);--_ui5-v1-24-29_token_selected_focus_outline: none;--_ui5-v1-24-29_token_focus_outline: none;--_ui5-v1-24-29_token_outline_offset: .125rem;--_ui5-v1-24-29_token_selected_hover_border_color: var(--sapButton_Selected_BorderColor);--ui5-v1-24-29_token_focus_pseudo_element_content: "";--_ui5-v1-24-29_token_border_radius: .375rem;--_ui5-v1-24-29_token_focus_outline_border_radius: .5rem;--_ui5-v1-24-29_token_text_color: var(--sapTextColor);--_ui5-v1-24-29_token_selected_text_font_family: var(--sapFontSemiboldDuplexFamily);--_ui5-v1-24-29_token_selected_internal_border_bottom: .125rem solid var(--sapButton_Selected_BorderColor);--_ui5-v1-24-29_token_selected_internal_border_bottom_radius: .1875rem;--_ui5-v1-24-29_token_text_icon_top: .0625rem;--_ui5-v1-24-29_token_selected_focused_offset_bottom: -.375rem;--_ui5-v1-24-29_token_readonly_padding: .25rem .3125rem;--_ui5-v1-24-29_tokenizer-popover_offset: .3125rem;--_ui5-v1-24-29_tokenizer_n_more_text_color: var(--sapLinkColor);--_ui5-v1-24-29-multi_combobox_token_margin_top: 1px;--_ui5-v1-24-29_slider_progress_container_dot_background: var(--sapField_BorderColor);--_ui5-v1-24-29_slider_progress_border: none;--_ui5-v1-24-29_slider_padding: 1.406rem 1.0625rem;--_ui5-v1-24-29_slider_inner_height: .25rem;--_ui5-v1-24-29_slider_outer_height: 1.6875rem;--_ui5-v1-24-29_slider_progress_border_radius: .25rem;--_ui5-v1-24-29_slider_tickmark_bg: var(--sapField_BorderColor);--_ui5-v1-24-29_slider_handle_margin_left: calc(-1 * (var(--_ui5-v1-24-29_slider_handle_width) / 2));--_ui5-v1-24-29_slider_handle_outline_offset: .075rem;--_ui5-v1-24-29_slider_progress_outline: .0625rem dotted var(--sapContent_FocusColor);--_ui5-v1-24-29_slider_progress_outline_offset: -.8125rem;--_ui5-v1-24-29_slider_disabled_opacity: .4;--_ui5-v1-24-29_slider_tooltip_border_color: var(--sapField_BorderColor);--_ui5-v1-24-29_range_slider_handle_background_focus: transparent;--_ui5-v1-24-29_slider_progress_box_sizing: content-box;--_ui5-v1-24-29_range_slider_focus_outline_width: 100%;--_ui5-v1-24-29_slider_progress_outline_offset_left: 0;--_ui5-v1-24-29_range_slider_focus_outline_radius: 0;--_ui5-v1-24-29_slider_progress_container_top: 0;--_ui5-v1-24-29_slider_progress_height: 100%;--_ui5-v1-24-29_slider_active_progress_border: none;--_ui5-v1-24-29_slider_active_progress_left: 0;--_ui5-v1-24-29_slider_active_progress_top: 0;--_ui5-v1-24-29_slider_no_tickmarks_progress_container_top: var(--_ui5-v1-24-29_slider_progress_container_top);--_ui5-v1-24-29_slider_no_tickmarks_progress_height: var(--_ui5-v1-24-29_slider_progress_height);--_ui5-v1-24-29_slider_no_tickmarks_active_progress_border: var(--_ui5-v1-24-29_slider_active_progress_border);--_ui5-v1-24-29_slider_no_tickmarks_active_progress_left: var(--_ui5-v1-24-29_slider_active_progress_left);--_ui5-v1-24-29_slider_no_tickmarks_active_progress_top: var(--_ui5-v1-24-29_slider_active_progress_top);--_ui5-v1-24-29_slider_handle_focus_visibility: none;--_ui5-v1-24-29_slider_handle_icon_size: 1rem;--_ui5-v1-24-29_slider_progress_container_background: var(--sapSlider_Background);--_ui5-v1-24-29_slider_progress_container_dot_display: block;--_ui5-v1-24-29_slider_inner_min_width: 4rem;--_ui5-v1-24-29_slider_progress_background: var(--sapSlider_Selected_Background);--_ui5-v1-24-29_slider_progress_before_background: var(--sapSlider_Selected_Background);--_ui5-v1-24-29_slider_progress_after_background: var(--sapContent_MeasureIndicatorColor);--_ui5-v1-24-29_slider_handle_background: var(--sapSlider_HandleBackground);--_ui5-v1-24-29_slider_handle_icon_display: inline-block;--_ui5-v1-24-29_slider_handle_border: .0625rem solid var(--sapSlider_HandleBorderColor);--_ui5-v1-24-29_slider_handle_border_radius: .5rem;--_ui5-v1-24-29_slider_handle_height: 1.5rem;--_ui5-v1-24-29_slider_handle_width: 2rem;--_ui5-v1-24-29_slider_handle_top: -.625rem;--_ui5-v1-24-29_slider_handle_font_family: "SAP-icons";--_ui5-v1-24-29_slider_handle_hover_border: .0625rem solid var(--sapSlider_Hover_HandleBorderColor);--_ui5-v1-24-29_slider_handle_focus_border: .125rem solid var(--sapContent_FocusColor);--_ui5-v1-24-29_slider_handle_background_focus: var(--sapSlider_Active_RangeHandleBackground);--_ui5-v1-24-29_slider_handle_outline: none;--_ui5-v1-24-29_slider_handle_hover_background: var(--sapSlider_Hover_HandleBackground);--_ui5-v1-24-29_slider_tooltip_background: var(--sapField_Focus_Background);--_ui5-v1-24-29_slider_tooltip_border: none;--_ui5-v1-24-29_slider_tooltip_border_radius: .5rem;--_ui5-v1-24-29_slider_tooltip_box_shadow: var(--sapContent_Shadow1);--_ui5-v1-24-29_range_slider_legacy_progress_focus_display: none;--_ui5-v1-24-29_range_slider_progress_focus_display: block;--_ui5-v1-24-29_slider_tickmark_in_range_bg: var(--sapSlider_Selected_BorderColor);--_ui5-v1-24-29_slider_label_fontsize: var(--sapFontSmallSize);--_ui5-v1-24-29_slider_label_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_slider_tooltip_min_width: 2rem;--_ui5-v1-24-29_slider_tooltip_padding: .25rem;--_ui5-v1-24-29_slider_tooltip_fontsize: var(--sapFontSmallSize);--_ui5-v1-24-29_slider_tooltip_color: var(--sapContent_LabelColor);--_ui5-v1-24-29_slider_tooltip_height: 1.375rem;--_ui5-v1-24-29_slider_handle_focus_width: 1px;--_ui5-v1-24-29_slider_start_end_point_size: .5rem;--_ui5-v1-24-29_slider_start_end_point_left: -.75rem;--_ui5-v1-24-29_slider_start_end_point_top: -.125rem;--_ui5-v1-24-29_slider_handle_focused_tooltip_distance: calc(var(--_ui5-v1-24-29_slider_tooltip_bottom) - var(--_ui5-v1-24-29_slider_handle_focus_width));--_ui5-v1-24-29_slider_tooltip_border_box: border-box;--_ui5-v1-24-29_range_slider_handle_active_background: var(--sapSlider_Active_RangeHandleBackground);--_ui5-v1-24-29_range_slider_active_handle_icon_display: none;--_ui5-v1-24-29_range_slider_progress_focus_top: -15px;--_ui5-v1-24-29_range_slider_progress_focus_left: calc(-1 * (var(--_ui5-v1-24-29_slider_handle_width) / 2) - 5px);--_ui5-v1-24-29_range_slider_progress_focus_padding: 0 1rem 0 1rem;--_ui5-v1-24-29_range_slider_progress_focus_width: calc(100% + var(--_ui5-v1-24-29_slider_handle_width) + 10px);--_ui5-v1-24-29_range_slider_progress_focus_height: calc(var(--_ui5-v1-24-29_slider_handle_height) + 10px);--_ui5-v1-24-29_range_slider_root_hover_handle_icon_display: inline-block;--_ui5-v1-24-29_range_slider_root_hover_handle_bg: var(--_ui5-v1-24-29_slider_handle_hover_background);--_ui5-v1-24-29_range_slider_root_active_handle_icon_display: none;--_ui5-v1-24-29_slider_tickmark_height: .5rem;--_ui5-v1-24-29_slider_tickmark_top: -2px;--_ui5-v1-24-29_slider_handle_box_sizing: border-box;--_ui5-v1-24-29_range_slider_handle_background: var(--sapSlider_RangeHandleBackground);--_ui5-v1-24-29_slider_tooltip_bottom: 2rem;--_ui5-v1-24-29_value_state_message_border: none;--_ui5-v1-24-29_value_state_header_border: none;--_ui5-v1-24-29_input_value_state_icon_offset: .5rem;--_ui5-v1-24-29_value_state_header_box_shadow_error: inset 0 -.0625rem var(--sapField_InvalidColor);--_ui5-v1-24-29_value_state_header_box_shadow_information: inset 0 -.0625rem var(--sapField_InformationColor);--_ui5-v1-24-29_value_state_header_box_shadow_success: inset 0 -.0625rem var(--sapField_SuccessColor);--_ui5-v1-24-29_value_state_header_box_shadow_warning: inset 0 -.0625rem var(--sapField_WarningColor);--_ui5-v1-24-29_value_state_message_icon_offset_phone: 1rem;--_ui5-v1-24-29_value_state_header_border_bottom: none;--_ui5-v1-24-29_input_value_state_icon_display: inline-block;--_ui5-v1-24-29_value_state_message_padding: .5rem .5rem .5rem 1.875rem;--_ui5-v1-24-29_value_state_header_padding: .5rem .5rem .5rem 1.875rem;--_ui5-v1-24-29_value_state_message_popover_box_shadow: var(--sapContent_Shadow1);--_ui5-v1-24-29_value_state_message_icon_width: 1rem;--_ui5-v1-24-29_value_state_message_icon_height: 1rem;--_ui5-v1-24-29_value_state_header_offset: -.25rem;--_ui5-v1-24-29_value_state_message_popover_border_radius: var(--sapPopover_BorderCornerRadius);--_ui5-v1-24-29_value_state_message_padding_phone: .5rem .5rem .5rem 2.375rem;--_ui5-v1-24-29_value_state_message_line_height: 1.125rem;--ui5-v1-24-29_table_bottom_border: 1px solid var(--sapList_BorderColor);--ui5-v1-24-29_table_multiselect_column_width: 2.75rem;--ui5-v1-24-29_table_header_row_font_weight: normal;--ui5-v1-24-29_table_header_row_border_width: 1px;--_ui5-v1-24-29_table_load_more_border-bottom: none;--ui5-v1-24-29_table_header_row_outline_width: var(--sapContent_FocusWidth);--ui5-v1-24-29_table_header_row_font_family: var(--sapFontSemiboldDuplexFamily);--ui5-v1-24-29_table_header_row_border_bottom_color: var(--sapList_HeaderBorderColor);--ui5-v1-24-29_table_focus_outline_offset: -.1875rem;--ui5-v1-24-29_table_multiselect_popin_row_padding: 3.25rem;--ui5-v1-24-29_table_row_outline_width: var(--sapContent_FocusWidth);--ui5-v1-24-29_table_group_row_font-weight: bold;--ui5-v1-24-29_table_border_width: 1px 0 1px 0;--_ui5-v1-24-29-toolbar-padding-left: .5rem;--_ui5-v1-24-29-toolbar-padding-right: .5rem;--_ui5-v1-24-29-toolbar-item-margin-left: 0;--_ui5-v1-24-29-toolbar-item-margin-right: .25rem;--_ui5-v1-24-29_step_input_min_width: 7.25rem;--_ui5-v1-24-29_step_input_padding: 2.5rem;--_ui5-v1-24-29_step_input_input_error_background_color: inherit;--_ui5-v1-24-29-step_input_button_state_hover_background_color: var(--sapField_Hover_Background);--_ui5-v1-24-29_step_input_border_style: none;--_ui5-v1-24-29_step_input_border_style_hover: none;--_ui5-v1-24-29_step_input_button_background_color: transparent;--_ui5-v1-24-29_step_input_input_border: none;--_ui5-v1-24-29_step_input_input_margin_top: 0;--_ui5-v1-24-29_step_input_button_display: inline-flex;--_ui5-v1-24-29_step_input_button_left: 0;--_ui5-v1-24-29_step_input_button_right: 0;--_ui5-v1-24-29_step_input_input_border_focused_after: .125rem solid #0070f2;--_ui5-v1-24-29_step_input_input_border_top_bottom_focused_after: 0;--_ui5-v1-24-29_step_input_input_border_radius_focused_after: .25rem;--_ui5-v1-24-29_step_input_input_information_border_color_focused_after: var(--sapField_InformationColor);--_ui5-v1-24-29_step_input_input_warning_border_color_focused_after: var(--sapField_WarningColor);--_ui5-v1-24-29_step_input_input_success_border_color_focused_after: var(--sapField_SuccessColor);--_ui5-v1-24-29_step_input_input_error_border_color_focused_after: var(--sapField_InvalidColor);--_ui5-v1-24-29_step_input_disabled_button_background: none;--_ui5-v1-24-29_step_input_border_color_hover: none;--_ui5-v1-24-29_step_input_border_hover: none;--_ui5-v1-24-29_input_input_background_color: transparent;--_ui5-v1-24-29_load_more_padding: 0;--_ui5-v1-24-29_load_more_border: 1px top solid transparent;--_ui5-v1-24-29_load_more_border_radius: none;--_ui5-v1-24-29_load_more_outline_width: var(--sapContent_FocusWidth);--_ui5-v1-24-29_load_more_border-bottom: var(--sapList_BorderWidth) solid var(--sapList_BorderColor);--_ui5-v1-24-29_calendar_height: 24.5rem;--_ui5-v1-24-29_calendar_width: 20rem;--_ui5-v1-24-29_calendar_padding: 1rem;--_ui5-v1-24-29_calendar_left_right_padding: .5rem;--_ui5-v1-24-29_calendar_top_bottom_padding: 1rem;--_ui5-v1-24-29_calendar_header_height: 3rem;--_ui5-v1-24-29_calendar_header_arrow_button_width: 2.5rem;--_ui5-v1-24-29_calendar_header_padding: .25rem 0;--_ui5-v1-24-29_checkbox_root_side_padding: .6875rem;--_ui5-v1-24-29_checkbox_icon_size: 1rem;--_ui5-v1-24-29_checkbox_partially_icon_size: .75rem;--_ui5-v1-24-29_custom_list_item_rb_min_width: 2.75rem;--_ui5-v1-24-29_day_picker_item_width: 2.25rem;--_ui5-v1-24-29_day_picker_item_height: 2.875rem;--_ui5-v1-24-29_day_picker_empty_height: 3rem;--_ui5-v1-24-29_day_picker_item_justify_content: space-between;--_ui5-v1-24-29_dp_two_calendar_item_now_text_padding_top: .375rem;--_ui5-v1-24-29_daypicker_item_now_selected_two_calendar_focus_special_day_top: 2rem;--_ui5-v1-24-29_daypicker_item_now_selected_two_calendar_focus_special_day_right: 1.4375rem;--_ui5-v1-24-29_dp_two_calendar_item_primary_text_height: 1.8125rem;--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_height: 1rem;--_ui5-v1-24-29_dp_two_calendar_item_text_padding_top: .4375rem;--_ui5-v1-24-29_daypicker_item_now_selected_two_calendar_focus_secondary_text_padding_block: 0 .5rem;--_ui5-v1-24-29_color-palette-swatch-container-padding: .3125rem .6875rem;--_ui5-v1-24-29_datetime_picker_width: 40.0625rem;--_ui5-v1-24-29_datetime_picker_height: 25rem;--_ui5-v1-24-29_datetime_timeview_width: 17rem;--_ui5-v1-24-29_datetime_timeview_phonemode_width: 19.5rem;--_ui5-v1-24-29_datetime_timeview_padding: 1rem;--_ui5-v1-24-29_datetime_timeview_phonemode_clocks_width: 24.5rem;--_ui5-v1-24-29_datetime_dateview_phonemode_margin_bottom: 0;--_ui5-v1-24-29_dialog_content_min_height: 2.75rem;--_ui5-v1-24-29_dialog_footer_height: 2.75rem;--_ui5-v1-24-29_input_inner_padding: 0 .625rem;--_ui5-v1-24-29_input_inner_padding_with_icon: 0 .25rem 0 .625rem;--_ui5-v1-24-29_input_inner_space_to_tokenizer: .125rem;--_ui5-v1-24-29_input_inner_space_to_n_more_text: .1875rem;--_ui5-v1-24-29_list_no_data_height: 3rem;--_ui5-v1-24-29_list_item_cb_margin_right: 0;--_ui5-v1-24-29_list_item_title_size: var(--sapFontLargeSize);--_ui5-v1-24-29_list_no_data_font_size: var(--sapFontLargeSize);--_ui5-v1-24-29_list_item_img_size: 3rem;--_ui5-v1-24-29_list_item_img_top_margin: .5rem;--_ui5-v1-24-29_list_item_img_bottom_margin: .5rem;--_ui5-v1-24-29_list_item_img_hn_margin: .75rem;--_ui5-v1-24-29_list_item_dropdown_base_height: 2.5rem;--_ui5-v1-24-29_list_item_base_height: var(--sapElement_LineHeight);--_ui5-v1-24-29_list_item_icon_size: 1.125rem;--_ui5-v1-24-29_list_item_icon_padding-inline-end: .5rem;--_ui5-v1-24-29_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5-v1-24-29_checkbox_wrapper_padding));--_ui5-v1-24-29_list_item_content_vertical_offset: calc((var(--_ui5-v1-24-29_list_item_base_height) - var(--_ui5-v1-24-29_list_item_title_size)) / 2);--_ui5-v1-24-29_group_header_list_item_height: 2.75rem;--_ui5-v1-24-29_list_busy_row_height: 3rem;--_ui5-v1-24-29_month_picker_item_height: 3rem;--_ui5-v1-24-29_list_buttons_left_space: .125rem;--_ui5-v1-24-29_popup_default_header_height: 2.75rem;--_ui5-v1-24-29-notification-overflow-popover-padding: .25rem .5rem;--_ui5-v1-24-29_year_picker_item_height: 3rem;--_ui5-v1-24-29_tokenizer_padding: .25rem;--_ui5-v1-24-29_token_height: 1.625rem;--_ui5-v1-24-29_token_icon_size: .75rem;--_ui5-v1-24-29_token_icon_padding: .25rem .5rem;--_ui5-v1-24-29_token_wrapper_right_padding: .3125rem;--_ui5-v1-24-29_token_wrapper_left_padding: 0;--_ui5-v1-24-29_tl_bubble_padding: 1rem;--_ui5-v1-24-29_tl_indicator_before_bottom: -1.625rem;--_ui5-v1-24-29_tl_padding: 1rem 1rem 1rem .5rem;--_ui5-v1-24-29_tl_li_margin_bottom: 1.625rem;--_ui5-v1-24-29_switch_focus_width_size_horizon_exp: calc(100% + 4px) ;--_ui5-v1-24-29_switch_focus_height_size_horizon_exp: calc(100% + 4px) ;--_ui5-v1-24-29_tc_item_text: 3rem;--_ui5-v1-24-29_tc_item_height: 4.75rem;--_ui5-v1-24-29_tc_item_text_only_height: 2.75rem;--_ui5-v1-24-29_tc_item_text_only_with_additional_text_height: 3.75rem;--_ui5-v1-24-29_tc_item_text_line_height: 1.325rem;--_ui5-v1-24-29_tc_item_icon_circle_size: 2.75rem;--_ui5-v1-24-29_tc_item_icon_size: 1.25rem;--_ui5-v1-24-29_tc_item_add_text_margin_top: .375rem;--_ui5-v1-24-29_textarea_margin: .25rem 0;--_ui5-v1-24-29_radio_button_height: 2.75rem;--_ui5-v1-24-29_radio_button_label_side_padding: .875rem;--_ui5-v1-24-29_radio_button_inner_size: 2.75rem;--_ui5-v1-24-29_radio_button_svg_size: 1.375rem;--_ui5-v1-24-29-responsive_popover_header_height: 2.75rem;--ui5-v1-24-29_side_navigation_item_height: 2.75rem;--_ui5-v1-24-29_load_more_text_height: 2.75rem;--_ui5-v1-24-29_load_more_text_font_size: var(--sapFontMediumSize);--_ui5-v1-24-29_load_more_desc_padding: .375rem 2rem .875rem 2rem;--ui5-v1-24-29_table_header_row_height: 2.75rem;--ui5-v1-24-29_table_row_height: 2.75rem;--ui5-v1-24-29_table_group_row_height: 2rem;--_ui5-v1-24-29-tree-indent-step: 1.5rem;--_ui5-v1-24-29-tree-toggle-box-width: 2.75rem;--_ui5-v1-24-29-tree-toggle-box-height: 2.25rem;--_ui5-v1-24-29-tree-toggle-icon-size: 1.0625rem;--_ui5-v1-24-29_timeline_tli_indicator_before_bottom: -1.625rem;--_ui5-v1-24-29_timeline_tli_indicator_before_right: -1.625rem;--_ui5-v1-24-29_timeline_tli_indicator_before_without_icon_bottom: -1.875rem;--_ui5-v1-24-29_timeline_tli_indicator_before_without_icon_right: -1.9375rem;--_ui5-v1-24-29-toolbar-separator-height: 2rem;--_ui5-v1-24-29-toolbar-height: 2.75rem;--_ui5-v1-24-29_toolbar_overflow_padding: .25rem .5rem;--_ui5-v1-24-29_split_button_middle_separator_top: .625rem;--_ui5-v1-24-29_split_button_middle_separator_height: 1rem;--_ui5-v1-24-29_color-palette-item-height: 1.75rem;--_ui5-v1-24-29_color-palette-item-hover-height: 2.25rem;--_ui5-v1-24-29_color-palette-item-margin: calc(((var(--_ui5-v1-24-29_color-palette-item-hover-height) - var(--_ui5-v1-24-29_color-palette-item-height)) / 2) + .0625rem);--_ui5-v1-24-29_color-palette-row-width: 12rem;--_ui5-v1-24-29_textarea_padding_top: .5rem;--_ui5-v1-24-29_textarea_padding_bottom: .4375rem;--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_padding_block: 0 .5rem;--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_padding: 0 .5rem;--_ui5-v1-24-29_daypicker_two_calendar_item_selected_focus_margin_bottom: 0;--_ui5-v1-24-29_daypicker_two_calendar_item_selected_focus_padding_right: .5rem}[data-ui5-compact-size],.ui5-content-density-compact,.sapUiSizeCompact{--_ui5-v1-24-29_input_min_width: 2rem;--_ui5-v1-24-29_input_icon_width: 2rem;--_ui5-v1-24-29_input_information_icon_padding: .3125rem .5rem .1875rem .5rem;--_ui5-v1-24-29_input_information_focused_icon_padding: .3125rem .5rem .25rem .5rem;--_ui5-v1-24-29_input_error_warning_icon_padding: .3125rem .5rem .1875rem .5rem;--_ui5-v1-24-29_input_error_warning_focused_icon_padding: .3125rem .5rem .25rem .5rem;--_ui5-v1-24-29_input_custom_icon_padding: .3125rem .5rem .25rem .5rem;--_ui5-v1-24-29_input_error_warning_custom_icon_padding: .3125rem .5rem .1875rem .5rem;--_ui5-v1-24-29_input_error_warning_custom_focused_icon_padding: .3125rem .5rem .25rem .5rem;--_ui5-v1-24-29_input_information_custom_icon_padding: .3125rem .5rem .1875rem .5rem;--_ui5-v1-24-29_input_information_custom_focused_icon_padding: .3125rem .5rem .25rem .5rem;--_ui5-v1-24-29_input_icon_padding: .3125rem .5rem .25rem .5rem;--_ui5-v1-24-29_panel_header_button_wrapper_padding: .1875rem .25rem;--_ui5-v1-24-29_rating_indicator_item_height: .67em;--_ui5-v1-24-29_rating_indicator_item_width: .67em;--_ui5-v1-24-29_rating_indicator_component_spacing: .8125rem 0px;--_ui5-v1-24-29_rating_indicator_readonly_item_height: .5em;--_ui5-v1-24-29_rating_indicator_readonly_item_width: .5em;--_ui5-v1-24-29_rating_indicator_readonly_item_spacing: .125rem .125rem;--_ui5-v1-24-29_radio_button_min_width: 2rem;--_ui5-v1-24-29_radio_button_outer_ring_padding_with_label: 0 .5rem;--_ui5-v1-24-29_radio_button_outer_ring_padding: 0 .5rem;--_ui5-v1-24-29_radio_button_focus_dist: .1875rem;--_ui5-v1-24-29_switch_height: 2rem;--_ui5-v1-24-29_switch_width: 3rem;--_ui5-v1-24-29_switch_min_width: none;--_ui5-v1-24-29_switch_with_label_width: 3.75rem;--_ui5-v1-24-29_switch_root_outline_top: .25rem;--_ui5-v1-24-29_switch_root_outline_bottom: .25rem;--_ui5-v1-24-29_switch_transform: translateX(100%) translateX(-1.375rem);--_ui5-v1-24-29_switch_transform_with_label: translateX(100%) translateX(-1.875rem);--_ui5-v1-24-29_switch_rtl_transform: translateX(1.375rem) translateX(-100%);--_ui5-v1-24-29_switch_rtl_transform_with_label: translateX(1.875rem) translateX(-100%);--_ui5-v1-24-29_switch_track_width: 2rem;--_ui5-v1-24-29_switch_track_height: 1.25rem;--_ui5-v1-24-29_switch_track_with_label_width: 2.75rem;--_ui5-v1-24-29_switch_track_with_label_height: 1.25rem;--_ui5-v1-24-29_switch_handle_width: 1.25rem;--_ui5-v1-24-29_switch_handle_height: 1rem;--_ui5-v1-24-29_switch_handle_with_label_width: 1.75rem;--_ui5-v1-24-29_switch_handle_with_label_height: 1rem;--_ui5-v1-24-29_switch_text_font_size: var(--sapFontSize);--_ui5-v1-24-29_switch_text_width: 1rem;--_ui5-v1-24-29_switch_text_active_left: .1875rem;--_ui5-v1-24-29_textarea_padding_right_and_left_readonly: .4375rem;--_ui5-v1-24-29_textarea_padding_top_readonly: .125rem;--_ui5-v1-24-29_textarea_exceeded_text_height: .375rem;--_ui5-v1-24-29_textarea_min_height: 1.625rem;--_ui5-v1-24-29_textarea_padding_bottom_readonly: .0625rem;--_ui5-v1-24-29_textarea_padding_top_error_warning: .1875rem;--_ui5-v1-24-29_textarea_padding_bottom_error_warning: .125rem;--_ui5-v1-24-29_textarea_padding_top_information: .1875rem;--_ui5-v1-24-29_textarea_padding_bottom_information: .125rem;--_ui5-v1-24-29_textarea_padding_right_and_left: .5rem;--_ui5-v1-24-29_textarea_padding_right_and_left_error_warning: .5rem;--_ui5-v1-24-29_textarea_padding_right_and_left_information: .5rem;--_ui5-v1-24-29_token_selected_focused_offset_bottom: -.25rem;--_ui5-v1-24-29_tokenizer-popover_offset: .1875rem;--_ui5-v1-24-29_slider_handle_icon_size: .875rem;--_ui5-v1-24-29_slider_padding: 1rem 1.0625rem;--_ui5-v1-24-29_range_slider_progress_focus_width: calc(100% + var(--_ui5-v1-24-29_slider_handle_width) + 10px);--_ui5-v1-24-29_range_slider_progress_focus_height: calc(var(--_ui5-v1-24-29_slider_handle_height) + 10px);--_ui5-v1-24-29_range_slider_progress_focus_top: -.8125rem;--_ui5-v1-24-29_slider_tooltip_bottom: 1.75rem;--_ui5-v1-24-29_slider_handle_focused_tooltip_distance: calc(var(--_ui5-v1-24-29_slider_tooltip_bottom) - var(--_ui5-v1-24-29_slider_handle_focus_width));--_ui5-v1-24-29_range_slider_progress_focus_left: calc(-1 * (var(--_ui5-v1-24-29_slider_handle_width) / 2) - 5px);--_ui5-v1-24-29_button_base_height: var(--sapElement_Compact_Height);--_ui5-v1-24-29_button_base_padding: .4375rem;--_ui5-v1-24-29_button_base_min_width: 2rem;--_ui5-v1-24-29_button_icon_font_size: 1rem;--_ui5-v1-24-29_calendar_height: 18rem;--_ui5-v1-24-29_calendar_width: 17.75rem;--_ui5-v1-24-29_calendar_left_right_padding: .25rem;--_ui5-v1-24-29_calendar_top_bottom_padding: .5rem;--_ui5-v1-24-29_calendar_header_height: 2rem;--_ui5-v1-24-29_calendar_header_arrow_button_width: 2rem;--_ui5-v1-24-29_calendar_header_padding: 0;--_ui5-v1-24-29-calendar-legend-root-padding: .5rem;--_ui5-v1-24-29-calendar-legend-root-width: 16.75rem;--_ui5-v1-24-29-calendar-legend-item-box-margin: .125rem .5rem .125rem .125rem;--_ui5-v1-24-29-calendar-legend-item-root-focus-margin: -.125rem;--_ui5-v1-24-29_checkbox_root_side_padding: var(--_ui5-v1-24-29_checkbox_wrapped_focus_padding);--_ui5-v1-24-29_checkbox_width_height: var(--_ui5-v1-24-29_checkbox_compact_width_height);--_ui5-v1-24-29_checkbox_wrapper_padding: var(--_ui5-v1-24-29_checkbox_compact_wrapper_padding);--_ui5-v1-24-29_checkbox_inner_width_height: var(--_ui5-v1-24-29_checkbox_compact_inner_size);--_ui5-v1-24-29_checkbox_icon_size: .75rem;--_ui5-v1-24-29_checkbox_partially_icon_size: .5rem;--_ui5-v1-24-29_custom_list_item_rb_min_width: 2rem;--_ui5-v1-24-29_daypicker_weeknumbers_container_padding_top: 2rem;--_ui5-v1-24-29_day_picker_item_width: 2rem;--_ui5-v1-24-29_day_picker_item_height: 2rem;--_ui5-v1-24-29_day_picker_empty_height: 2.125rem;--_ui5-v1-24-29_day_picker_item_justify_content: flex-end;--_ui5-v1-24-29_dp_two_calendar_item_now_text_padding_top: .5rem;--_ui5-v1-24-29_dp_two_calendar_item_primary_text_height: 1rem;--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_height: .75rem;--_ui5-v1-24-29_dp_two_calendar_item_text_padding_top: .5rem;--_ui5-v1-24-29_daypicker_special_day_top: 1.625rem;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_top: 1.25rem;--_ui5-v1-24-29_daypicker_twocalendar_item_special_day_right: 1.25rem;--_ui5-v1-24-29_daypicker_two_calendar_item_margin_bottom: 0;--_ui5-v1-24-29_daypicker_item_now_selected_two_calendar_focus_special_day_top: 1.125rem;--_ui5-v1-24-29_daypicker_item_now_selected_two_calendar_focus_special_day_right: 1.125rem;--_ui5-v1-24-29_daypicker_item_now_selected_two_calendar_focus_secondary_text_padding_block: 0 1rem;--_ui5-v1-24-29_datetime_picker_height: 20.5rem;--_ui5-v1-24-29_datetime_picker_width: 35.5rem;--_ui5-v1-24-29_datetime_timeview_width: 17rem;--_ui5-v1-24-29_datetime_timeview_phonemode_width: 18.5rem;--_ui5-v1-24-29_datetime_timeview_padding: .5rem;--_ui5-v1-24-29_datetime_timeview_phonemode_clocks_width: 21.125rem;--_ui5-v1-24-29_datetime_dateview_phonemode_margin_bottom: 3.125rem;--_ui5-v1-24-29_dialog_content_min_height: 2.5rem;--_ui5-v1-24-29_dialog_footer_height: 2.5rem;--_ui5-v1-24-29_input_height: var(--sapElement_Compact_Height);--_ui5-v1-24-29_input_inner_padding: 0 .5rem;--_ui5-v1-24-29_input_inner_padding_with_icon: 0 .2rem 0 .5rem;--_ui5-v1-24-29_input_inner_space_to_tokenizer: .125rem;--_ui5-v1-24-29_input_inner_space_to_n_more_text: .125rem;--_ui5-v1-24-29_input_icon_min_width: var(--_ui5-v1-24-29_input_compact_min_width);--_ui5-v1-24-29_menu_item_padding: 0 .75rem 0 .5rem;--_ui5-v1-24-29_menu_item_submenu_icon_right: .75rem;--_ui5-v1-24-29-notification-overflow-popover-padding: .25rem .5rem;--_ui5-v1-24-29_popup_default_header_height: 2.5rem;--_ui5-v1-24-29_textarea_margin: .1875rem 0;--_ui5-v1-24-29_list_no_data_height: 2rem;--_ui5-v1-24-29_list_item_cb_margin_right: .5rem;--_ui5-v1-24-29_list_item_title_size: var(--sapFontSize);--_ui5-v1-24-29_list_item_img_top_margin: .55rem;--_ui5-v1-24-29_list_no_data_font_size: var(--sapFontSize);--_ui5-v1-24-29_list_item_dropdown_base_height: 2rem;--_ui5-v1-24-29_list_item_base_height: 2rem;--_ui5-v1-24-29_list_item_icon_size: 1rem;--_ui5-v1-24-29_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5-v1-24-29_checkbox_wrapper_padding));--_ui5-v1-24-29_list_item_content_vertical_offset: calc((var(--_ui5-v1-24-29_list_item_base_height) - var(--_ui5-v1-24-29_list_item_title_size)) / 2);--_ui5-v1-24-29_list_busy_row_height: 2rem;--_ui5-v1-24-29_list_buttons_left_space: .125rem;--_ui5-v1-24-29_month_picker_item_height: 2rem;--_ui5-v1-24-29_year_picker_item_height: 2rem;--_ui5-v1-24-29_panel_header_height: 2rem;--_ui5-v1-24-29_panel_button_root_height: 2rem;--_ui5-v1-24-29_panel_button_root_width: 2.5rem;--_ui5-v1-24-29_token_height: 1.25rem;--_ui5-v1-24-29_token_right_margin: .25rem;--_ui5-v1-24-29_token_left_padding: .25rem;--_ui5-v1-24-29_token_readonly_padding: .125rem .25rem;--_ui5-v1-24-29_token_focus_offset: -.125rem;--_ui5-v1-24-29_token_icon_size: .75rem;--_ui5-v1-24-29_token_icon_padding: .125rem .25rem;--_ui5-v1-24-29_token_wrapper_right_padding: .25rem;--_ui5-v1-24-29_token_wrapper_left_padding: 0;--_ui5-v1-24-29_token_outline_offset: -.125rem;--_ui5-v1-24-29_tl_bubble_padding: .5rem;--_ui5-v1-24-29_tl_indicator_before_bottom: -.5rem;--_ui5-v1-24-29_tl_padding: .5rem;--_ui5-v1-24-29_tl_li_margin_bottom: .5rem;--_ui5-v1-24-29_wheelslider_item_width: 64px;--_ui5-v1-24-29_wheelslider_item_height: 32px;--_ui5-v1-24-29_wheelslider_height: 224px;--_ui5-v1-24-29_wheelslider_selection_frame_margin_top: calc(var(--_ui5-v1-24-29_wheelslider_item_height) * 2);--_ui5-v1-24-29_wheelslider_arrows_visibility: visible;--_ui5-v1-24-29_wheelslider_mobile_selection_frame_margin_top: 128px;--_ui5-v1-24-29_tc_item_text: 2rem;--_ui5-v1-24-29_tc_item_text_line_height: 1.325rem;--_ui5-v1-24-29_tc_item_add_text_margin_top: .3125rem;--_ui5-v1-24-29_tc_item_height: 4rem;--_ui5-v1-24-29_tc_header_height: var(--_ui5-v1-24-29_tc_item_height);--_ui5-v1-24-29_tc_item_icon_circle_size: 2rem;--_ui5-v1-24-29_tc_item_icon_size: 1rem;--_ui5-v1-24-29_radio_button_height: 2rem;--_ui5-v1-24-29_radio_button_label_side_padding: .5rem;--_ui5-v1-24-29_radio_button_inner_size: 2rem;--_ui5-v1-24-29_radio_button_svg_size: 1rem;--_ui5-v1-24-29-responsive_popover_header_height: 2.5rem;--ui5-v1-24-29_side_navigation_item_height: 2rem;--_ui5-v1-24-29_slider_handle_height: 1.25rem;--_ui5-v1-24-29_slider_handle_width: 1.25rem;--_ui5-v1-24-29_slider_tooltip_padding: .25rem;--_ui5-v1-24-29_slider_progress_outline_offset: -.625rem;--_ui5-v1-24-29_slider_outer_height: 1.3125rem;--_ui5-v1-24-29_step_input_min_width: 6rem;--_ui5-v1-24-29_step_input_padding: 2rem;--_ui5-v1-24-29_load_more_text_height: 2.625rem;--_ui5-v1-24-29_load_more_text_font_size: var(--sapFontSize);--_ui5-v1-24-29_load_more_desc_padding: 0 2rem .875rem 2rem;--ui5-v1-24-29_table_header_row_height: 2rem;--ui5-v1-24-29_table_row_height: 2rem;--_ui5-v1-24-29-tree-indent-step: .5rem;--_ui5-v1-24-29-tree-toggle-box-width: 2rem;--_ui5-v1-24-29-tree-toggle-box-height: 1.5rem;--_ui5-v1-24-29-tree-toggle-icon-size: .8125rem;--_ui5-v1-24-29_timeline_tli_indicator_before_bottom: -.5rem;--_ui5-v1-24-29_timeline_tli_indicator_before_right: -.5rem;--_ui5-v1-24-29_timeline_tli_indicator_before_without_icon_bottom: -.75rem;--_ui5-v1-24-29_timeline_tli_indicator_before_without_icon_right: -.8125rem;--_ui5-v1-24-29_vsd_header_container: 2.5rem;--_ui5-v1-24-29_vsd_sub_header_container_height: 2rem;--_ui5-v1-24-29_vsd_header_height: 4rem;--_ui5-v1-24-29_vsd_expand_content_height: 25.4375rem;--_ui5-v1-24-29-toolbar-separator-height: 1.5rem;--_ui5-v1-24-29-toolbar-height: 2rem;--_ui5-v1-24-29_toolbar_overflow_padding: .1875rem .375rem;--_ui5-v1-24-29_textarea_padding_top: .1875rem;--_ui5-v1-24-29_textarea_padding_bottom: .125rem;--_ui5-v1-24-29_checkbox_focus_position: .25rem;--_ui5-v1-24-29_split_button_middle_separator_top: .3125rem;--_ui5-v1-24-29_split_button_middle_separator_height: 1rem;--_ui5-v1-24-29_slider_handle_top: -.5rem;--_ui5-v1-24-29_slider_tooltip_height: 1.375rem;--_ui5-v1-24-29_color-palette-item-height: 1.25rem;--_ui5-v1-24-29_color-palette-item-focus-height: 1rem;--_ui5-v1-24-29_color-palette-item-container-sides-padding: .1875rem;--_ui5-v1-24-29_color-palette-item-container-rows-padding: .8125rem;--_ui5-v1-24-29_color-palette-item-hover-height: 1.625rem;--_ui5-v1-24-29_color-palette-item-margin: calc(((var(--_ui5-v1-24-29_color-palette-item-hover-height) - var(--_ui5-v1-24-29_color-palette-item-height)) / 2) + .0625rem);--_ui5-v1-24-29_color-palette-row-width: 8.75rem;--_ui5-v1-24-29_color-palette-swatch-container-padding: .1875rem .5rem;--_ui5-v1-24-29_color-palette-item-hover-margin: .0625rem;--_ui5-v1-24-29_color-palette-row-height: 7.5rem;--_ui5-v1-24-29_color-palette-button-height: 2rem;--_ui5-v1-24-29_color-palette-item-before-focus-offset: -.25rem;--_ui5-v1-24-29_color-palette-item-after-focus-offset: -.125rem;--_ui5-v1-24-29_color_picker_slider_container_margin_top: -9px;--_ui5-v1-24-29_checkbox_wrapped_focus_inset_block_end: .125rem;--_ui5-v1-24-29_checkbox_wrapped_content_margin_top: .125rem;--_ui5-v1-24-29_daypicker_selected_item_now_special_day_top: 1.5625rem;--_ui5-v1-24-29_daypicker_specialday_focused_top: 1.3125rem;--_ui5-v1-24-29_daypicker_selected_item_now_special_day_border_bottom_radius_alternate: .5rem;--_ui5-v1-24-29_daypicker_specialday_focused_border_bottom: .25rem;--_ui5-v1-24-29_daypicker_item_now_specialday_top: 1.4375rem;--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_padding_block: 0 .375rem;--_ui5-v1-24-29_dp_two_calendar_item_secondary_text_padding: 0 .375rem;--_ui5-v1-24-29_daypicker_two_calendar_item_selected_focus_margin_bottom: -.25rem;--_ui5-v1-24-29_daypicker_two_calendar_item_selected_focus_padding_right: .4375rem}:root,[dir=ltr]{--_ui5-v1-24-29_rotation_90deg: rotate(90deg);--_ui5-v1-24-29_rotation_minus_90deg: rotate(-90deg);--_ui5-v1-24-29_icon_transform_scale: none;--_ui5-v1-24-29_panel_toggle_btn_rotation: var(--_ui5-v1-24-29_rotation_90deg);--_ui5-v1-24-29_li_notification_group_toggle_btn_rotation: var(--_ui5-v1-24-29_rotation_90deg);--_ui5-v1-24-29_timeline_scroll_container_offset: .5rem;--_ui5-v1-24-29_popover_upward_arrow_margin: .1875rem 0 0 .1875rem;--_ui5-v1-24-29_popover_right_arrow_margin: .1875rem 0 0 -.375rem;--_ui5-v1-24-29_popover_downward_arrow_margin: -.375rem 0 0 .125rem;--_ui5-v1-24-29_popover_left_arrow_margin: .125rem 0 0 .25rem;--_ui5-v1-24-29_dialog_resize_cursor: se-resize;--_ui5-v1-24-29_progress_indicator_bar_border_radius: .5rem 0 0 .5rem;--_ui5-v1-24-29_progress_indicator_remaining_bar_border_radius: 0 .5rem .5rem 0;--_ui5-v1-24-29_menu_submenu_margin_offset: -.25rem 0;--_ui5-v1-24-29_menu_submenu_placement_type_left_margin_offset: .25rem 0;--_ui5-v1-24-29-menu_item_icon_float: right;--_ui5-v1-24-29-shellbar-notification-btn-count-offset: -.125rem}[dir=rtl]{--_ui5-v1-24-29_icon_transform_scale: scale(-1, 1);--_ui5-v1-24-29_panel_toggle_btn_rotation: var(--_ui5-v1-24-29_rotation_minus_90deg);--_ui5-v1-24-29_li_notification_group_toggle_btn_rotation: var(--_ui5-v1-24-29_rotation_minus_90deg);--_ui5-v1-24-29_timeline_scroll_container_offset: -.5rem;--_ui5-v1-24-29_popover_upward_arrow_margin: .1875rem .125rem 0 0;--_ui5-v1-24-29_popover_right_arrow_margin: .1875rem .25rem 0 0;--_ui5-v1-24-29_popover_downward_arrow_margin: -.4375rem .125rem 0 0;--_ui5-v1-24-29_popover_left_arrow_margin: .1875rem -.375rem 0 0;--_ui5-v1-24-29_dialog_resize_cursor:sw-resize;--_ui5-v1-24-29_menu_submenu_margin_offset: 0 -.25rem;--_ui5-v1-24-29_menu_submenu_placement_type_left_margin_offset: 0 .25rem;--_ui5-v1-24-29-menu_item_icon_float: left;--_ui5-v1-24-29-shellbar-notification-btn-count-offset: auto;--_ui5-v1-24-29_progress_indicator_bar_border_radius: .5rem;--_ui5-v1-24-29_progress_indicator_remaining_bar_border_radius: .25rem;--_ui5-v1-24-29_segmented_btn_item_border_left: .0625rem;--_ui5-v1-24-29_segmented_btn_item_border_right: .0625rem}
`
};
var parameters_bundle_css_default2 = styleData2;

export {
  html,
  svg,
  repeat,
  classMap,
  styleMap,
  ifDefined,
  unsafeHTML,
  effectiveHtml,
  effectiveSvg,
  scopeTag,
  LitRenderer_default,
  isEnter,
  isSpace,
  isLeft,
  isRight,
  isUp,
  isDown,
  isLeftCtrl,
  isRightCtrl,
  isUpCtrl,
  isDownCtrl,
  isUpShift,
  isDownShift,
  isLeftShift,
  isRightShift,
  isHome,
  isEnd,
  isEscape,
  isTabNext,
  isTabPrevious,
  isBackSpace,
  isDelete,
  isPageUp,
  isPageDown,
  isPlus,
  isMinus,
  isShow,
  isShift,
  parameters_bundle_css_default,
  parameters_bundle_css_default2
};
/*! Bundled license information:

lit-html/development/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@ui5/webcomponents-base/dist/renderer/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-BK2PCNJ4.js.map

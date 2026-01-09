"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CrispSessionEventColors", {
  enumerable: true,
  get: function () {
    return _NativeCrispModule.CrispSessionEventColors;
  }
});
exports.default = exports.configure = void 0;
exports.getSessionIdentifier = getSessionIdentifier;
exports.show = exports.setUserPhone = exports.setUserNickname = exports.setUserEmail = exports.setUserCompany = exports.setUserAvatar = exports.setTokenId = exports.setSessionString = exports.setSessionSegments = exports.setSessionSegment = exports.setSessionInt = exports.setSessionBool = exports.searchHelpdesk = exports.runBotScenario = exports.resetSession = exports.registerPushToken = exports.pushSessionEvents = exports.pushSessionEvent = exports.openHelpdeskArticle = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _NativeCrispModule = _interopRequireWildcard(require("./NativeCrispModule"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const CrispChat = () => {
  React.useEffect(() => {
    _NativeCrispModule.default.show();
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {});
};
var _default = exports.default = CrispChat;
const configure = websiteId => {
  _NativeCrispModule.default?.configure(websiteId);
};
exports.configure = configure;
const setTokenId = tokenId => {
  _NativeCrispModule.default?.setTokenId(tokenId);
};
exports.setTokenId = setTokenId;
const setUserEmail = (email, signature) => {
  _NativeCrispModule.default?.setUserEmail(email, signature);
};
exports.setUserEmail = setUserEmail;
const setUserNickname = name => {
  _NativeCrispModule.default?.setUserNickname(name);
};
exports.setUserNickname = setUserNickname;
const setUserPhone = phone => {
  _NativeCrispModule.default?.setUserPhone(phone);
};
exports.setUserPhone = setUserPhone;
const setUserCompany = company => {
  _NativeCrispModule.default?.setUserCompany(company);
};
exports.setUserCompany = setUserCompany;
const setUserAvatar = url => {
  _NativeCrispModule.default?.setUserAvatar(url);
};
exports.setUserAvatar = setUserAvatar;
const setSessionSegment = segment => {
  _NativeCrispModule.default?.setSessionSegment(segment);
};
exports.setSessionSegment = setSessionSegment;
const setSessionSegments = (segments, overwrite) => {
  _NativeCrispModule.default?.setSessionSegments(segments, overwrite ?? false);
};
exports.setSessionSegments = setSessionSegments;
const setSessionString = (key, value) => {
  _NativeCrispModule.default?.setSessionString(key, value);
};
exports.setSessionString = setSessionString;
const setSessionBool = (key, value) => {
  _NativeCrispModule.default?.setSessionBool(key, value);
};
exports.setSessionBool = setSessionBool;
const setSessionInt = (key, value) => {
  _NativeCrispModule.default?.setSessionInt(key, value);
};
exports.setSessionInt = setSessionInt;
async function getSessionIdentifier() {
  try {
    const sessionIdentifier = await _NativeCrispModule.default?.getSessionIdentifier();
    return sessionIdentifier;
  } catch (e) {
    throw e;
  }
}
const pushSessionEvent = (name, color) => {
  _NativeCrispModule.default?.pushSessionEvent(name, color);
};
exports.pushSessionEvent = pushSessionEvent;
const pushSessionEvents = events => {
  _NativeCrispModule.default?.pushSessionEvents(events);
};
exports.pushSessionEvents = pushSessionEvents;
const resetSession = () => {
  _NativeCrispModule.default?.resetSession();
};
exports.resetSession = resetSession;
const show = () => {
  _NativeCrispModule.default?.show();
};
exports.show = show;
const searchHelpdesk = () => {
  _NativeCrispModule.default?.searchHelpdesk();
  _NativeCrispModule.default?.show();
};
exports.searchHelpdesk = searchHelpdesk;
const openHelpdeskArticle = (id, locale, title, category) => {
  _NativeCrispModule.default?.openHelpdeskArticle(id, locale, title, category);
  _NativeCrispModule.default?.show();
};
exports.openHelpdeskArticle = openHelpdeskArticle;
const runBotScenario = scenarioId => {
  _NativeCrispModule.default?.runBotScenario(scenarioId);
};
exports.runBotScenario = runBotScenario;
const registerPushToken = token => {
  _NativeCrispModule.default?.registerPushToken(token);
};
exports.registerPushToken = registerPushToken;
//# sourceMappingURL=index.js.map
"use strict";

import * as React from 'react';
import { View } from 'react-native';
import NativeCrispModule, { CrispSessionEventColors } from "./NativeCrispModule.js";
import { jsx as _jsx } from "react/jsx-runtime";
const CrispChat = () => {
  React.useEffect(() => {
    NativeCrispModule.show();
  }, []);
  return /*#__PURE__*/_jsx(View, {});
};
export default CrispChat;
export const configure = websiteId => {
  NativeCrispModule?.configure(websiteId);
};
export const setTokenId = tokenId => {
  NativeCrispModule?.setTokenId(tokenId);
};
export const setUserEmail = (email, signature) => {
  NativeCrispModule?.setUserEmail(email, signature);
};
export const setUserNickname = name => {
  NativeCrispModule?.setUserNickname(name);
};
export const setUserPhone = phone => {
  NativeCrispModule?.setUserPhone(phone);
};
export const setUserCompany = company => {
  NativeCrispModule?.setUserCompany(company);
};
export const setUserAvatar = url => {
  NativeCrispModule?.setUserAvatar(url);
};
export const setSessionSegment = segment => {
  NativeCrispModule?.setSessionSegment(segment);
};
export const setSessionSegments = (segments, overwrite) => {
  NativeCrispModule?.setSessionSegments(segments, overwrite ?? false);
};
export const setSessionString = (key, value) => {
  NativeCrispModule?.setSessionString(key, value);
};
export const setSessionBool = (key, value) => {
  NativeCrispModule?.setSessionBool(key, value);
};
export const setSessionInt = (key, value) => {
  NativeCrispModule?.setSessionInt(key, value);
};
export async function getSessionIdentifier() {
  try {
    const sessionIdentifier = await NativeCrispModule?.getSessionIdentifier();
    return sessionIdentifier;
  } catch (e) {
    throw e;
  }
}
export const pushSessionEvent = (name, color) => {
  NativeCrispModule?.pushSessionEvent(name, color);
};
export const pushSessionEvents = events => {
  NativeCrispModule?.pushSessionEvents(events);
};
export const resetSession = () => {
  NativeCrispModule?.resetSession();
};
export const show = () => {
  NativeCrispModule?.show();
};
export const searchHelpdesk = () => {
  NativeCrispModule?.searchHelpdesk();
  NativeCrispModule?.show();
};
export const openHelpdeskArticle = (id, locale, title, category) => {
  NativeCrispModule?.openHelpdeskArticle(id, locale, title, category);
  NativeCrispModule?.show();
};
export const runBotScenario = scenarioId => {
  NativeCrispModule?.runBotScenario(scenarioId);
};
export const registerPushToken = token => {
  NativeCrispModule?.registerPushToken(token);
};
export { CrispSessionEventColors };
//# sourceMappingURL=index.js.map
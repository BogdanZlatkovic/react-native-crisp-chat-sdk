import { ConfigPlugin } from '@expo/config-plugins';
export declare function setAppDelegateImport(src: string): import("@expo/config-plugins/build/utils/generateCode").MergeResults;
export declare function setAppDelegateCall(src: string, websiteId: string, notificationsEnabled: boolean): import("@expo/config-plugins/build/utils/generateCode").MergeResults;
export declare function setSwiftAppDelegateImport(src: string): import("@expo/config-plugins/build/utils/generateCode").MergeResults;
export declare function setSwiftAppDelegateCall(src: string, websiteId: string, notificationsEnabled: boolean): import("@expo/config-plugins/build/utils/generateCode").MergeResults;
export declare function setMainConfiguration(main: string, websiteId: string, notificationsEnabled: boolean): string;
export declare function setGradleCrispDependency(buildGradle: string, notificationsEnabled: boolean): string;
export declare function setAndroidManifestService(androidManifest: any): any;
declare const _default: ConfigPlugin<{
    websiteId?: string;
    notifications?: {
        enabled: boolean;
    };
}>;
export default _default;

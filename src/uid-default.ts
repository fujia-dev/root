/*
 * @Author: fujia
 * @Date: 2021-12-03 14:16:26
 * @LastEditTime: 2021-12-03 15:01:07
 * @LastEditors: fujia(as default)
 * @Description: Get default uid from different platform.
 * @FilePath: /root/src/uid-default.ts
 */

interface PlatformUid {
  darwin: number;
  freebsd: number;
  linux: number;
  sunos: number;
  [key: string]: number;
}
const DEFAULT_UID_PER_PLATFORM: PlatformUid = {
  darwin: 501,
  freebsd: 1000,
  linux: 1000,
  sunos: 100,
};

const getDefaultUid = (platform = process.platform) => DEFAULT_UID_PER_PLATFORM[platform];

export default getDefaultUid;

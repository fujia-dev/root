/*
 * @Author: fujia
 * @Date: 2021-12-03 11:32:56
 * @LastEditTime: 2021-12-03 16:01:28
 * @LastEditors: fujia(as default)
 * @Description: Check the current login user whether is root, if is, then downgrade.
 * @FilePath: /root/src/check.ts
 */

import sudoBlock from './sudo-block';

import downgradeRoot from './downgrade';

const rootCheck = (msg: string) => {
  try {
    downgradeRoot();
  } catch (error) {}

  sudoBlock(msg);
};

export default rootCheck;

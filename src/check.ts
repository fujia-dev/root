/*
 * @Author: fujia
 * @Date: 2021-12-03 11:32:56
 * @LastEditTime: 2021-12-03 14:46:45
 * @LastEditors: fujia(as default)
 * @Description: Check the current login user whether is root, if is, then downgrade.
 * @FilePath: /root/src/check.ts
 */

import sudoBlock from 'sudo-block';

import downgradeRoot from './downgrade';

const rootCheck = (...args: any[]) => {
  try {
    downgradeRoot();
  } catch (error) {}

  sudoBlock(...args);
};

export default rootCheck;

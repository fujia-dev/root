/*
 * @Author: fujia
 * @Date: 2021-12-03 11:43:39
 * @LastEditTime: 2021-12-03 14:13:11
 * @LastEditors: fujia(as default)
 * @Description: Check the login user is root
 * @FilePath: /root/src/is-root.ts
 */


const isRoot = () => process.getuid && process.getuid() === 0;

export default isRoot;

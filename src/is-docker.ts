/*
 * @Author: fujia
 * @Date: 2021-12-03 15:42:50
 * @LastEditTime: 2021-12-03 15:52:20
 * @LastEditors: fujia(as default)
 * @Description: Check current env is docker
 * @FilePath: /root/src/is-docker.ts
 */

import { statSync, readFileSync } from 'fs';

let isDockerCached: boolean | undefined;

const hasDockerEnv = () => {
  try {
    statSync('/.dockerenv');
    return true;
  } catch (error) {
    return false;
  }
};

const hasDockerCGroup = () => {
  try {
    return readFileSync('/proc/self/cgroup', 'utf-8').includes('docker');
  } catch (error) {
    return false;
  }
};

const isDocker = () => {
  if (isDockerCached === undefined) {
    isDockerCached = hasDockerEnv() || hasDockerCGroup();
  }

  return isDockerCached;
};

export default isDocker;

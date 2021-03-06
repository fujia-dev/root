import isRoot from './is-root';
import defaultUid from './uid-default';

const downgradeRoot = () => {
  if (!isRoot) return;

  // `setgid` needs to happen before setuid to avoid EPERM.
  if (process.setgid && process.env.SUDO_GID) {
    const gid = parseInt(process.env.SUDO_GID, 10);

    if (gid && gid > 0) {
      process.setgid(gid);
    }
  }

  if (process.setuid && process.env.SUDO_UID) {
    const uid = parseInt(process.env.SUDO_UID, 10) || defaultUid();

    if (uid && uid > 0) {
      process.setuid(uid);
    }
  }
};

export default downgradeRoot;

// pnpm 10.11 supports name-based build approval. Keep that approval version-bound.
const approvedBuild = { name: 'esbuild', version: '0.27.4' };
module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === approvedBuild.name && pkg.version !== approvedBuild.version) {
        throw new Error('Review the esbuild install script before changing its approved version.');
      }
      return pkg;
    }
  }
};

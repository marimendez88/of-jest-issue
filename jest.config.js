const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  transformIgnorePatterns: ['/node_modules/(?!@ionic/core|@stencil/core|ionicons)'],
};

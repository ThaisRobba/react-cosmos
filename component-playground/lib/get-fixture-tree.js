module.exports = function(props) {
  var requireFixture = require.context('fixtures', true, /\.js$/),
      fixtures = {};

  requireFixture.keys().forEach(function(fixturePath) {
    // './my-component/my-state.js' => ('my-component', 'my-state')
    var pathParts = fixturePath.match(/^\.\/(.+)\/(.+)\.js$/),
        componentName = pathParts[1],
        fixtureName = pathParts[2];

    // Fixtures are grouped per component
    if (!fixtures[componentName]) {
      fixtures[componentName] = {};
    }

    fixtures[componentName][fixtureName] = requireFixture(fixturePath);
  });

  return fixtures;
};
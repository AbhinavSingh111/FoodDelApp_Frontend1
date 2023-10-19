module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}],
    // adding this preset to help testing lib convert jsx to js to be tested
              ['@babel/preset-react', {runtime:'automatic'}]],
  };
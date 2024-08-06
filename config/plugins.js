module.exports = ({env}) => {
  return {
    'transformer': {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true
        }
      }
    },
  }
};

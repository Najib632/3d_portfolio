export default {
  mulitpass: true,
  plugins: [
    {
        name: 'removeViewBox',
        active: false,
    },
    {
        name: 'removeDimensions',
        active: false,
    },
    {
      name: 'convertPathData',
      params: {
        // Adjust these options as needed
        applyTransforms: false,
        applyTransformsStroked: false,
        makeArcs: {
          threshold: 2.5,
          tolerance: 0.5,
        },
        straightCurves: false,
        lineShorthands: false,
        curveSmoothShorthands: false,
        floatPrecision: 3,
        transformPrecision: 5,
        removeUseless: true,
        collapseRepeated: true,
        utilizeAbsolute: true,
        leadingZero: true,
        negativeExtraSpace: true,
        noSpaceAfterFlags: true,
        forceAbsolutePath: false,
      },
    },
  ],
};

import nikitarevenco from "eslint-config-nikitarevenco";

export default nikitarevenco(
  {
    project: "tsconfig.json",
    tsconfigRootDir: import.meta.dirname,
  },
  {
    functionalOverride: {
      "functional/immutable-data": [
        "error",
        // .story files
        { ignoreAccessorPattern: ["*.parameters", "*.displayName"] },
      ],
    },
  },
);

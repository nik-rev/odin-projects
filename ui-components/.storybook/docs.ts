import { type StoryContext } from "@storybook/react";

export const docs = {
  source: {
    type: "code",
    format: "dedent",
    transform: (code: string, storyContext: StoryContext) => {
      code = code.replace(
        /\(args: any\) => {\n\s+return\s((.|\n)*);\n}$/,
        "$1",
      );
      code = code.replace(/\(\) => {\n\s+return\s((.|\n)*);\n}$/, "$1");

      // handle having function
      code = code.replace(
        /\(\) => {\n\s+const((.|\n)*);\n}$/,
        `function ${storyContext.name.replaceAll(/\s/gv, "")} {\n  const $1;\n}`,
      );

      code = code.replace(
        /\(args: any\) => {\n\s+const((.|\n)*);\n}$/,
        `function ${storyContext.name.replaceAll(/\s/gv, "")} {\n  const $1;\n}`,
      );

      // add new line between return
      code = code.replace(/(;\n\s+)(return\s<)/v, `$1\n  $2`);

      code = code.replace(/\(args: any\) => (?=(.|\n)*$)/, "");
      code = code.replace(/\s\{\.{3}args\}\s/, " ");
      code = code.replace(/\s\{\.{3}args\}>/, ">");

      code = code.replaceAll(/src=".+"/gv, 'src="..."');
      code = code.replaceAll(/src: '.+'/gv, "src: '...'");
      return code;
    },
  },
};

/* eslint @typescript-eslint/no-unused-vars: "off", @typescript-eslint/no-namespace: "off" 
  -- To enable intellisense for process.env */

type EnvVariable = "NEXTAUTH_SECRET" | "DATABASE_URL" | "DIRECT_URL";

type EnvVariables = Record<EnvVariable, string>;

declare namespace NodeJS {
  export interface ProcessEnv extends EnvVariables {}
}

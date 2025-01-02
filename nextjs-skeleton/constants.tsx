// time
export const CURRENT_YEAR = new Date().getFullYear();
export const MILLISECOND = 1;
export const SECOND = 1000 * MILLISECOND;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

// app
export const APPLICATION_NAME = "NextJS Skeleton";
export const SOURCE = "http://localhost:3000";

// auth
export const PASSWORD_MIN_LENGTH = 8;
export const UNAUTHENTICATED_REDIRECT = "/";
export const SALT_ROUNDS = 10;
export const REQUIRED_FIELD_MESSAGE = "This field is required";

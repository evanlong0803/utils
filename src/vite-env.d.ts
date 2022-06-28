/// <reference types="vite/client" />

declare module '@evanlong/utils' {
  import type * as Main from './main.d';
  const main: Main;
  export default main;
}

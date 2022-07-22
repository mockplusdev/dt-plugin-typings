// DT Plugin API version 1, update 1
/// <reference path="./plugin-api.d.ts" />

declare global {
  const __html__: string;
  const __uiFiles__: {
    [key: string]: string;
  };
  
  const console: Console;
  // Global variable with Mockplus-DT's plugin API.
  const mockplus: PluginAPI;

  // The plugin environment exposes the browser console API,
  interface Console {
    log(message?: any, ...optionalParams: any[]): void
    error(message?: any, ...optionalParams: any[]): void
    assert(condition?: boolean, message?: string, ...data: any[]): void
    info(message?: any, ...optionalParams: any[]): void
    warn(message?: any, ...optionalParams: any[]): void
    clear(): void
  }
  function setTimeout(callback: Function, timeout: number): number;
  function clearTimeout(handle: number): void;
  function setInterval(callback: Function, timeout: number): number;
  function clearInterval(handle: number): void;
} 

export { }
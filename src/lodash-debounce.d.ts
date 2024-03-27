declare module 'lodash/debounce' {
    import { DebouncedFunc } from 'lodash';
  
    interface DebounceSettings {
      leading?: boolean;
      maxWait?: number;
      trailing?: boolean;
    }
  
    function debounce<T extends (...args: any[]) => any>(
      func: T,
      wait?: number,
      options?: DebounceSettings
    ): DebouncedFunc<T>;
  
    export default debounce;
  }
  

interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
    request: (args: {method: string; params?: any[]}) => Promise<any>;
    selectedAddress?: string;
    chainId?: string;
    send?: (...args: any[]) => void;
  };
}

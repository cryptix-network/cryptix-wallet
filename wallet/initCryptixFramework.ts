import { Wallet } from './wallet';

export const initCryptixFramework = async () => {
  // console.log("Cryptix - framework: init");
  await Wallet.initRuntime();
  // console.log("Cryptix - framework: ready");
};


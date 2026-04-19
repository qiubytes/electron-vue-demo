import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      saveFile(content): Promise<boolean>    //声明类型
      readfile(): Promise<string>
    }
  }
}

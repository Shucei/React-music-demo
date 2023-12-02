/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string // 从.env文件中读取的变量
  }
}

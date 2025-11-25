import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 경고 기준을 1600kB(약 1.6MB)로 설정
    // 아까 파일이 약 700kB였으므로 이 수치면 경고가 사라집니다.
    chunkSizeWarningLimit: 1600, 
  },
});

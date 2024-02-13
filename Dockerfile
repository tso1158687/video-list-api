# 使用 Node 官方映像作為基礎
FROM node:20

# 設定工作目錄
WORKDIR /usr/src/app

# 複製 package.json 和 package-lock.json (如果存在)
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製所有源代碼到工作目錄下
COPY . .

# 編譯 TypeScript 代碼
RUN npm run build

# 暴露端口
EXPOSE 3000

# 定義容器啟動時運行的命令
CMD ["node", "dist/main"]

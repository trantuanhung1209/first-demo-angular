# Stage 1: Build Angular app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install && npm cache clean --force

# Copy toàn bộ source code
COPY . .

# Build Angular app
RUN npm run build --prod

# Stage 2: Chạy production với server nhẹ
FROM node:18-alpine

WORKDIR /app

# Cài đặt `serve`
RUN npm install -g serve && npm cache clean --force

# Copy build output từ stage trước (chỉ thư mục browser)
COPY --from=build /app/dist/first-demo/browser /app

# Mở cổng 4200
EXPOSE 4200

# Chạy ứng dụng
CMD ["serve", "-s", "/app", "-l", "4200"]

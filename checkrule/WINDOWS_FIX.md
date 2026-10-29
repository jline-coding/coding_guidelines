# Windows notes

Nếu dev cache của Next.js có vấn đề:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

Nếu `node_modules` cũ gây lỗi manifest/bundler:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm install
npm run dev
```

Ứng dụng chạy mặc định tại:

```text
http://localhost:3050
```

`npm run dev` dùng Turbopack; `npm run start` cũng dùng port 3050.

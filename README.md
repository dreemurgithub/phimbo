This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Một số vấn đề

 - Sử dụng event listener cho thay đổi size của trình duyệt sẽ khiến hiển thị 1 số component sai
   - Tuy nhiên nên chỉ sử dụng 1 kích cỡ duy nhất màn hình duy nhất(tức là không dùng dev tool) thì sẽ không bị gì cả
   - Vấn đề này cũng xảy ra ở trang web gốc của phimbo1080.in nhưng ít hơn
   - Nếu xảy ra lỗi hiển thị, chỉ cần reload trang
 - Số lượng view là ngẫu nhiên/ghi tay vào, do fake data không có thông tin về thời gian phim
 - Category pagination của phimbo hơi xấu và không đồng đều trên các màn hình,
   - Đã edit khác bằng cách thay đổi state dựa theo số page hiện tại
   - Sẽ luôn luôn có đúng 20 nút, trừ khi số lượng phim ít hơn
   - Tuy nhiên category page mới tải toàn bộ data phim về rồi hiển thị state qua pagination, nên mới có thể tại ra pagination mượt mà.
 - phimbo cố tình lock dev tool, chỉ có thể xem css, xem trang thái đóng mở của navbar, scrolling trên các màn hình nhỏ... khó.
 - Trang homepage của phimbo ẩn đi một số card, tốn khá nhiều thời gian để đoán chính xác là ẩn card nào và hiển thị ra sao, có khả năng bị sai vài đoạn

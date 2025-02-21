const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN = process.env.DOMAIN_NAME || `localhost:${PORT}`;
const TARGET = process.env.TARGET_URL || "https://chlkrisz.github.io/proxy";

app.use(
  "/",
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      proxyReq.setHeader(
        "User-Agent",
        req.headers["user-agent"] || "Mozilla/5.0"
      );
      proxyReq.setHeader("Referer", TARGET);
      proxyReq.setHeader("Origin", TARGET);
      proxyReq.setHeader("X-Forwarded-For", req.ip);
    },
  })
);

app.listen(PORT, () => {
  console.log(`[Proxy] ${DOMAIN} (127.0.0.1:${PORT}) -> ${TARGET}`);
});

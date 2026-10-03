# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for "Nhà Xe Dũng Thu", a Vietnamese intercity bus company. Server-rendered with Node.js + Express + EJS. All user-facing text is in Vietnamese; keep new content in Vietnamese. The brand color scheme is orange.

## Commands

```bash
npm install      # install dependencies
npm start        # run server (node server.js) at http://localhost:3000
npm run dev      # run with nodemon auto-reload
```

Port is configurable via the `PORT` env var. There is no build step, linter, or test suite.

## Architecture

- `server.js` holds everything server-side: Express setup, the shared `nav` array, and all routes. Routes use Vietnamese slugs (`/gioi-thieu`, `/lich-trinh`, `/lien-he`). There is no database — data such as the bus routes on `/lich-trinh` is hardcoded inline in the route handler.
- Every `res.render` must pass `title`, `nav`, and `activePath`, because `views/partials/header.ejs` uses them for the `<title>` and to highlight the active nav link. To add a page: add a route in `server.js`, add an entry to `nav`, and create a view.
- Views don't use a layout engine: each page in `views/` starts with `<%- include('partials/header') %>` and ends with the footer include. The header partial opens `<html>`, `<body>`, and `<main>`; the footer partial closes them.
- `public/` is served statically at the root (`/css/style.css`, `/images/...`). All styling lives in `public/css/style.css`, using the color tokens defined on `:root` (`--orange`, `--orange-dark`, `--orange-light`, etc.).
- The contact form in `views/contact.ejs` is UI only (`onsubmit="return false;"`); there's no backend handler for it.

## Quy tắc Git

- Luôn hỏi xác nhận trước khi push lên Github
- Không bao giờ commit file .env hoặc bất kỳ file chứa API key

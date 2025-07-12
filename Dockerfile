FROM node:24-slim AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Builder ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runner ----
FROM node:24-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]

# Build stage
FROM node:20-alpine AS builder

# Install build tools for native dependencies
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy npm config and package files
COPY .npmrc package.json package-lock.json ./

# Install dependencies with increased memory and timeout
RUN npm install --prefer-offline --no-audit

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:20-alpine

# Install dumb-init and build tools for native dependencies
RUN apk add --no-cache dumb-init python3 make g++

# Set working directory
WORKDIR /app

# Copy npm config and package files
COPY .npmrc package.json package-lock.json ./

# Install production dependencies only
RUN npm install --omit=dev --prefer-offline --no-audit && npm cache clean --force

# Remove build tools to reduce image size (keep if needed for runtime)
RUN apk del make g++

# Copy built application from builder
COPY --from=builder /app/dist ./dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3001

# Set environment
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application with dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/index.mjs"]

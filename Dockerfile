# =============================================================================
# Clic ID — static site container (nginx, production)
# Build:    docker build -t clicid-site:local .
# Run:      docker run --rm -p 8099:80 clicid-site:local
# =============================================================================
FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="clicid-site" \
      org.opencontainers.image.description="Sitio estático Clic ID - firmas electrónicas ANF AC Ecuador" \
      org.opencontainers.image.source="https://github.com/jorgeoscar84/clicid-site" \
      org.opencontainers.image.licenses="proprietary"

# Single explicit config: drop the image default site and its sample web root.
RUN rm -f /etc/nginx/conf.d/default.conf \
    && rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

# Copy ONLY static site files. Extension globs keep future root files working
# (llms.txt, ai.txt, favicon.ico, og images, webmanifest, fonts...) and tolerate
# files that are not present yet. `assets/` holds the images.
COPY *.html *.css *.js *.txt *.xml *.json *.webmanifest *.ico *.svg \
     *.png *.jpg *.jpeg *.webp *.avif *.woff *.woff2 /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Defensive: no repo/container file may ever be web-reachable.
RUN rm -rf /usr/share/nginx/html/.git \
           /usr/share/nginx/html/.github \
           /usr/share/nginx/html/docs \
           /usr/share/nginx/html/CNAME \
    && find /usr/share/nginx/html -name '*.md' -delete

EXPOSE 80

# Container-level health probe (also consumed by Dokploy/Docker status).
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1

STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]

# =============================================================================
# Clic ID — sitio estático (nginx) con minificación en el build
# Build:  docker build -t clicid-site .
# Run:    docker run --rm -p 8080:80 clicid-site
#
# Etapa 1 (node): minifica styles.css y app.js EN EL MISMO NOMBRE, para que el
# HTML siga funcionando sin cambios. Etapa 2 (nginx): sirve los archivos.
# =============================================================================
FROM node:22-alpine AS build
WORKDIR /site

COPY . .

RUN rm -rf .git .github docs node_modules CNAME \
 && rm -f .gitignore .dockerignore *.md \
 && npx --yes esbuild@0.24.0 styles.css --minify > /tmp/styles.min.css \
 && mv /tmp/styles.min.css styles.css \
 && npx --yes esbuild@0.24.0 app.js --minify --target=es2018 > /tmp/app.min.js \
 && mv /tmp/app.min.js app.js \
 && ls -la styles.css app.js

FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="clicid-site" \
      org.opencontainers.image.description="Sitio estático Clic ID - firmas electrónicas ANF AC Ecuador" \
      org.opencontainers.image.source="https://github.com/samanthachimborazokolganov-gif/clic-ID" \
      org.opencontainers.image.licenses="proprietary"

RUN rm -f /etc/nginx/conf.d/default.conf \
 && rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /site/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1

STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]

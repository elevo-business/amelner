# Amelner Getreidebrand — statische Seite hinter nginx.
# Gebaut fuer Coolify: Traefik beendet TLS davor, der Container spricht HTTP.

FROM nginx:1.27-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# Bewusst einzeln kopiert statt „COPY . .“: so gelangen weder .git noch
# README, Dockerfile oder die Apache-Konfiguration ins Abbild.
WORKDIR /usr/share/nginx/html
COPY assets ./assets
COPY css    ./css
COPY js     ./js
COPY index.html chronik.html rezeptur.html likoere.html genuss.html \
     herkunft.html haendler.html bestellen.html \
     impressum.html datenschutz.html 404.html \
     robots.txt sitemap.xml ./

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

EXPOSE 80

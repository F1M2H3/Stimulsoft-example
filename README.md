# Stimulsoft Example (Next.js + TypeScript)

Proyecto de ejemplo que incluye los archivos `.mrt` provenientes de los proyectos `Report` y `Dashboard`.

Instrucciones rápidas:

1. Abrir terminal en `publish/stimulsoft-example`.

2. Instalar dependencias (las siguientes versiones están ya fijadas en `package.json`):

```bash
npm install
# o instalar específicamente las dependencias solicitadas:
npm install stimulsoft-reports-js@2025.1.5 stimulsoft-dashboards-js@2025.1.5
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador `http://localhost:3000` y probar las rutas `/report` y `/dashboard`.

Notas:
- Las páginas en `/report` intentan cargar el paquete `stimulsoft-reports-js` dinámicamente y renderizar el `.mrt` copiado en `public/reports/report-report.mrt`.
- La página `/dashboard` carga el paquete `stimulsoft-dashboards-js` (muestra el estado y el módulo en consola). Para integrar el viewer de dashboards, amplía la página con la API del SDK.

Archivos importantes:
- `public/reports/report-report.mrt` (copiado desde `Report`)
- `public/reports/dashboard-report.mrt` (copiado desde `Dashboard`)

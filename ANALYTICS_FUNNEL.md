# Embudo de conversion GA4 (Metodo Q)

Este embudo usa eventos custom en GA4 para medir el flujo desde la landing hasta el pago.

## Etapas del funnel

1. `landing_visit`
2. `click_demo`
3. `start_demo`
4. `finish_demo`
5. `view_paywall`
6. `click_upgrade`
7. `payment`

## Parametros enviados

- `userId` (cuando existe sesion)
- `score` (cuando aplica, especialmente en `finish_demo` y `view_paywall`)

## Donde se dispara cada evento

- `landing_visit`: al cargar `/` (landing)
- `click_demo`: clicks a CTA hacia `/demo` en hero, cta-band y pricing
- `start_demo`: al iniciar el entrenamiento en `/demo`
- `finish_demo`: al llegar a resultados del demo
- `view_paywall`: al mostrarse el paywall del plan FREE
- `click_upgrade`: al click en upgrade desde paywall o pagina `/upgrade`
- `payment`: al cargar `/success` despues de pago

## Configuracion en GA4 para visualizar rapido

1. Ir a **Explorations** -> **Funnel exploration**
2. Definir pasos en este orden:
   - `landing_visit`
   - `click_demo`
   - `start_demo`
   - `finish_demo`
   - `view_paywall`
   - `click_upgrade`
   - `payment`
3. Activar opcion **open funnel** para analizar entradas tardias.
4. Crear comparaciones por:
   - usuarios con `userId` vs anonimos
   - rangos de `score` (si ya registraste dimension personalizada)

## Recomendacion GA4 (parametros custom)

Para reportes avanzados, registrar en GA4:

- Dimension personalizada de evento: `userId`
- Metrica personalizada de evento: `score`

Esto permite segmentar conversion por tipo de usuario y rendimiento en demo.

#!/bin/sh
set -e

php artisan storage:link || true
php artisan migrate --force
php artisan db:seed --force || true
php artisan config:clear
php artisan route:clear

exec php artisan serve --host=0.0.0.0 --port="${PORT:-8000}"

#!/bin/bash
set -e

rm -f /rails-next-article-app/tmp/pids/server.pid

exec "$@"

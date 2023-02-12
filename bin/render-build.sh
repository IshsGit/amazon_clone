#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
RAILS_ENV=production rails db:drop DISABLE_DATABASE_ENVIRONMENT_CHECK=1
rails db:create
rails db:migrate
rails db:seed #if needed
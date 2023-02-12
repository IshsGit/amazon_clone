# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true

DISABLE_DATABASE_ENVIRONMENT_CHECK=1
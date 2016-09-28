# Server-based syntax
# ======================

server 'root@mike.server.syngentech.org', roles: %w(web)

# Configuration
# =============

set :branch, 'production'

before 'deploy:publishing', :build do
  on roles(:web) do
    within release_path do
      execute :rake, 'build:production'
    end
  end
end

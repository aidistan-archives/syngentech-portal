# Server-based syntax
# ======================

server 'ad.tan@shao.server.syngentech.org', roles: %w{web}

# Configuration
# =============

set :branch, 'staging'

before 'deploy:publishing', :build do
  on roles(:web) do
    within release_path do
      execute :rake, 'build:development'
    end
  end
end

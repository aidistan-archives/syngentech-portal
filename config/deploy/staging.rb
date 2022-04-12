set :deploy_to, '/usr/share/nginx/portal'
server 'root@us.server.syngen.tech', port: 28555, roles: %w(web)

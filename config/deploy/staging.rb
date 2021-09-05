set :deploy_to, '/usr/share/nginx/portal'
server 'root@us.server.syngentech.org', port: 28555, roles: %w(web)

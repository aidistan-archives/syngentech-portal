require 'yaml'
require 'fileutils'

desc 'Serve and watch (alias: w)'
task watch: 'watch:development'
task w: :watch

desc 'Build (alias: b)'
task build: 'build:production'
task b: :build

task :clean do
  FileUtils.rm_rf('_site') if Dir.exist?('_site')
end

namespace :watch do
  task default: :clean do
    system('bundle exec jekyll s -w')
  end

  task development: ['config:development', 'watch:default']
  task production: ['config:production', 'watch:default']
end

namespace :build do
  task default: :clean do
    system('bundle exec jekyll b')
  end

  task development: ['config:development', 'build:default']
  task production: ['config:production', 'build:default']
end

namespace :config do
  def load_config
    YAML.load(File.read('__config.yml'))
  end

  def save_config(obj)
    f = File.open('_config.yml', 'w')
    f.write(obj.is_a?(String) ? obj : YAML.dump(obj))
    f.close
  end

  task :development do
    config = load_config.merge(
      'url' => {
        'root' =>    '',
        'assets' =>  '/assets',
        'blog' =>    '/blog',
        'biogeek' => '/biogeek',
        'service' => '/service'
      }
    )
    save_config(config)
  end

  task :production do
    config = load_config.merge(
      'url' => {
        'root' =>    'http://www.syngen.tech',
        'assets' =>  'http://portal.assets.syngentech.com.cn',
        'blog' =>    'http://blog.syngen.tech',
        'biogeek' => 'http://biogeek.syngen.tech',
        'service' => 'http://service.syngen.tech'
      }
    )
    save_config(config)
  end
end

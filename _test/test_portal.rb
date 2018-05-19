require 'test_helper'

describe Crawler do
  crawler = Crawler.new

  # it 'should find no invalid urls' do
  #   invalid_urls = crawler.map.select { |_, v| v == :invalid }.keys
  #   puts invalid_urls
  #   assert_empty(invalid_urls)
  # end

  it 'should find no dead files' do
    dead_files = Dir['_site/**/*']
      .reject  { |path| Dir.exist?(path) || /\.(js|css|xml)/.match(path) }
      .collect { |path| path.gsub(/^_site/, '').gsub('index.html', '') }
      .reject  { |path| crawler.map[path] }
    dead_files -= ['/assets/images/logo.png'] # remove the favicon
    p dead_files.count
    assert_empty(dead_files)
  end
end

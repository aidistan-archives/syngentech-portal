require 'minitest/autorun'
require 'nokogiri'
require 'open-uri'

# Main test for portal
class PortalTest < MiniTest::Test
  def setup
    @map = {}
    @root = 'http://localhost:4000'
  end

  def test_urls_in_pages
    crawl_page('/')
  end

  private

  def crawl_page(path)
    crawl_urls(path)
    @map.keys.each { |l| crawl_page(l) unless @map[l] }
  end

  def crawl_urls(path)
    @map[path] = true
    doc = Nokogiri::HTML(open(@root + path))

    filter_urls(
      doc.css('a').map { |a| a['href'] },
      doc.css('img').map { |a| a['src'] }
    ).each { |l| @map[l] ||= false }
  rescue
    puts path
  end

  def filter_urls(*urls)
    urls.flatten.select { |l| l =~ %r{^/} }.uniq.compact
  end
end

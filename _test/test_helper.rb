require 'minitest/autorun'
require 'nokogiri'
require 'open-uri'

# A crawler for portal
class Crawler
  attr_accessor :map, :root

  def initialize(
    map: {},
    root: 'http://localhost:4000'
  )
    @map = map
    @root = root

    crawl_to('/')
  end

  private

  def crawl_to(path)
    crawl_urls(path)
    @map.keys.each { |l| crawl_to(l) unless @map[l] }
  end

  def crawl_urls(path)
    doc = Nokogiri::HTML(open(@root + path))

    filter_urls(
      doc.css('a').map { |a| a['href'] },
      doc.css('img').map { |a| a['src'] }
    ).each { |l| @map[l] ||= false }

    @map[path] = :valid
  rescue
    @map[path] = :invalid
  end

  def filter_urls(*urls)
    urls.flatten.select { |l| l =~ %r{^/} }.uniq.compact
  end
end

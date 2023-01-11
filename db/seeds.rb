Dir.glob('./db/seeds/*.rb').sort.each do |file|
  start_time = Time.zone.now
  p "[#{start_time.iso8601}]-------import: #{file}"
  load(file)
  end_time = Time.zone.now
  processing_time = (end_time - start_time).to_i
  p "[#{end_time.iso8601}]-------end: #{file}--processing_time: #{processing_time}"
end
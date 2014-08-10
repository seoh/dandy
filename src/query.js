function run(input, parameters) {

	query = $.NSHomeDirectory().stringByAppendingPathComponent(".dandy/query.txt")
			
	error = Ref()
	input = $.NSString.alloc.initWithUTF8String(input)
	input.writeToFileAtomicallyEncodingError(query, true, $. NSUTF8StringEncoding, error)

	return true
}

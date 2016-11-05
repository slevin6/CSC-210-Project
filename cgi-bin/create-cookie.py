#!/usr/bin/env python

print 'Content-Type: text/html\r\n'
print 'Set-Cookie: raspberrypi="Hello world"; \
expires=Wed, 28 Aug 2013 18:30:00 GMT\r\n\r\n'

print """
<html>
    <body>
        <h1>Some web page</h1>
    </body>
</html>
"""
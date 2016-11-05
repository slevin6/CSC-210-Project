
#!/usr/bin/env python

import Cookie

# create the cookie
c=Cookie.SimpleCookie()
# assign a value
c['raspberrypi']='Hello world'
# set the xpires time
c['raspberrypi']['expires']=1*1*3*60*60

# print the header, starting with the cookie
print c
print "Content-type: text/html\n"

# empty lines so that the browser knows that the header is over
print ""
print ""

# now we can send the page content
print """
<html>
    <body>
        <h1>The cookie has been set</h1>
    </body>
</html>
"""
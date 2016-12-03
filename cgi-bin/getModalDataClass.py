#!/usr/bin/env python

import cgitb
import cgi
import sqlite3
import os
import Cookie

print 'Content-type: text/html'
print

cgitb.enable()
form = cgi.FieldStorage()
name = str(form['name'].value)

def print_class(x):
	classColor = x[5]
	print "<div style='color:" + classColor + "'; >"
	print "<div class='dataInner'>"
	print "<h3 id='individual-class-information-title'>" + str(x[1]) + "</h3>"
	if str(x[4])!="":
		print "<p class='individual-class-information-data'>Class time: " + str(x[4]) + "<br>"
	s = ""
	if str(x[3])!="":
		i = 0
		if x[3][0] == "[":
			i = 1
		while i<len(x[3]) - 2:
			if x[3][i]=="M" and x[3][i + 1]=="i":
				i += 22
			if x[3][i]==")":
				s += ", "
				i = i + 2
			if x[3][i]!="'" and x[3][i]!="(" and x[3][i]!="," and x[3][i]!=")":
				s+= x[3][i]
			i = i + 1
		print s

	if str(x[6])!="":
		print "<br>Instructor: " + str(x[6]) + "<br>"

	print "</p></div></div>"

	# Print everything into a list element formatted nicely

def print_class_name(x):
	print "<h2>" + str(x[1]) + "</h2>"


conn = sqlite3.connect('classes.db')
c = conn.cursor()

c.execute('CREATE TABLE IF NOT EXISTS classes(id varchar(100) primary key, name varchar(100), userid varchar(100), days varchar(100), time varchar(10), color varchar(10), instructor varchar(100), notes varchar(200))')

try:	
	cookie_string = os.environ.get('HTTP_COOKIE')
	cookie = Cookie.SimpleCookie(cookie_string)
	userid = str(cookie['userid'].value)
except KeyError:
	print
	print "<h1>Please Enable Cookies to continue!</h1>"
	print "<a href='index.html'>Click here to Log In</a>"
	quit()
print

currentEntries = c.execute('SELECT * FROM classes WHERE userid=?', [userid]) # AND username = username
data = c.fetchall()

# QUERY THE DATABASE FOR Class WITH UID AND PRINT IT'S NAME
counter = 0

for entry in data:
	if counter == 0:
		counter += 1
		print "<br><br><div class='deleteBox'><h3>"
		print print_class(entry)
		print "</h3>"
		print "<button class='deleteButton' type='button'>Delete Class</button>"
		print "</div><br><br>"






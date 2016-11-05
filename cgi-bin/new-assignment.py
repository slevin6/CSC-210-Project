#!/usr/bin/env python

import cgitb
import cgi
import sqlite3



cgitb.enable()
assignment_form = cgi.FieldStorage()

# Open connection to the database
conn = sqlite3.connect('assignments.db')
c = conn.cursor()


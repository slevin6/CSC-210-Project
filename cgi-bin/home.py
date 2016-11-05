#!/usr/bin/env python


starter = """
<html>
<head>
<link rel="stylesheet" href="../homeStyleSheet.css">
<link href="https://fonts.googleapis.com/css?family=Raleway:400,800,800i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Heebo" rel="stylesheet">
<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">

</head>
<body>

<div class="page-wrapper">
		<div class="header">
			<div class="logo">
				<div class="logo-text">
					Egenda
				</div>
			</div>
			<div class="navbar">
				<div class="navbar-text">
					<ul>
  						<li><a class="nav-button" href="home.py">Home</a></li>
						<li><a class="nav-button" href="#news">Account and Settings</a></li>
						<li><a class="nav-button" href="logout.py">Log Out</a></li>
					</ul>
				</div>	
			</div>	
		</div>	
		<div class="calendar">
			<div class="month">
			  <ul>
			    <li style="text-align:center" id="month-name">
			      August<br>
			      <span style="font-size:18px">2016</span>
			    </li>
			  </ul>
			</div>

			<ul class="weekdays">
			  <li>Mo</li>
			  <li>Tu</li>
			  <li>We</li>
			  <li>Th</li>
			  <li>Fr</li>
			  <li>Sa</li>
			  <li>Su</li>
			</ul>

			<ul class="days">
			  <li>1</li>
			  <li>2</li>
			  <li>3</li>
			  <li>4</li>
			  <li>5</li>
			  <li>6</li>
			  <li>7</li>
			  <li>8</li>
			  <li>9</li>
			  <li>10</li>
			  <li>11</li>
			  <li>12</li>
			  <li>13</li>
			  <li>14</li>
			  <li>15</li>
			  <li>16</li>
			  <li>17</li>
			  <li>18</li>
			  <li>19</li>
			  <li>20</li>
			  <li>21</li>
			  <li>22</li>
			  <li>23</li>
			  <li>24</li>
			  <li>25</li>
			  <li>26</li>
			  <li>27</li>
			  <li>28</li>
			  <li>29</li>
			  <li>30</li>
			  <li>31</li>
			</ul>
		</div>
		<div class="main-content">

				
"""
end = """
<div class="class-menu-add">
					<a href="../new-class.html"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a>
				</div>	
			</div>
			<div class="assignments">
				<div class="assignments-title">
					<h3>Assignments</h3>
				</div>	
			</div>	
		</div>	
	</div>	
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="../home.js"></script>
</html>
"""

print starter


import cgitb
import cgi
import sqlite3
import os
import Cookie


def print_class(x):
	classColor = x[5]
	print "<div style='color:" + classColor + "'; class='individual-class-information'>"
	print "<h2 id='individual-class-information-title'>" + str(x[1]) + "</h2>"
	if str(x[4])!="":
		print "<p class='individual-class-information-data'><b>Class time: </b><span style='text-decoration: underline'>" + str(x[4]) + "</span><br><br>"
	if str(x[3])!="":
		i = 1
		while i<len(x[3]) - 2:
			if x[3][i]=="M":
				i += 22
			if x[3][i]==")":
				print ", "
				i = i + 1
			if x[3][i]!="'" and x[3][i]!="(" and x[3][i]!="," and x[3][i]!=")":
				print x[3][i]
			i = i + 1

	if str(x[6])!="":
		print "<p class='individual-class-information-data'><b>Instructor: </b><span style='text-decoration: underline'>" + str(x[6]) + "</span><br>"

	print "</p></div>"

	# Print everything into a list element formatted nicely

def print_class_name(x):
	print "<h2>" + str(x[1]) + "</h2>"


cgitb.enable()
class_form = cgi.FieldStorage()

conn = sqlite3.connect('classes.db')
c = conn.cursor()

c.execute('CREATE TABLE IF NOT EXISTS classes(id varchar(100) primary key, name varchar(100), userid varchar(100), days varchar(100), time varchar(10), color varchar(10), instructor varchar(100), notes varchar(200))')

cookie_string = os.environ.get('HTTP_COOKIE')
cookie = Cookie.SimpleCookie(cookie_string)

userid = str(cookie['userid'].value)

currentEntries = c.execute('SELECT * FROM classes WHERE userid=?', [userid]) # AND username = username
data = c.fetchall()

if len(data)==0:
	# print ''
	# print '<h2><a href="../new-class.html">Click here to add a class.</a></h2>'
	print '''
	<div class="class-information">
		<div class="class-information-title">
			<h3>Class Information</h3>
				</div>	

				<hr>

				<div class="class-information-main">

				</div>	
			</div>	
		<div class="class-menu">
	<div class="class-menu-inner">
		<h1>No classes yet!</h1>
	</div>
	'''
else:
	print '''
	<div class="class-information">
		<div class="class-information-title">
			<h3>Class Information</h3>
				</div>	

				<hr>

				<div class="class-information-main">
	'''

	for entry in data:
		print_class(entry)

	print '''
				</div>	
			</div>	
		<div class="class-menu">
	<div class="class-menu-inner-full">
	'''

	for entry in data:
		print_class_name(entry)

	print '''
	</div>
	'''

print end











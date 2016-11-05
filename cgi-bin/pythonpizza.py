import cgitb
import cgi
import datetime

cgitb.enable()

pizza_form = cgi.FieldStorage()

print 'Content-Type: text/html'
print

print '''<html>
  <head>
    <title>Lecture 3 Demo Python Script</title>
    <style type="text/css">
      h1 {
          font-size: 100px;
          font-family: monospace;
      }
      .red_text {
          color: red;
      }
    </style>
  </head>
  <body>
'''

# this is here for debugging
print '<!--'
for key in pizza_form.keys():
    value = pizza_form[key]
    if isinstance(value, list):
        print key + ' '
        for element in value:
            print element.value + ' '
    else:
        print key + "=" + pizza_form[key].value + "<BR/>"
print '-->'

size = pizza_form['pizza_size'].value
crust = pizza_form['pizza_crust_type'].value
toppings = []
if pizza_form.has_key('pizza_topping'):
    for topping in pizza_form['pizza_topping']:
        toppings.append(topping.value)

ccn = pizza_form['credit_card_number'].value
phone = pizza_form['phone_number'].value


print '<h1>You Ordered a Pizza!!!!'

print '<h2>Your <span class="red_text">' + size + '</span> pizza with <span class="red_text">' + str(toppings) + '</span>'
print 'on a delicious <span class="red_text">' + crust + '</span> crust'
print ' will be going into the oven soon.  Your credit card with number <span class="red_text">' + ccn + '</span>'
print ' will be charged.  If there is a problem, we\'ll call you at <span class="red_text">' + phone + '</span>!'

print '''
  </body>
</html>
'''
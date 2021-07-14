var product=["Sugar","Oil","Ghee","Toothpaste"]
document.write(product+"<br>");
document.write(product.pop()+"<br>")
document.write(product.shift()+"<br>")
document.write(product.slice('oil')+"<br>");
document.write(product+"<br>")
product.push('Sugar','Toothpaste');
document.write(product+"<br>")
document.write(product.sort()+"<br>")
document.write(product.reverse()+"<br>")
document.write(product.findIndex(3))
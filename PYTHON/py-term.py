# this terminal can only understand numbers (int)

while 1:
	x = input(">>> ")
	if x == 'exit':
		break

	try:
		y = eval(x)
		if y: print(y)
	except:
		try:
			exec(x)
		except Exception as e:
			print("Syntas or spelling error :( :", e)
			

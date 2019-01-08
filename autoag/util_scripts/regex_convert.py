fhand = open("in.txt")
fout = open("out.txt", "w")
while True:
    c = fhand.read(1)
    print("cc is ", c)
    if not c:
        break;
    # elif ord(c) == 92:
    #     print("c is slash")
    #     fout.write("\\")
        # fout.write("\\")
    elif ord(c) == 8221:
        print("c is quote")
        # fout.write("\\")
        fout.write("\"")
    elif ord(c) == 8217:
        print("c is signle quote")
        fout.write("'")
    else:
        fout.write(c)
fout.close()

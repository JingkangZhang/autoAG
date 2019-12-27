def check():
    f = open("ni.txt").read()
    f = f.strip()
    f = f.strip(",")
    count = 1
    # openSQ = False #open single quote
    # openDQ = False #open double quote
    symbols = ["(", "[", "'", '"']
    stack = []
    quoteOpen = False
    for c in f:
        print(stack)
        if not c:
            break
        elif c=="'" or c=='"':
            if stack and stack[-1] == c:
                stack.pop()
                quoteOpen = False
            else:
                stack.append(c)
                quoteOpen = True
        elif not quoteOpen:
            if c == "," and len(stack) == 0:
                count += 1
            elif c == "(" or c == "[" or c == "{":
                stack.append(c)
            elif c == ")":
                if stack and stack[-1]=="(":
                    stack.pop()
                else:
                    print("You have an unmatched symbol error in your No.{} argument.".format(count))
                    return
            elif c == "]":
                if stack and stack[-1]=="[":
                    stack.pop()
                else:
                    print("You have an unmatched symbol error in your No. {} argument.".format(count))
                    return
            elif c == "}":
                if stack and stack[-1]=="{":
                    stack.pop()
                else:
                    print("You have an unmatched symbol error in your No. {} argument.".format(count))
                    return
            else:
                pass
    if len(stack)!=0:
        print("You have an unmatched symbol error in your No. {} argument.".format(count))
        return
    print("You have " + str(count) + " arguments")

def maioresValores(lst):
    resul = []
    for i in range(5):
        maior = max(lst)
        lst.remove(maior)
        resul.append(maior)
    return resul

def main():
    lst = [20,67,35,23,99,1,4,56,43,32]
    lstOriginal = lst.copy()
    lstMaiores = maioresValores(lst)
    print(lstMaiores)
    print(lstOriginal)

if __name__ == '__main__':
    main()
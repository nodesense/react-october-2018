import serial

s = serial.Serial('/dev/cu.wchusbserial1410')
while True:
    s.write("welcome".encode())
    res = s.readline()
    print(res)
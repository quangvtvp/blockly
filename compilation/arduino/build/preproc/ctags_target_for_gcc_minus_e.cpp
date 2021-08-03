# 1 "E:\\NAMTHANGSINHVIEN\\myAwesomeJob\\oldFolder\\otto_Cubee\\otto_blockly\\maintask\\blockly\\compilation\\arduino\\ino\\sketch.ino"
# 1 "E:\\NAMTHANGSINHVIEN\\myAwesomeJob\\oldFolder\\otto_Cubee\\otto_blockly\\maintask\\blockly\\compilation\\arduino\\ino\\sketch.ino"
# 2 "E:\\NAMTHANGSINHVIEN\\myAwesomeJob\\oldFolder\\otto_Cubee\\otto_blockly\\maintask\\blockly\\compilation\\arduino\\ino\\sketch.ino" 2
Otto Otto;
# 4 "E:\\NAMTHANGSINHVIEN\\myAwesomeJob\\oldFolder\\otto_Cubee\\otto_blockly\\maintask\\blockly\\compilation\\arduino\\ino\\sketch.ino" 2







Servo servo_2;
Servo servo_3;
Servo servo_4;
Servo servo_5;

void setup() {
  Otto.init(2 /* left leg pin, servo[0]*/, 3 /* right leg pin, servo[1]*/, 4 /* left foot pin, servo[2]*/, 5 /* right foot pin, servo[3]*/, true, 13 /*buzzer pin*/);
Otto.home();

  servo_2.attach(2);
  servo_3.attach(3);
  servo_4.attach(4);
  servo_5.attach(5);

}

void loop() {
    servo_2.write(90); delay(0);
    servo_3.write(90); delay(0);
    servo_4.write(90); delay(0);
    servo_5.write(90); delay(0);
    delay(200);

}

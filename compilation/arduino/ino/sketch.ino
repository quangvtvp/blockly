#include <Otto.h>
Otto Otto;
#include <Servo.h>

#define LeftLeg 2 // left leg pin, servo[0]
#define RightLeg 3 // right leg pin, servo[1]
#define LeftFoot 4 // left foot pin, servo[2]
#define RightFoot 5 // right foot pin, servo[3]
#define Buzzer 13 //buzzer pin

Servo servo_2;
Servo servo_3;
Servo servo_4;
Servo servo_5;

void setup() {
  Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);
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
arduino-cli core install arduino:avr
arduino-cli compile -e -b arduino:avr:nano:cpu=atmega328old $1 --libraries $2
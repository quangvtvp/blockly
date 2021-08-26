arduino-cli core update-index
arduino-cli core install arduino:avr
arduino-cli compile -e -b  arduino:avr:nano $1 --libraries $2

/**
* 使用這個文件來定義自訂的函式和積木。
* 進一步了解：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="Left"
    Left = 0,
    //% block="Right"
    Right = 1
}

/**
 * Custom blocks
 */
//% block="SJA Boat" weight=100 color=#AA7942 icon=""
namespace SJA_Boat {
    

    //% block="Start the Engine"
    
    export function StartBoat() {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    //% block="Motor $e speed $n"
    export function Motor(e: MyEnum, n: number): void {
        // Add code here
        if (e == 0) { 
            if (n > 0) {
                pins.digitalWritePin(DigitalPin.P13, 0)
                pins.digitalWritePin(DigitalPin.P12, 1)
            } else {
                pins.digitalWritePin(DigitalPin.P13, 1)
                pins.digitalWritePin(DigitalPin.P12, 0)
            }
            pins.analogWritePin(AnalogPin.P1, Math.abs(n))
        }  
        if (e == 1) { 
            if (n > 0) {
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.digitalWritePin(DigitalPin.P16, 1)
            } else {
                pins.digitalWritePin(DigitalPin.P15, 1)
                pins.digitalWritePin(DigitalPin.P16, 0)
            }
            pins.analogWritePin(AnalogPin.P2, Math.abs(n))
        }
    }

    
}

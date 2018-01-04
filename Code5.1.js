/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstration: Sorting Algorithms :: created: 05.16.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numIntegers, counter;
let arrayIntegers = [], arrayIntegersBak = [];

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setContinueResponse();
    setCounter();
    while (continueResponse === 1) {
        setNumIntegers();
        populateArrayIntegers();
        setArrayIntegersBak();
        printArrayIntegers();
        sortArrayBubble();
        printArrayIntegers();
        populateArrayIntegers();
        printArrayIntegers();
        sortArrayInsertion();
        printArrayIntegers();
        setContinueResponse();
    }
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc counter mutator
 * @returns {null}
 */
function setCounter() {
    if (counter != null) {
        counter++;
    } else {
        counter = 0;
    }
}

/**
 * @method
 * @desc numIntegers mutator
 * @returns {null}
 */
function setNumIntegers() {
    const MAX_NUM = 10;
    const MIN_NUM = 2;
    while (numIntegers == null || numIntegers > MAX_NUM || numIntegers < MIN_NUM || !/[0-9]/.test(numIntegers)) {
        numIntegers = Number(PROMPT.question(`How many integers are you entering (min = 2, max = 10)?: `));
        if (numIntegers == null || numIntegers > MAX_NUM || numIntegers < MIN_NUM || !/[0-9]/.test(numIntegers)) {
            console.log(`Incorrect input. Please try again.`);
        }
    }
}

/**
 * @method
 * @desc arrayIntegers mutator
 * @returns {null}
 */
function populateArrayIntegers() {
    if (arrayIntegers.length < 1) {
        for (let i = 0; i < numIntegers; i++) {
            while (arrayIntegers[i] == null || arrayIntegers[i] < 0 || !/[0-9]/.test(arrayIntegers[i])) {
                arrayIntegers[i] = Number(PROMPT.question(`Please enter an integer: `));
                if (arrayIntegers[i] == null || arrayIntegers[i] < 0 || !/[0-9]/.test(arrayIntegers[i])) {
                    console.log(`Incorrect input. Please try again.`);
                }
            }
        }
    } else {
        console.log(`Resetting Array`);
        arrayIntegers = [];
        for (let i = 0; i < arrayIntegersBak.length; i++) {
            arrayIntegers[i] = arrayIntegersBak[i];
        }
        console.log(arrayIntegers);
    }
}

/**
 * @method
 * @desc arrayIntegersBak mutator
 * @returns {null}
 */
function setArrayIntegersBak() {
    for (let i = 0; i < arrayIntegers.length; i++) {
        arrayIntegersBak[i] = arrayIntegers[i];
    }
    console.log(arrayIntegersBak);
}

/**
 * @method
 * @desc Bubble Sort Demo
 * @returns {null}
 */
function sortArrayBubble() {
    console.log(`Bubble Sorting`);
    let didSwap = 1;
    let temp;
    while (didSwap) {
        didSwap = 0;
        for (let i = 0; i < arrayIntegers.length; i++) {
            if (arrayIntegers[i - 1] > arrayIntegers[i]) {
                temp = arrayIntegers[i];
                arrayIntegers[i] = arrayIntegers[i - 1];
                arrayIntegers[i - 1] = temp;
                didSwap = 1;
            }
        }
    }
}

/**
 * @method
 * @desc Insertion Sort Demo
 * @returns {null}
 */
function sortArrayInsertion() {
    console.log(`Insertion Sorting`);
    let temp;
    for (let i = 1; i < arrayIntegers.length; i++) {
        let j = i;
        while (j > 0 && arrayIntegers[j] < arrayIntegers[j - 1]) {
            temp = arrayIntegers[j];
            arrayIntegers[j] = arrayIntegers[j - 1];
            arrayIntegers[j - 1] = temp;
            j--;
        }
    }
}

/**
 * @method
 * @desc Print Array
 * @returns {null}
 */
function printArrayIntegers() {
    for (let integer of arrayIntegers) {
        console.log(` ${integer}`);
    }
    console.log(`____\n`);
}
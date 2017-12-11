import "zone.js";
import { Task1 } from "./tasks/task1";
import { Task2 } from "./tasks/task2";
import { Task3 } from "./tasks/task3";
import { setTimeout } from "timers";

console.log("Running within Zone", Zone.current.name);

let task1 = new Task1();
let task2 = new Task2();
let task3 = new Task3();

task1.output.addListener("1", function eventListener(v: string) {

    setTimeout(() => {
        // console.log("Event listener", Zone.current.name);
        task2.inputFromTask1 = v;
        task2.onChanges({
            "inputFromTask1": {
                previousValue: undefined,
                currentValue: v
            }
        });
    }, 0);
});

task2.output.addListener("2", function eventListener2(v: string){
    setTimeout(() => {
        // console.log("Event listener", Zone.current.name);
        task3.inputFromTask2 = v;
        task3.onChanges({
            "inputFromTask2": {
                previousValue: undefined,
                currentValue: v
            }
        });
    }, 0);
});

task3.output.addListener("3", function eventListener2(v: string){
    setTimeout(() => {
        // console.log("Event listener", Zone.current.name);
        task1.input = v;
        task1.onChanges({
            "input": {
                previousValue: undefined,
                currentValue: v
            }
        });
    }, Math.floor(Math.random()*(10000 - 2000 + 1)+2000));
});

let nZone = Zone.current.fork({
    name: "TaskZone"
});

nZone.run(() => {
    task1.onInit().then(() => console.log("Finished", Zone.current.name));
});


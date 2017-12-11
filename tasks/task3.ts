import {EventEmitter2 as EventEmitter} from "eventemitter2";

export class Task3 {
    public inputFromTask2: string;
    public output: EventEmitter = new EventEmitter();

    public onChanges(changes: any): void {
        // console.log("Task 3 running on", Zone.current.name);
        //console.log("Task 2 running on parent", Zone.current.parent.name);

        this.output.emit("3", "Task 3 value");
        
        // console.log("Output value was", this.inputFromTask2);
        //console.log("Zone Details", Zone.current);
    }
}
import {EventEmitter2 as EventEmitter} from "eventemitter2";

export class Task2 {
    public inputFromTask1: string;
    public output: EventEmitter = new EventEmitter();
    

    public async onChanges(changes: any): Promise<void> {
        // console.log("Task 2 running on", Zone.current.name);
        //console.log("Task 2 running on parent", Zone.current.parent.name);
        this.output.emit("2", "Task 2 value");
        
        // console.log("Output value was", this.inputFromTask1);
        //console.log("Zone Details", Zone.current);
    }
}
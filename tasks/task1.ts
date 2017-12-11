import {EventEmitter2 as EventEmitter} from "eventemitter2";

export class Task1 {
    public output: EventEmitter = new EventEmitter();
    public input: string;

    public counter: number = 0;

    public async onInit(): Promise<void> {
        // console.log("Task 1 running on", Zone.current.name);
        setTimeout(() => {
            this.counter++;

            console.log("Generating Zone with id = ", this.counter);
            
            const newZone = Zone.current.fork({
                name: "Task1CreatedZone",
                properties: {
                    "id": this.counter
                }
            });
    
            newZone.run(() => {
                // this.output.listeners("1").forEach((f) => {
                //     newZone.wrap(f, "task1");
                // });
                this.output.emit("1", "Task 1 value");
            });
            this.onInit();
        }, Math.floor(Math.random()*(4000 - 2000 + 1)+2000));
    }

    public async onChanges(changes: any): Promise<void> {
        // console.log("Task 1 OnChanges", Zone.current.name);
        console.log("Zone prop 'id' =", Zone.current.get("id"));
    }
}
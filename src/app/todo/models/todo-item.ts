export class TodoItem {
    public id: number | null = null;
    public title: string = '';
    public description: string = '';
    public dueDate?: Date;
    public done: boolean = false;
}

class List {
    constructor(list) {
        this.list = list
    }
 
    addTask(task) {
        this.list.push(task);
    }

    removeTask(task) {
        const index = this.list.indexOf(task);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

}

export default List;
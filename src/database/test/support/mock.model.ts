export abstract class MockModel<T> {
    protected abstract entityStub: T;

    constructor(createdEntityData: T){
        this.constructorSpy(createdEntityData);
    }

    constructorSpy(_createdEntityData: T): void {}

    findOne(): { exec: () => T } {
        return {
            exec: (): T => this.entityStub
        }
    }

    async find(): Promise<T[]> {
        return [this.entityStub] 
    }

    async save(): Promise<T> {
        return this.entityStub;
    }

    async findOneAndUpdate(): Promise<T> {
        return this.entityStub;
    }
}
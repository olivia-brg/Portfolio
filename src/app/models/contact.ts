export class Contact {

    id: string;
    something?: any;

    constructor (
        public title: string,
        public text: string,
        public email: string,
        public phone: string,
        public linkedin: string,
        public github: string,
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
        
    };


    setSomething(something: string): void {
        this.something = something;
    }

    withDevelopmentTime(something: string): Contact {
        this.setSomething(something);
        return this;
    }

}
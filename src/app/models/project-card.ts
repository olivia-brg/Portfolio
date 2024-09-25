export class ProjectCard {

    developmentTime?: string;
    id: string;

    constructor (
        public title: string,
        public context: string,
        public description: string,
        public createdAt: Date,
        public imageURL: string
    ) {
        this.id = crypto.randomUUID().substring(0, 8);        
    };

    setDevelopmentTime(developmentTime: string): void {
        this.developmentTime = developmentTime;
    }

    withDevelopmentTime(developmentTime: string): ProjectCard {
        this.setDevelopmentTime(developmentTime);
        return this;
    }
}
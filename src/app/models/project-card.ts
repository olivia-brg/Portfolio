export class ProjectCard {

    developmentTime?: string;

    constructor (
        public title: string,
        public context: string,
        public description: string,
        public createdAt: Date,
        public imageURL: string
    ) {};

    setDevelopmentTime(developmentTime: string): void {
        this.developmentTime = developmentTime;
    }

    withDevelopmentTime(developmentTime: string): ProjectCard {
        this.setDevelopmentTime(developmentTime);
        return this;
    }
}
export class ProjectCard {

    developmentTime?: string;
    fullDescription?: string[];
    gitLink?: string;
    id: string;

    constructor (
        public title: string,
        public context: string,
        public description: string[],
        public createdAt: Date,
        public imagePath: string
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

    setFullDescription(fullDescription: string[]): void {
        this.fullDescription = fullDescription;
    }
    
    withFullDescription(fullDescription: string[]): ProjectCard {
        this.setFullDescription(fullDescription);
        return this;
    }

    setGitLink(gitLink: string): void {
        this.gitLink = gitLink;
    }
    
    withGitLink(gitLink: string): ProjectCard {
        this.setGitLink(gitLink);
        return this;
    }
}
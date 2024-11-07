export class ProjectCard {

    developmentTime?: string;
    fullDescription?: string[];
    gitLink?: string;
    otherImages: {path: string, index: number}[] = [];
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

    setOtherImagesPath(imagePath: string, index: number ): void {
        this.otherImages = [...this.otherImages, {path: imagePath, index: index}];
    }
    
    withOtherImagesPath(imagesPath: string, index: number): ProjectCard {
        this.setOtherImagesPath(imagesPath, index);
        return this;
    }
}
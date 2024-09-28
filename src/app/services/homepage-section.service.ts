import { Injectable } from "@angular/core";
import { HomepageSection } from "../models/homepage-section";

@Injectable({
    providedIn: 'root',
})

export class HomepageSectionService {

    private hompageSections: HomepageSection[] = [

        new HomepageSection(
            'About me'
        ).withText(`Having previously worked in the industry, particularly in the aerospace sector, I am now transitioning into web development.
            What excites me most about development is the unique blend of creativity and technical precision it requires.
            I've always had a passion for merging these two aspects to create solutions that are both functional and innovative.
            I am currently studying at Ada Tech School, where I am learning languages and frameworks such as HTML, CSS, JavaScript, TypeScript, Angular, Sass, and Java.
            I also have some experience with C/C++, PHP, and regularly use Git and MySQL.
            My learning journey doesn't stop here; I plan to pursue additional short courses in the future to further enhance my skills.
            Naturally curious, I am always seeking new knowledge. I pride myself on being meticulous, adaptable, and highly sociable, which allows me to easily fit into new environments and collaborate effectively in teams.
            At the moment, I am looking for an apprenticeship to apply my skills in a professional setting. My long-term goals are still evolving as I remain open to possibilities and discovering what I enjoy the most.
            While I am currently focused on web development, I am also deeply fascinated by AI, blockchain, and find the development of games and software incredibly interesting.`)
    ];

    getHomepageSections(): HomepageSection[] {
        return[...this.hompageSections]
      }

      getHomepageSectionById(homepageSectionId: string): HomepageSection {
        const foundHomepageSection = this.hompageSections.find(homepageSection => homepageSection.id === homepageSectionId);
        if (!foundHomepageSection) {
          throw new Error('Section not found!');
        }
        return foundHomepageSection;
      }
}
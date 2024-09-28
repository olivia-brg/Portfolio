import { Injectable } from "@angular/core";
import { HomepageSection } from "../models/homepage-section";

@Injectable({
    providedIn: 'root',
})

export class HomepageSectionService {

    private hompageSections: HomepageSection[] = [

        new HomepageSection(
            'About me'
        )
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
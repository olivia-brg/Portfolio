export class HomepageSection {

    text?: string;
    imagePath?: string;
    id: string;

    constructor (
        public title: string,
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
        
    };

    setText(text: string): void {
        this.text = text;
    }

    withText(text: string): HomepageSection {
        this.setText(text);
        return this;
    }

    setImage(imgPath: string): void {
        this.imagePath = imgPath;
    }
    
    withImage(imgPath: string): HomepageSection {
        this.setImage(imgPath);
        return this;
    }
}
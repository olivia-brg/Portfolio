export class TxtType {
    private toRotate: string[];
    private el: HTMLElement;
    private loopNum = 0;
    private period: number;
    private txt = '';
    private isDeleting = false;
  
    constructor(el: HTMLElement, toRotate: string[], period: number) {
      this.toRotate = toRotate;
      this.el = el;
      this.period = period || 4000;
      this.tick();
    }
  
    tick(): void {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];
  
      // Logique d'ajout/suppression de caractères
      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
  
      // Mise à jour de l'élément avec le texte
      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
  
      // Calcul de la vitesse de saisie
      let delta = 200 - Math.random() * 100;
      if (this.isDeleting) delta /= 4;
  
      // Bascule entre l'ajout et la suppression
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
  
      // Appel récursif de tick avec setTimeout
      setTimeout(() => this.tick(), delta);
    }
  }
  
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() sendLetter: any;
  @Input() letter: string = 'A';

  alphabet: Array<any> = [
    { letter: 'A', active: true },
    { letter: 'B', active: false },
    { letter: 'C', active: false },
    { letter: 'D', active: false },
    { letter: 'E', active: false },
    { letter: 'F', active: false },
    { letter: 'G', active: false },
    { letter: 'H', active: false },
    { letter: 'I', active: false },
    { letter: 'J', active: false },
    { letter: 'K', active: false },
    { letter: 'L', active: false },
    { letter: 'M', active: false },
    { letter: 'N', active: false },
    { letter: 'O', active: false },
    { letter: 'P', active: false },
    { letter: 'Q', active: false },
    { letter: 'R', active: false },
    { letter: 'S', active: false },
    { letter: 'T', active: false },
    { letter: 'U', active: false },
    { letter: 'V', active: false },
    { letter: 'W', active: false },
    { letter: 'X', active: false },
    { letter: 'Y', active: false },
    { letter: 'Z', active: false }
  ];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];

      if (propName == 'letter') {
        this.letter = chng.currentValue;
      }
    }

    this.setActiveByLetter();
  }

  setActive(index: number) {
    let search = this.alphabet.find(element => element.active == true)
    if (search) {
      search.active = false;
    }
    this.alphabet[index].active = true;
  }

  setActiveByLetter() {
    let search = this.alphabet.find(element => element.active == true)

    if (search) {
      search.active = false;
    }

    search = this.alphabet.find(element => element.letter == this.letter)

    if (search) {
      search.active = true;
    }

  }

}

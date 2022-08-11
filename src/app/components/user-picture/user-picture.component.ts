import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.scss']
})
export class UserPictureComponent {
  /**
   * Nome do usuário
  */
  @Input() name: string = '';
  /**
    * Url da imagem opcional
  */
  @Input() image: string = '';
  /**
  * Tipo de usuário
  */
  @Input() profile: string =  '';
  /**
  * Tamanho do componente apenas  'sm' | 'md' | 'lg'
  */
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';

  constructor() {}

  public getNameAbb(name: string) {
    if (!name) {
      return '';
    }

    const nameBreak = name.split(' ');
    if (nameBreak.length === 1) {
      return nameBreak[0].charAt(0) + nameBreak[0].charAt(1);
    }
    let secondName = nameBreak[1].charAt(0);
    if (nameBreak.length >= 3) {
      secondName =
        nameBreak[1].length >= 3
          ? nameBreak[1].charAt(0)
          : nameBreak[2].charAt(0);
    }
    return nameBreak[0].charAt(0) + secondName;
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-elastic',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card-elastic.component.html',
  styleUrls: ['./card-elastic.component.scss']
})
export class CardElasticComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() buttonVisible: boolean = true;
  @Input() labelButton: string = 'Adicionar';
  @Input() hasDropdown: boolean = true;
  @Input() statusDropDown: boolean = false;



  constructor() { }
}

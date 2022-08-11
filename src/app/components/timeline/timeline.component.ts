import { Component, Input, OnInit } from '@angular/core';

export interface ITimelineInterfaceLink {
  title: string;
  event?: Function;
}

export interface ITimelineInterface {
  message: string;
  extra: string;
  status?: string;
  links?: ITimelineInterfaceLink[];
}

@Component({
  selector: 'app-custom-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class CustomTimelineComponent implements OnInit {
  /* data: Array de objetos que representam os eventos do timeline*/
  @Input() data: ITimelineInterface[] = [];

  constructor() {}

  /*
  * Método que inicializa os dados do componente
  */
  ngOnInit(): void {}


  /*
  * Pegar data formatada
  */
  getDate(date: Date): string {
    return date.toLocaleDateString('pt-BR');
  }
}

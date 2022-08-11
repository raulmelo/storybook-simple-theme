import { Component, Input } from '@angular/core';

/**
 * Componente utilizado para exibir informações das agências no Encontre o BB, dentro do Portal 4.0.
 *
 * ### **Como aplicar no HTML:**
 *
```html
<bb-agency-card
  name="Agência 4268"
  tel="61 40033001"
  address="SHIS, QI 5 Bloco F, Lojas 17/125 <br />Centro comercial Gilberto Salomão <br />Asa Norte, Brasília - DF, 70873-500"
  openingHours="Segunda a Sexta, de 10h às 15h"
  [services]="[
    'Saque',
    'Extratos e Saldos',
    'Pagamentos',
    'Depósitos'
  ]"
  mapUrl="https://goo.gl/maps/iLtQt8KAcEdpWmDU8"
  type="private"
></bb-agency-card>
```
 *
 * ### Parâmetros possíveis:
 *
```ts
// Nome ou número
name: string = '';

// Telefone com DDD
tel?: string = '';

// Endereço completo
address?: string = '';

// Horário de funcionamento
openingHours?: string = '';

// Serviços ofertados
services?: string[];

// URL do mapa
mapUrl?: string = '';

// Serviços ofertados
type?: 'default' | 'estilo' | 'private' = 'default';
```
 *
 * <example-url>/playground-portal/agency-card</example-url>
 */
@Component({
  selector: 'bb-agency-card',
  templateUrl: './bb-agency-card.component.html',
  styleUrls: ['./bb-agency-card.component.scss'],
})
export class BbAgencyCardComponent {
  /**
   * Nome ou número
   *
   * @required
   */
  @Input()
  name: string = '';

  /**
   * Telefone com DDD
   *
   * @optional
   */
  @Input()
  tel?: string = '';

  /**
   * Endereço completo
   *
   * @optional
   */
  @Input()
  address?: string = '';

  /**
   * Horário de funcionamento
   *
   * @optional
   */
  @Input()
  openingHours?: string = '';

  /**
   * Serviços ofertados
   *
   * @optional
   */
  @Input()
  services?: string[];

  /**
   * URL do mapa
   *
   * @optional
   */
  @Input()
  mapUrl?: string = '';

  /**
   * Serviços ofertados
   *
   * @optional
   */
  @Input()
  type?: 'default' | 'estilo' | 'private' = 'default';

  /**
   * @internal
   */
  constructor() {}

  /**
   * @internal
   */
  ngOnInit(): void {}

  get attrName(){
    return `Ver ${this.name} no mapa`;
  }
}

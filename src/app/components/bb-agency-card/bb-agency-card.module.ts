import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BbAgencyCardComponent } from './bb-agency-card.component';


/**
 * Componente utilizado para exibir informações das agências no Encontre o BB, dentro do Portal 4.0.
 *
 * ### Instalação
 *
 * Para utilizar o módulo `BbAgencyCardModule` em sua aplicação, importe da seguinte forma:

```ts
import { BbAgencyCardModule } from 'bb-components';

@NgModule({
  imports: [
    // ...
    BbAgencyCardModule,
  ],
})
export class AppModule { }
```
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
name: string;

// Telefone com DDD
tel?: string;

// Endereço completo
address?: string;

// Horário de funcionamento
openingHours?: string;

// Serviços ofertados
services?: string[];

// URL do mapa
mapUrl?: string;

// Serviços ofertados
type?: 'default' | 'estilo' | 'private' = 'default';
```
 *
 * **Para conhecer mais os atributos, consulte BbAgencyCardComponent ou as variações abaixo:**
 *
 * <iframe
 *  src="/playground-portal/agency-card"
 *  style="min-height: 900px; width: 100%;"
 *  frameborder="0">
 * </iframe>
 *
 */
@NgModule({
  declarations: [BbAgencyCardComponent],
  exports: [BbAgencyCardComponent],
  imports: [CommonModule],
})
export class BbAgencyCardModule {}

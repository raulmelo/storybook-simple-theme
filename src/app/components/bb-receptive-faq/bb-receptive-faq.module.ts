import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { BbReceptiveFaqComponent } from './bb-receptive-faq.component';

/**
 * Componente utilizado para adicionar uma seção de perguntas dentro do receptivo do Portal 4.0.
 *
 * ### Instalação
 *
 * Para utilizar o módulo `BbReceptiveFaqModule` em sua aplicação, importe da seguinte forma:

```ts
import { BbReceptiveFaqModule } from 'bb-components';

@NgModule({
  imports: [
    // ...
    BbReceptiveFaqModule,
  ],
})
export class AppModule { }
```
 *
 * ### Como utilizar
 *
```ts
questionsList: Array<object> = [
  {
    question: 'Perguntas Frequentes sobre a Conta PJ Digital',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)'
  },
  {
    question: 'Posso abrir mais de uma conta para minha empresa?',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)'
  },
  {
    question: 'Já tenho uma solicitação de abertura de conta empresa. E agora?',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)'
  },
  {
    question: 'Posso aderir à Cesta de Benefícios com isenção de 3 meses a qualquer momento? ',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)'
  }
];
```
 *
 * Como aplicar no HTML:
 *
```html
<bb-receptive-faq
  dataTitle="Perguntas Frequentes sobre a Conta PJ Digital"
  background="/assets/images/receptivos/pj/faq-bg.png"
  backgroundMobile="/assets/images/receptivos/pj/faq-bg-mobile.png"
  type="default"
  [faqQuestions]="questionsList"
  bgColor="#F4F4F8"
  dataDescription="Descrição do FAQ"
  colorTitle="#465EFF"
  [limitVisible]="4"
  bgContainerColor="#FFFFFF"
  questionColor="#212227"
  answerColor="#53565F"
  arrowColor="#585B65"
  itemColor="#FFFFFF"
  lineColor="#e7e7e7"
  linkColor="#465EFF"
  seeMoreColor="#465EFF"
></bb-receptive-faq>
```
 *
 * Parâmetros possíveis:
 *
```ts
// Título do bloco de FAQ
dataTitle: string;

// descricao do bloco de FAQ
dataDescription: string;

// Cor do título do bloco de FAQ
colorTitle?: string;

// Lista de perguntas
faqQuestions: Array<object>;

// Limite de perguntas visiveis na primeira visualização
limitVisible = 4;

// Caminho para imagem de background
background: string;

// Caminho para imagem de background
backgroundMobile: string;

// Define a exibição da lista de perguntas
type?: 'default' | 'full' = 'default';

// Define a cor de fundo do faq
bgColor?: string;

// Define a cor do container das perguntas
bgContainerColor?: string;

// Define a cor da pergunta
questionColor?: string;

// Define a cor da resposta
answerColor?: string;

// Define a cor da seta
arrowColor?: string;

// Define a cor de fundo do item
itemColor?: string;

// Define a cor da borda
lineColor?: string;

// Define a cor dos links
linkColor?: string;

// Define a cor do veja mais
seeMoreColor?: string;
```
 *
 * Para conhecer mais os atributos, consulte BbReceptiveFaqComponent ou as variações abaixo:
 *
 * ### Variações
 *
 * <iframe
 *  src="/playground-portal/receptive-faq"
 *  style="min-height: 700px; width: 100%;"
 *  frameborder="0">
 * </iframe>
 *
 */
@NgModule({
  declarations: [BbReceptiveFaqComponent],
  exports: [BbReceptiveFaqComponent],
  imports: [CommonModule, RouterModule],
})
export class BbReceptiveFaqModule {}

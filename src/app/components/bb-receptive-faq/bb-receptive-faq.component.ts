import { Component, Input } from '@angular/core';

/**
 * Componente utilizado para adicionar uma seção de perguntas dentro do receptivo do Portal 4.0.
 *
```ts
questionsList: Array<object> = [
  {
    question: 'Perguntas Frequentes sobre a Conta PJ Digital',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)'
    moreUrl:'http://bb.com.br',
    moreNewTab:false,
    moreText:'Saiba mais'
  },
  {
    question: 'Posso abrir mais de uma conta para minha empresa?',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)',
    moreUrl:'http://bb.com.br',
    moreNewTab:false,
    moreText:'Saiba mais'
  },
  {
    question: 'Já tenho uma solicitação de abertura de conta empresa. E agora?',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)',
    moreUrl:'http://bb.com.br',
    moreNewTab:false,
    moreText:'Saiba mais'
  },
  {
    question: 'Posso aderir à Cesta de Benefícios com isenção de 3 meses a qualquer momento? ',
    answer: 'No momento, está disponível apenas para empresa com um sócio (EI, MEI e EIRELI)',
    moreUrl:'http://bb.com.br',
    moreNewTab:false,
    moreText:'Saiba mais'
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
dataTitle: string = '';

// descricao do bloco de FAQ
dataDescription: string = '';

// Cor do título do bloco de FAQ
colorTitle?: string = '';

// Lista de perguntas
faqQuestions: Array<object>;

// Limite de perguntas visiveis na primeira visualização
limitVisible = 4;

// Caminho para imagem de background
background: string = '';

// Caminho para imagem de background
backgroundMobile: string = '';

// Define a exibição da lista de perguntas
type?: 'default' | 'full' = 'default';

// Define a cor de fundo do faq
bgColor?: string = '';

// Define a cor do container das perguntas
bgContainerColor?: string = '';

// Define a cor da pergunta
questionColor?: string = '';

// Define a cor da resposta
answerColor?: string = '';

// Define a cor da seta
arrowColor?: string = '';

// Define a cor de fundo do item
itemColor?: string = '';

// Define a cor da borda
lineColor?: string = '';

// Define a cor dos links
linkColor?: string = '';

// Define a cor do veja mais
seeMoreColor?: string = '';
```
 *
 * <example-url>/playground-portal/receptive-faq</example-url>
 */
@Component({
  selector: 'bb-receptive-faq',
  templateUrl: './bb-receptive-faq.component.html',
  styleUrls: ['./bb-receptive-faq.component.scss'],
})
export class BbReceptiveFaqComponent {
  /**
   * Título do bloco de FAQ - LEGADO
   */
  @Input()
  title?: string = '';

  /**
   * Título do bloco de FAQ
   */
  @Input()
  dataTitle?: string = '';

  /**
   * descricao do bloco de FAQ - LEGADO
   */
  @Input()
  description?: string = '';

  /**
   * descricao do bloco de FAQ
   */
  @Input()
  dataDescription?: string = '';

  /**
   * Cor do título do bloco de FAQ
   */
  @Input()
  get colorTitle() {
    return this._colorTitle;
  }

  /**
   * @ignore
   */
  set colorTitle(value: any) {
    this._colorTitle = value;
  }

  /**
   * @ignore
   */
  private _colorTitle?: string = '';

  /**
   * Lista de perguntas
   */
  @Input()
  faqQuestions: Array<object> = [];

  /**
   * Limite de perguntas visiveis na primeira visualização
   */
  @Input()
  limitVisible = 4;

  /**
   * Caminho para imagem de background
   */
  @Input()
  background: string = '';

  /**
   * Caminho para imagem de background
   */
  @Input()
  backgroundMobile: string = '';

  /**
   * Caminho para imagem de background
   * @optional
   */
  @Input()
  backgroundAlt?: string = '';

  /**
   * Define a exibição da lista de perguntas
   */
  @Input()
  type?: 'default' | 'full' = 'default';

  /**
   * Define a cor de fundo do faq
   */
  @Input()
  get bgColor() {
    return this._bgColor;
  }

  /**
   * @ignore
   */
  set bgColor(value: any) {
    this._bgColor = value;
  }

  /**
   * @ignore
   */
  private _bgColor?: string = '';

  /**
   * Define a cor do container das perguntas
   */
  @Input()
  get bgContainerColor() {
    return this._bgContainerColor;
  }

  /**
   * @ignore
   */
  set bgContainerColor(value: any) {
    this._bgContainerColor = value;
  }

  /**
   * @ignore
   */
  private _bgContainerColor?: string = '';

  /**
   * Define a cor da pergunta
   */
  @Input()
  get questionColor() {
    return this._questionColor;
  }

  /**
   * @ignore
   */
  set questionColor(value: any) {
    this._questionColor = value;
  }

  /**
   * @ignore
   */
  private _questionColor?: string = '';

  /**
   * Define a cor da resposta
   */
  @Input()
  get answerColor() {
    return this._answerColor;
  }

  /**
   * @ignore
   */
  set answerColor(value: any) {
    this._answerColor = value;
  }

  /**
   * @ignore
   */
  private _answerColor?: string = '';

  /**
   * Define a cor da seta
   */
  @Input()
  get arrowColor() {
    return this._arrowColor;
  }

  /**
   * @ignore
   */
  set arrowColor(value: any) {
    this._arrowColor = value;
  }

  /**
   * @ignore
   */
  private _arrowColor?: string = '';

  /**
   * Define a cor de fundo do item
   */
  @Input()
  get itemColor() {
    return this._itemColor;
  }

  /**
   * @ignore
   */
  set itemColor(value: any) {
    this._itemColor = value;
  }

  /**
   * @ignore
   */
  private _itemColor?: string = '';

  /**
   * Define a cor da borda
   */
  @Input()
  get lineColor() {
    return this._lineColor;
  }

  /**
   * @ignore
   */
  set lineColor(value: any) {
    this._lineColor = value;
  }

  /**
   * @ignore
   */
  private _lineColor?: string = '';

  /**
   * Define a cor dos links
   */
  @Input()
  get linkColor() {
    return this._linkColor;
  }

  /**
   * @ignore
   */
  set linkColor(value: any) {
    this._linkColor = value;
  }

  /**
   * @ignore
   */
  private _linkColor?: string = '';

  /**
   * Define a cor do veja mais
   */
  @Input()
  get seeMoreColor() {
    return this._seeMoreColor;
  }

  /**
   * @ignore
   */
  set seeMoreColor(value: any) {
    this._seeMoreColor = value;
  }

  /**
   * @ignore
   */
  private _seeMoreColor?: string = '';

  /**
   * @ignore
   */
  showHiddenQuestions = false;

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  get getGeneralCssVars(): string {
    const getValue = (key: string, defaultValue: string): string => {
      return defaultValue
    };

    return `
      --title-color: ${getValue('colorTitle', '#465EFF')};
      --bg-color: ${getValue('bgColor', '#F4F4F8')};
      --bg-container-color: ${getValue('bgContainerColor', '#FFFFFF')};
      --question-color: ${getValue('questionColor', '#212227')};
      --awnswer-color: ${getValue('answerColor', '#53565F')};
      --arrow-color: ${getValue('arrowColor', '#585B65')};
      --item-color: ${getValue('itemColor', '#FFFFFF')};
      --line-color: ${getValue('lineColor', '#e7e7e7')};
      --link-color: ${getValue('linkColor', '#465EFF')};
      --seemore-color: ${getValue('seeMoreColor', '#465EFF')};
    `;
  }

  /**
   * Função para exibir mais perguntas na listagem
   */
  toggleMoreQuestions(): void {
    this.showHiddenQuestions = !this.showHiddenQuestions;
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    // Popular propriedades legadas.
    this.verifyTitleDescription();
  }

  /**
   * @ignore
   */
  ngOnChanges(): void {
    // Popular propriedades legadas.
    this.verifyTitleDescription();
  }

  /**
   * Popular propriedades legadas de título e descrição.
   *
   * @ignore
   */
  verifyTitleDescription(): void {
    if (!!this.dataTitle && !!this.dataTitle.length) {
      this.title = this.dataTitle;
    }

    if (!!this.dataDescription && !!this.dataDescription.length) {
      this.description = this.dataDescription;
    }
  }
}

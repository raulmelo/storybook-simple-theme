// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';

import { CardElasticComponent } from './card-elastic.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Componente/card-elastic',
  component: CardElasticComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    title: { control: 'text', defaultValue: 'CAP 60' },
    subTitle: { control: 'text', defaultValue: ' R$50/mês' },
    description: { control: 'text', defaultValue: 'Prêmios de até R$100 mil <br/> <strong>Diferenciais</strong> ', description: 'Texto corrido ou Html tags' },
  },

} as Meta;





const Template: Story<CardElasticComponent> = (args: CardElasticComponent) => ({
  props: args,
  template: `
    <app-card-elastic
      [title]="title"
      [subTitle]="subTitle"
      [buttonVisible]="buttonVisible"
      [hasDropdown]="hasDropdown"
      [statusDropDown]="statusDropDown"
    >
      <ng-container description>
        <span [innerHtml]="description"></span>
      </ng-container>
    </app-card-elastic>
  `,
});



export const Principal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Principal.args = {};



const TemplateSimples: Story<CardElasticComponent> = (args: CardElasticComponent) => ({
  props: args,
  title: 'CAP 60',
  template: `
    <app-card-elastic [hasDropdown]="false" [title]="title" [subTitle]="subTitle"></app-card-elastic>
  `,
});



export const Simples = TemplateSimples.bind({});

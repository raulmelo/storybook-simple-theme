import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  designTokensCss: {
    label: 'Temas',
    persistData: true,
    themes: [
      {
        "name": "Wiz",
        "miniLogo": "https://wizsolucoes.com.br/wp-content/uploads/2021/02/cropped-tumb-1-32x32.png",
        "tokens": {
        "--primary": "#FF9100",
        "--primary-dark":" #F56C00",
        "--primary-light":" #FFAD42",
        "--primary-rgba":"(255, 145, 0, var(--alpha, 1))",
        "--primary-container":" #7755af",
        "--secondary": "#d65db1",
        "--secondary-dark":" #80386a",
        "--secondary-light":" #f5d7ec",
        "--secondary-rgba":" (214, 93, 177, var(--alpha, 1))",
        "--secondary-container":" #692e57",
        "--tertiary": "#91e429",
        "--tertiary-dark":" #477014",
        "--tertiary-light":" #e4f8ca",
        "--tertiary-rgba":" 243, 239, 249, 1",
        "--tertiary-container":" #6dab1f",
        "--neutral": "#1f1f1f",
        "--neutral-100": "#f4f4f4",
        "--neutral-200": "#e9e9e9",
        "--neutral-300": "#a5a5a5",
        "--neutral-400": "#cbcbcb",
        "--neutral-600": "#171717",
        "--neutral-700": "#131313",
        }
      },
      {
        "name": "BRB",
        "miniLogo": "https://novo.brb.com.br/wp-content/themes/oceanwp-child-nbr/images/favicon-32.png",
        "tokens": {
        "--primary": "#845ec2",
        "--primary-dark":" #634792",
        "--primary-light":" #f3eff9",
        "--primary-rgba":" 132, 94, 194, 1",
        "--primary-container":" #7755af",
        "--secondary": "#d65db1",
        "--secondary-dark":" #80386a",
        "--secondary-light":" #f5d7ec",
        "--secondary-rgba":" 214, 93, 177",
        "--secondary-container":" #692e57",
        "--tertiary": "#91e429",
        "--tertiary-dark":" #477014",
        "--tertiary-light":" #e4f8ca",
        "--tertiary-rgba":" 243, 239, 249, 1",
        "--tertiary-container":" #6dab1f",
        "--neutral": "#1f1f1f",
        "--neutral-100": "#f4f4f4",
        "--neutral-200": "#e9e9e9",
        "--neutral-300": "#a5a5a5",
        "--neutral-400": "#cbcbcb",
        "--neutral-600": "#171717",
        "--neutral-700": "#131313",
        }
      },
      {
        "name": "Inter",
        "miniLogo": "https://blog.bancointer.com.br/favicon-32x32.png",
        "tokens": {
        "--primary": "#845ec2",
        "--primary-dark":" #634792",
        "--primary-light":" #f3eff9",
        "--primary-rgba":" 132, 94, 194, 1",
        "--primary-container":" #7755af",
        "--secondary": "#d65db1",
        "--secondary-dark":" #80386a",
        "--secondary-light":" #f5d7ec",
        "--secondary-rgba":" 214, 93, 177",
        "--secondary-container":" #692e57",
        "--tertiary": "#91e429",
        "--tertiary-dark":" #477014",
        "--tertiary-light":" #e4f8ca",
        "--tertiary-rgba":" 243, 239, 249, 1",
        "--tertiary-container":" #6dab1f",
        "--neutral": "#1f1f1f",
        "--neutral-100": "#f4f4f4",
        "--neutral-200": "#e9e9e9",
        "--neutral-300": "#a5a5a5",
        "--neutral-400": "#cbcbcb",
        "--neutral-600": "#171717",
        "--neutral-700": "#131313",
        }
      },

    ]
  }
}

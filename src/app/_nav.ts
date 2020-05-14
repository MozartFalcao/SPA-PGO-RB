import { INavData } from '../../node_modules/@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'PGO - RB',
    url: '/dashboard',
    icon: 'icon-home',
    badge: {
      variant: 'warning',
      text: 'BETA'
    }
  },
  // {
  //   title: true,
  //   name: 'ÁREAS',
  //   icon: 'icon-globe',

  // },
  {
    name: 'Departamentos',
    url: '/base',
    icon: 'icon-globe',
    children: [
      {
        name: 'Diretorias',
        url: '/theme/typography',
        icon: 'icon-cursor'
      },
      {
        name: 'Comercial',
        url: '/theme/typography',
        icon: 'icon-basket'
      },
      {
        name: 'Operações',
        url: '/theme/typography',
        icon: 'icon-calculator'
      },
      {
        name: 'RH',
        url: '/theme/typography',
        icon: 'icon-people'
      },
      {
        name: 'Sócios',
        url: '/theme/typography',
        icon: 'icon-people'
      },
      {
        name: 'Tecnologia',
        url: '/theme/typography',
        icon: 'icon-screen-desktop'
      }
    ]
  },
  {
    name: 'Infrastrutura - TI',
    url: '/base',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Controle e Processos',
        url: '/base/cards',
        icon: ''
      },
      {
        name: 'Financeiro',
        url: '/theme/colors',
        icon: 'icon-wallet'
      },
      {
        name: 'Fornecedores',
        url: '/theme/typography',
        icon: 'icon-puzzle'
      },
      {
        name: 'Redes',
        url: '/theme/typography',
        icon: 'icon-puzzle'
      },
      {
        name: 'Servidores',
        url: '/theme/typography',
        icon: 'icon-wrench'
      }
    ]
  },
  {
    name: 'Infra - Facilities',
    url: '/base',
    icon: 'icon-directions',
    children: [
      {
        name: 'Financeiro',
        url: '/base/cards',
        icon: 'icon-wallet'
      },
      {
        name: 'Fornecedores',
        url: '/theme/colors',
        icon: 'icon-basket'
      },
      {
        name: 'Projetos',
        url: '/theme/typography',
        icon: 'icon-note'
      }
    ]
  },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];

import { INavData } from '../../node_modules/@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'GPO - RB',
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
    url: '/departamentos',
    icon: 'icon-globe',
    children: [
      {
        name: 'Comercial',
        url: '/departamentos/comercial',
        icon: 'icon-basket'
      },
      {
        name: 'Financeiro',
        url: '/departamentos/financeiro',
        icon: 'icon-wallet'
      },
      {
        name: 'Operações',
        url: '/departamentos/operacoes',
        icon: 'icon-calculator'
      },
      {
        name: 'RH',
        url: '/departamentos/rh',
        icon: 'icon-user-female'
      },
      {
        name: 'Sócios',
        url: '/departamentos/socios',
        icon: 'icon-people'
      },
      {
        name: 'tecnologia',
        url: '/departamentos/tecnologia',
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
        icon: 'icon-calculator'
      },
      {
        name: 'Financeiro',
        url: '/theme/colors',
        icon: 'icon-wallet'
      },
      {
        name: 'Fornecedores',
        url: '/theme/typography',
        icon: 'icon-social-facebook'
      },
      {
        name: 'Redes',
        url: '/theme/typography',
        icon: 'icon-screen-desktop'
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

export default [
  {
    header: '{Dev}',
    icon: 'CodeIcon',
    children: [

      {
        title: 'Menu Levels',
        icon: 'MenuIcon',
        children: [
          {
            title: 'Menu Level 2.1',
            route: null,
          }, {
            title: 'Menu Level 2.2',
            children: [
              {
                title: 'Menu Level 3.1',
                route: null,
              }, {
                title: 'Menu Level 3.2',
                route: null,
              },
            ],
          },
        ],
      }, {
        title: 'Disabled Menu',
        route: null,
        icon: 'EyeOffIcon',
        disabled: true,
      }, /* , {
        title: 'Documentation',
        href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
        icon: 'FileTextIcon',
      } */ {
        title: 'Forms Elements',
        icon: 'CopyIcon',
        children: [
          {
            title: 'Input',
            route: 'forms-element-input',
          }, {
            title: 'Input Group',
            route: 'forms-element-input-group',
          }, {
            title: 'Input Mask',
            route: 'forms-element-input-mask',
          }, {
            title: 'Textarea',
            route: 'forms-element-textarea',
          }, {
            title: 'Auto Suggest',
            route: 'extensions-auto-suggest',
          }, {
            title: 'Checkbox',
            route: 'forms-element-checkbox',
          }, {
            title: 'Radio',
            route: 'forms-element-radio',
          }, {
            title: 'Switch',
            route: 'forms-element-switch',
          }, {
            title: 'Select',
            route: 'forms-element-select',
          }, {
            title: 'Vue Select',
            route: 'extensions-vue-select',
          }, {
            title: 'Spinbutton',
            route: 'forms-element-spinbutton',
          }, {
            title: 'File Input',
            route: 'forms-element-file-input',
          }, {
            title: 'Quill Editor',
            route: 'extensions-quill-editor',
          }, {
            title: 'Form Datepicker',
            route: 'forms-element-datepicker',
          }, {
            title: 'Form Timepicker',
            route: 'forms-element-timepicker',
          }, {
            title: 'Date Time Picker',
            route: 'extensions-date-time-picker',
          }, {
            title: 'Form Rating',
            route: 'forms-element-rating',
          }, {
            title: 'Form Tag',
            route: 'forms-element-tag',
          },
        ],
      }, {
        title: 'Form Layout',
        route: 'form-layout',
        icon: 'CopyIcon',
      }, {
        title: 'Form Wizard',
        route: 'form-wizard',
        icon: 'PackageIcon',
      }, {
        title: 'Form Validation',
        route: 'form-validation',
        icon: 'CheckCircleIcon',
      }, {
        title: 'Form Repeater',
        route: 'form-repeater',
        icon: 'CopyIcon',
      }, {
        title: 'BS Table',
        route: 'table-bs-table',
        icon: 'ServerIcon',
      }, {
        title: 'Good Table',
        route: 'table-good-table',
        icon: 'GridIcon',
      }, {
        title: 'Charts',
        icon: 'PieChartIcon',
        children: [
          {
            title: 'Apex Chart',
            route: 'charts-apex-chart',
          }, {
            title: 'Chartjs',
            route: 'charts-chartjs',
          }, {
            title: 'Echart',
            route: 'charts-echart',
          },
        ],
      }, {
        title: 'BS Table',
        route: 'table-bs-table',
        icon: 'ServerIcon',
      }, {
        title: 'Good Table',
        route: 'table-good-table',
        icon: 'GridIcon',
      }, {
        title: 'Leaflet',
        route: 'maps-leaflet',
        icon: 'MapIcon',
      }, {
        title: 'Form Wizard',
        route: 'form-wizard',
        icon: 'PackageIcon',
      }, {
        title: 'Form Layout',
        route: 'form-layout',
        icon: 'CopyIcon',
      }, {
        title: 'Form Validation',
        route: 'form-validation',
        icon: 'CheckCircleIcon',
      }, {
        title: 'Form Repeater',
        route: 'form-repeater',
        icon: 'CopyIcon',
      }, {
        title: 'Chat',
        route: 'apps-chat',
        icon: 'MessageSquareIcon',
      }, {
        title: 'Todo',
        route: 'apps-todo',
        icon: 'CheckSquareIcon',
      }, {
        title: 'Invoice',
        icon: 'FileTextIcon',
        children: [
          {
            title: 'List',
            route: 'apps-invoice-list',
          }, {
            title: 'Preview',
            route: {
              name: 'apps-invoice-preview',
              params: { id: 4987 },
            },
          }, {
            title: 'Edit',
            route: {
              name: 'apps-invoice-edit',
              params: { id: 4987 },
            },
          }, {
            title: 'Add',
            route: { name: 'apps-invoice-add' },
          },
        ],
      }, {
        title: 'eCommerce',
        icon: 'ShoppingCartIcon',
        children: [
          {
            title: 'Shop',
            route: 'apps-e-commerce-shop',
          }, {
            title: 'Details',
            route: {
              name: 'apps-e-commerce-product-details',
              params: { slug: 'apple-watch-series-5-27' },
            },
          }, {
            title: 'Wishlist',
            route: 'apps-e-commerce-wishlist',
          }, {
            title: 'Checkout',
            route: 'apps-e-commerce-checkout',
          },
        ],
      }, {
        title: 'User',
        icon: 'UserIcon',
        children: [
          {
            title: 'List',
            route: 'apps-users-list',
          }, {
            title: 'View',
            route: {
              name: 'apps-users-view',
              params: { id: 21 },
            },
          }, {
            title: 'Edit',
            route: {
              name: 'apps-users-edit',
              params: { id: 21 },
            },
          },
        ],
      },
    ],
  },
]

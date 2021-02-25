// Theme Colors
export const $themeColors = {}

// App Breakpoints
export const $themeBreakpoints = {}

// APP CONFIG
export const $themeConfig = {
  app: {
    appName: 'Sprout',
    // eslint-disable-next-line global-require
    appLogoImage: require('@images/logo/logo.svg'),
  },
  layout: {
    isRTL: false,
    skin: 'light', // light, dark, bordered, semi-dark
    routerTransition: 'zoom-fade', // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
    type: 'vertical',
    contentWidth: 'full',
    menu: {
      hidden: false,
      isCollapsed: false,
    },
    navbar: {
      backgroundColor: 'secondary',
    },
    footer: {
      type: 'hidden',
    },
    customizer: false,
    enableScrollToTop: false,
  },
}

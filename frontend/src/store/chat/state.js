/** @var { ChatState } */
const STATE = {
    view:                    "active",
    windowWidth:             0,
    shallShowOverlay:        false,
    app:                     {
        appName:      "Sprout", // eslint-disable-next-line global-require
        appLogoImage: require("@/assets/images/logo/logo.svg")
    },
    breakpoints:             {
        xxl: 1400,
        xl:  1200,
        lg:  992,
        md:  768,
        sm:  576
    },
    isVerticalMenuCollapsed: false,
    layout:                  {
        isRTL:             false,
        skin:              "light",
        routerTransition:  "zoom-fade",
        type:              "vertical",
        contentWidth:      "full",
        menu:              {
            hidden:      false,
            isCollapsed: false
        },
        navbar:            {
            type:            "hidden", // static , sticky , floating, hidden
            backgroundColor: ""
        },
        footer:            {
            type: "hidden"
        },
        customizer:        false,
        enableScrollToTop: false
    }
}

export default STATE

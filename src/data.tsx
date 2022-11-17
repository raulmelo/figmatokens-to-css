export const TOKENS = {
  "Wiz": {
    "spacing": {
      "scale": {
        "value": "2",
        "type": "spacing"
      },
      "xs": {
        "value": "4",
        "type": "spacing"
      },
      "sm": {
        "value": "{spacing.xs} * {spacing.scale}",
        "type": "spacing"
      },
      "md": {
        "value": "{spacing.sm} * {spacing.scale}",
        "type": "spacing"
      },
      "lg": {
        "value": "{spacing.md} * {spacing.scale}",
        "type": "spacing"
      },
      "xl": {
        "value": "{spacing.lg} * {spacing.scale}",
        "type": "spacing"
      }
    },
    "sizing": {
      "scale": {
        "value": "1.5",
        "type": "sizing"
      },
      "xs": {
        "value": "4",
        "type": "sizing"
      },
      "sm": {
        "value": "{sizing.xs} * {sizing.scale}",
        "type": "sizing"
      },
      "md": {
        "value": "{sizing.sm} * {sizing.scale}",
        "type": "sizing"
      },
      "lg": {
        "value": "{sizing.md} * {sizing.scale}",
        "type": "sizing"
      },
      "xl": {
        "value": "{sizing.lg} * {sizing.scale}",
        "type": "sizing"
      }
    },
    "borderRadius": {
      "sm": {
        "value": "4",
        "type": "borderRadius"
      },
      "lg": {
        "value": "8",
        "type": "borderRadius"
      },
      "xl": {
        "value": "16",
        "type": "borderRadius"
      }
    },
    "borderWidth": {
      "none": {
        "value": "0",
        "type": "borderWidth"
      },
      "xs": {
        "value": "1",
        "type": "borderWidth"
      },
      "sm": {
        "value": "2",
        "type": "borderWidth"
      },
      "md": {
        "value": "4",
        "type": "borderWidth"
      },
      "lg": {
        "value": "8",
        "type": "borderWidth"
      }
    },
    "color": {
      "layout": {
        "text": {
          "value": "#252525",
          "type": "color"
        },
        "bg": {
          "value": "#e5e5e5",
          "type": "color"
        }
      },
      "neutral": {
        "light": {
          "value": "#f7fafc",
          "type": "color"
        },
        "default": {
          "value": "#a0aec0",
          "type": "color"
        },
        "dark": {
          "value": "#2d3748",
          "type": "color"
        },
        "surface": {
          "value": "#eee",
          "type": "color"
        },
        "text": {
          "value": "#353030",
          "type": "color"
        }
      },
      "error": {
        "light": {
          "value": "#fff5f5",
          "type": "color"
        },
        "dark": {
          "value": "#c53030",
          "type": "color"
        },
        "surface": {
          "value": "#742a2a",
          "type": "color"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        }
      },
      "first": {
        "default": {
          "value": "#FF9100",
          "type": "color",
          "description": "Cor principal"
        },
        "light": {
          "value": "#FFAD42",
          "type": "color",
          "description": "Cor light, hover"
        },
        "dark": {
          "value": "#F56C00",
          "type": "color",
          "description": "Cor selecionado"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.first.default}",
          "type": "color"
        }
      },
      "second": {
        "default": {
          "value": "#3c8c4c",
          "type": "color",
          "description": "Default"
        },
        "light": {
          "value": "#a3e9b1",
          "type": "color"
        },
        "dark": {
          "value": "#07651a",
          "type": "color"
        },
        "text": {
          "value": "#f2f2f2",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.second.default}",
          "type": "color"
        }
      }
    },
    "opacity": {
      "low": {
        "value": "10%",
        "type": "opacity"
      },
      "md": {
        "value": "50%",
        "type": "opacity"
      },
      "high": {
        "value": "90%",
        "type": "opacity"
      }
    },
    "fontFamilies": {
      "brand": {
        "value": "Roboto",
        "type": "fontFamilies"
      },
      "body": {
        "value": "Roboto",
        "type": "fontFamilies",
        "description": "Fonte responsavel por textos "
      }
    },
    "lineHeights": {
      "heading": {
        "value": "110%",
        "type": "lineHeights"
      },
      "body": {
        "value": "140%",
        "type": "lineHeights"
      }
    },
    "letterSpacing": {
      "default": {
        "value": "0",
        "type": "letterSpacing"
      },
      "increased": {
        "value": "150%",
        "type": "letterSpacing"
      },
      "decreased": {
        "value": "-5%",
        "type": "letterSpacing"
      }
    },
    "paragraphSpacing": {
      "h1": {
        "value": "32",
        "type": "paragraphSpacing"
      },
      "h2": {
        "value": "26",
        "type": "paragraphSpacing"
      }
    },
    "fontWeights": {
      "headingRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "headingBold": {
        "value": "Bold",
        "type": "fontWeights"
      },
      "bodyRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "bodyBold": {
        "value": "Bold",
        "type": "fontWeights"
      }
    },
    "fontSizes": {
      "h1": {
        "value": "{fontSizes.h2} * 1.25",
        "type": "fontSizes"
      },
      "h2": {
        "value": "{fontSizes.h3} * 1.25",
        "type": "fontSizes"
      },
      "h3": {
        "value": "{fontSizes.h4} * 1.25",
        "type": "fontSizes"
      },
      "h4": {
        "value": "{fontSizes.h5} * 1.25",
        "type": "fontSizes"
      },
      "h5": {
        "value": "{fontSizes.h6} * 1.25",
        "type": "fontSizes"
      },
      "h6": {
        "value": "{fontSizes.body} * 1",
        "type": "fontSizes"
      },
      "body": {
        "value": "16",
        "type": "fontSizes"
      },
      "sm": {
        "value": "{fontSizes.body} * 0.85",
        "type": "fontSizes"
      },
      "xs": {
        "value": "{fontSizes.body} * 0.65",
        "type": "fontSizes"
      }
    },
    "typography": {
      "H1": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "H2": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "Body": {
        "value": {
          "fontFamily": "{fontFamilies.body}",
          "fontWeight": "{fontWeights.bodyRegular}",
          "lineHeight": "{lineHeights.heading}",
          "fontSize": "{fontSizes.body}",
          "paragraphSpacing": "{paragraphSpacing.h2}"
        },
        "type": "typography"
      }
    },
    "radiusElement": {
      "value": "8px",
      "type": "borderRadius",
      "description": "Bordas arrendodamento"
    }
  },
  "Nubank": {
    "spacing": {
      "scale": {
        "value": "2",
        "type": "spacing"
      },
      "xs": {
        "value": "4",
        "type": "spacing"
      },
      "sm": {
        "value": "{spacing.xs} * {spacing.scale}",
        "type": "spacing"
      },
      "md": {
        "value": "{spacing.sm} * {spacing.scale}",
        "type": "spacing"
      },
      "lg": {
        "value": "{spacing.md} * {spacing.scale}",
        "type": "spacing"
      },
      "xl": {
        "value": "{spacing.lg} * {spacing.scale}",
        "type": "spacing"
      }
    },
    "sizing": {
      "scale": {
        "value": "1.5",
        "type": "sizing"
      },
      "xs": {
        "value": "4",
        "type": "sizing"
      },
      "sm": {
        "value": "{sizing.xs} * {sizing.scale}",
        "type": "sizing"
      },
      "md": {
        "value": "{sizing.sm} * {sizing.scale}",
        "type": "sizing"
      },
      "lg": {
        "value": "{sizing.md} * {sizing.scale}",
        "type": "sizing"
      },
      "xl": {
        "value": "{sizing.lg} * {sizing.scale}",
        "type": "sizing"
      }
    },
    "borderRadius": {
      "sm": {
        "value": "4",
        "type": "borderRadius"
      },
      "lg": {
        "value": "8",
        "type": "borderRadius"
      },
      "xl": {
        "value": "16",
        "type": "borderRadius"
      }
    },
    "borderWidth": {
      "none": {
        "value": "0",
        "type": "borderWidth"
      },
      "xs": {
        "value": "1",
        "type": "borderWidth"
      },
      "sm": {
        "value": "2",
        "type": "borderWidth"
      },
      "md": {
        "value": "4",
        "type": "borderWidth"
      },
      "lg": {
        "value": "8",
        "type": "borderWidth"
      }
    },
    "color": {
      "layout": {
        "bg": {
          "value": "#252525",
          "type": "color"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        }
      },
      "neutral": {
        "light": {
          "value": "#f7fafc",
          "type": "color"
        },
        "default": {
          "value": "#a0aec0",
          "type": "color"
        },
        "dark": {
          "value": "#2d3748",
          "type": "color"
        },
        "surface": {
          "value": "#fcfcfc",
          "type": "color"
        },
        "text": {
          "value": "#353030",
          "type": "color"
        }
      },
      "error": {
        "light": {
          "value": "#fff5f5",
          "type": "color"
        },
        "dark": {
          "value": "#c53030",
          "type": "color"
        },
        "surface": {
          "value": "#742a2a",
          "type": "color"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        }
      },
      "first": {
        "light": {
          "value": "#9539b1",
          "type": "color",
          "description": "Cor light, hover"
        },
        "default": {
          "value": "#840FB2",
          "type": "color",
          "description": "Cor principal"
        },
        "dark": {
          "value": "#650F87",
          "type": "color",
          "description": "Cor selecionado"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.first.default}",
          "type": "color"
        }
      },
      "second": {
        "default": {
          "value": "#3c8c4c",
          "type": "color",
          "description": "Default"
        },
        "light": {
          "value": "#a3e9b1",
          "type": "color"
        },
        "dark": {
          "value": "#07651a",
          "type": "color"
        },
        "text": {
          "value": "#f2f2f2",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.second.default}",
          "type": "color"
        }
      }
    },
    "opacity": {
      "low": {
        "value": "10%",
        "type": "opacity"
      },
      "md": {
        "value": "50%",
        "type": "opacity"
      },
      "high": {
        "value": "90%",
        "type": "opacity"
      }
    },
    "fontFamilies": {
      "brand": {
        "value": "Graphik",
        "type": "fontFamilies"
      },
      "body": {
        "value": "Helvetica",
        "type": "fontFamilies",
        "description": "Fonte responsavel por textos "
      }
    },
    "lineHeights": {
      "heading": {
        "value": "110%",
        "type": "lineHeights"
      },
      "body": {
        "value": "140%",
        "type": "lineHeights"
      }
    },
    "letterSpacing": {
      "default": {
        "value": "0",
        "type": "letterSpacing"
      },
      "increased": {
        "value": "150%",
        "type": "letterSpacing"
      },
      "decreased": {
        "value": "-5%",
        "type": "letterSpacing"
      }
    },
    "paragraphSpacing": {
      "h1": {
        "value": "32",
        "type": "paragraphSpacing"
      },
      "h2": {
        "value": "26",
        "type": "paragraphSpacing"
      }
    },
    "fontWeights": {
      "headingRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "headingBold": {
        "value": "Bold",
        "type": "fontWeights"
      },
      "bodyRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "bodyBold": {
        "value": "Bold",
        "type": "fontWeights"
      }
    },
    "fontSizes": {
      "h1": {
        "value": "{fontSizes.h2} * 1.25",
        "type": "fontSizes"
      },
      "h2": {
        "value": "{fontSizes.h3} * 1.25",
        "type": "fontSizes"
      },
      "h3": {
        "value": "{fontSizes.h4} * 1.25",
        "type": "fontSizes"
      },
      "h4": {
        "value": "{fontSizes.h5} * 1.25",
        "type": "fontSizes"
      },
      "h5": {
        "value": "{fontSizes.h6} * 1.25",
        "type": "fontSizes"
      },
      "h6": {
        "value": "{fontSizes.body} * 1",
        "type": "fontSizes"
      },
      "body": {
        "value": "16",
        "type": "fontSizes"
      },
      "sm": {
        "value": "{fontSizes.body} * 0.85",
        "type": "fontSizes"
      },
      "xs": {
        "value": "{fontSizes.body} * 0.65",
        "type": "fontSizes"
      }
    },
    "typography": {
      "H1": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "H2": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "Body": {
        "value": {
          "fontFamily": "{fontFamilies.body}",
          "fontWeight": "{fontWeights.bodyRegular}",
          "lineHeight": "{lineHeights.heading}",
          "fontSize": "{fontSizes.body}",
          "paragraphSpacing": "{paragraphSpacing.h2}"
        },
        "type": "typography"
      }
    },
    "radiusElement": {
      "value": "2px",
      "type": "borderRadius",
      "description": "Bordas arrendodamento"
    },
    "shadowbox": {
      "value": {
        "x": "0",
        "y": "15",
        "blur": "30",
        "spread": "0",
        "color": "rgba(0,0,0,0.17)",
        "type": "dropShadow"
      },
      "type": "boxShadow"
    }
  },
  "Caixa": {
    "spacing": {
      "scale": {
        "value": "2",
        "type": "spacing"
      },
      "xs": {
        "value": "4",
        "type": "spacing"
      },
      "sm": {
        "value": "{spacing.xs} * {spacing.scale}",
        "type": "spacing"
      },
      "md": {
        "value": "{spacing.sm} * {spacing.scale}",
        "type": "spacing"
      },
      "lg": {
        "value": "{spacing.md} * {spacing.scale}",
        "type": "spacing"
      },
      "xl": {
        "value": "{spacing.lg} * {spacing.scale}",
        "type": "spacing"
      }
    },
    "sizing": {
      "scale": {
        "value": "1.5",
        "type": "sizing"
      },
      "xs": {
        "value": "4",
        "type": "sizing"
      },
      "sm": {
        "value": "{sizing.xs} * {sizing.scale}",
        "type": "sizing"
      },
      "md": {
        "value": "{sizing.sm} * {sizing.scale}",
        "type": "sizing"
      },
      "lg": {
        "value": "{sizing.md} * {sizing.scale}",
        "type": "sizing"
      },
      "xl": {
        "value": "{sizing.lg} * {sizing.scale}",
        "type": "sizing"
      }
    },
    "borderRadius": {
      "sm": {
        "value": "4",
        "type": "borderRadius"
      },
      "lg": {
        "value": "8",
        "type": "borderRadius"
      },
      "xl": {
        "value": "16",
        "type": "borderRadius"
      }
    },
    "borderWidth": {
      "none": {
        "value": "0",
        "type": "borderWidth"
      },
      "xs": {
        "value": "1",
        "type": "borderWidth"
      },
      "sm": {
        "value": "2",
        "type": "borderWidth"
      },
      "md": {
        "value": "4",
        "type": "borderWidth"
      },
      "lg": {
        "value": "8",
        "type": "borderWidth"
      }
    },
    "color": {
      "layout": {
        "bg": {
          "value": "#252525",
          "type": "color"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        }
      },
      "neutral": {
        "light": {
          "value": "#f7fafc",
          "type": "color"
        },
        "default": {
          "value": "#a0aec0",
          "type": "color"
        },
        "dark": {
          "value": "#2d3748",
          "type": "color"
        },
        "surface": {
          "value": "#fcfcfc",
          "type": "color"
        },
        "text": {
          "value": "#353030",
          "type": "color"
        }
      },
      "error": {
        "light": {
          "value": "#fff5f5",
          "type": "color"
        },
        "dark": {
          "value": "#c53030",
          "type": "color"
        },
        "surface": {
          "value": "#742a2a",
          "type": "color"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        }
      },
      "first": {
        "light": {
          "value": "#5b79af",
          "type": "color",
          "description": "Cor light, hover"
        },
        "default": {
          "value": "#143f8c",
          "type": "color",
          "description": "Cor principal"
        },
        "dark": {
          "value": "#0f2f69",
          "type": "color",
          "description": "Cor selecionado"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.first.default}",
          "type": "color"
        }
      },
      "second": {
        "light": {
          "value": "#f9b462",
          "type": "color"
        },
        "default": {
          "value": "#f7941e",
          "type": "color",
          "description": "Default"
        },
        "dark": {
          "value": "#b96f17",
          "type": "color"
        },
        "text": {
          "value": "#f2f2f2",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.second.default}",
          "type": "color"
        }
      }
    },
    "opacity": {
      "low": {
        "value": "10%",
        "type": "opacity"
      },
      "md": {
        "value": "50%",
        "type": "opacity"
      },
      "high": {
        "value": "90%",
        "type": "opacity"
      }
    },
    "fontFamilies": {
      "brand": {
        "value": "Graphik",
        "type": "fontFamilies"
      },
      "body": {
        "value": "Helvetica",
        "type": "fontFamilies",
        "description": "Fonte responsavel por textos "
      }
    },
    "lineHeights": {
      "heading": {
        "value": "110%",
        "type": "lineHeights"
      },
      "body": {
        "value": "140%",
        "type": "lineHeights"
      }
    },
    "letterSpacing": {
      "default": {
        "value": "0",
        "type": "letterSpacing"
      },
      "increased": {
        "value": "150%",
        "type": "letterSpacing"
      },
      "decreased": {
        "value": "-5%",
        "type": "letterSpacing"
      }
    },
    "paragraphSpacing": {
      "h1": {
        "value": "32",
        "type": "paragraphSpacing"
      },
      "h2": {
        "value": "26",
        "type": "paragraphSpacing"
      }
    },
    "fontWeights": {
      "headingRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "headingBold": {
        "value": "Bold",
        "type": "fontWeights"
      },
      "bodyRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "bodyBold": {
        "value": "Bold",
        "type": "fontWeights"
      }
    },
    "fontSizes": {
      "h1": {
        "value": "{fontSizes.h2} * 1.25",
        "type": "fontSizes"
      },
      "h2": {
        "value": "{fontSizes.h3} * 1.25",
        "type": "fontSizes"
      },
      "h3": {
        "value": "{fontSizes.h4} * 1.25",
        "type": "fontSizes"
      },
      "h4": {
        "value": "{fontSizes.h5} * 1.25",
        "type": "fontSizes"
      },
      "h5": {
        "value": "{fontSizes.h6} * 1.25",
        "type": "fontSizes"
      },
      "h6": {
        "value": "{fontSizes.body} * 1",
        "type": "fontSizes"
      },
      "body": {
        "value": "16",
        "type": "fontSizes"
      },
      "sm": {
        "value": "{fontSizes.body} * 0.85",
        "type": "fontSizes"
      },
      "xs": {
        "value": "{fontSizes.body} * 0.65",
        "type": "fontSizes"
      }
    },
    "typography": {
      "H1": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "H2": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "Body": {
        "value": {
          "fontFamily": "{fontFamilies.body}",
          "fontWeight": "{fontWeights.bodyRegular}",
          "lineHeight": "{lineHeights.heading}",
          "fontSize": "{fontSizes.body}",
          "paragraphSpacing": "{paragraphSpacing.h2}"
        },
        "type": "typography"
      }
    },
    "radiusElement": {
      "value": "2px",
      "type": "borderRadius",
      "description": "Bordas arrendodamento"
    },
    "shadowbox": {
      "value": {
        "x": "0",
        "y": "15",
        "blur": "30",
        "spread": "0",
        "color": "rgba(0,0,0,0.17)",
        "type": "dropShadow"
      },
      "type": "boxShadow"
    }
  },
  "Santander": {
    "spacing": {
      "scale": {
        "value": "2",
        "type": "spacing"
      },
      "xs": {
        "value": "4",
        "type": "spacing"
      },
      "sm": {
        "value": "{spacing.xs} * {spacing.scale}",
        "type": "spacing"
      },
      "md": {
        "value": "{spacing.sm} * {spacing.scale}",
        "type": "spacing"
      },
      "lg": {
        "value": "{spacing.md} * {spacing.scale}",
        "type": "spacing"
      },
      "xl": {
        "value": "{spacing.lg} * {spacing.scale}",
        "type": "spacing"
      }
    },
    "sizing": {
      "scale": {
        "value": "1.5",
        "type": "sizing"
      },
      "xs": {
        "value": "4",
        "type": "sizing"
      },
      "sm": {
        "value": "{sizing.xs} * {sizing.scale}",
        "type": "sizing"
      },
      "md": {
        "value": "{sizing.sm} * {sizing.scale}",
        "type": "sizing"
      },
      "lg": {
        "value": "{sizing.md} * {sizing.scale}",
        "type": "sizing"
      },
      "xl": {
        "value": "{sizing.lg} * {sizing.scale}",
        "type": "sizing"
      }
    },
    "borderRadius": {
      "sm": {
        "value": "4",
        "type": "borderRadius"
      },
      "lg": {
        "value": "8",
        "type": "borderRadius"
      },
      "xl": {
        "value": "16",
        "type": "borderRadius"
      }
    },
    "borderWidth": {
      "none": {
        "value": "0",
        "type": "borderWidth"
      },
      "xs": {
        "value": "1",
        "type": "borderWidth"
      },
      "sm": {
        "value": "2",
        "type": "borderWidth"
      },
      "md": {
        "value": "4",
        "type": "borderWidth"
      },
      "lg": {
        "value": "8",
        "type": "borderWidth"
      }
    },
    "color": {
      "layout": {
        "text": {
          "value": "#252525",
          "type": "color"
        },
        "bg": {
          "value": "#fff",
          "type": "color"
        }
      },
      "neutral": {
        "light": {
          "value": "#f7fafc",
          "type": "color"
        },
        "default": {
          "value": "#a0aec0",
          "type": "color"
        },
        "dark": {
          "value": "#2d3748",
          "type": "color"
        },
        "surface": {
          "value": "#fcfcfc",
          "type": "color"
        },
        "text": {
          "value": "#353030",
          "type": "color"
        }
      },
      "error": {
        "light": {
          "value": "#fff5f5",
          "type": "color"
        },
        "dark": {
          "value": "#c53030",
          "type": "color"
        },
        "surface": {
          "value": "#742a2a",
          "type": "color"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        }
      },
      "first": {
        "light": {
          "value": "#d3554d",
          "type": "color",
          "description": "Cor light, hover"
        },
        "default": {
          "value": "#c00c00",
          "type": "color",
          "description": "Cor principal"
        },
        "dark": {
          "value": "#900900",
          "type": "color",
          "description": "Cor selecionado"
        },
        "text": {
          "value": "#fff",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.first.default}",
          "type": "color"
        }
      },
      "second": {
        "light": {
          "value": "#f9b462",
          "type": "color"
        },
        "default": {
          "value": "#f7941e",
          "type": "color",
          "description": "Default"
        },
        "dark": {
          "value": "#b96f17",
          "type": "color"
        },
        "text": {
          "value": "#f2f2f2",
          "type": "color"
        },
        "surface": {
          "value": "{fnx.second.default}",
          "type": "color"
        }
      }
    },
    "opacity": {
      "low": {
        "value": "10%",
        "type": "opacity"
      },
      "md": {
        "value": "50%",
        "type": "opacity"
      },
      "high": {
        "value": "90%",
        "type": "opacity"
      }
    },
    "fontFamilies": {
      "brand": {
        "value": "Graphik",
        "type": "fontFamilies"
      },
      "body": {
        "value": "Helvetica",
        "type": "fontFamilies",
        "description": "Fonte responsavel por textos "
      }
    },
    "lineHeights": {
      "heading": {
        "value": "110%",
        "type": "lineHeights"
      },
      "body": {
        "value": "140%",
        "type": "lineHeights"
      }
    },
    "letterSpacing": {
      "default": {
        "value": "0",
        "type": "letterSpacing"
      },
      "increased": {
        "value": "150%",
        "type": "letterSpacing"
      },
      "decreased": {
        "value": "-5%",
        "type": "letterSpacing"
      }
    },
    "paragraphSpacing": {
      "h1": {
        "value": "32",
        "type": "paragraphSpacing"
      },
      "h2": {
        "value": "26",
        "type": "paragraphSpacing"
      }
    },
    "fontWeights": {
      "headingRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "headingBold": {
        "value": "Bold",
        "type": "fontWeights"
      },
      "bodyRegular": {
        "value": "Regular",
        "type": "fontWeights"
      },
      "bodyBold": {
        "value": "Bold",
        "type": "fontWeights"
      }
    },
    "fontSizes": {
      "h1": {
        "value": "{fontSizes.h2} * 1.25",
        "type": "fontSizes"
      },
      "h2": {
        "value": "{fontSizes.h3} * 1.25",
        "type": "fontSizes"
      },
      "h3": {
        "value": "{fontSizes.h4} * 1.25",
        "type": "fontSizes"
      },
      "h4": {
        "value": "{fontSizes.h5} * 1.25",
        "type": "fontSizes"
      },
      "h5": {
        "value": "{fontSizes.h6} * 1.25",
        "type": "fontSizes"
      },
      "h6": {
        "value": "{fontSizes.body} * 1",
        "type": "fontSizes"
      },
      "body": {
        "value": "16",
        "type": "fontSizes"
      },
      "sm": {
        "value": "{fontSizes.body} * 0.85",
        "type": "fontSizes"
      },
      "xs": {
        "value": "{fontSizes.body} * 0.65",
        "type": "fontSizes"
      }
    },
    "typography": {
      "H1": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h1}",
            "paragraphSpacing": "{paragraphSpacing.h1}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "H2": {
        "Bold": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingBold}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        },
        "Regular": {
          "value": {
            "fontFamily": "{fontFamilies.brand}",
            "fontWeight": "{fontWeights.headingRegular}",
            "lineHeight": "{lineHeights.heading}",
            "fontSize": "{fontSizes.h2}",
            "paragraphSpacing": "{paragraphSpacing.h2}",
            "letterSpacing": "{letterSpacing.decreased}"
          },
          "type": "typography"
        }
      },
      "Body": {
        "value": {
          "fontFamily": "{fontFamilies.body}",
          "fontWeight": "{fontWeights.bodyRegular}",
          "lineHeight": "{lineHeights.heading}",
          "fontSize": "{fontSizes.body}",
          "paragraphSpacing": "{paragraphSpacing.h2}"
        },
        "type": "typography"
      }
    },
    "radiusElement": {
      "value": "2px",
      "type": "borderRadius",
      "description": "Bordas arrendodamento"
    },
    "shadowbox": {
      "value": {
        "x": "0",
        "y": "15",
        "blur": "30",
        "spread": "0",
        "color": "rgba(0,0,0,0.17)",
        "type": "dropShadow"
      },
      "type": "boxShadow"
    }
  },
  "$themes": [],
  "$metadata": {
    "tokenSetOrder": [
      "Wiz",
      "Nubank",
      "Caixa",
      "Santander"
    ]
  }
}



import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { Layout } from "./components/layout";

import { getNameThemes, getObjectsInLoop } from "./utils";
function App() {
  const [themes, setThemes] = useState([]);
  const [modeView, setModeView] = useState<'css' | 'json'>('css');


  // useEffect(() => {
  //   const item = {
  //     "wiz": {
  //       "fnx": {
  //         "color": {
  //           "primary": {
  //             "extralight": {
  //               "value": "#FFF0E4",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#FFB578",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#FF8826",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#EF6C00",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#BF5600",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#8F4100",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#602B00",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           },
  //           "secondary": {
  //             "extralight": {
  //               "value": "#DCFFFB",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#00E7CD",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#00C4AE",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#00A18F",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#008172",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#006156",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#004039",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           },
  //           "grayscale": {
  //             "extradark": {
  //               "value": "#212223",
  //               "type": "color",
  //               "description": "Extra dark"
  //             },
  //             "Darkest": {
  //               "value": "#6F7276",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "dark": {
  //               "value": "#ACAFB1",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "medium": {
  //               "value": "#C1C3C5",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "light": {
  //               "value": "#D6D7D8",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "lightest": {
  //               "value": "#EAEBEB",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "extralight": {
  //               "value": "#FAFAFA",
  //               "type": "color",
  //               "description": "Extra light"
  //             }
  //           },
  //           "feedback": {
  //             "success": {
  //               "extradark": {
  //                 "value": "#004C35",
  //                 "type": "color",
  //                 "description": "Extra dark"
  //               },
  //               "darkest": {
  //                 "value": "#007350",
  //                 "type": "color",
  //                 "description": "Darkest"
  //               },
  //               "dark": {
  //                 "value": "#00996A",
  //                 "type": "color",
  //                 "description": "Dark"
  //               },
  //               "medium": {
  //                 "value": "#00BF85",
  //                 "type": "color",
  //                 "description": "Medium"
  //               },
  //               "light": {
  //                 "value": "#00FFB1",
  //                 "type": "color",
  //                 "description": "Light"
  //               },
  //               "lightest": {
  //                 "value": "#7FFFD8",
  //                 "type": "color",
  //                 "description": "Lightest"
  //               },
  //               "extralight": {
  //                 "value": "#BFFFEC",
  //                 "type": "color",
  //                 "description": "Extra light"
  //               }
  //             },
  //             "warning": {
  //               "extradark": {
  //                 "value": "#3E2B00",
  //                 "type": "color",
  //                 "description": "Extra dark"
  //               },
  //               "darkest": {
  //                 "value": "#7C5500",
  //                 "type": "color",
  //                 "description": "Darkest"
  //               },
  //               "dark": {
  //                 "value": "#B98000",
  //                 "type": "color",
  //                 "description": "Dark"
  //               },
  //               "medium": {
  //                 "value": "#FFC136",
  //                 "type": "color",
  //                 "description": "Medium"
  //               },
  //               "light": {
  //                 "value": "#FFCD5E",
  //                 "type": "color",
  //                 "description": "Light"
  //               },
  //               "lightest": {
  //                 "value": "#FFE09B",
  //                 "type": "color",
  //                 "description": "Lightest"
  //               },
  //               "extralight": {
  //                 "value": "#FFF3D7",
  //                 "type": "color",
  //                 "description": "Extra light"
  //               }
  //             },
  //             "error": {
  //               "extradark": {
  //                 "value": "#5A0303",
  //                 "type": "color",
  //                 "description": "Extra dark"
  //               },
  //               "darkest": {
  //                 "value": "#860404",
  //                 "type": "color",
  //                 "description": "Darkest"
  //               },
  //               "dark": {
  //                 "value": "#B30606",
  //                 "type": "color",
  //                 "description": "Dark"
  //               },
  //               "medium": {
  //                 "value": "#FF3535",
  //                 "type": "color",
  //                 "description": "Medium"
  //               },
  //               "light": {
  //                 "value": "#F94242",
  //                 "type": "color",
  //                 "description": "Light"
  //               },
  //               "lightest": {
  //                 "value": "#FC9393",
  //                 "type": "color",
  //                 "description": "Lightest"
  //               },
  //               "extralight": {
  //                 "value": "#FEE4E4",
  //                 "type": "color",
  //                 "description": "Extra light"
  //               }
  //             },
  //             "info": {
  //               "extradark": {
  //                 "value": "#0A2340",
  //                 "type": "color",
  //                 "description": "Extra dark"
  //               },
  //               "darkest": {
  //                 "value": "#103A6B",
  //                 "type": "color",
  //                 "description": "Darkest"
  //               },
  //               "dark": {
  //                 "value": "#175296",
  //                 "type": "color",
  //                 "description": "Dark"
  //               },
  //               "medium": {
  //                 "value": "#2175D6",
  //                 "type": "color",
  //                 "description": "Medium"
  //               },
  //               "light": {
  //                 "value": "#4990E3",
  //                 "type": "color",
  //                 "description": "Light"
  //               },
  //               "lightest": {
  //                 "value": "#8DBAED",
  //                 "type": "color",
  //                 "description": "Lightest"
  //               },
  //               "extralight": {
  //                 "value": "#E8F1FB",
  //                 "type": "color",
  //                 "description": "Extra light"
  //               }
  //             }
  //           }
  //         },
  //         "fontsize": {
  //           "xxxs": {
  //             "value": "12px",
  //             "type": "fontSizes",
  //             "description": "12px | 0.75rem"
  //           },
  //           "xxs": {
  //             "value": "14px",
  //             "type": "fontSizes",
  //             "description": "14px | 0.875 rem"
  //           },
  //           "xs": {
  //             "value": "16px",
  //             "type": "fontSizes",
  //             "description": "16px | 1rem"
  //           },
  //           "sm": {
  //             "value": "18px",
  //             "type": "fontSizes",
  //             "description": "18px | 1.125rem"
  //           },
  //           "md": {
  //             "value": "20px",
  //             "type": "fontSizes",
  //             "description": "20px | 1.25rem"
  //           },
  //           "lg": {
  //             "value": "24px",
  //             "type": "fontSizes",
  //             "description": "24px | 1.5rem"
  //           },
  //           "xl": {
  //             "value": "32px",
  //             "type": "fontSizes",
  //             "description": "32px | 2 rem"
  //           },
  //           "xxl": {
  //             "value": "36px",
  //             "type": "fontSizes",
  //             "description": "36px | 2.25 rem"
  //           }
  //         },
  //         "lineheight": {
  //           "tight": {
  //             "value": "100%",
  //             "type": "lineHeights"
  //           },
  //           "medium": {
  //             "value": "150%",
  //             "type": "lineHeights"
  //           },
  //           "distant": {
  //             "value": "170%",
  //             "type": "lineHeights"
  //           },
  //           "super-distant": {
  //             "value": "180%",
  //             "type": "lineHeights"
  //           },
  //           "faraway": {
  //             "value": "200%",
  //             "type": "lineHeights"
  //           }
  //         },
  //         "radius": {
  //           "none": {
  //             "value": "0px",
  //             "type": "borderRadius",
  //             "description": "0px | 0 rem"
  //           },
  //           "sm": {
  //             "value": "4px",
  //             "type": "borderRadius",
  //             "description": "4px | 0.25 rem"
  //           },
  //           "md": {
  //             "value": "8px",
  //             "type": "borderRadius",
  //             "description": "8px | 0.5 rem"
  //           },
  //           "circular": {
  //             "value": "50%",
  //             "type": "borderRadius",
  //             "description": "Pill ou circular 50%"
  //           }
  //         },
  //         "borderwidth": {
  //           "none": {
  //             "value": "0px",
  //             "type": "borderWidth",
  //             "description": "None or 0"
  //           },
  //           "hairline": {
  //             "value": "0.5px",
  //             "type": "borderWidth",
  //             "description": "0.5px | 0.031 rem"
  //           },
  //           "thin": {
  //             "value": "1px",
  //             "type": "borderWidth",
  //             "description": "1px | 0.063 rem"
  //           },
  //           "thick": {
  //             "value": "2px",
  //             "type": "borderWidth",
  //             "description": "2px | 0.125 rem"
  //           }
  //         },
  //         "opacity": {
  //           "semi-transparent": {
  //             "value": "16%",
  //             "type": "opacity",
  //             "description": "16%"
  //           },
  //           "light": {
  //             "value": "20%",
  //             "type": "opacity",
  //             "description": "20%"
  //           },
  //           "medium": {
  //             "value": "32%",
  //             "type": "opacity",
  //             "description": "32%"
  //           }
  //         },
  //         "fontweight": {
  //           "light": {
  //             "value": "300",
  //             "type": "fontWeights"
  //           },
  //           "regular": {
  //             "value": "400",
  //             "type": "fontWeights"
  //           },
  //           "medium": {
  //             "value": "500",
  //             "type": "fontWeights"
  //           },
  //           "semibold": {
  //             "value": "600",
  //             "type": "fontWeights"
  //           },
  //           "bold": {
  //             "value": "700",
  //             "type": "fontWeights"
  //           },
  //           "extrabold": {
  //             "value": "800",
  //             "type": "fontWeights",
  //             "description": "Fonte mais pesada"
  //           }
  //         }
  //       },
  //       "shadow": {
  //         "level-0": {
  //           "value": {
  //             "x": "0",
  //             "y": "0",
  //             "blur": "0",
  //             "spread": "0",
  //             "color": "#000",
  //             "type": "innerShadow"
  //           },
  //           "type": "boxShadow",
  //           "description": "Sem profundidade"
  //         },
  //         "level-1": {
  //           "value": {
  //             "x": "0",
  //             "y": "2",
  //             "blur": "16",
  //             "spread": "0",
  //             "color": "rgba(0,0,0,0.2)",
  //             "type": "dropShadow"
  //           },
  //           "type": "boxShadow"
  //         },
  //         "level-2": {
  //           "value": {
  //             "x": "0",
  //             "y": "4",
  //             "blur": "16",
  //             "spread": "0",
  //             "color": "rgba(0,0,0,0.2)",
  //             "type": "dropShadow"
  //           },
  //           "type": "boxShadow"
  //         }
  //       }
  //     },
  //     "corporate": {
  //       "fnx": {
  //         "color": {
  //           "primary": {
  //             "extralight": {
  //               "value": "#FFF0E4",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#FFB578",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#FF8826",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#EF6C00",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#BF5600",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#8F4100",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#602B00",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           },
  //           "secondary": {
  //             "extralight": {
  //               "value": "#ECDFF0",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#C69ED3",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#AA6EBC",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#A05EB5",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#844597",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#633471",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#42234B",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           }
  //         }
  //       }
  //     },
  //     "ppw": {
  //       "fnx": {
  //         "color": {
  //           "primary": {
  //             "extralight": {
  //               "value": "#FFF0E4",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#FFB578",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#FF8826",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#EF6C00",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#BF5600",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#8F4100",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#602B00",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           },
  //           "secondary": {
  //             "extralight": {
  //               "value": "#E1E9F5",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#A6BCE0",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#799BD1",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#6A90CC",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#3F6EB9",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#2F538B",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#20375C",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           }
  //         }
  //       }
  //     },
  //     "polishop": {
  //       "fnx": {
  //         "color": {
  //           "primary": {
  //             "extralight": {
  //               "value": "#FFF0E4",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#FFB578",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#FF8826",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#EF6C00",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#BF5600",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#8F4100",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#602B00",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           },
  //           "secondary": {
  //             "extralight": {
  //               "value": "#E1E9F5",
  //               "type": "color",
  //               "description": "Extra Light"
  //             },
  //             "lightest": {
  //               "value": "#A6BCE0",
  //               "type": "color",
  //               "description": "Lightest"
  //             },
  //             "light": {
  //               "value": "#799BD1",
  //               "type": "color",
  //               "description": "Light"
  //             },
  //             "medium": {
  //               "value": "#6A90CC",
  //               "type": "color",
  //               "description": "Medium"
  //             },
  //             "dark": {
  //               "value": "#3F6EB9",
  //               "type": "color",
  //               "description": "Dark"
  //             },
  //             "darkest": {
  //               "value": "#2F538B",
  //               "type": "color",
  //               "description": "Darkest"
  //             },
  //             "extradark": {
  //               "value": "#20375C",
  //               "type": "color",
  //               "description": "Extra Dark"
  //             }
  //           }
  //         }
  //       },
  //       "xxxs": {
  //         "value": "12px",
  //         "type": "fontSizes",
  //         "description": "12px | 0.75rem"
  //       }
  //     },
  //     "$themes": [],
  //     "$metadata": {
  //       "tokenSetOrder": [
  //         "wiz",
  //         "corporate",
  //         "ppw",
  //         "polishop"
  //       ]
  //     }
  //   }
  //   mountedJsonTokens(JSON.stringify(item))
  // }, []);


  function mountedJsonTokens(tokens: any) {
    const JsonTokens = JSON.parse(tokens);

    const nameThemes = getNameThemes(JsonTokens);
    // debugger
    const loopInObject = getObjectsInLoop(nameThemes, JsonTokens);
    // debugger
    try {
      setThemes(loopInObject);
    } catch (error) {
      alert("não foi");
    }
  }




  function convertRoot(item: string, mode: 'css' | 'json' = 'css', last = false) { 
    const breack = item.split('-/')
    const lastItem = !last ? ',' : ''
    const regexHexDecimal = new RegExp(/[0-9A-Fa-f]{6}/g)
    let showBlocColor = regexHexDecimal.test(breack[1])
    const style: any = {
      'background-color': showBlocColor ? breack[1] : ''
    }


    if(mode === 'json') {
      return <span>
        {`"` + breack[0] + `"` + ': ' + `"` +  breack[1] + `"` + lastItem}
        <span className={"h-[22px] inline-flex w-[22px] ml-3 relative top-[4px]"} style={style} ></span>
      </span>
    }

    return <span>
        {breack[0] + ': ' + breack[1] + ';'}
        <span className={"h-[22px] inline-flex w-[22px] ml-3 relative top-[4px]"} style={style} ></span>
    </span> 
  }

  function emptyTheme() { 
    return <div className="grid place-items-center h-screen">
      <div className="flex items-center flex-col gap-8">
        <h1  className="text-[30px] md:text-8xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300">
          CONVERT <br/> <i>FIGMA TOKENS</i> <br/> TO CSS
        </h1>
        <button onClick={ () => document.getElementById('modal-tokens')?.click() } className="btn glass">Glass button</button>
      </div>
    </div>
  }

  return <>
    <Layout sendTokens={(tokens: any) => mountedJsonTokens(tokens)}>
      <div className="artboard artboard-horizontal">
        {!themes.length && emptyTheme()}
        {themes.map( (theme: any, index: number) => { 
          return <div key={index} className="p-6 bg-white rounded-xl mt-6 shadow-lg flex items-center space-x-4">
            <div className="w-full">
              <div className="flex py-3 items-center  justify-between">
                <div className="text-[36px] font-medium text-black">{theme.name}</div>
                <div className="tabs tabs-boxed">
                  <a className={`tab ${modeView === 'css' ? 'tab-active' : ''}`} onClick={ () => setModeView('css') }>CSS</a> 
                  <a className={`tab ${modeView === 'json' ? 'tab-active' : ''}`}  onClick={ () => setModeView('json') }>JSON</a> 
                </div>
              </div>
                <pre>
                  <code>
                    {modeView === 'css' &&
                      <div className="mockup-code">
                        {theme.values.map( (item: any, index: number) => {
                          return <pre key={index} data-prefix={index + 1}><code> --{convertRoot(item, 'css', false)}</code></pre> 
                        } )}
                      </div>
                    }
                    {modeView === 'json' &&
                      <div className="mockup-code">
                        <pre data-prefix={"-"} >{`{`}</pre>
                        {theme.values.map( (item: any, index: number) => {
                          return <pre key={index} data-prefix={index + 1}><code>{convertRoot(item, 'json', theme.values.length === (index + 1))}</code></pre> 
                        })}
                        <pre data-prefix={"-"} >{`}`}</pre>
                      </div>
                    }
                  </code>
                </pre>
            </div>
          </div>
        })}

      </div>
    </Layout>
    <Toaster/>
  </>;
}

export default App;

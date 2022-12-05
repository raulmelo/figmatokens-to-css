import ConvertValue from "./ConvertValue";

type typographyType = {
  fontFamily: string | undefined;
  fontSize: number | string | undefined;
  fontWeight: number | string | undefined;
  lineHeight: number | string | undefined;
  letterSpacing: number | string | undefined;
  textAlign: string | undefined;
  fontStyle: string | undefined;
  textDecoration: string | undefined;
  textTransform: string | undefined;
}



export function TypographyInner (item: { type: string, value: any } ) {

  let _valueTypography: typographyType = { 
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 0,
    textAlign: 'left',
    textDecoration: 'none',
    textTransform: 'none'
  };

  const keysTypography: any = !!item.value ? Object.keys(item.value) : [];
  keysTypography.forEach( (key: 'fontFamily' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing' | 'textAlign' | 'fontStyle' | 'textDecoration' | 'textTransform') => {
    if(item.value && item.value[key]) {
      _valueTypography[key] = ConvertValue(item.value[key])
    }
  })

  return `${_valueTypography.fontStyle} ${_valueTypography.fontWeight} ${_valueTypography.fontSize}/${_valueTypography.lineHeight} ${_valueTypography.fontFamily}`
}
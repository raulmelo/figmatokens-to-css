export interface shadowType {
  x: number | string | undefined;
  y: number | string | undefined;
  blur: number | string | undefined;
  spread: number | string | undefined;
  color: string | undefined;
  type?: any
}



export function shadowInner (item: { type: string, value: shadowType } ) {
  let _valueShadow: shadowType = { 
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: 'rgba(0,0,0,1)',
    type: 'innerShadow'
  }

  const keysShadow: any = !!item.value ? Object.keys(item.value) : [];
  keysShadow.forEach( (key: 'y' | 'x' | 'blur' | 'spread' | 'color' | 'type') => {
    if(item.value && item.value[key]) {
      _valueShadow[key] = item.value[key]
    }
  })

  return `${_valueShadow.type === 'innerShadow' ? 'inset' : ''} ${withPixelValue(_valueShadow.x)} ${withPixelValue(_valueShadow.y)} ${withPixelValue(_valueShadow.blur)} ${withPixelValue(_valueShadow.spread)} ${_valueShadow.color}`
}

function withPixelValue(value: number | string | undefined) {
  const _value: string = String(value)
  if(typeof _value === undefined) { 
    return ;
  }
  if(_value.indexOf('px') === -1) {
    return `${_value}px`
  }
  return _value
}
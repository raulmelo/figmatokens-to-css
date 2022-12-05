const regex = /(\{)(.*?)(\})/gmi;


function hasVariables(value: string): string {
    return value.replace(regex, (_, __, p2) => {
      const _value = p2.replaceAll('.', '-');;
        return `var(--${_value})`
    });
}

function ConvertValue(value: number | string | undefined, type: 'normal' | 'px' = 'normal') {
  const _value: string = String(value)
  if(typeof _value === undefined) { 
    return ;
  }

  if(_value.indexOf('{') >= 0 && _value.indexOf('}') >= 0) {
    return hasVariables(_value);
  }

  if(_value.indexOf('px') === -1 && type === 'px') {
    return `${_value}px`
  }
  return _value
}

export default ConvertValue
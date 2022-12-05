import flattenDeep from 'lodash/flattenDeep';
import ConvertValue from './transforms/ConvertValue';
import { shadowInner } from './transforms/shadow';
import { TypographyInner } from './transforms/Typography';




export function getNameThemes(tokens: Object) {
  const values = Object.keys(tokens)
  const removeNames = values.filter( name => name.at(0) !== '$' )
  return removeNames
} 

export function getObjectsInLoop(nameTokens: string[], tokens: any) { 
  let categories: any = []
  nameTokens.forEach( (client: string, index: number) => {
    const values = mountedSchemaInArray(tokens[client])
    categories[index] = {
      name: client,
      values: flattenDeep(values)
    }
  })
  return categories
}

function mountedSchemaInArray(tokensClient: any ) { 
  let propers = Object.keys(tokensClient);
  let values = propers.map( nameToken => { 
    return findInObjectToString(tokensClient[nameToken], nameToken)
  })

  values = vanishArray(values)
  return values
}


function vanishArray(items: any) { 

  // Initial
  function findArrayInLoop(itemChild: any): any { 
    let _valuesChild: any = []
    itemChild.forEach( (value: any) => { 
      if(
        typeof value[0] === 'string' &&
        typeof value === 'object'
      ) { 
        _valuesChild = [..._valuesChild, ...value]
      }
      if(
        typeof value === 'object' && 
        typeof value[0] === 'object'
      ) { 
        
        const findChild = findArrayInLoop(value)
        _valuesChild = [..._valuesChild, ...findChild]
      }
    })
    return _valuesChild
  } 
  
  const valuesSimple = items.filter( (_value: any) => typeof _value === 'string' )
  const valuesList = items.filter( (_value: any) => typeof _value === 'object' )
  let values: any = [...valuesSimple];

  valuesList.map( (selected: any) => {
    if(typeof selected === 'object' && typeof selected[0] === 'object') {
      const findChild = findArrayInLoop(selected)
      values = [...values, ...findChild]
    }
    if(typeof selected[0] === 'string') { 
      values = [...values,...selected]
    }
  });

  return values
}


function findInObjectToString(item: any, prefix?: string): any {
  const _prefix = prefix ? prefix + '-' : ''
  
  if( !item.type &&  !item.value && typeof item === 'object') { 
    const newKeys = Object.keys(item)
    const listElements: any = []
    newKeys.forEach( (keyChild, index) => { 
      const prefixChild = _prefix + keyChild
      listElements[index] = findInObjectToString(item[keyChild], prefixChild )
    })
    return listElements
  }
  return _prefix + '/' + getValue(item)
}


function getValue(item: any) { 
  if(item.type === 'boxShadow' && item.value) {
    return shadowInner(item);
  }
  
  if(item.type === "typography" && item.value) {
    return TypographyInner(item);
  }


  if(item.value) { 
    return ConvertValue(item.value)
  }
  return item
}

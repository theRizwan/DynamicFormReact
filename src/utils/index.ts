export const isObject = (o:any) => typeof o === 'object'
    && !Array.isArray(o)
    && o !== null;

export const concatenateFields = (fields: string[], fieldsConcatenated: string) => {
  const fieldsConcatenatedArray = fieldsConcatenated.split(',');
  const fieldsConcatenatedArraySplitColon = fieldsConcatenatedArray.map((field: string) => field.split(':')[0]);
  const fieldsConcatenatedArraySplitEqual = fieldsConcatenatedArraySplitColon.map((field: string) => field.split('=')[0]);
  const fieldsConcatenatedObject = fieldsConcatenatedArraySplitEqual.reduce((acc:any, item:any, index:number) => ({ ...acc, [item]: fieldsConcatenatedArray[index] }), {});
  const concatenatedFields = fields.map((field: string) => fieldsConcatenatedObject?.[field] || field);
  return concatenatedFields.join(',');
};

export const removeFromObject = (obj:any, key: string) => {
  const result = Object.keys(obj).reduce((acc:any, item:any) => (item === key ? { ...acc } : { ...acc, [item]: obj[item] }), {});
  return result;
};

export const adaptFilter = (filter: any) => {
  const filterAdapter: any = {
    '<': '<',
    '=': '=',
    '!=': '!=',
    '>': '>',
    like: 'like',
    'not like': 'not like',
  };
  const payload = filter?.map((item:any) => ({ field: item.ColumnName, condition: filterAdapter[item.Compare.toLowerCase()], value: item.CompareValue })) || [];
  return payload;
};

// Remove all fields from obj1 that are not in obj2
export const deduplicateFields = (obj1: any, obj2: any) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const obj2KeysFiltered = obj2Keys.filter((item: any) => !obj1Keys.includes(item));
  const obj2KeysFilteredObj = obj2KeysFiltered.reduce((acc: any, item: any) => ({ ...acc, [item]: obj2[item] }), {});
  return { ...obj2KeysFilteredObj };
};

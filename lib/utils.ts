import axios from 'axios';
import {PAGE_DIRECTORY_QUERY, PAGE_CONTENT_QUERY} from './sql';

export const getAllPages = async () => {
    const response = await getData(PAGE_DIRECTORY_QUERY, {})
    //console.log('data', response.data.rows)
    return response.data.rows.map(page => {
        return {
          params: {
            id: page.page_code
          }
        }
      })

}

export const getPageData = async (id: string) => {
    const response = await getData(PAGE_CONTENT_QUERY, {})
    //console.log('data', response.data.rows)
    return {
        id,
        data: response.data.rows
    }
}

export const getData = async (queryName, params) => {
    const response = await axios.get(buildQueryUrl(queryName, params));
    //TODO: catch error
    return response;
  };

export const buildQueryUrl = (
    query,
    params = {},
    format = 'json',
  ) => {
    //const baseURL = `https://maps.geografia.com.au`;
    const baseURL = `https://moose.geodb.host/`;
    const sqlApi = `user/citycompass/api/v2/sql`;
    let arr = [];
    for (const [key, value] of Object.entries(params)) {
      let obj = {};
      obj[key] = value;
      arr.push(obj);
    }
    const q = replaceSqlContent(arr, query);
    let output = `${baseURL}/${sqlApi}?q=${q}`;
    if ('format' in params) {
      output += `&format=${params.format}`;
    } else {
      output += `&format=${format}`;
    }
    //console.log('params 1: ',params,'output', output)
    return output;
  };

  
export const replaceSqlContent = (inputArray, inputSql) => {
    let newSql = inputSql;
    for (let item = 0; item <= inputArray.length - 1; item++) {
      const key = `{{${Object.keys(inputArray[item])[0]}}}`;
      const regexp = new RegExp(key, 'g');
      newSql = newSql.replace(
        regexp,
        `${Object.values(inputArray[item])[0]}`,
      );
      //console.log('newSql', newSql)
    }
    return newSql;
  };
  
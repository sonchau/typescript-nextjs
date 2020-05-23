import React, {useState} from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';


export const themeState = atom({
  key: 'themeState',
  default: 'dark',
});

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function ThemeSelect() {
    const [theme, setTheme] = useRecoilState(themeState);
    const themes = ['light', 'dark']

    const onChange = (event) => {
      setTheme(event.target.value);
    };
  
    return (
      <div>
        <select name="theme" onChange={onChange}>
            {
              themes.map(item => {
              return <option value={item} selected={item ===theme ? true: false}>{capitalize(item)}</option>
              })
            }
        </select>
      </div>
    );
  }
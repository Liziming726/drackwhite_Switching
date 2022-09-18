/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-17 21:26:02
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-18 09:36:02
 * @FilePath: \drackwhite_switching\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react'
import './App.css'

function App() {
  const [mode,setMode] = useState('light')
  
  const handleClick = () => {
    setMode((e) => (e === 'light' ? 'dark' : 'light'))
  }


  return (
    <div className="App" color-mode={mode}>
      <button onClick={handleClick}>Toggle</button>
      <div className='container'>
      <div className='item item1'></div>
      <div className='item item2'></div>
      <div className='item item3'></div>
    </div>
    </div>
  )
}

export default App

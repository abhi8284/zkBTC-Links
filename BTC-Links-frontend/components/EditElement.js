import React, { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import styles from "@/app/styles/editor.module.css";

const EditElement = ({
  bgColor: initialBgColor,
  textColor: initialTextColor,
  text: initialText,
  onBgColorChange,
  onTextColorChange,
  onTextChange,
  createBlink,
}) => {
  const [bgColor, setBgColor] = useState(initialBgColor)
  const [textColor, setTextColor] = useState(initialTextColor)
  const [text, setText] = useState(initialText)
  const [hexInput, setHexInput] = useState(initialBgColor)
  const [colorTarget, setColorTarget] = useState('background') // 'background' or 'text'

  useEffect(() => {
    setBgColor(initialBgColor)
    setTextColor(initialTextColor)
    setText(initialText)
  }, [initialBgColor, initialTextColor, initialText])

  const handleHexInputChange = (e) => {
    const newColor = e.target.value
    setHexInput(newColor)
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      if (colorTarget === 'background') {
        setBgColor(newColor)
        onBgColorChange(newColor)
      } else {
        setTextColor(newColor)
        onTextColorChange(newColor)
      }
    }
  }

  const handleColorChange = (newColor) => {
    setHexInput(newColor)
    if (colorTarget === 'background') {
      setBgColor(newColor)
      onBgColorChange(newColor)
    } else {
      setTextColor(newColor)
      onTextColorChange(newColor)
    }
  }

  const toggleColorTarget = () => {
    setColorTarget((prevTarget) => (prevTarget === 'background' ? 'text' : 'background'))
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
    onTextChange(e.target.value)
  }

  return (
    <div className={styles.container}>

      <div className={styles.controls}>
        <div className={styles.control}>
          <label className={styles.label}>Change {colorTarget === 'background' ? 'Background' : 'Text'} Color</label>
          <HexColorPicker
            color={colorTarget === 'background' ? bgColor : textColor}
            onChange={handleColorChange}
            className={styles.colorPicker}
          />
          <input type="text" value={hexInput} onChange={handleHexInputChange} className={styles.hexInput} placeholder="#000000" />
          <button onClick={toggleColorTarget} className={styles.toggleButton}>
            {colorTarget === 'background' ? 'Switch to Text Color' : 'Switch to Background Color'}
          </button>
        </div>

        <div className={styles.control}>
          <label className={styles.label}>Edit Text:</label>
          <input type="text" value={text} onChange={handleTextChange} className={styles.input} />
        </div>
      </div>
    </div>
  )
}

export default EditElement

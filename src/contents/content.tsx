import { Button } from "@douyinfe/semi-ui"
import cssText from "data-text:../styles/common.scss"
import type { PlasmoContentScript } from "plasmo"
import React, { useEffect, useRef, useState } from "react"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"],
  css: ["../styles/common.scss"],
  // all_frames: true,
  run_at: "document_end"
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoComponent = () => {
  return (
    <div>
      <p>hello world</p>
      <Button>测试</Button>
    </div>
  )
}

export default PlasmoComponent

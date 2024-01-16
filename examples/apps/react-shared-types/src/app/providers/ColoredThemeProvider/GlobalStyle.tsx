'use client'

import React from "react"
import styled, { createGlobalStyle } from "styled-components"

function GlobalStyle() {
  const GlobalStyleComponent =
    createGlobalStyle`
    body {
    }
  ` || undefined


  return <GlobalStyleComponent />
}

export default GlobalStyle

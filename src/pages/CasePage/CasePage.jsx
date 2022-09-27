import React from 'react'
import { StyledCase } from './styles'
import caseIconPath from "../../assets/img/case.svg"

export default function WalletPage() {
  return (
    <StyledCase>
      <div className="case-container">
        <div className="case-top">
          <img src={caseIconPath} alt="" />
          <h2 className="case-title">
            Case
          </h2>
        </div>
      </div>
    </StyledCase>
  )
}

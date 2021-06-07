import React from 'react'

import './index.scss'

export const SponsorButton = ({ sponsorId }) => (
  <div className="sponsor-button">
    <a
      className="bmc-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://cafecito.app/${sponsorId}`}
    >
      <img
        src="https://cdn.cafecito.app/imgs/cafecito_logo.svg"
        alt="Buy me a coffee"
      />
      <span>Buy me a coffee</span>
    </a>
  </div>
)



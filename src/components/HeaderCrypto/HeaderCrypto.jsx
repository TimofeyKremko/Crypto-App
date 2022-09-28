import React from 'react'
import { StyledHeaderCrypto } from './styles';

export default function HeaderCryptos({id, priceUsd, rank}) {

  const price = +priceUsd;
  return (
    <StyledHeaderCrypto>
      <p className="crypto-title">
      <span>#{rank}:</span>  {id}: <span className="crypto-value">{price.toFixed(2)} $</span>
      </p>
    </StyledHeaderCrypto>
  );
}

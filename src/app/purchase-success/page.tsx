import BaseLayout from '@/components/BaseLayout'
import React from 'react'
import PurchaseSummary from './PurchaseSummary'

type Props = {}

function Page({}: Props) {
  return (
    <BaseLayout>
    <PurchaseSummary />
    </BaseLayout>
  )
}

export default Page
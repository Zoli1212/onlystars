import BaseLayout from '@/components/BaseLayout'
import UnderlinedText from '@/components/decorators/UnderlinedText'
import ProductCard from '@/components/ProductCard'
import prisma from '@/db/prisma'

import React from 'react'

type Props = {}

async function Page({}: Props) {

  const products = await prisma.product.findMany({
    where: {
      isArchived: false
    }

  })
  return (
    <BaseLayout>
    <div className="px-3 md:px-10 my-10">
        <h1>
            Our<UnderlinedText className='decoration-wavy'>Products</UnderlinedText>
        </h1>

        <div className="grid grap-5 grid-cols-1 md:grid-cols-2">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} adminView={true} />

            ))}
        </div>
    </div>
    </BaseLayout>
  )
}

export default Page
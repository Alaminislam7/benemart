import Container from '@/components/ui/container'
import React from 'react'

const Shop = () => {
  return (
    <Container>
      <div className={`flex pt-8 pb-16 lg:pb-20`}>
        <div className="flex-shrink-0 pe-24 hidden lg:block w-96">
          <h2>Search box</h2>
        </div>
      </div>
    </Container>
  )
}

export default Shop
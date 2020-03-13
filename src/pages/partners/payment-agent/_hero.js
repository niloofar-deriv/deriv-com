import React from 'react'
import styled from 'styled-components'
import Hero from '../_hero.js'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { Button } from 'components/form'

const MainHeader = styled(Header)`
    max-width: 80rem;
    margin-bottom: 1.6rem;
`

const MiddleHeader = styled(Header)`
    max-width: 99.6rem;
    margin-bottom: 4rem;
`

const PAHero = () => {
    return (
        <Hero>
            <MainHeader as="h1" color="white" align="center" lh="1.25">
                {localize('Become a payment agent on Deriv')}
            </MainHeader>
            <MiddleHeader as="h4" color="white" align="center" weight="normal">
                {localize(
                    'Expand your client base, gain additional business exposure, and earn more revenue when you sign up as a payment agent on Deriv.',
                )}
            </MiddleHeader>
            <Button secondary>{localize('Send us an email to apply')}</Button>
        </Hero>
    )
}

export default PAHero

import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MetalAndOil from 'images/svg/markets/precious-metals-and-oils-new.svg'
import NoCommission from 'images/svg/markets/no-commission-new.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import VariableSpreads from 'images/svg/markets/variable-spreads-new.svg'

export type CommoditiesContent = {
    src: string
    text: ReactElement
    alt: string
}
export const simple_step_content_commodities: SimpleStepsContent[] = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="Practise" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
        ),
        icon: <img src={TradeIcon} alt="Trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="Withdraw" width="32" height="32" />,
    },
]
const commodities: CommoditiesContent[] = [
    {
        src: VariableSpreads,
        text: <Localize translate_text="Competitive fixed and variable spreads" />,
        alt: 'Fixed and variable',
    },
    {
        src: NoCommission,
        text: <Localize translate_text="No commission on any commodity contract" />,
        alt: 'No commission',
    },
    {
        src: MetalAndOil,
        text: <Localize translate_text="All four precious metals and crude oil available" />,
        alt: 'Trading platform',
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="Easy-to-use platforms, superior chart technology" />,
        alt: 'responsive website',
    },
    {
        src: FriendlySupport,
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
        alt: 'Customer help',
    },
]

export default commodities

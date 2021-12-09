import React from 'react'
import styled from 'styled-components'
import Hero from '../_hero'
import { vulnerabilitiesTypesContent } from '../static/_vulnerabilities-types-content'
import { localize, WithIntl, Localize } from 'components/localization'
import Layout from 'components/layout/layout'
import { Container, Flex, SEO } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

const StyledContainer = styled(Container)`
    width: 79.2rem;
    padding: 80px 16px;

    @media ${device.tablet} {
        width: auto;
    }
`

const CardWrap = styled.div`
    border-radius: 4px;
    background-color: var(--color-grey-30);
    margin-top: 16px;
    padding: 8px 0;
    display: inline-flex;
`

const CardItem = styled.div`
    border-left: ${({ second_item }) => (second_item ? 'solid 1px var(--color-grey-6)' : 0)};
    border-right: ${({ second_item }) => (second_item ? 'solid 1px var(--color-grey-6)' : 0)};
    padding: 0 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const IconWrap = styled.img`
    width: 32px;
    height: 32px;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    margin-left: 15px;
`

const StyledLi = styled.li`
    margin-top: 8px;
    color: var(--color-black-3);
    line-height: 24px;
    font-size: 16px;

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 20px;
    }
`

const VulnerabilitiesTypes = () => {
    return (
        <Layout type="partners" margin_top={10} no_login_signup>
            <SEO title={localize('Some title')} description={localize('Some description')} />
            <Hero />

            <StyledContainer direction="column" align="left">
                <Header type="heading-2" align="center">
                    {localize('Types of vulnerabilities')}
                </Header>
                <div>
                    {vulnerabilitiesTypesContent.map((item, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <Flex mt="40px" ai="center">
                                    <IconWrap src={item.icon} />
                                    <Header as="h2" type="subtitle-1" ml="8px">
                                        {localize(item.title)}
                                    </Header>
                                </Flex>

                                <CardWrap>
                                    {item.profit ? (
                                        <CardItem>
                                            <Header as="p" type="paragraph-1" weight="normal">
                                                <Localize
                                                    translate_text={item.profit}
                                                    components={[<strong key={0} />]}
                                                />
                                            </Header>
                                        </CardItem>
                                    ) : (
                                        item.profit_table.map((item, idx) => {
                                            return (
                                                <CardItem second_item={idx === 1} key={idx}>
                                                    <Header type="small" weight="normal">
                                                        <Localize translate_text={item.title} />
                                                    </Header>

                                                    <Header type="paragraph-1" mt="4px">
                                                        <Localize
                                                            translate_text={item.content}
                                                            components={[
                                                                <Text
                                                                    as="span"
                                                                    color="red"
                                                                    size="14px"
                                                                    key={0}
                                                                />,
                                                            ]}
                                                        />
                                                    </Header>
                                                </CardItem>
                                            )
                                        })
                                    )}
                                </CardWrap>

                                {item.profit_condition && (
                                    <Header as="p" type="paragraph-2" mt="8px" weight="normal">
                                        <Localize
                                            translate_text={item.profit_condition}
                                            components={[
                                                <Text as="span" color="red" size="16px" key={0} />,
                                            ]}
                                        />
                                    </Header>
                                )}

                                <Header as="p" type="paragraph-1" mt="16px" weight="normal">
                                    <Localize translate_text={item.description} />
                                </Header>

                                <StyledUl>
                                    {item.examples.map((item, idx) => {
                                        return <StyledLi key={idx}>{localize(item)}</StyledLi>
                                    })}
                                </StyledUl>
                            </React.Fragment>
                        )
                    })}
                </div>
            </StyledContainer>
        </Layout>
    )
}

export default WithIntl()(VulnerabilitiesTypes)

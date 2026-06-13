import marketingConfig from "../config/marketingConfig";

type MarketingTypes = 'handmade' | 'custom' | 'quality' | 'order'
type Props = {
    cardType: MarketingTypes;
}


export default function MarketingCard ({ cardType }: Props ) {

    const marketingData = marketingConfig[cardType]

    if (!marketingData) {
        return null
    }

    return (
        <div>
            <img src={marketingData.icon} alt={marketingData.icon} />
            <div>
                <p>{marketingData.title}</p>
                <p>{marketingData.description}</p>

            </div>
        </div>
    )
}
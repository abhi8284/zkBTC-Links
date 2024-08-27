export type NetworkList = {
    id: number;
    name: string;
    image: string;
    symbol: string;
}


export const NetworkLists: NetworkList[] = [
    {
        id: 1,
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400',
        symbol: 'BTC'
    }, {
        id: 2,
        name: 'Ethereum',
        image: ' https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
        symbol: 'ETH'
    }, {
        id: 3,
        name: 'Avalanche',
        image: 'https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369',
        symbol: 'AVAX'
    }, {
        id: 4,
        name: 'BNB',
        image: 'https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970',
        symbol: 'BNB'
    }

]
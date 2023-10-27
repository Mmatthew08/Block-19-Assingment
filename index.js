let freelancers= [
    {
        name: 'Ted',
        price1 : 65 ,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTed_Mosby&psig=AOvVaw1enYy-GA3HMq5eBMKD4Oy0&ust=1698467426092000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOD4xq6ylYIDFQAAAAAdAAAAABAE'
    },
    {
        name:'Barney',
        price: 40 ,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftvtropes.org%2Fpmwiki%2Fpmwiki.php%2FCharacters%2FHowIMetYourMotherBarneyStinson&psig=AOvVaw3nly5zVdrKcXpMtul-m6Gh&ust=1698467521669000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNC9idyylYIDFQAAAAAdAAAAABAE'

    },
    {
        name:'Marshall',
        price: 20,
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMarshall_Eriksen&psig=AOvVaw0OJqDLzyTH5jPrSZb4J3wk&ust=1698467710601000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCFkrazlYIDFQAAAAAdAAAAABAE'
    }
]

function averagePrice(){
    var sum= (price+price+price)
    let (average=sum/3)
    return ('The average price is equal to ' , average)
}
averagePrice()

function randomFreelancer(){
let namesofFreelancers=['Ted','Barney','Marshall']
let selectedFreelancer= namesofFreelancers[Math.floor(Math.random()* freelancers.length)]
let header = document.querySelector('header>h1')
}
randomFreelancer()
const fishesArray = [
    {
        id: "1",
        firstName: "Striped",
        lastName: "Bass"
    },

    {
        id: "2",
        firstName: "Speckled",
        lastName: "Trout"
    },

    {
        id: "3",
        firstName: "Spanish",
        lastName: "Mackerel"
    }
]

/*-- 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 --*/

const typeDefs = `
    type Fish {
        id: String!
        firstName: String
        lastName: String
    }

    type Query {
        allFishes: [Fish]
    }

    type Mutation {
        addFish(id: String!, firstName: String!, lastName: String!): Fish
    }
`

/*-- 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 --*/

const resolvers = {
    Query: {
        allFishes: () => fishesArray
    },

    Mutation: {
        addFish: (root, args) => {
            const newFish = {
                id: args.id,
                firstName: args.firstName,
                lastName: args.lastName
            }

            fishesArray.push(newFish);
            
            return newFish
        }
    }
}

export { typeDefs, resolvers }
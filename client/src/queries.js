import { gql } from "@apollo/client";

export const GET_FISHES = gql`
    query {
        allFishes {
            id
            firstName
            lastName
        }
    }
`

export const ADD_FISH = gql`
    mutation addFish($id: String!, $firstName: String!, $lastName: String!){
        addFish(id: $id, firstName: $firstName, lastName: $lastName){
            id
            firstName
            lastName
        }
    }
`
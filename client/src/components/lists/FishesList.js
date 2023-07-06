import { useQuery } from "@apollo/client";
import { GET_FISHES } from "../../queries";
import { List } from "antd"

import FishEach from "../listItems/FishEach";

const someStyling = () => ({
    list: {
        display: "flex",
        justifyContent: "center",
    }
})

const FishesList = () => {
    const styles = someStyling();

    const { loading, error, data } = useQuery(GET_FISHES);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    console.log("data", data);

    return (
        <List
            grid={{ gutter: 20, column: 1}}
            style={styles.list}
        >
            { data.allFishes.map(({ id, firstName, lastName }) => (
                <List.Item key={id}>
                    <FishEach id={id} firstName={firstName} lastName={lastName}/>
                </List.Item>
            ))}
        </List>
    )
}

export default FishesList
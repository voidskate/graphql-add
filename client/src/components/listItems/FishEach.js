import { Card } from "antd";

const someStyling = () => ({
    card: {
        width: "500px"
    }
})

const FishEach = (props) => {
    const {id, firstName, lastName} = props;

    const styles = someStyling();
    return (
        <Card
            style={styles.card}
        >
            {firstName} {lastName}
        </Card>
    )
}

export default FishEach
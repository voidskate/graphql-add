import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Form, Input, Button } from 'antd'
import { useMutation } from '@apollo/client'
import { ADD_FISH, GET_FISHES } from '../../queries'

const someStyling = () => ({
    form: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
        marginBottom: "5vh"
    }
})

const FishForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({})
    }, [])

    const [addFish] = useMutation(ADD_FISH);
    const styles = someStyling();

    const formSubmit = (values) => {
        const { firstName, lastName } = values;
        const newId = uuidv4();
      
        addFish({
            variables: {
                id: newId,
                firstName,
                lastName,
            },

            update: (cache, { data: { addFish } }) => {
                const data = cache.readQuery({ query: GET_FISHES })
                cache.writeQuery({
                    query: GET_FISHES,
                    data: {
                        ...data,
                        allFishes: [...data.allFishes, addFish]
                    }
                })
            }

            // NOTE: if the above "update" function doesn't work, use:
            // refetchQueries: [{ query: GET_FISHES }]
        });
    }
      

    return(
        <Form
            form={form} name="add-fish-form"
            layout="inline"
            size="large"
            style={styles.form}
            onFinish={formSubmit}
        >
            {/*----- INPUT: FIRST NAME -----*/}
            <Form.Item
                name="firstName"
                rules={[{ required: true, message: "Please input your first name!" }]}
            >
                <Input placeholder="e.g. Pink"/>
            </Form.Item>

            {/*----- INPUT: LAST NAME -----*/}
            <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Please input your last name!" }]}
            >
                <Input placeholder="e.g. Maomao"/>
            </Form.Item>

            {/*----- BUTTON: SUBMIT -----*/}
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            form.getFieldError().filter(({ errors }) => errors.length).length
                        }
                    >Add Fish</Button>
                )}
            </Form.Item>
        </Form>
    )
}

export default FishForm
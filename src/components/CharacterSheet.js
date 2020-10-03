import React from 'react'

import { Card, FormControl, Button, InputGroup } from 'react-bootstrap'

const CharacterSheet = props => {
    return(
        <Card>
            <Card.Header as="h4">{props.sheetStyle}</Card.Header>
            <Card.Body>
                <div>
                    <label>Strength</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button variant="success">+1</Button>
                        </InputGroup.Prepend>
                        <FormControl/>
                        <InputGroup.Append>
                            <Button variant="danger">-1</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CharacterSheet
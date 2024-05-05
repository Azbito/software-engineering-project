import styles from '@/styles/addCard.module.scss'
import { Button } from '../Button'
import { Dispatch, SetStateAction, useState } from 'react';
import { EventProps } from '@/constants/events';

type AddCardProps = {
    events: EventProps[];
    setEvents: Dispatch<SetStateAction<EventProps[]>>;
}

export function AddCard({events, setEvents}: AddCardProps) {
    const [newEvent, setNewEvent] = useState<EventProps>({
        id: 0,
        title: "",
        description: "",
        price: 0,
        quantityTicket: 0
    });

    function addEvent() {
        setEvents((prevState) => ([
            {
                ...newEvent,
                id: prevState.length + 1,
            },
            ...prevState,
        ]))
    }
    
    function handleChange(event: any) {
        const {name, value} = event.target;

        setNewEvent((prevState) => ({
            ...prevState,
            [name]: value
        }))
    } 

    return (
        <div className={styles.addCard}>
            <span>
                <p>Título</p>
                <input type="text" value={newEvent.title} name="title" onChange={handleChange} />
            </span>
            <span>
                <p>Descrição</p>
                <textarea value={newEvent.description} name="description" onChange={handleChange} />
            </span>
            <span>
                <p>Preço</p>
                <input type="number" step="0.01" value={newEvent.price} name="price" onChange={handleChange} />
            </span>
            <span>
                <p>Ingressos restantes</p>
                <input type="number" value={newEvent.quantityTicket} name="quantityTicket" onChange={handleChange} />
            </span>
            <Button onClick={addEvent}>Postar</Button>
        </div>
    )
}
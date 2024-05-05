import { EventProps } from '@/constants/events';
import styles from '@/styles/card.module.scss';
import { Button } from '@/components/Button';
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FiDollarSign, FiCheck } from 'react-icons/fi';
import { currencyBRL } from '@/utils/BRL';

type CardProps = {
    event: EventProps
}

export function Card({event}: CardProps) {
    const [showModal, setShowModal] = useState(false);
    const [remainingTickets, setRemainingTickets] = useState(event.quantityTicket);

    function buyTicket() {
        setShowModal(true);
    }
    
    function handleClose() {
        if (event.quantityTicket != "infinite") {
            setRemainingTickets((prevTickets: any) => prevTickets - 1);
        }
        setShowModal(false);
    }
    
    useEffect(() => {
        if (event.quantityTicket) {
            setRemainingTickets(event.quantityTicket)
        }
    }, [event])

    return (
        <div className={styles.container}>
            {showModal ? (
                <>
                <p>Você está comprando um ingresso para <b>{event.title}</b></p>
                <p>Valor: <b>{currencyBRL(event.price)}</b></p>
                <Button onClick={() => handleClose()}><FiCheck size={20}/> Confirmar</Button>
                </>
            ) : (
                <>
                    <b>{event.title}</b>
                    <p>{event.description}</p>
                    <code>PREÇO: {currencyBRL(event.price)}</code>
                    {event.quantityTicket !== "infinite" && <code>FALTAM <b>{remainingTickets}</b> INGRESSOS</code>}
                    <div className={styles.buttonContainer}>
                        <Button onClick={() => buyTicket()}><FiDollarSign size={20} /> COMPRAR</Button>
                    </div>
                </>
            )}
        </div>
    );
}

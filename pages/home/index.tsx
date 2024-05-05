import { AddCard } from '@/components/AddCard';
import { Card } from '@/components/Card';
import { EventProps, eventsInitial } from '@/constants/events';
import styles from '@/styles/home.module.scss';
import { currencyBRL } from '@/utils/BRL';
import { useEffect, useState } from 'react';

export default function Home() {
    const [events, setEvents] = useState<EventProps[]>(eventsInitial)

    return (
    <div className={styles.container}>
        <AddCard events={events} setEvents={setEvents}/>
        <div className={styles.cardsContainers}>
        {events.map((item) => (
            <Card key={item.id} event={item} />
        ))}
        </div>
    </div>
  );
}
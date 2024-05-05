export type EventProps = {
    id: number,
    title: string,
    description: string,
    price: number | string,
    quantityTicket: number | string,
}

export const eventsInitial: EventProps[] = [
    {
        id: 0,
        title: "The Town",
        description: "Venham contemplar a arte da MPB hoje com homenagens ilustres à Gal Costa e Elza Soares!",
        price: 120.25,
        quantityTicket: 400
    },
    {
        id: 1,
        title: "Jazz Night",
        description: "Desfrute de uma noite de jazz com músicos renomados da cena local!",
        price: 90.50,
        quantityTicket: 300
    },
    {
        id: 2,
        title: "Rock Festival",
        description: "O festival de rock do ano com bandas icônicas e muito mais!",
        price: 150.75,
        quantityTicket: 500
    },
    {
        id: 3,
        title: "Classical Concert",
        description: "Uma noite de música clássica com a Orquestra Filarmônica da cidade!",
        price: 100.00,
        quantityTicket: 200
    },
    {
        id: 4,
        title: "Artes cênicas",
        description: "Uma manhã encantada na praça central!",
        price: 0,
        quantityTicket: "infinite"
    }
]
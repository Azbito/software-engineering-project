import styles from '@/styles/button.module.scss'

type ButtonProps = {
    children: any,
    onClick: () => void,
}

export function Button({children, onClick}: ButtonProps) {
    return <button className={styles.button} onClick={onClick}>{children}</button>
}
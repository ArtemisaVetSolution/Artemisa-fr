import styles from '../styles.module.css'

interface PetCardProps {

    name: string;
    species: string;
    breed: string;

}

function PetCardComponent({ name, species, breed, }: PetCardProps) {

    return (
        <div className={styles.petCard}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.imageContainer}>
                        <img
                            src='static/assets/paw-print.png'
                            alt={`${name}'s paw print`}
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.name}>{name}</h2>
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.infoText}>
                        <span className={styles.infoLabel}>Especie:</span> {species}
                    </p>
                    <p className={styles.infoText}>
                        <span className={styles.infoLabel}>Raza:</span> {breed}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PetCardComponent
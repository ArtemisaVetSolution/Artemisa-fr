import styles from './styles.module.css';
// const PetCardComponent = () => {
//     return (
//         <div className={styles.card}>
//             <div className={styles.pictureContainer}>Hola</div>

//         </div>
//     )
// }

interface PetCardProps {
    imageUrl: string;
    name: string;
    species: string;
    breed: string;
    birthDate: string;
}

function PetCardComponent({ imageUrl, name, species, breed, birthDate }: PetCardProps) {

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.imageContainer}>
                        <img
                            src={imageUrl}
                            alt={`${name}'s paw print`}
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.name}>{name}</h2>
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.infoText}>
                        <span className={styles.infoLabel}>Species:</span> {species}
                    </p>
                    <p className={styles.infoText}>
                        <span className={styles.infoLabel}>Breed:</span> {breed}
                    </p>
                    <p className={styles.infoText}>
                        <span className={styles.infoLabel}>Birth Date:</span> {birthDate}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PetCardComponent
import { useState } from 'react';
import styles from '../styles.module.css'
import ModalComponent from './modal.components';
import PetInfoComponent from './petInfo.component';

interface PetCardProps {

    name: string;
    species: string;
    breed: string;
    id: number;

}

function PetCardComponent({ name, species, breed, id}: PetCardProps) {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    
    return (
        <>
        <div className={styles.petCard} onClick={handleOpenModal} >
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
        <ModalComponent open={openModal} onClose={handleCloseModal} >
            <PetInfoComponent name={name} />
        </ModalComponent>
        </>
    );
}

export default PetCardComponent
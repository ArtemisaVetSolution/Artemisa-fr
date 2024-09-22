import { Modal } from "@mui/material";
import { Box } from "lucide-react";

interface IProps {
    text: string;
    open: boolean;
    onClose: () => void;
}
export function ConfirmationModal({ text, open, onClose }: IProps) {


    return (
            
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box>
                    <h2 id="child-modal-title">{text}</h2>
                </Box>
            </Modal>
    );
}
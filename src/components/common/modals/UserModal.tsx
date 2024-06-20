import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { IAthlete } from '../../../models/athlete';

type AthleteModalProps = {
    athlete: IAthlete | null;
    open: boolean;
    onClose: () => void;
};

export default function UserModal({ athlete, open, onClose }: AthleteModalProps) {
    if (!athlete) {
        return null;
    }
    return (
        <>
            <Dialog open={open} handler={onClose}>
                <DialogHeader>Detailed info for {athlete?.name}</DialogHeader>
                <DialogBody>
                    <div>
                        <p>Navn: {athlete?.name}</p>
                        <p>Id: {athlete?.id}</p>
                        <p>Køn: {athlete?.sex}</p>
                        <p>Alder: {athlete?.age}</p>
                        <p>Klub: {athlete?.club}</p>
                        <p className="font-bold">Disciplin:</p>
                        {athlete?.disciplines?.map((discipline, index) => (
                            <p key={index}> {discipline.name}</p>
                        ))}{' '}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={onClose} className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={onClose}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

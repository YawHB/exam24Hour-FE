import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { IUser } from '../../../models/athlete';

type UserModalProps = {
    user: IUser | null;
    open: boolean;
    onClose: () => void;
};

export default function UserModal({ user, open, onClose }: UserModalProps) {
    if (!user) {
        return null;
    }
    return (
        <>
            <Dialog open={open} handler={onClose}>
                <DialogHeader>Detailed info for {user?.username}</DialogHeader>
                <DialogBody>
                    <div>
                        <p>Username: {user?.username}</p>
                        <p>Email: {user?.email}</p>
                        <p>Id: {user?.id}</p>
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

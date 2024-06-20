import { Button } from '@material-tailwind/react';

type props = {
    children: string;
    buttonType: string;
    onClick?: () => void;
};

export default function ButtonProp({ onClick, children, buttonType }: props) {
    const btnColor = buttonType == 'cta' ? 'green' : buttonType == 'cancel' ? 'red' : 'black';

    return (
        <>
            <Button size="md" variant="gradient" color={btnColor} onClick={onClick}>
                {children}
            </Button>
        </>
    );
}

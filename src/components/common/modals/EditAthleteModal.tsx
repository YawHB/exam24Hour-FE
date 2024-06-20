import React from 'react';
import { IAthlete } from '../../../models/athlete';
import { Button, Dialog, Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox } from '@material-tailwind/react';

interface DialogWithFormProps {
    open: boolean;
    onClose: () => void;
    athlete: IAthlete | null;
}

export default function EditAthleteModal({ open, onClose, athlete }: DialogWithFormProps) {
    return (
        <>
            <Dialog size="xs" open={open} handler={onClose} className="bg-transparent shadow-none">
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Sign In
                        </Typography>
                        <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
                            Enter your email and password to Sign In.
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Your Email
                        </Typography>
                        <Input label="Email" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Your Password
                        </Typography>
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={onClose} fullWidth>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Don&apos;t have an account?
                            <Typography as="a" href="#signup" variant="small" color="blue-gray" className="ml-1 font-bold" onClick={onClose}>
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

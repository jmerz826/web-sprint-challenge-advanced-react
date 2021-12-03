// write your custom hook here to control your checkout form
import { useState } from "react";

export default function useForm(initialValue) {
    // Declaring slices of state for custom hook, to be returned and available in all other components with 'useForm' call.
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
    
    // FUNCTIONS- returned in this custom hook so that they may be used in any component, notably CheckoutForm.
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    // Will return variables and functions neccessary for operability in other components, notably CheckoutForm
    return [
        showSuccessMessage,
        values,
        handleChanges,
        handleSubmit
    ];
};
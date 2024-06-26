import { useState } from 'react';

import { normalizeCardNumber } from 'utils/normalizeCardNumber';

import useVisible from '../../../../hooks/useVisible';

const usePayment = () => {
    const [isShowPaymentForm, setIsShowPaymentForm] = useVisible();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [numberCard, setNumberCard] = useState('');
    const [name, setName] = useState('');
    const [ccv, setValueCcv] = useState('');
    const [turnClass, setTurnCLass] = useState('');
    const [cardValidityPeriod, setCardValidityPeriod] = useState({ month: '', year: '' });
    const handleFocus = () => {
        setTurnCLass('turned');
    };

    const handleBlur = () => {
        setTurnCLass('');
    };

    const handleSetCardNumber = (e) => {
        const { value } = e.target;
        e.target.value = normalizeCardNumber(value);
        setNumberCard(e.target.value);
    };

    const setCcv = (e) => {
        let value = e.target?.value.replace(/[^\d]/g, '').slice(0, 3);
        setValueCcv(value);
    };

    return {
        numberCard,
        name,
        ccv,
        turnClass,
        setNumberCard,
        setCcv,
        setName,
        cardValidityPeriod,
        setCardValidityPeriod,
        handleSetCardNumber,
        handleFocus,
        handleBlur,
        isShowPaymentForm,
        setIsShowPaymentForm,
        showConfirmModal,
        setShowConfirmModal,
    };
};

export default usePayment;
